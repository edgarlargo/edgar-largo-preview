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
