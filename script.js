// Navegación compartida: cada opción abre una página real, también desde el blog y los artículos.
const navigation = document.getElementById('navigation');
if (navigation) {
 const links = [['Inicio','./index.html'],['Servicios','./servicios.html'],['Terapia individual','./terapia-individual.html'],['Terapia familiar','./terapia-familiar.html'],['Talleres','./talleres.html'],['Sobre mí','./sobre-mi.html'],['Blog','./blog.html'],['Contacto','./contacto.html']];
 navigation.replaceChildren(...links.map(([label,href])=>{const a=document.createElement('a');a.href=href;a.textContent=label;if(location.pathname.endsWith(href.slice(2)))a.setAttribute('aria-current','page');return a;}));
}
const menu = document.querySelector('.menu');
if (menu && navigation) {
 menu.addEventListener('click',()=>{const expanded=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!expanded));navigation.classList.toggle('open',!expanded);});
 navigation.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{menu.setAttribute('aria-expanded','false');navigation.classList.remove('open');}));
}
