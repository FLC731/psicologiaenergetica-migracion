// Navegación compartida: no altera la estructura HTML de la portada.
const navigation=document.getElementById('navigation');
const links=[['Inicio','index.html'],['Bienvenida','bienvenida.html'],['Servicios','servicios.html'],['Terapia individual','terapia-individual.html'],['Terapia familiar','terapia-familiar.html'],['Psicología energética','psicoenergetica.html'],['Trauma','trauma.html'],['EMDR','emdr.html'],['Recursos terapéuticos','recursos.html'],['Talleres','talleres.html'],['Sobre mí','sobre-mi.html'],['Blog','blog.html'],['Contacto','contacto.html']];
const script=document.querySelector('script[src$="script.js"]');
const root=new URL('.',script?.src||new URL('script.js',document.baseURI).href);
if(navigation){navigation.replaceChildren(...links.map(([label,path])=>{const a=document.createElement('a');a.href=new URL(path,root).href;a.textContent=label;if(new URL(a.href).pathname===location.pathname)a.setAttribute('aria-current','page');return a;}));}
const menu=document.querySelector('.menu');
if(menu&&navigation){menu.addEventListener('click',()=>{const expanded=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!expanded));navigation.classList.toggle('open',!expanded);});navigation.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{menu.setAttribute('aria-expanded','false');navigation.classList.remove('open');}));}
if(document.body.classList.contains('home')){const css=document.createElement('link');css.rel='stylesheet';css.href=new URL('portada-referencia.css',root).href;document.head.append(css);const visual=document.createElement('script');visual.src=new URL('portada-referencia.js',root).href;document.body.append(visual);}
