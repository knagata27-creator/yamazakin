'use strict';

// 写真ファイルがまだない場合、ブロークン表示を非表示にする
document.querySelectorAll('img[src]').forEach(function(img) {
  img.addEventListener('error', function() {
    this.style.display = 'none';
  });
});

const toggle = document.getElementById('menu-toggle');
const nav    = document.getElementById('site-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = toggle.classList.toggle('is-open');
    nav.classList.toggle('is-open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('is-open');
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
}

// ページトップへ戻るボタン
const backToTop = document.getElementById('back-to-top');
if (backToTop) {
  window.addEventListener('scroll', function () {
    backToTop.classList.toggle('is-visible', window.scrollY > 400);
  }, { passive: true });
  backToTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
