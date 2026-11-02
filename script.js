const root=document.documentElement,tb=document.getElementById('theme');
try{const s=localStorage.getItem('theme');if(s)root.dataset.theme=s}catch(e){}
function paint(){tb.textContent=root.dataset.theme==='dark'?'☾':'☀'}
paint();
tb.onclick=()=>{root.dataset.theme=root.dataset.theme==='dark'?'light':'dark';try{localStorage.setItem('theme',root.dataset.theme)}catch(e){}paint()};
const links=document.getElementById('links');
document.getElementById('menu').onclick=()=>links.classList.toggle('open');
links.onclick=e=>{if(e.target.tagName==='A')links.classList.remove('open')};
document.getElementById('yr').textContent=new Date().getFullYear();
const top=document.getElementById('top');
addEventListener('scroll',()=>top.style.display=scrollY>400?'block':'none');
top.onclick=()=>scrollTo({top:0});
// typing roles
const roles=['BSc Computer Science student','Aspiring front-end developer','Open to learning'],el=document.getElementById('role');
let r=0,c=0,del=false;
if(!matchMedia('(prefers-reduced-motion:reduce)').matches){
 (function tick(){const t=roles[r];c+=del?-1:1;el.textContent=t.slice(0,c)||'\u00a0';
  let d=del?40:80;if(!del&&c===t.length){del=true;d=1400}else if(del&&c===0){del=false;r=(r+1)%roles.length;d=300}
  setTimeout(tick,d)})();
}
document.getElementById('form').onsubmit=e=>{e.preventDefault();const f=e.target;
 location.href='mailto:your-email@example.com?subject='+encodeURIComponent('Portfolio message from '+f.name.value)+'&body='+encodeURIComponent(f.msg.value+'\n\n'+f.email.value)};
