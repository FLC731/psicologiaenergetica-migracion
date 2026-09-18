/* Contenidos recuperados de Wix Blog, 18-09-2026. No se han inventado textos ni imágenes. */
const articulosRecuperados = {
 'ryododoraku': [
  ['p','"Una técnica simple y efectiva para medir la conductividad de los meridianos a través de 24 puntos, y obtener un diagnóstico"'],
  ['img','4bb169_0b41c21efde945f5b877d5cc86fda278~mv2.jpg'],
  ['p','          Actualmente nos podemos beneficiar de la tecnología para poder tomar las medidas de los registros y realizar los cálculos a través de aplicaciones inteligentes, y ahorrarnos todos los engorrosos procedimientos, en breves momentos tenemos los resultados, una vez tomadas las mediciones, en los puntos de la tabla siguiente.'],
  ['img','4bb169_49ddf01c0aeb4f078dcc3f6b862008a2~mv2.png'],
  ['p','Extracto del capítulo, diagnóstico en MTC, adelanto del libro “Psicoenergética y Medicina China con acupuntura laser, método de salud e intervención”.'],
  ['img','4bb169_29e0a13c7cad446397ba09a9ab5be4f8~mv2.jpg'],
  ['p','!! Regálame un like en el encabezado si te gustó, y compártelo si crees puede ser de utilidad a tus amigos !!'],
  ['p','Felix Larriba Catalán'],
  ['p','Psicólogo-Logoterapeuta, actualmente escribiendo'],
  ['p','del libro Psicoenergética y Medicina China con'],
  ['p',' acupuntura laser, método de salud e intervención'],
  ['p','FUENTE: www.psicologiaenergetica.net']
 ],
 'típicos-problemas-resolubles-en-la-relación-sentimental-estrés-y-relaciones-con-la-familia-política': [
  ['img','11062b_afb626366f5249ea8306773515d06738~mv2.jpg'],
  ['p','Próxima publicación, ENERO 2022'],
  ['img','4bb169_8a0067d9c9f24225aaa5aea81487f114~mv2.png'],
  ['img','4bb169_d083e5b434e14f7bb55c0434c5920c0a~mv2.png'],
  ['p','Felix Larriba Catalán'],
  ['p','Psicólogo-Logoterapeuta, actualmente escribiendo'],
  ['p','el libro Psicoenergética y Medicina China con'],
  ['p',' acupuntura laser, método de salud e intervención'],
  ['p','FUENTE: www.psicologiaenergetica.net'],
  ['p','La historia de Kevin, andes peruanos 2021'],
  ['p','Como contribuir a la salud en nuestra relación sentimental'],
  ['p','Nutrición: El ayuno intermitente'],
  ['p','Crisis y pérdidas, podemos realmente sacar algún aprendizaje vital de las mismas'],
  ['p','Que podemos aprender en una crisis de la terapia del trauma: Resilencia'],
  ['p','Críticas y quejas, como eliminar lo que envenena de la relación'],
  ['p','Mitos de la terapia psicológica '],
  ['p','Faqs, Preguntas frecuentes'],
  ['p','Quién soy, Formación, Bienvenid@, Artículos, Contacto, Emdr, Recursos web']
 ],
 'invictus-poema-escrito-por-el-poeta-william-ernest-henley-1849-1903': [
  ['p','Escrito por el poeta William Ernest Henley (1849-1903) y publicado en 1874 en su primer libro de poemas, significa inconquistable o invicto, invictus proviene del latín, el título le fué dado a posteriori a este maravilloso poema, que refleja la libertad que aún en las peores circunstancias acompaña a todo ser humano, siempre le queda la actitud de como afrontar su destino en cualquier circunstancia presente. Este poema "invictus" fué de inspiración para Nelson Mandela en sus 30 años de presidio, y a su vez el título de la película de clint eastwook para homenajearlo.'],
  ['img','11062b_b45c88ce969b49c595019b2bd3dfd3ef~mv2.jpeg'],
  ['p','Se lo comparto para que les sirva de inspiración, les proporcione fuerza motivadora, de ejemplo y anhelo de libertad interior, frente a cualquier adversidad. En su idioma original y en su traducción al Castellano.'],
  ['p','Invictus (1875)'],
  ['p','Out of the night that covers me,\n Black as the pit from pole to pole,\n I thank whatever gods may be\n For my unconquerable soul.  '],
  ['p','In the fell clutch of circumstance\n I have not winced nor cried aloud.\n Under the bludgeonings of chance\n My head is bloody, but unbowed.  '],
  ['p','Beyond this place of wrath and tears\n Looms but the horror of the shade,\n And yet the menace of the years\n Finds and shall find me unafraid.  '],
  ['p','It matters not how strait the gate,\n How charged with punishments the scroll,\n I am the master of my fate:\n I am the captain of my soul.'],
  ['p','\n \n Invictus (1875)'],
  ['p','En esta noche que me cubre,'],
  ['p','negra como el abismo,\n doy gracias a los dioses que puedan existir,\n por mi alma inconquistable.'],
  ['p','En las circunstancias que me sujetan cruelmente,\n no muestro dolor, ni lloro en alto.\n golpeado por el destino,\n mi cabeza sangra, pero se mantiene erguida.  '],
  ['p','Más allá de este lugar de ira y lágrimas,\n me esperan los horrores de las sombras,\n sin embargo, la sombra más allá, \n me encuentra y me encontrará sin miedo.  '],
  ['p','No importa lo estrecha que sea la puerta,\n no importa el castigo del mas allá,\n Soy el amo de mi destino,\n Soy el capitán de mi alma.  '],
  ['p','William Ernest Henley (1849-1903)'],
  ['p','!! Regálame un like en el encabezado si te gustó, '],
  ['img','4bb169_29e0a13c7cad446397ba09a9ab5be4f8~mv2.jpg'],
  ['img','4bb169_4530f2a8cc4b4ee7aeb8bb4cb472ccde~mv2.png'],
  ['p','y compártelo si crees puede ser de utilidad a tus amigos !!'],
  ['p','Felix Larriba Catalán'],
  ['p','Psicólogo-Logoterapeuta, actualmente escribiendo'],
  ['p','el libro Psicoenergética y Medicina China con'],
  ['p',' acupuntura laser, método de salud e intervención'],
  ['p','FUENTE: www.psicologiaenergetica.net ']
 ]
};
(function () {
 const slug = new URLSearchParams(location.search).get('slug');
 const blocks = articulosRecuperados[slug];
 if (!blocks) return;
 const root = document.querySelector('#article .copy');
 if (!root) return;
 root.replaceChildren();
 for (const [kind, content] of blocks) {
  const node = document.createElement(kind === 'img' ? 'img' : 'p');
  if (kind === 'img') {
   node.src = 'https://static.wixstatic.com/media/' + content;
   node.alt = 'Imagen original de la publicación';
   node.loading = 'lazy';
   node.className = 'inline-image';
  } else {
   node.textContent = content;
   node.style.whiteSpace = 'pre-line';
  }
  root.append(node);
 }
 const stamp = document.createElement('small');
 stamp.textContent = 'Texto e imágenes recuperados de la publicación original de Wix. Visitas y me gusta: instantánea histórica, no contadores en tiempo real.';
 root.prepend(stamp);
})();