'use strict';

// Netlify Identity: ログイン後に /admin/ へリダイレクト
// このスクリプトは netlify-identity-widget.js の直後に読み込むこと
if (window.netlifyIdentity) {
  window.netlifyIdentity.on('init', function (user) {
    if (!user) {
      window.netlifyIdentity.on('login', function () {
        document.location.href = '/admin/';
      });
    }
  });
}
