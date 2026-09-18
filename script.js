// Navegación común de la copia independiente. Solo enlaza páginas existentes en el repositorio.
const navigation = document.getElementById('navigation');
const links = [
 ['Inicio','index.html'],['Servicios','servicios.html'],['Terapia individual','terapia-individual.html'],
 ['Terapia familiar','terapia-familiar.html'],['Psicología energética','psicoenergetica.html'],
 ['Trauma','trauma.html'],['EMDR','emdr.html'],['Recursos terapéuticos','recursos-terapeuticos.html'],
 ['Talleres','talleres.html'],['Sobre mí','sobre-mi.html'],['Blog','blog.html'],['Contacto','contacto.html']
];
if (navigation) {
 const base = document.querySelector('script[src$="script.js"]')?.src || new URL('script.js',document.baseURI).href;
 const root = new URL('.',base);
 navigation.replaceChildren(...links.map(([label,path]) => {
  const a = document.createElement('a');
  a.href = new URL(path,root).href;
  a.textContent = label;
  if (new URL(a.href).pathname === location.pathname) a.setAttribute('aria-current','page');
  return a;
 }));
}
const menu = document.querySelector('.menu');
if (menu && navigation) {
 menu.addEventListener('click',() => {
  const expanded = menu.getAttribute('aria-expanded') === 'true';
  menu.setAttribute('aria-expanded',String(!expanded));
  navigation.classList.toggle('open',!expanded);
 });
 navigation.querySelectorAll('a').forEach(link => link.addEventListener('click',() => {
  menu.setAttribute('aria-expanded','false');
  navigation.classList.remove('open');
 }));
}
