window.EA_PROJECT_IMAGES=[];window.addEventListener('click',function(event){
 if((typeof event.button==='number'&&event.button!==0)||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;
 var anchor=event.target.closest&&event.target.closest('a[href]');if(!anchor||anchor.target==='_blank')return;
 var url=new URL(anchor.href,location.href);if(url.origin!==location.origin||!url.searchParams.has('view'))return;
 event.preventDefault();event.stopImmediatePropagation();location.assign(url.href);
},true);