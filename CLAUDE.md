# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

個人事業主「やんちゃワークス」(yancya.works)の公式企業サイトです。

**目的:**
- 銀行口座開設の審査用に、事業の実態を示すプロフェッショナルなサイトを提供
- 清潔感と信頼性を重視したビジネスサイト
- 事業内容、サービス、実績を明確に提示

## Technology Stack

- **HTML/CSS/JavaScript**: フレームワークなしのシンプルな静的サイト
- **ホスティング**: GitHub Pages
- **カスタムドメイン**: yancya.works
- **フォント**: Google Fonts (Noto Sans JP)
- **お問い合わせフォーム**: Formspree

## File Structure

```
yancya.works/
├── index.html              # メインHTMLファイル
├── css/
│   ├── style.css          # メインスタイルシート
│   └── responsive.css     # レスポンシブ対応CSS
├── js/
│   └── main.js            # JavaScript（インタラクション）
├── images/
│   ├── logo.svg           # ロゴ画像
│   ├── favicon.svg        # ファビコン
│   └── README.md          # 画像ディレクトリの説明
├── CNAME                  # カスタムドメイン設定
├── README.md
└── CLAUDE.md              # このファイル
```

## Development

### ローカルサーバー起動

静的サイトのため、シンプルなHTTPサーバーで確認できます。

**Pythonを使用:**
```bash
# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

ブラウザで `http://localhost:8000` にアクセス

**Node.jsのhttp-serverを使用:**
```bash
npx http-server -p 8000
```

**VS Code Live Serverを使用:**
VS Codeの拡張機能「Live Server」をインストールし、index.htmlを右クリックして「Open with Live Server」

### レスポンシブ確認

ブラウザの開発者ツール（F12）でデバイスエミュレーションを使用：
- モバイル（~767px）
- タブレット（768px~1023px）
- デスクトップ（1024px~）

## Deployment

### GitHub Pages設定

1. **リポジトリ設定**
   - GitHub: Settings > Pages
   - Source: Deploy from a branch
   - Branch: main / (root)
   - Save

2. **カスタムドメイン設定**
   - DNS設定でAレコードを追加:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - GitHub Settings > Pages でカスタムドメイン入力: `yancya.works`
   - "Enforce HTTPS" を有効化

3. **デプロイ**
   ```bash
   git add .
   git commit -m "コミットメッセージ"
   git push origin main
   ```
   - プッシュ後、数分でGitHub Pagesに反映されます

## Content Updates

### プレースホルダーの置き換えが必要な箇所

以下のプレースホルダーを実際の情報に置き換えてください：

**index.html内:**
- 代表者名（現在: 山田 太郎）
- 所在地（現在: 〒000-0000 東京都〇〇区〇〇 1-2-3）
- メールアドレス（現在: contact@yancya.works）
- 事業内容の詳細テキスト
- サービス内容（4つのカード）
- 実績・ポートフォリオ（3つの項目）

**お問い合わせフォーム:**
- Formspreeのform_idを設定
  - https://formspree.io/ でアカウント登録
  - 新しいフォームを作成してform_idを取得
  - index.html内の `action="https://formspree.io/f/your_form_id"` を更新

### 画像の追加・差し替え

`images/` ディレクトリ内のREADME.mdを参照してください。

推奨する追加画像：
- `favicon.ico` (従来のブラウザ用)
- `hero-bg.jpg` (ヒーロー背景、任意)
- ポートフォリオ用画像

## Key Features

### JavaScript機能（js/main.js）

- **スムーススクロール**: ナビゲーションリンクのクリックで該当セクションへスムーズに移動
- **ハンバーガーメニュー**: モバイル表示時のナビゲーションメニュー開閉
- **スクロールヘッダー**: スクロール時にヘッダーのスタイル変更
- **フォームバリデーション**: お問い合わせフォームの入力チェック
- **スクロールアニメーション**: セクションが表示されたときのフェードインアニメーション

### CSS設計（css/style.css）

- **CSS Variables**: カラーやフォント、間隔を変数で管理
- **カラースキーム**: プロフェッショナルな配色（紺、グレー、白、オレンジアクセント）
- **レスポンシブ対応**: モバイルファーストではなく、デスクトップベースで設計
- **アニメーション**: フェードインなどのシンプルなアニメーション

### デザインカスタマイズ

カラーを変更する場合は、`css/style.css`の`:root`セクションのCSS Variablesを編集：

```css
:root {
  --primary-color: #1a365d;      /* メインカラー */
  --secondary-color: #2b6cb0;    /* セカンダリカラー */
  --accent-color: #ed8936;       /* アクセントカラー */
  /* ... */
}
```

## SEO & Meta Tags

### 現在設定済み:
- titleタグ
- meta description
- meta keywords
- OGPタグ（SNSシェア用）
- 構造化データ（JSON-LD）

### 追加推奨:
- Google Search Console登録
- Google Analytics設定（任意）
- sitemap.xml作成（任意）

## Browser Support

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

※ IE11はサポート対象外

## Accessibility

- セマンティックHTML使用
- 適切な見出し階層
- alt属性設定（画像）
- キーボードナビゲーション対応
- 十分なコントラスト比

## Performance

- フレームワーク不使用で軽量
- CSS/JSの最小化（任意、デプロイ時に実施可能）
- 画像の最適化推奨
- Webフォントの最適化

## Common Tasks

### テキスト内容の変更

1. `index.html`を開く
2. 該当するセクションを検索（例: `<section id="about">`）
3. テキストを編集
4. 保存してブラウザで確認

### スタイルの調整

1. `css/style.css`を開く
2. 該当するクラスやIDのスタイルを編集
3. 保存してブラウザで確認

### セクションの追加・削除

1. `index.html`で`<section>`タグを追加・削除
2. 必要に応じて`css/style.css`にスタイルを追加
3. ナビゲーションメニューのリンクを更新

### 新しいページの追加

現在は単一ページサイトですが、新しいページを追加する場合：

1. `index.html`と同階層に新しいHTMLファイルを作成（例: `about.html`）
2. `index.html`をベースにコピーして編集
3. ヘッダーのナビゲーションリンクを更新
4. 必要に応じてCSSを追加

## Notes

- すべてのコンテンツはプレースホルダーです。実際の事業内容に合わせて更新してください
- Formspreeの無料プランは月50件までの制限があります
- カスタムドメインのDNS設定には反映まで時間がかかる場合があります（最大48時間）
- GitHub Pagesは公開リポジトリで無料、プライベートリポジトリの場合はProプラン以上が必要です

## Troubleshooting

### サイトが表示されない

- GitHub Pages設定を確認
- リポジトリがpublicになっているか確認
- DNS設定を確認（カスタムドメイン使用時）

### スタイルが反映されない

- ブラウザキャッシュをクリア（Ctrl+Shift+R / Cmd+Shift+R）
- CSSファイルのパスが正しいか確認
- 開発者ツールでエラーを確認

### フォームが送信できない

- Formspreeのform_idが正しく設定されているか確認
- ネットワークエラーがないか開発者ツールで確認
- Formspreeの送信制限に達していないか確認

## Repository Information

- **Repository**: https://github.com/yancya/yancya.works
- **Branch**: main (default)
- **GitHub Pages URL**: https://yancya.github.io/yancya.works
- **Custom Domain**: https://yancya.works
