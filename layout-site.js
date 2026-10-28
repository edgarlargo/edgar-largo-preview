/* Native interactions for assembled pages, independent of the donor SPA. */
(() => {
  if (!document.documentElement.hasAttribute('data-ea-layout')) return;
  document.documentElement.classList.add('is-ready');
  // This theme paints its normal page backdrop on a canvas. Its CSS token
  // remains the source of truth when composed pages use document scrolling.
  if(document.getElementById('canvas')&&!document.body.style.backgroundColor&&getComputedStyle(document.documentElement).getPropertyValue('--color-off-white').trim())document.body.style.backgroundColor='var(--color-off-white)';
  const button = document.getElementById('header-right-menu-btn'), menu = document.getElementById('header-menu');
  if (button && menu) {
    const toggle = open => {
      document.documentElement.toggleAttribute('data-ea-layout-menu',open);button.setAttribute('aria-expanded',String(open));
      // Use the source navbar's own state classes on partial composed pages.
      document.getElementById('header')?.classList.toggle('--menu-opened',open);
      document.getElementById('header-container')?.classList.toggle('--opened',open);
      button.classList.toggle('--opened',open);
    };
    button.setAttribute('aria-controls',menu.id); toggle(false);
    button.addEventListener('click', () => toggle(button.getAttribute('aria-expanded') !== 'true'));
    document.addEventListener('keydown', event => { if(event.key==='Escape'){toggle(false);button.focus();} });
    menu.addEventListener('click', event => { if(event.target.closest('a[href]'))toggle(false); });
  }
  for (const video of document.querySelectorAll('video')) video.controls = true;
  const scrollTo=node=>node?.scrollIntoView({block:'start',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
  document.getElementById('footer-bottom-up')?.addEventListener('click',event=>{event.preventDefault();scrollTo(document.body);});
  for(const id of ['end-section-title-link','end-bottom'])document.getElementById(id)?.addEventListener('click',event=>{event.preventDefault();scrollTo(document.getElementById('ea-footer-contact')||document.getElementById('footer-section'));});
  // A copied fixed-viewport theme can consume wheel input without moving the
  // assembled document. Keep ordinary vertical scrolling, including embeds.
  window.addEventListener('wheel',event=>{
    if(event.defaultPrevented||event.ctrlKey||!Number.isFinite(event.deltaY)||Math.abs(event.deltaX)>Math.abs(event.deltaY)||!event.deltaY)return;
    const factor=event.deltaMode===1?16:event.deltaMode===2?innerHeight:1,delta=event.deltaY*factor;
    for(let node=event.target instanceof Element?event.target:null;node&&node!==document.body;node=node.parentElement){
      const style=getComputedStyle(node);
      if(/auto|scroll/.test(style.overflowY)&&node.scrollHeight>node.clientHeight+1&&
        (delta<0?node.scrollTop>0:node.scrollTop<node.scrollHeight-node.clientHeight-1))return;
    }
    const root=document.scrollingElement;if(!root)return;
    const next=Math.max(0,Math.min(root.scrollHeight-root.clientHeight,root.scrollTop+delta));
    if(next===root.scrollTop)return;
    window.scrollTo({top:next,left:scrollX,behavior:'instant'});event.preventDefault();event.stopImmediatePropagation();
  },{capture:true,passive:false});
  const reveal=()=>{
    if(matchMedia('(prefers-reduced-motion: reduce)').matches||typeof IntersectionObserver!=='function')return;
    const observer=new IntersectionObserver(entries=>{for(const entry of entries)if(entry.isIntersecting){
      observer.unobserve(entry.target);
      entry.target.animate([{opacity:0,transform:'translateY(24px)'},{opacity:1,transform:'translateY(0)'}],{duration:650,easing:'cubic-bezier(.22,1,.36,1)'});
      entry.target.setAttribute('data-ea-revealed','');
    }},{rootMargin:'0px 0px -4% 0px',threshold:0.05});
    for(const node of document.querySelectorAll('.project-item,.ea-page-content>*,.section h1,.section h2,.section h3,.section h4'))observer.observe(node);
  };
  document.addEventListener('ea-layout-ready',reveal,{once:true});
})();


function eaScrollIndicatorPaint(indicator,bar,background){
  const now=performance.now();
  if(now-(indicator.eaContrastTime??-100)<75)return;
  indicator.eaContrastTime=now;
  const rgba=value=>{
    if(typeof value!=='string')return null;
    let hex=value.trim().match(/^#([a-f0-9]{3}|[a-f0-9]{6})$/i)?.[1];
    if(hex){if(hex.length===3)hex=hex.split('').map(v=>v+v).join('');return [0,2,4].map(i=>parseInt(hex.slice(i,i+2),16)/255).concat(1);}
    const m=value.match(/^rgba?\(\s*([\d.]+)[, ]+([\d.]+)[, ]+([\d.]+)(?:\s*[,/]\s*([\d.]+))?\s*\)$/);
    return m?[Number(m[1])/255,Number(m[2])/255,Number(m[3])/255,m[4]===undefined?1:Number(m[4])]:null;
  };
  const over=(a,b)=>a.slice(0,3).map((v,i)=>v*a[3]+b[i]*(1-a[3])).concat(1);
  // CSS's transparent initial html/body paint reveals the white viewport.
  const base=over(rgba(getComputedStyle(document.body).backgroundColor)||[0,0,0,0],over(rgba(getComputedStyle(document.documentElement).backgroundColor)||[0,0,0,0],[1,1,1,1]));
  let color=over(rgba(background)||[0,0,0,0],base);
  // WebGL can own the authored background while its DOM remains transparent.
  if(typeof eaLogoSurface==='function')color=eaLogoSurface({domLogoSvg:indicator},color);
  else{
    const rect=indicator.getBoundingClientRect(),paints=[];
    for(const node of document.elementsFromPoint(rect.left+rect.width/2,rect.top+rect.height/2)){
      if(node===document.body||node===document.documentElement||indicator.contains(node))continue;
      const style=getComputedStyle(node),paint=rgba(style.backgroundColor);
      if(style.visibility!=='visible'||!paint||!paint[3]||Number(style.opacity)===0)continue;
      paint[3]*=Number(style.opacity);paints.push(paint);if(paint[3]>=1)break;
    }
    for(let i=paints.length-1;i>=0;i--)color=over(paints[i],color);
  }
  const linear=color.slice(0,3).map(v=>v<=.04045?v/12.92:Math.pow((v+.055)/1.055,2.4));
  const light=linear[0]*.2126+linear[1]*.7152+linear[2]*.0722<=.179;
  if(indicator.eaContrastLight===light)return;
  indicator.eaContrastLight=light;
  bar.style.backgroundColor=light?'#fff':'#000';
  indicator.style.backgroundColor=light?'rgba(255,255,255,.1)':'rgba(0,0,0,.1)';
}

(() => {
  if(!document.documentElement.hasAttribute('data-ea-layout'))return;
  const indicator=document.getElementById('scroll-indicator'),bar=document.getElementById('scroll-indicator-bar');
  if(!indicator||!bar)return;
  let frame=0,previous=0,lastScroll=-Infinity,opacity=0,lastY=document.scrollingElement?.scrollTop||0;
  const draw=now=>{
    frame=0;
    const root=document.scrollingElement;if(!root)return;
    const max=Math.max(0,root.scrollHeight-root.clientHeight),y=Math.max(0,Math.min(max,root.scrollTop));
    if(y!==lastY){lastScroll=now;lastY=y;}
    const active=max>1&&now-lastScroll<500,dt=previous?Math.min(.1,(now-previous)/1000):0;previous=now;
    opacity=max>1?Math.max(0,Math.min(1,opacity+(active?2:-2)*dt)):0;
    const height=indicator.getBoundingClientRect().height,ratio=Math.max(.2,root.clientHeight/Math.max(1,root.scrollHeight));
    indicator.style.opacity=String(opacity);
    bar.style.height=height*ratio+'px';bar.style.transform='translate3d(0,'+(max?height*(1-ratio)*y/max:0)+'px,0)';
    eaScrollIndicatorPaint(indicator,bar);
    if(active||opacity>0)frame=requestAnimationFrame(draw);
  };
  const schedule=()=>{if(!frame){previous=performance.now();frame=requestAnimationFrame(draw);}};
  window.addEventListener('scroll',schedule,{passive:true});window.addEventListener('resize',schedule,{passive:true});
  if(typeof ResizeObserver==='function')new ResizeObserver(schedule).observe(document.body);
  schedule();
})();
