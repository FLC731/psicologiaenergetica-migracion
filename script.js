// Cabecera y navegación compartidas para todas las páginas, sin alterar su contenido.
const home=document.body.classList.contains('home');
const script=document.querySelector('script[src*="script.js"]');
const root=new URL('.',script?.src||new URL('script.js',document.baseURI).href);
const sharedStyle=document.createElement('link');sharedStyle.rel='stylesheet';sharedStyle.href=new URL('encabezado-compartido.css?v=7e2011d6',root).href;document.head.append(sharedStyle);
if(!home){
  const oldHeader=document.querySelector('body > header.header, body > .header');
  const hero=document.createElement('header');hero.className='hero site-hero';hero.id='inicio';
  const brand=document.createElement('a');brand.className='brand';brand.href=new URL('index.html',root).href;brand.textContent='Psicoterapia Integral';
  const inner=document.createElement('div');inner.className='hero-inner';
  const heading=document.createElement('h1');heading.textContent='Recupera tu bienestar emocional y desbloquea tu vida';
  const intro=document.createElement('p');const second=document.createElement('span');second.className='hero-second-line';second.textContent='Acompaño procesos de cambio profundo para superar traumas, regular emociones y encontrar sentido, con un enfoque integrador';intro.append('Soy Félix Larriba Catalán, psicólogo y psicoterapeuta.',document.createElement('br'),second);
  const cta=document.createElement('a');cta.className='button';cta.href=new URL('contacto.html',root).href;cta.textContent='Da el primer paso hoy →';
  const note=document.createElement('p');note.className='hero-note';note.textContent='✔ Sesiones online y presenciales   ✔ Enfoque personalizado   ✔ Atención confidencial';
  inner.append(heading,intro,cta,note);hero.append(brand,inner);
  const bar=document.createElement('div');bar.className='header site-navigation';
  const menuButton=document.createElement('button');menuButton.className='menu';menuButton.type='button';menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-controls','navigation');menuButton.textContent='Menú ☰';
  const nav=document.createElement('nav');nav.id='navigation';nav.setAttribute('aria-label','Navegación principal');bar.append(menuButton,nav);
  if(oldHeader)oldHeader.replaceWith(hero,bar);else document.body.prepend(hero,bar);
  const typography=document.createElement('link');typography.rel='stylesheet';typography.href=new URL('interiores-tipografia.css',root).href;document.head.append(typography);
}else{document.querySelector('.hero')?.classList.add('site-hero');document.querySelector('.header')?.classList.add('site-navigation');const intro=document.querySelector('.site-hero .hero-inner>p:not(.hero-note)');if(intro){const br=intro.querySelector('br');if(br&&br.nextSibling&&!intro.querySelector('.hero-second-line')){const second=document.createElement('span');second.className='hero-second-line';while(br.nextSibling)second.append(br.nextSibling);intro.append(second);}}const visual=document.createElement('script');visual.src=new URL('portada-referencia.js',root).href;document.body.append(visual);}
const navigation=document.getElementById('navigation');
const links=[['Inicio','index.html'],['Bienvenida','bienvenida.html'],['Servicios','servicios.html'],['Terapia individual','terapia-individual.html'],['Terapia familiar','terapia-familiar.html'],['Psicología energética','psicoenergetica.html'],['Trauma','trauma.html'],['EMDR','emdr.html'],['Recursos terapéuticos','recursos.html'],['Talleres','talleres.html'],['Blog','blog.html'],['Contacto','contacto.html']];
const closeMobileMenu=()=>{const menu=document.querySelector('.header .menu');if(menu)menu.setAttribute('aria-expanded','false');navigation?.classList.remove('open');};
async function openTrainingModal(){
  closeMobileMenu();
  let dialog=document.getElementById('shared-training-dialog');
  if(!dialog){
    const response=await fetch(new URL('sobre-mi.html',root));
    if(!response.ok)throw new Error('No se ha podido cargar la formación');
    const documentSource=new DOMParser().parseFromString(await response.text(),'text/html');
    const original=documentSource.getElementById('training-dialog');
    if(!original)throw new Error('No se ha encontrado la ventana de formación');
    const style=documentSource.querySelector('style');if(style)document.head.append(style.cloneNode(true));
    dialog=original.cloneNode(true);dialog.id='shared-training-dialog';
    dialog.querySelectorAll('[id]').forEach(element=>{if(element.id!=='shared-training-dialog')element.removeAttribute('id');});
    const heading=dialog.querySelector('h2');if(heading){heading.id='shared-training-title';dialog.setAttribute('aria-labelledby',heading.id);}
    const credential=[...dialog.querySelectorAll('li')].find(li=>li.textContent.trim()==='Psicólogo Clínico');if(credential)credential.textContent='Psicólogo';
    const close=dialog.querySelector('.training-close');if(close)close.addEventListener('click',()=>dialog.close());
    dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close();});
    document.body.append(dialog);
  }
  dialog.showModal();
}
if(navigation){navigation.replaceChildren(...links.map(([label,path])=>{const a=document.createElement('a');a.href=new URL(path,root).href;a.textContent=label;if(new URL(a.href).pathname===location.pathname)a.setAttribute('aria-current','page');return a;}));}
if(location.pathname.endsWith('/contacto.html')){
  const main=document.querySelector('main.page');const intro=main?.querySelector('.page-intro');
  if(main){const button=document.createElement('button');button.type='button';button.textContent='Formación y experiencia →';button.setAttribute('aria-haspopup','dialog');button.style.cssText='display:inline-block;border:0;border-radius:6px;background:#527281;color:#fff;padding:13px 20px;font:inherit;cursor:pointer;margin:12px 0';button.addEventListener('click',()=>openTrainingModal().catch(error=>{console.error(error);alert('No se ha podido abrir la formación. Inténtalo de nuevo.');}));if(intro)intro.after(button);else main.prepend(button);}
}
const menu=document.querySelector('.header .menu');
if(menu&&navigation){menu.addEventListener('click',()=>{const expanded=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!expanded));navigation.classList.toggle('open',!expanded);});navigation.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMobileMenu));}
