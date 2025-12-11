// script.js — minimal & dependency-free
document.addEventListener('DOMContentLoaded', function(){
  // live search: expects input with id="site-search" and tiles with class ".char-block" and inner .label
  const search = document.getElementById('site-search');
  if (search){
    search.addEventListener('input', function(){
      const q = search.value.trim().toLowerCase();
      const tiles = document.querySelectorAll('.char-block');
      tiles.forEach(t => {
        const labelEl = t.querySelector('.label');
        const label = labelEl ? labelEl.textContent.trim().toLowerCase() : '';
        t.style.display = label.includes(q) ? '' : 'none';
      });
    });
  }

  // grid size toggle: buttons with data-size attributes
  document.querySelectorAll('[data-grid-size]').forEach(btn => {
    btn.addEventListener('click', () => {
      const size = btn.getAttribute('data-grid-size'); // small, normal, large
      document.querySelectorAll('.char-block').forEach(tile => {
        tile.classList.remove('small','big');
        if (size === 'small') tile.classList.add('small');
        if (size === 'large') tile.classList.add('big');
      });
    });
  });
});
