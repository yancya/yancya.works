# 画像仕様書

## 必須画像

### 1. ロゴ画像（ヘッダー用）
**ファイル名:** `logo.webp` または `logo.png`
**推奨サイズ:**
- 横: 200-300px
- 高さ: 40-60px
- Retina対応: 2倍サイズで作成（400-600px × 80-120px）して自動縮小

**フォーマット:** WebP（推奨）、PNG、SVG
**背景:** 透過推奨
**用途:** ヘッダーのロゴ表示

---

### 2. ファビコン
**ファイル名:** `favicon.ico`、`favicon-32x32.png`、`favicon-192x192.png`
**必要なサイズ:**
- `favicon.ico`: 16x16, 32x32, 48x48 のマルチサイズICO
- `favicon-32x32.png`: 32x32px
- `favicon-192x192.png`: 192x192px（Android用）
- `favicon-512x512.png`: 512x512px（PWA用、任意）

**フォーマット:** ICO、PNG
**推奨ツール:** https://realfavicongenerator.net/

---

### 3. OGP画像（SNSシェア用）
**ファイル名:** `ogp.jpg` または `ogp.webp`
**推奨サイズ:** 1200px × 630px（Twitter/Facebook推奨）
**フォーマット:** JPEG（推奨）、WebP、PNG
**容量:** 300KB以下
**用途:** SNSでシェアされた時のサムネイル画像

---

## オプション画像

### 4. ヒーロー背景画像（任意）
**ファイル名:** `hero-bg.webp` または `hero-bg.jpg`
**推奨サイズ:** 1920px × 1080px 以上
**フォーマット:** WebP（推奨）、JPEG
**容量:** 300KB以下（最適化必須）
**用途:** トップページのヒーローセクション背景

---

### 5. 実績・ポートフォリオ画像（任意）
**ファイル名:** `portfolio-01.webp`、`portfolio-02.webp` など
**推奨サイズ:** 800px × 600px（4:3）または 1200px × 800px
**フォーマット:** WebP（推奨）、JPEG、PNG
**容量:** 各200KB以下
**用途:** 実績セクションのサムネイル画像

---

## フォーマット推奨

### WebPを推奨する理由
- JPEGより25-35%小さいファイルサイズ
- PNGより26%小さいファイルサイズ
- 透過対応
- 全モダンブラウザでサポート済み

### 変換ツール
- **Squoosh**: https://squoosh.app/ （オンライン、簡単）
- **cwebp**: コマンドラインツール
  ```bash
  # インストール（Mac）
  brew install webp

  # 変換例
  cwebp input.png -q 80 -o output.webp
  ```

---

## プレースホルダー画像の生成

### シンプルな単色プレースホルダー
ImageMagickを使用:
```bash
# ロゴプレースホルダー（400x80px、白背景）
convert -size 400x80 xc:#ffffff -gravity center -pointsize 30 -annotate +0+0 "やんちゃワークス" logo.png

# OGPプレースホルダー（1200x630px、紺色背景）
convert -size 1200x630 xc:#1a365d -gravity center -fill white -pointsize 60 -annotate +0+0 "やんちゃワークス" ogp.jpg

# ファビコンプレースホルダー（512x512px）
convert -size 512x512 xc:#1a365d -gravity center -fill white -pointsize 200 -annotate +0+0 "Y" favicon-512x512.png
```

### オンラインツール
- **Placeholder.com**: https://placeholder.com/
  - 例: https://via.placeholder.com/1200x630/1a365d/ffffff?text=yancya.works
- **DummyImage**: https://dummyimage.com/
  - 例: https://dummyimage.com/400x80/fff/000.png&text=Logo

---

## 現在のサイト配色
参考にできる色:
- プライマリー: `#1a365d` （紺）
- セカンダリー: `#2b6cb0` （青）
- アクセント: `#ed8936` （オレンジ）
- 背景: `#ffffff` （白）
- テキスト: `#2d3748` （濃いグレー）

---

## 画像最適化チェックリスト

- [ ] 適切なサイズにリサイズ（不要に大きくしない）
- [ ] WebP形式で保存（または JPEGで品質80-85%）
- [ ] 目標ファイルサイズ以下に圧縮
- [ ] ファビコンは複数サイズ用意
- [ ] OGP画像はテキストが読みやすいか確認
- [ ] Retina対応（ロゴは2倍サイズで作成）
