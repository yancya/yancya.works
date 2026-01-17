# 画像ディレクトリ

このディレクトリには、サイトで使用する画像ファイルを配置します。

**詳細な画像仕様:** `IMAGE_SPEC.md` を参照してください。

## 現在のファイル

### プレースホルダー画像
- `ogp-placeholder.jpg` - OGP画像プレースホルダー (1200x630px)
- `favicon.ico` - ファビコン (16x16, 32x32)
- `favicon-32x32.png` - ファビコン 32x32
- `favicon-192x192.png` - ファビコン 192x192 (Android用)
- `favicon-512x512.png` - ファビコン 512x512 (PWA用)

### 旧ファイル（参考用）
- `logo.svg` - SVGロゴサンプル
- `favicon.svg` - SVGファビコンサンプル

## 追加推奨ファイル

### favicon.ico
SVGファビコンに加えて、従来のICO形式のファビコンを追加することを推奨します。

オンラインツールで変換可能：
- https://realfavicongenerator.net/
- https://favicon.io/

### hero-bg.jpg
ヒーローセクションの背景画像を追加する場合は、以下の仕様を推奨：
- サイズ: 1920px × 1080px 以上
- フォーマット: JPEG または WebP
- 容量: 300KB以下（最適化推奨）

推奨フリー素材サイト：
- Unsplash (https://unsplash.com/)
- Pexels (https://www.pexels.com/)

### ポートフォリオ画像
実績セクションに表示する画像：
- サイズ: 800px × 600px 推奨
- フォーマット: JPEG、PNG、または WebP
- 容量: 各200KB以下推奨

## 画像最適化

画像を追加する際は、以下のツールで最適化することを推奨：
- TinyPNG (https://tinypng.com/)
- Squoosh (https://squoosh.app/)
- ImageOptim (Mac用アプリ)

## WebP形式

モダンブラウザ向けにWebP形式の画像を使用することで、読み込み速度を改善できます。

変換ツール：
- Squoosh (https://squoosh.app/)
- cwebp コマンドラインツール
