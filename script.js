
document.addEventListener('DOMContentLoaded',()=>{
 const menu=document.querySelector('.menu');
 if(menu) menu.addEventListener('click',()=>document.body.classList.toggle('mobile-open'));
 document.querySelectorAll('.navlinks a').forEach(a=>a.addEventListener('click',()=>document.body.classList.remove('mobile-open')));
});
