/* Instantánea de Wix Blog: 2026-09-18. No se generan ni alteran métricas. */
const posts = [
['El Alma del Linaje: Sanando la Deuda Ancestral','el-alma-del-linaje-sanando-la-deuda-ancestral','2025-10-31','Retiro Cuzco Marzo 2026. Los Órdenes del Amor y la Deuda Ancestral.','4bb169_ef52c5296988486289f583fba5b01c85~mv2.png',26,2],
['We Lead” TC in Austria 10-19th July 2023 Mindfulness and Emotional Intelligence "abbreviated formula"','we-lead-tc-in-austria-10-19th-july-mindfulness-and-emotional-intelligence-abbreviated-formula-1','2025-09-09','We lead, Mindfulness and Emotional Intelligence','11062b_63ba1960ad6248f4878dfc4db488cb8e~mv2.jpg',2,0],
['Talleres Terapéuticos: Infancia, trauma y ecos del alma','taller-terapéutico-infancia-trauma-y-ecos-del-alma','2025-08-07','Ciclo de talleres de dinámicas sistémicas en La Paz, Bolivia.','4bb169_1489081838c4473b9d750e655e37120d~mv2.png',235,3],
['Hipnosis de regresión, sanación álmica y psico-corporal, como reparación terapéutica','hipnosis-de-regresión-sanación-álmica-y-psico-corporal-como-reparación-terapéutica','2024-06-15','Qué es lo que produce la sanación de la Hipnosis de Regresión Terapéutica desde un punto de vista psicológico y álmico.','11062b_e439badc4f764d9c8177768087a80d31~mv2.jpg',242,10],
['Como puede ayudarte a sanar la Terapia de Regresión y vidas pasadas','como-puede-ayudarte-a-sanar-la-terapia-de-regresión-y-vidas-pasadas','2024-04-29','En qué consiste la hipnosis, estado de trance y recuperación de memorias pasadas.','4bb169_9b9c110d3a004936b54c1c9271bf1b74~mv2.jpg',1558,11],
['We Lead” TC in Austria 10-19th July Mindfulness and Emotional Intelligence "abbreviated formula"','we-lead-tc-in-austria-10-19th-july-mindfulness-and-emotional-intelligence-abbreviated-formula','2023-07-13','We lead, Mindfulness and Emotional Intelligence','11062b_63ba1960ad6248f4878dfc4db488cb8e~mv2.jpg',167,6],
['#Crisis y pérdidas, podemos realmente sacar algún aprendizaje vital de las mismas','crisis-y-pérdidas-podemos-realmente-sacar-algún-aprendizaje-vital-de-las-mismas','2022-08-17','La angustia como reverso. ¿Podemos extraer aprendizajes de las experiencias difíciles?','fac9dc352bf7d54ed0458d64ce41a3ec.jpg',657,72],
['De que están hechos los sueños, tinta, oro, esperanza… y símbolos','de-que-están-hechos-los-sueños-tinta-oro-esperanza-y-símbolos','2021-10-15','Análisis de sueños, de qué están hechos los sueños.','d9ee32bf75064b83be5f98c4289223b0.jpg',343,48],
['Mitos de la Terapia Psicológica','mitos-de-la-terapia-psicológica','2021-08-07','Terapia psicológica, psicoterapia y logoterapia.','11062b_c458d664d562468295efd282b139d3c3~mv2.jpeg',1118,88],
['Una visión evolutiva del cambio en el desarrollo espiritual y el autocrecimiento','una-visión-evolutiva-del-cambio-en-el-desarrollo-espiritual-y-el-autocrecimiento','2021-08-06','Una visión de autotransformación espiritual y evolución personal.','4bb169_b8e2edb1f2054e18ac09a72fc00c91a3~mv2.jpg',281,55],
['An evolutionary view of change in spiritual development and self-growth','an-evolutionary-view-of-change-in-spiritual-development-and-self-growth','2021-07-16','A vision of spiritual self-transformation and personal evolution.','4bb169_b8e2edb1f2054e18ac09a72fc00c91a3~mv2.jpg',102,4],
['Recuerdos que duelen: cómo convertir las heridas emocionales en cicatrices indoloras','recuerdos-que-duelen-cómo-convertir-las-heridas-emocionales-en-cicatrices-indoloras','2021-06-25','Hay emociones del pasado que lejos de desaparecer, nos lastran durante toda la vida.','4bb169_7b2ce39cbea64441a5779c9744cad3a0~mv2.jpeg',356,47],
['La historia a de Kevin, andes peruanos 2021.','la-historia-a-de-kevin-andes-peruanos-2021','2021-02-17','Una historia que para mí comienza el 28 de enero de 2021.','4bb169_bc886fa8ea6f45fa85877ae21a173965~mv2.jpg',538,59],
['Típicos problemas resolubles en la relación sentimental: estrés y relaciones con la familia política','típicos-problemas-resolubles-en-la-relación-sentimental-estrés-y-relaciones-con-la-familia-política','2020-12-23','Relaciones sentimentales, estrés y familia política.','11062b_afb626366f5249ea8306773515d06738~mv2.jpg',39,0],
['#Críticas y quejas, eliminar lo que envenena de la relación','críticas-y-quejas-como-eliminar-lo-que-envenena-de-la-relación','2020-12-22','La diferencia entre las quejas y las críticas en la convivencia.','1a77bf468f24468b954aba15ddd8b1e2.png',480,67],
['#Como contribuir a la salud en nuestra relación sentimental.','como-hacer-que-tu-relación-sentimental-contribuya-tanto-a-vuestro-bienestar-como-en-vuestra-salud','2020-11-30','Cómo contribuir al bienestar y la salud física desde la relación sentimental.','11062b_2e54fdbe56034da1b42f35e484b8b12a~mv2.jpg',463,77],
['Que podemos aprender en una crisis de la Terapia del trauma, #RESILIENCIA.','que-podemos-aprender-en-una-crisis-de-la-terapia-del-trauma-resilencia','2020-07-17','Resiliencia y recursos a partir del tratamiento del trauma previo.','4bb169_00b2964298e14a4b99fe35a13031d6ef~mv2.gif',589,70],
['#Invictus, poema invencible para estos tiempos de zozobra','invictus-poema-escrito-por-el-poeta-william-ernest-henley-1849-1903','2020-07-06','El poema Invictus de William Ernest Henley.','11062b_b45c88ce969b49c595019b2bd3dfd3ef~mv2.jpeg',382,36],
['NUTRICIÓN: #El ayuno Intermitente','el-ayuno-intermitente','2020-06-25','Reflexión sobre el ayuno intermitente.','da9363651640467f895e294c160d5761.jpg',1614,133],
['#Ryodoraku, electro meridian imaging','ryododoraku','2020-06-24','Técnica de medición de conductividad de meridianos.','4bb169_0b41c21efde945f5b877d5cc86fda278~mv2.jpg',145,17],
['#Coronavirus, cuarentena y Logoterapia "Por un mendrugo de pan"','coronavirus-cuarentena-y-logoterapia-por-un-mendrugo-de-pan','2020-06-24','A pesar de todo, sí a la vida. Por un mendrugo de pan.','4bb169_5257f9b8d309472a8615953ffe25db2d~mv2.jpg',88,31]
];
const grid = document.getElementById('blog-grid');
const search = document.getElementById('search');
const empty = document.getElementById('empty');
const fmt = new Intl.NumberFormat('es-ES');
function render() {
 const q = search.value.trim().toLocaleLowerCase();
 const matches = posts.filter(p => (p[0]+' '+p[3]).toLocaleLowerCase().includes(q));
 grid.replaceChildren();
 empty.hidden = matches.length > 0;
 for (const p of matches) {
  const [title,slug,date,excerpt,image,views,likes] = p;
  const link = 'https://www.psicologiaenergetica.net/post/'+encodeURIComponent(slug);
  const card = document.createElement('article');card.className='blog-card';
  const img = document.createElement('img');img.src='https://static.wixstatic.com/media/'+image;img.alt='Imagen original de portada: '+title;img.loading='lazy';card.append(img);
  const body=document.createElement('div');body.className='blog-card-body';
  const meta=document.createElement('span');meta.className='blog-meta';meta.textContent=new Date(date+'T12:00:00Z').toLocaleDateString('es-ES',{day:'numeric',month:'long',year:'numeric'});body.append(meta);
  const h=document.createElement('h2');const a=document.createElement('a');a.href=link;a.textContent=title;h.append(a);body.append(h);
  const summary=document.createElement('p');summary.textContent=excerpt;body.append(summary);
  const stats=document.createElement('div');stats.className='blog-stats';stats.textContent='◉ '+fmt.format(views)+' visitas   ·   ♥ '+fmt.format(likes)+' me gusta';body.append(stats);
  const more=document.createElement('a');more.className='blog-link';more.href=link;more.textContent='Leer artículo completo ↗';body.append(more);
  card.append(body);grid.append(card);
 }
}
search.addEventListener('input',render);render();