import {createImportedPreloaderPainter} from './preloader-paint.js?v=8e059e51b3380125';

// Use the theme's existing overlay, mark, title settings and digit typography.
// Its whole-page SPA controller cannot own a newly assembled DOM structure.
if (document.documentElement.hasAttribute('data-ea-layout')) {
  const overlay=document.getElementById('transition-overlay'), loader=document.getElementById('preloader');
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const preloader={isActive:true,lineTransformTime:0},settings={DPR:Math.min(devicePixelRatio||1,2)};
  const properties={viewportWidth:innerWidth,viewportHeight:innerHeight};
  const owner={canvas:overlay,ctx:overlay?.getContext?.('2d'),activeRatio:1,loadBarRatio:0,lineTransformRatio:0,contentShowRatio:0,pixelWidth:32};
  const paint=createImportedPreloaderPainter({preloader,settings,properties});
  const digits=[...document.querySelectorAll('.preloader-percent-digit')];
  let started=performance.now(),target=0,shown=0,complete=false,leaving=false,frame=0;
  const resize=()=>{
    properties.viewportWidth=innerWidth;properties.viewportHeight=innerHeight;
    if(overlay){overlay.width=Math.ceil((innerWidth+2)*settings.DPR);overlay.height=Math.ceil((innerHeight+2)*settings.DPR);overlay.style.width=(innerWidth+2)+'px';overlay.style.height=(innerHeight+2)+'px';}
  };
  const hide=()=>{cancelAnimationFrame(frame);preloader.isActive=false;loader?.setAttribute('hidden','');overlay?.setAttribute('hidden','');document.documentElement.removeAttribute('data-ea-loading');document.dispatchEvent(new Event('ea-layout-ready'));};
  const show=()=>{
    document.documentElement.setAttribute('data-ea-loading','');
    for(const element of [loader,overlay])if(element){element.removeAttribute('hidden');element.style.display='block';element.style.visibility='visible';element.style.opacity='1';}
  };
  const update=now=>{
    const elapsed=(now-started)/1000;
    shown=Math.min(target,shown+(target-shown)*.14+.002);
    owner.loadBarRatio=shown;owner.lineTransformRatio=Math.min(1,elapsed/.7);preloader.lineTransformTime=owner.lineTransformRatio;
    if(complete)owner.contentShowRatio=reduced?1:Math.min(1,(now-complete)/600);
    if(leaving)owner.contentShowRatio=0;
    owner.activeRatio=1-owner.contentShowRatio;
    if(owner.ctx)paint(owner);
    const percent=String(Math.round(shown*100)).padStart(digits.length,'0');
    digits.forEach((digit,index)=>{const nums=digit.querySelectorAll('.preloader-percent-digit-num');for(const n of nums)n.textContent=percent[index]||'0';digit.style.transform='translateY(-0.05em)';});
    if(complete&&!leaving&&owner.contentShowRatio>=1){hide();return;}
    frame=requestAnimationFrame(update);
  };
  const resources=[document.fonts?.ready,...[...document.images].filter(image=>image.loading!=='lazy'||image.getBoundingClientRect().top<innerHeight*1.2).map(image=>image.complete?Promise.resolve():new Promise(resolve=>{image.addEventListener('load',resolve,{once:true});image.addEventListener('error',resolve,{once:true});}))].filter(Boolean);
  let settled=0;
  const ready=Promise.allSettled(resources.map(resource=>Promise.resolve(resource).finally(()=>{target=++settled/Math.max(1,resources.length);})));
  resize();show();frame=requestAnimationFrame(update);
  const timeout=new Promise(resolve=>setTimeout(resolve,5000));
  Promise.race([ready,timeout]).then(()=>{target=1;const wait=reduced?0:Math.max(0,700-(performance.now()-started));setTimeout(()=>{complete=performance.now();},wait);});
  addEventListener('resize',resize,{passive:true});
  addEventListener('pageshow',event=>{if(event.persisted){leaving=false;hide();}});
  addEventListener('click',event=>{
    if(event.defaultPrevented||event.button!==0||event.ctrlKey||event.metaKey||event.shiftKey||event.altKey||leaving||document.querySelector('[data-ea-live-editor="editing"]'))return;
    const link=event.target.closest?.('a[href]');
    if(!link||link.hasAttribute('download')||(link.target&&link.target!=='_self'))return;
    let url;try{url=new URL(link.href,location.href);}catch{return;}
    if(url.origin!==location.origin||!/^https?:$/.test(url.protocol)||(url.pathname===location.pathname&&url.search===location.search))return;
    event.preventDefault();event.stopImmediatePropagation();leaving=true;preloader.isActive=true;complete=false;started=performance.now();target=1;shown=1;show();
    cancelAnimationFrame(frame);frame=requestAnimationFrame(update);
    setTimeout(()=>location.assign(url.href),reduced?0:180);
  },true);
}
