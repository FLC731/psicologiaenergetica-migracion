// Navegación común de la copia independiente.
const navigation = document.getElementById('navigation');
const links = [['Inicio','index.html'],['Servicios','servicios.html'],['Terapia individual','terapia-individual.html'],['Terapia familiar','terapia-familiar.html'],['Psicología energética','psicoenergetica.html'],['Trauma','trauma.html'],['EMDR','emdr.html'],['Recursos terapéuticos','recursos.html'],['Talleres','talleres.html'],['Sobre mí','sobre-mi.html'],['Blog','blog.html'],['Contacto','contacto.html']];
const base = document.querySelector('script[src$="script.js"]')?.src || new URL('script.js',document.baseURI).href;
const root = new URL('.',base);
if (navigation) navigation.replaceChildren(...links.map(([label,path])=>{const a=document.createElement('a');a.href=new URL(path,root).href;a.textContent=label;if(new URL(a.href).pathname===location.pathname)a.setAttribute('aria-current','page');return a;}));
const menu=document.querySelector('.menu');
if(menu&&navigation){menu.addEventListener('click',()=>{const expanded=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!expanded));navigation.classList.toggle('open',!expanded);});navigation.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{menu.setAttribute('aria-expanded','false');navigation.classList.remove('open');}));}
if(document.body.classList.contains('home')){
 for(const filename of ['home-fidelity.css','header-menu-separation.css']){const style=document.createElement('link');style.rel='stylesheet';style.href=new URL(filename,root).href;document.head.append(style);}
 const hero=document.querySelector('.hero');const header=document.querySelector('.header');const brand=header?.querySelector('.brand');
 if(hero&&header){hero.after(header);if(brand)hero.prepend(brand);}
 const footer=document.querySelector('footer');const contact=document.querySelector('#contacto');const quote=document.querySelector('.home-about blockquote');
 if(footer){const original=document.createElement('section');original.className='original-footer';original.setAttribute('aria-label','Contacto y pie de página');original.innerHTML='<p class="quote">«El mayor descubrimiento de mi generación es que un ser humano puede cambiar su vida cambiando su actitud mental»<br><strong>William James</strong>, considerado uno de los padres de la Psicología</p><span class="contact-label">CONTACTO</span><a class="info-link" href="./contacto.html">INFO</a><p>Félix Larriba Catalán · Psicólogo y psicoterapeuta · Tenerife<br>Atención online · Presencial previa valoración</p><a class="author-link" href="https://www.felixlarriba.com/">▣ Visita mi web de autor</a><p class="welcome">Bienvenid@</p><p><a href="mailto:Psicologiaenergetica.net@gmail.com">Psicologiaenergetica.net@gmail.com</a><br><a href="tel:+34629468154">+34 629468154 Watsup</a></p><p class="disclaimer">El contenido de estas páginas, como de toda información obtenida en internet, tiene que ser interpretado y contrastado por profesionales acreditados, el autor queda exento de toda responsabilidad de la utilización que se haga de ellas, sin la guía profesional adecuada.</p><p class="copyright">©2026 por Psicoterapia Integral</p>';footer.replaceWith(original);}
 if(contact)contact.hidden=true;if(quote)quote.hidden=true;
 const cta=document.querySelector('.hero .button');if(cta){cta.textContent='Da el primer paso hoy →';cta.href=new URL('contacto.html',root).href;}
 const help=document.querySelector('.home-help');if(hero&&header&&help)header.after(help);
}
