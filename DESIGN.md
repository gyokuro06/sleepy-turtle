# sleepy-turtle Design System

## Mood / コンセプト

> 森の中の作業机、夜更けに残したメモ、紙媒体のような質感

静かでエディトリアルなデザイン。視覚的なノイズを減らし、余白を大切にし、読みやすさを重視する。

---

## Colors

色は Figma Variables からエクスポートした [`tokens.json`](./figma/tokens.json) を一次ソースとする。
`DESIGN.md` には参照用の対応表だけを置き、色を変更するときは先に Figma Variables / `tokens.json` を更新する。

### Light

| Figma Token | CSS Variable | Value | 用途 |
|-------------|--------------|-------|------|
| `Color/Light/Background/Default` | `--background` | `#F2F5EA` | ページ背景 |
| `Color/Light/Surface/Default` | `--surface` | `#F5F7EF` | カード・記事本文の背景 |
| `Color/Light/Border/Default` | `--border` | `#83847E` | ボーダー・罫線 |
| `Color/Light/Text/Primary` | `--text-primary` | `#1C281E` | 本文テキスト |
| `Color/Light/Text/Secondary` | `--text-secondary` | `#4F6F52` | 補助テキスト・メタ情報 |
| `Color/Light/Text/Inverse` | `--text-inverse` | `#F2F5EA` | 濃色背景上のテキスト |
| `Color/Light/Button/Primary/Background` | `--button-primary-background` | `#4F6F52` | プライマリボタン背景 |
| `Color/Light/Button/Primary/BackgroundHover` | `--button-primary-background-hover` | `#768F78` | プライマリボタンのホバー背景 |
| `Color/Light/Button/Primary/Text` | `--button-primary-text` | `#F2F5EA` | プライマリボタンのテキスト |

### Dark

| Figma Token | CSS Variable | Value | 用途 |
|-------------|--------------|-------|------|
| `Color/Dark/Background/Default` | `--background` | `#575854` | ページ背景 |
| `Color/Dark/Surface/Default` | `--surface` | `#83847E` | カード・記事本文の背景 |
| `Color/Dark/Border/Default` | `--border` | `#FBFCF8` | ボーダー・罫線 |
| `Color/Dark/Text/Primary` | `--text-primary` | `#FDFDFC` | 本文テキスト |
| `Color/Dark/Text/Secondary` | `--text-secondary` | `#BCC4A2` | 補助テキスト・メタ情報 |
| `Color/Dark/Text/Inverse` | `--text-inverse` | `#1C281E` | 明色背景上のテキスト |
| `Color/Dark/Button/Primary/Background` | `--button-primary-background` | `#A3B4A5` | プライマリボタン背景 |
| `Color/Dark/Button/Primary/BackgroundHover` | `--button-primary-background-hover` | `#C7D1C8` | プライマリボタンのホバー背景 |
| `Color/Dark/Button/Primary/Text` | `--button-primary-text` | `#1C281E` | プライマリボタンのテキスト |

### 運用ルール

- CSS 変数名は実装側の読みやすさのための別名であり、値は `tokens.json` の Figma Token を参照する
- `--accent` のような独自色は `tokens.json` に存在しないため、必要になった時点で Figma Variables に追加してから使う
- ライト / ダークの切り替えは同じ CSS 変数名に対して、参照する `Color/Light/*` または `Color/Dark/*` を差し替える

---

## Typography

### フォントファミリー

| クラス | フォント | 用途 |
|--------|----------|------|
| `font-sans` | Zen Maru Gothic | 本文・UI要素 |
| `font-serif` | Zen Kurenaido | - |
| `font-handwriting` | Klee One | サイトタイトル、記事タイトル、引用のみ |
| `font-mono` | ui-monospace, SFMono-Regular... | コードブロック |

### 手書きフォントの使用ルール

`font-handwriting`（Klee One）は以下にのみ使用：
1. サイトタイトル（ヘッダー）
2. 記事タイトル（ヒーローセクション）
3. 引用ブロック

本文やセクション見出しには使用しない。

### 行間

- 本文: `leading-loose`（ゆったりとした行間で可読性を確保）

---

## Layout

### 記事本文

- 最大幅: `max-w-2xl`（680-700px程度）
- パディング: `px-4 sm:px-6`、`py-16`

### 余白の方針

- 視覚的なノイズを減らし、余白を多く取る
- セクション間: `mt-12`
- パラグラフ間: `mb-6`

---

## Components

### ノート罫線（notebook-lines）

横罫ノート風のデザイン。文章とセクション見出しにのみ適用し、コードブロックや引用には適用しない。

```css
.notebook-lines {
  background-image:
    repeating-linear-gradient(
      to bottom,
      transparent 0px,
      transparent 2rem,
      var(--border) 2rem,
      var(--border) calc(2rem + 1px)
    );
  background-position: 0 0.75rem;
}
```

### マージン線（notebook-margin）

ノートの左端に薄い縦線を表示。プライマリカラー（緑）を15%の透明度で使用。

```css
.notebook-margin::before {
  left: 2.5rem;
  width: 1px;
  background-color: rgba(79, 111, 82, 0.15);
}
```

### 適用コンポーネント

| コンポーネント | notebook-lines | notebook-margin |
|---------------|----------------|-----------------|
| ArticleParagraph | ✓ | - |
| SectionHeading | ✓ | - |
| QuoteBlock | - | - |
| CodeBlock | - | - |
| 記事コンテナ | - | ✓ |

---

## Article Components

### ArticleHero
- 記事タイトル: `font-handwriting text-3xl`
- メタ情報（日付・読了時間）: シンプルなテキスト、装飾なし
- タグ: `#設計` 形式、プレーンなリンク

### ArticleParagraph
- 罫線付きのパラグラフ
- `leading-loose`で可読性を確保
- `pl-14`で左マージン線の右側に配置

### SectionHeading
- `text-lg font-medium`
- 装飾なし（アイコンやボーダーは使用しない）
- 罫線は表示

### QuoteBlock
- 左ボーダー: `border-l-2 border-primary/30`
- フォント: `font-handwriting`
- 罫線は非表示

### CodeBlock
- 上下ボーダーのみ（角丸なし）
- 背景: `bg-muted/30`
- 罫線は非表示

### RelatedArticleCard
- ボーダーラインのみのミニマルな表現
- サムネイルや装飾は使用しない

---

## Design Principles

1. **静けさ** - 視覚的なノイズを最小限に
2. **紙のような質感** - Webカードではなく、紙媒体を意識
3. **余白** - 十分なスペースで読みやすさを確保
4. **控えめな装飾** - アクセントカラーは最小限に
5. **手書きの温かみ** - タイトルと引用のみに手書きフォント
