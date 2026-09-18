/* Navegación interna del archivo: las fichas abren la página propia del sitio. */
function localizeArticleLinks() {
 document.querySelectorAll('.blog-card').forEach(card => {
  const link=card.querySelector('h2 a');
  if (!link) return;
  const post=posts.find(p=>p[0]===link.textContent);
  if (!post) return;
  const target='./articulo.html?slug='+encodeURIComponent(post[1]);
  link.href=target;
  const more=card.querySelector('.blog-link');
  if(more){more.href=target;more.textContent='Leer en esta web →';}
 });
}
const observer=new MutationObserver(localizeArticleLinks);
observer.observe(document.getElementById('blog-grid'),{childList:true});
localizeArticleLinks();