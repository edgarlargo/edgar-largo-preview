export function createImportedPreloaderPainter(environment){
const {preloader,settings,properties}=environment;

/* Admintation optional split preloader v5 */
function eaImportedPreloaderTitle(owner,wordmark,title,split,reduced,width,viewHeight){
  const ctx=owner.ctx;
  if(typeof ctx.measureText!=='function'||typeof ctx.fillText!=='function')return false;
  // CSS may arrive after the first loader frame. Read its current font while
  // active, retaining measured layout caching and explicit Cyrillic fallback.
  let family='Arial, sans-serif',weight='500';
  try{
    const node=document.querySelector?.('h1')||document.body;
    const style=node&&typeof getComputedStyle==='function'?getComputedStyle(node):null;
    if(typeof style?.fontFamily==='string'&&style.fontFamily.trim())family=style.fontFamily.trim()+', Arial, sans-serif';
    if(/^[1-9]00$/.test(style?.fontWeight||''))weight=style.fontWeight;
  }catch{}
  const key=JSON.stringify([title,width,viewHeight,family,weight,document.fonts?.status]);
  if(owner.eaTitleLayout?.key!==key){
    const margin=Math.max(18,Math.min(80,width*.06));
    const wrap=(text,limit)=>{
      const lines=[];let line='';
      for(const word of text.split(' ')){
        const candidate=line?line+' '+word:word;
        if(ctx.measureText(candidate).width<=limit){line=candidate;continue;}
        if(line){lines.push(line);line='';}
        if(ctx.measureText(word).width<=limit){line=word;continue;}
        // Long URLs and non-Latin titles may have no spaces. Break their
        // graphemes rather than clipping text or dropping surrogate pairs.
        let letters;
        try{letters=typeof Intl?.Segmenter==='function'?[...new Intl.Segmenter(undefined,{granularity:'grapheme'}).segment(word)].map(part=>part.segment):Array.from(word);}catch{letters=Array.from(word);}
        for(const letter of letters){
          if(line&&ctx.measureText(line+letter).width>limit){lines.push(line);line='';}
          line+=letter;
        }
      }
      if(line)lines.push(line);
      return lines;
    };
    let size=Math.min(72,Math.max(28,width*.044),Math.max(12,viewHeight*.14)),layout;
    for(;;size=Math.max(12,size-1)){
      ctx.font=weight+' '+size+'px '+family;
      const slashHeight=size*1.65,halfWidth=slashHeight*.34,gap=size*.5;
      const available=Math.max(size,width-margin*2-gap*2-halfWidth*4),lines=wrap(title,available);
      const textWidth=Math.max(...lines.map(line=>ctx.measureText(line).width)),lineHeight=size*1.22;
      layout={key,size,slashHeight,halfWidth,gap,lines,textWidth,lineHeight,font:ctx.font};
      if(lines.length*lineHeight<=viewHeight*.44||size===12)break;
    }
    // Very short viewports still keep the whole group visible, uniformly.
    layout.fit=Math.min(1,(viewHeight*.6)/Math.max(layout.slashHeight,layout.lines.length*layout.lineHeight),(width-margin*2)/(layout.textWidth+layout.gap*2+layout.halfWidth*4));
    owner.eaTitleLayout=layout;
  }
  const layout=owner.eaTitleLayout;
  // Only the painted marks and their spacing change; keep title typography
  // and wrapping identical to the existing measured layout.
  const configuredScale=window.__EA_PRELOADER__?.titleSlashScale;
  const slashScale=Number.isFinite(configuredScale)&&configuredScale>=.25&&configuredScale<=1?configuredScale:1;
  const slashHeight=layout.slashHeight*slashScale;
  if(owner.eaTitleSlashSource!==wordmark){
    owner.eaTitleSlashSource=wordmark;owner.eaTitleSlashPaths=null;
    const slashes=wordmark?.slashes;
    if(slashes&&typeof Path2D==='function'&&typeof slashes.left==='string'&&typeof slashes.right==='string'&&[slashes.leftCenterX,slashes.rightCenterX,wordmark.centerY,wordmark.markHeight].every(Number.isFinite)&&wordmark.markHeight>0){
      try{owner.eaTitleSlashPaths={left:new Path2D(slashes.left),right:new Path2D(slashes.right)};}catch{}
    }
  }
  ctx.save();ctx.scale(layout.fit,layout.fit);
  const appear=reduced?1:Math.max(0,Math.min(1,owner.loadBarRatio/.12));
  ctx.globalAlpha*=appear;
  const slashes=wordmark?.slashes;
  const nativeSpacing=slashes&&[slashes.leftCenterX,slashes.rightCenterX,wordmark.markHeight].every(Number.isFinite)&&wordmark.markHeight>0
    ?Math.abs(slashes.rightCenterX-slashes.leftCenterX)/wordmark.markHeight:16.6119/36.0103;
  const initialOffset=slashHeight*nativeSpacing/2;
  const offset=initialOffset+(layout.textWidth/2+layout.gap+layout.halfWidth*slashScale-initialOffset)*split;
  if(split>0){
    ctx.save();ctx.beginPath();
    const opening=(layout.textWidth/2+layout.gap)*split;
    ctx.rect(-opening,-viewHeight/2,opening*2,viewHeight);ctx.clip();
    ctx.globalAlpha*=split;ctx.font=layout.font;ctx.textAlign='center';ctx.textBaseline='middle';
    layout.lines.forEach((line,index)=>ctx.fillText(line,0,(index-(layout.lines.length-1)/2)*layout.lineHeight));
    ctx.restore();
  }
  for(const [side,center]of [['left',-offset],['right',offset]]){
    if(owner.eaTitleSlashPaths){
      ctx.save();ctx.translate(center,0);
      const scale=slashHeight/wordmark.markHeight;
      ctx.scale(scale,scale);ctx.translate(-wordmark.slashes[side+'CenterX'],-wordmark.centerY);
      ctx.fill(owner.eaTitleSlashPaths[side]);ctx.restore();
    }else{
      const thickness=slashHeight*7.7128/36.0103,skew=slashHeight*15.8705/36.0103;
      ctx.beginPath();ctx.moveTo(center-thickness/2-skew/2,-slashHeight/2);
      ctx.lineTo(center+thickness/2-skew/2,-slashHeight/2);
      ctx.lineTo(center+thickness/2+skew/2,slashHeight/2);
      ctx.lineTo(center-thickness/2+skew/2,slashHeight/2);ctx.closePath();ctx.fill();
    }
  }
  ctx.restore();return true;
}
function eaImportedPreloaderDraw(owner){
  if(typeof window==='undefined'||window.__EA_PRELOADER__?.variant!=='split-slashes'||typeof preloader==='undefined'||!preloader.isActive||!(owner.activeRatio>0))return;
  const ctx=owner.ctx,canvas=owner.canvas;
  if(!ctx||!canvas)return;
  const clamp=value=>Math.max(0,Math.min(1,Number(value)||0)),smooth=value=>value*value*(3-2*value);
  const reveal=clamp(owner.contentShowRatio),fade=1-smooth(reveal);
  const wordmark=window.__EA_PRELOADER__.wordmark;
  if(owner.eaWordmarkSource!==wordmark){
    owner.eaWordmarkSource=wordmark;owner.eaWordmarkPaths=null;
    if(wordmark&&typeof Path2D==='function'&&['width','height','centerX','centerY','markHeight'].every(key=>Number.isFinite(wordmark[key]))&&wordmark.width>0&&wordmark.height>0&&wordmark.markHeight>0&&typeof wordmark.left==='string'&&typeof wordmark.right==='string'){
      try{owner.eaWordmarkPaths={left:new Path2D(wordmark.left),right:new Path2D(wordmark.right)};}catch{}
    }
  }
  const paths=owner.eaWordmarkPaths;
  let reduced=false;
  try{reduced=typeof window.matchMedia==='function'&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;}catch{}
  const split=reduced?1:Math.max(smooth(clamp((owner.loadBarRatio-.12)/.76)),clamp(owner.lineTransformRatio));
  // Use the native phase clock, before its sharp exponential easing, so the
  // letters slide visibly throughout the assembly phase instead of snapping.
  const assembly=Number.isFinite(preloader.lineTransformTime)?clamp(preloader.lineTransformTime):clamp(owner.lineTransformRatio);
  const letters=paths?(reduced?1:smooth(clamp((assembly-.08)/.82))):0;
  const width=properties.viewportWidth+2,viewHeight=properties.viewportHeight+2;
  const unit=Math.max(24,Math.min(42,Number(owner.pixelWidth)||24));
  const height=paths?Math.min(unit*3.6,width*.82*wordmark.markHeight/wordmark.width):unit*3.6;
  const thickness=height*7.7128/36.0103,skew=height*15.8705/36.0103,offset=height*16.6119/36.0103/2*split;
  ctx.save();
  ctx.setTransform(1,0,0,1,0,0);
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.scale(settings.DPR,settings.DPR);
  ctx.globalCompositeOperation='source-over';ctx.globalAlpha=fade;
  ctx.fillStyle='#000';ctx.fillRect(0,0,width,viewHeight);
  ctx.translate(width/2,viewHeight/2);ctx.fillStyle='#fff';
  const configuration=window.__EA_PRELOADER__,title=configuration.pageTitles===true&&typeof configuration.title==='string'?configuration.title.replace(/\s+/gu,' ').trim():'';
  if(title&&eaImportedPreloaderTitle(owner,wordmark,title,split,reduced,width,viewHeight)){ctx.restore();return;}
  if(paths){
    const scale=height/wordmark.markHeight;
    // Centre the completed SVG while the two bars start at the screen centre.
    ctx.translate((wordmark.centerX-wordmark.width/2)*scale*letters,(wordmark.centerY-wordmark.height/2)*scale*letters);
    if(letters>0){
      const extent=Math.max(width,viewHeight,wordmark.width*scale)*2,slope=skew/height;
      const drawLetters=(path,left)=>{
        const edge=left?-offset-thickness/2:offset+thickness/2;
        const outer=left?-extent:extent;
        ctx.save();ctx.beginPath();
        ctx.moveTo(outer,-extent);ctx.lineTo(edge-slope*extent,-extent);
        ctx.lineTo(edge+slope*extent,extent);ctx.lineTo(outer,extent);
        ctx.closePath();ctx.clip();
        const travel=(left?wordmark.centerX:wordmark.width-wordmark.centerX)*scale+thickness+skew;
        ctx.translate((left?1:-1)*travel*(1-letters),0);
        ctx.scale(scale,scale);ctx.translate(-wordmark.centerX,-wordmark.centerY);
        ctx.fill(path);ctx.restore();
      };
      drawLetters(paths.left,true);drawLetters(paths.right,false);
    }
  }
  const bar=center=>{
    ctx.beginPath();
    ctx.moveTo(center-thickness/2-skew/2,-height/2);
    ctx.lineTo(center+thickness/2-skew/2,-height/2);
    ctx.lineTo(center+thickness/2+skew/2,height/2);
    ctx.lineTo(center-thickness/2+skew/2,height/2);
    ctx.closePath();ctx.fill();
  };
  if(split===0)bar(0);else{bar(-offset);bar(offset);}
  ctx.restore();
}

// The original preset retains the donor's loading bar and canvas wipe.
const ease={expoInOut:x=>x===0?0:x===1?1:x<.5?Math.pow(2,20*x-10)/2:(2-Math.pow(2,-20*x+10))/2};
class MinSignal$2{dispatch(){}}
class TransitionOverlay{contentShowRatio=0;contentHideRatio=1;loadBarRatio=0;lineTransformRatio=0;showTextRatio=0;waitTextRatio=0;hideTextRatio=1;pixelWidth=0;needsShowText=!1;needsHideText=!1;loadingTextAnimation=0;onShowTextCompleted=new MinSignal$2;onHideTextCompleted=new MinSignal$2;init(){this.canvas=document.getElementById("transition-overlay"),this.ctx=this.canvas.getContext("2d")}resize(e,t){e+=2,t+=2,this.canvas.width=e*settings.DPR,this.canvas.height=t*settings.DPR,this.canvas.style.width=e+"px",this.canvas.style.height=t+"px",this.pixelWidth=~~Math.min(42,properties.viewportWidth/30)}isReadyToHide(){}get activeRatio(){return Math.min(1-this.contentShowRatio,this.contentHideRatio)}update(e){if(this.activeRatio>0){let t=properties.viewportWidth+2,r=properties.viewportHeight+2,n=this.pixelWidth,a=this.loadBarRatio,l=this.lineTransformRatio,c=Math.sqrt(t*t+r*r)/n,u=this.ctx;u.save(),u.scale(settings.DPR,settings.DPR),u.fillStyle="#000",u.fillRect(0,0,t,r);let f=ease.expoInOut(1-this.activeRatio),p=(1+f*c)*n;if(u.translate(t*.5,r*.5),u.rotate(f*(this.contentShowRatio==0?-1:1)),u.translate(n*f*c,-n*.5*f*c),u.scale(p,p),l==0)u.fillStyle="#333",u.fillRect(-2.5,-.5,5,1),u.fillStyle="#fff",u.fillRect(-2.5,-.5,5*a,1);else{u.fillStyle="#fff",this.needsShowText&&(this.showTextRatio=this.showTextRatio+e*1.25,this.showTextRatio>=1&&(this.showTextRatio=1,this.needsShowText=!1,this.onShowTextCompleted.dispatch())),this.showTextRatio==1&&(this.waitTextRatio=Math.min(1,this.waitTextRatio+e*3),this.waitTextRatio==1&&this.needsHideText&&taskManager.percent==1&&(this.hideTextRatio=this.hideTextRatio+e*1.25,this.hideTextRatio>=1&&(this.hideTextRatio=1,this.needsHideText=!1,this.onHideTextCompleted.dispatch())));let g=this.showTextRatio,v=this.hideTextRatio,_=math.fit(Math.min(g,1-v),0,.5,1,.2,ease.expoInOut),T=(ease.expoInOut(g)+ease.expoInOut(v))*-15;if(g>0&&v<1){u.scale(_,_),u.translate(-l,1.5*l),u.translate(T,0),u.save(),u.translate(-1.5,-4.5),u.beginPath();for(let M=0,S=LOADING_RECTS.length/4,b=0;M<S;M++,b+=4){u.fillStyle="#fff";let C=LOADING_RECTS[b+0],w=LOADING_RECTS[b+1],R=LOADING_RECTS[b+2],E=LOADING_RECTS[b+3],I=M/(S-1),F=math.fit(g,I*.5,.5+I*.5,0,1,ease.expoIn)*math.fit(v,I*.5,.5+I*.5,1,0,ease.expoOut);g<1?M<2&&(F=1):M>=S-2&&(F=1),u.rect(C+(1-F)*R*.5,w+(1-F)*E*.5,R*F,E*F)}u.closePath(),u.fill(),u.restore()}else u.translate(-l,1.5*l),u.save(),u.translate(.5,-.5),u.rotate(l*Math.PI*.5),u.globalCompositeOperation="xor",u.fillRect(-3,0,3,1),u.globalCompositeOperation="source-over",u.globalAlpha=1-f,u.fillRect(-3,0,3,1),u.restore(),u.save(),u.translate(.5,-.5),u.globalCompositeOperation="xor",u.fillRect(0,0,2,1),u.globalCompositeOperation="source-over",u.globalAlpha=1-f,u.fillRect(0,0,2,1),u.restore()}u.restore(),this.canvas.style.display="block"}else this.canvas.style.display="none"}}
const original=new TransitionOverlay();
return owner=>{
 if(window.__EA_PRELOADER__?.variant==='split-slashes')eaImportedPreloaderDraw(owner);
 else {original.canvas=owner.canvas;original.ctx=owner.ctx;original.pixelWidth=owner.pixelWidth;original.contentShowRatio=owner.contentShowRatio;original.loadBarRatio=owner.loadBarRatio;original.update(0);}
};
}
