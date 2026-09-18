/* Lector local. Solo se muestra como íntegro el texto que se ha recuperado completo. */
const slug = new URLSearchParams(location.search).get('slug');
const post = posts.find(p => p[1] === slug);
const article = document.getElementById('article');
const originalImages = {
 'el-alma-del-linaje-sanando-la-deuda-ancestral': ['4bb169_f1ce505645064407bb7cf6d8a956f757~mv2.png','4bb169_1b16419a90c44e1c9ac2a7fbbc584d90~mv2.png'],
 'taller-terapéutico-infancia-trauma-y-ecos-del-alma': ['4bb169_1489081838c4473b9d750e655e37120d~mv2.png','4bb169_3a3a59aa1c7348ef955f0dee941d9652~mv2.png','4bb169_bc879e56a0874169b51c15fb431d7870~mv2.jpg'],
 'hipnosis-de-regresión-sanación-álmica-y-psico-corporal-como-reparación-terapéutica': ['11062b_e439badc4f764d9c8177768087a80d31~mv2.jpg','11062b_cb7f8c8fd4724d7b9fb051b9d324b396~mv2.jpeg','11062b_068b7e6d3cad4283833b28adc03699ef~mv2.jpeg','4bb169_af60b4d39ab940d281d1f02db980c585~mv2.jpg'],
 'como-puede-ayudarte-a-sanar-la-terapia-de-regresión-y-vidas-pasadas': ['4bb169_9b9c110d3a004936b54c1c9271bf1b74~mv2.jpg','11062b_7f78a2cbd2414ad28435eeb538384cbf~mv2.jpg','78dbb21c63f34c71b925ad742ccf7d53.jpg']
};
const fullText = {
 'el-alma-del-linaje-sanando-la-deuda-ancestral': [
 'Retiro Cuzco Marzo 2026',
 'Los Órdenes del Amor y la Deuda Ancestral',
 'La Deuda Ancestral es la manifestación de una transgresión de los Órdenes del Amor de Bert Hellinger. El trabajo busca restablecerlos.',
 'Vídeo introductorio: https://youtu.be/VETQIEqAFPg',
 'Próximamente, el programa sobre este taller.',
 'Contacto: +51 984115620',
 'psicologiaenergetica.net@gmail.com',
 'Fecha: Marzo 2026',
 'Lugar: Eco tampu Andahuaylillas, Calle Cusco 911 Andahuaylillas.'
 ]
};
if (!post) {
 article.textContent = 'No se ha encontrado este artículo.';
} else {
 const [title, , date, excerpt, image, views, likes] = post;
 const el = (tag, text, cls) => { const node = document.createElement(tag); if (text !== undefined) node.textContent = text; if (cls) node.className = cls; return node; };
 article.append(el('p',new Date(date+'T12:00:00Z').toLocaleDateString('es-ES',{day:'numeric',month:'long',year:'numeric'}),'blog-meta'));
 article.append(el('h1',title));
 const cover = el('img',undefined,'cover');cover.src='https://static.wixstatic.com/media/'+image;cover.alt='Imagen original: '+title;article.append(cover);
 article.append(el('p',`${views.toLocaleString('es-ES')} visitas · ${likes.toLocaleString('es-ES')} me gusta`, 'numbers'));
 const body=el('div',undefined,'copy');
 if (fullText[slug]) {
  fullText[slug].forEach(paragraph => body.append(el('p',paragraph)));
  (originalImages[slug]||[]).forEach(id => { const img=el('img',undefined,'inline-image');img.src='https://static.wixstatic.com/media/'+id;img.loading='lazy';img.alt='Imagen incluida en el artículo original';body.append(img); });
 } else {
  body.append(el('p',excerpt));
  const note=el('p','El texto íntegro de esta publicación aún no se ha incorporado a la copia. Puedes consultarlo en el original mientras se completa la migración.','notice');body.append(note);
  const link=el('a','Leer texto íntegro en la web original ↗');link.href='https://www.psicologiaenergetica.net/post/'+encodeURIComponent(slug);body.append(link);
  (originalImages[slug]||[]).slice(1).forEach(id => {const img=el('img',undefined,'inline-image');img.src='https://static.wixstatic.com/media/'+id;img.loading='lazy';img.alt='Imagen original del artículo';body.append(img);});
 }
 article.append(body);
 document.title=title+' | Psicoterapia Integral';
}