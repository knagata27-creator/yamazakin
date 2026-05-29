# 山嵜農園 公式サイト

長野県須坂市日滝の果樹農家「山嵜農園」の公式ウェブサイト。

---

## 概要

| 項目 | 内容 |
|------|------|
| 技術 | 静的 HTML / CSS / JavaScript（フレームワークなし） |
| ホスティング | Netlify |
| 販売 | BASE ショップに外部委託 |
| お問い合わせ | Netlify Forms |

---

## ファイル構成

```
yamazaki-noen/
├── index.html            # トップページ
├── about.html            # 農園について
├── products.html         # 商品一覧
├── order.html            # ご注文方法
├── contact.html          # お問い合わせフォーム
├── contact-thanks.html   # 送信完了ページ
├── legal.html            # 特定商取引法に基づく表示
├── privacy.html          # プライバシーポリシー
├── netlify.toml          # Netlify 設定（セキュリティヘッダー等）
├── css/
│   ├── reset.css         # CSS リセット
│   └── style.css         # サイト全体のスタイル
├── js/
│   ├── main.js           # ハンバーガーメニュー・ページトップボタン
│   └── identity-redirect.js  # Netlify Identity リダイレクト
├── images/
│   └── （農園・果物の写真）
└── admin/                # Decap CMS 管理画面（Netlify Identity 認証）
```

---

## ローカルでの確認方法

ダブルクリックでも開けますが、フォームや一部機能は HTTP サーバー経由が確実です。

```bash
# Python が入っていれば
cd yamazaki-noen
python3 -m http.server 3456
# → http://localhost:3456 で確認
```

---

## お知らせバーの更新

`index.html` の以下の箇所を直接編集します。

```html
<!-- お知らせバー（非表示にしたい場合は hidden を追加） -->
<div class="notice-bar" id="notice-bar">
  ...
  <p id="notice-text">ここを書き換える</p>
```

非表示にしたいときは `<div class="notice-bar" id="notice-bar" hidden>` に変更。

---

## デプロイ

GitHub リポジトリと Netlify を連携済みの場合、`main` ブランチへの push で自動デプロイされます。

1. ファイルを編集
2. `git add` → `git commit` → `git push`
3. Netlify が自動でビルド・公開

---

## 未記入のプレースホルダー

公開前に以下を実際の情報に書き換えてください。

- `legal.html` — 代表者氏名・住所・電話番号・メールアドレス・送料・配送業者
- `order.html` — 送料・配送業者名
- `privacy.html` — 制定日

---

## キャッシュバスター

CSS・JS を更新した際はバージョン文字列を変更してください（全 HTML ファイル）。

```html
<link rel="stylesheet" href="css/style.css?v=20260533">
<script src="js/main.js?v=20260533">
```
