'use strict';

// お知らせバーを data/content.json から動的に表示
fetch('/data/content.json')
  .then(function(res) { return res.json(); })
  .then(function(data) {
    if (data.notice && data.notice.active && data.notice.text) {
      var bar  = document.getElementById('notice-bar');
      var text = document.getElementById('notice-text');
      if (bar && text) {
        text.textContent = data.notice.text;
        bar.removeAttribute('hidden');
      }
    }
  })
  .catch(function() {});

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
