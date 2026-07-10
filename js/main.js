const header=document.querySelector('.site-header');const nav=document.querySelector('.nav-links');const toggle=document.querySelector('.menu-toggle');
const updateHeader=()=>header?.classList.toggle('scrolled',window.scrollY>20);updateHeader();window.addEventListener('scroll',updateHeader,{passive:true});
toggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open)});nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
const form=document.querySelector('[data-contact-form]');form?.addEventListener('submit',e=>{e.preventDefault();const toast=document.querySelector('.toast');toast.style.display='block';form.reset();setTimeout(()=>toast.style.display='none',3500)});
