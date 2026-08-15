# Handoff: ITエンジニア職務経歴書サイト（Web + PDF出力）

## Overview
ITエンジニア個人の職務経歴書を Web サイトとして公開し、**画面と同じ見た目のまま PDF 出力**できるようにするための設計です。読み手は「事業会社の採用担当（非エンジニア）」「現場エンジニア／技術面接官」「転職エージェント」「フリーランス案件のクライアント」の4種を想定。書類としての真面目さを保ちつつ、遊び心はタイポグラフィと余白のリズムだけで出す方針です。

## About the Design Files
このバンドルに含まれる HTML ファイルは **HTML で作られたデザインリファレンス（プロトタイプ）** です。意図した見た目と挙動を示すためのもので、そのまま本番コードとして貼り付けるためのものではありません。

対象コードベースの既存環境（Next.js / Astro / SvelteKit / React など）とその確立されたパターン・ライブラリを使って、**このHTMLデザインを作り直してください**。まだ環境が無い場合は静的サイト（Astro、または Next.js の静的出力）が最適です — このサイトは基本的に1枚の静的ドキュメントで、クライアント側のロジックはほぼありません。

## Fidelity
**High-fidelity (hifi)** です。色・タイポグラフィ・余白・罫線はすべて最終値です。下記 Design Tokens の値をそのまま使い、ピクセル単位で再現してください。ただしコンテンツ（氏名「山田 太郎」、GitHub URL）はプレースホルダーで、実データに差し替える前提です。

## Files
| ファイル | 内容 |
|---|---|
| `resume-site-1a.dc.html` | **実装対象。** 実データ9件を含む本番相当の1画面（サイド目次＋A4幅本文） |
| `design-concept-and-options.dc.html` | デザインコンセプト・トークン一覧・レイアウト3案の比較ボード（参照用。1a が採用案） |
| `support.js` | 上記2ファイルをブラウザで開くためのランタイム。**実装には不要**（デザインのプレビュー用） |

いずれもブラウザで直接開けます（外部依存は Google Fonts のみ）。**実装の正は `resume-site-1a.dc.html`** です。

---

## Screens / Views

### 単一画面：職務経歴書ページ（`/` 想定）
**Purpose**: 訪問者が職務経歴を通読または拾い読みし、必要なら PDF をダウンロードする。

**Layout**（外側から）
1. `body`: 背景 `#E7E6E1`、`margin:0`。全要素に `box-sizing:border-box`（**重要** — これが無いと本文幅が A4 幅にならない）
2. ラッパー `div`: `display:flex; align-items:flex-start; justify-content:center; gap:40px; padding:40px 40px 96px; width:fit-content; min-width:100%; margin:0 auto`
   - `width:fit-content; min-width:100%` が必須。単純な `justify-content:center` だけだと、ビューポートが総幅より狭いときに左のサイド目次が画面外に出て**スクロールでも到達できなくなる**
3. サイド目次 `aside`: `position:sticky; top:40px; width:214px; flex:none; padding:28px 22px; background:#F2F1EC; border:1px solid #D8D9D5`、内部 `display:flex; flex-direction:column; gap:26px`
4. 本文 `main`: `width:794px; flex:none; background:#FBFAF7; border:1px solid #C9C8C2; padding:56px`、内部 `display:flex; flex-direction:column; gap:40px`
   - **794px = A4 幅 210mm @96dpi**。左右パディング 56px は画面と紙で共通

**セクション構成（main 内、上から）**
- `header`: 左に「CURRICULUM VITAE」（mono 11px / letter-spacing .16em / `#1F4B8F`）＋「職務経歴書」（34px/700）、右に氏名（15px/700）・GitHub（mono 11px）・更新日（mono 11px / `#7C828C`）。`justify-content:space-between; align-items:flex-end; border-bottom:2px solid #14161A; padding-bottom:16px`
- `01 要約` / `02 スキル` / `03 職務経歴詳細`: すべて `display:grid; grid-template-columns:132px 1fr; gap:16px`。**左132pxがラベル列、右が本文列**。この2カラム固定が拾い読みを成立させる骨格
  - ラベル列の中身：番号（mono 11px / letter-spacing .1em / `#1F4B8F`）＋見出し語（13px/700 / `#14161A`）、必要なら補助（mono 10px / `#7C828C`）
- `footer`: `border-top:1px solid #D8D9D5; padding-top:12px`、左「氏名 — 職務経歴書」、右に日付。いずれも mono 10px / `#7C828C`

**01 要約**：本文2段落。13px / line-height 1.95 / `#4A4F57` / `text-wrap:pretty`、段落間 gap 14px。

**02 スキル**（年数は横棒グラフではなく**数字でコンパクトに**表現。技術数が多くバーは冗長なため）
- 先頭に「経験領域」（mono 10px ラベル / `#7C828C`）＋ 12px の1段落
- 続いてカテゴリ表：`display:grid; grid-template-columns:88px 1fr; gap:8px 14px; align-items:baseline`。カテゴリラベルは mono 10px / letter-spacing .08em / `#7C828C`（LANG / FRAMEWORK / INFRA / DB / AI）
- 各カテゴリの中身は `display:flex; flex-wrap:wrap; gap:4px 14px; font-size:12px; line-height:1.7`。項目は「技術名 + 半角スペース + 年数（mono 10px）」
  - **主力**：技術名 `#14161A` / `font-weight:700`、年数 `#1F4B8F`
  - **それ以外**：技術名 `#4A4F57` / 400、年数 `#7C828C`
- 末尾に注記「数字は経験年数（年）／太字は主力」（mono 9px / `#7C828C`）

**03 職務経歴詳細**：`article` 9件を `gap:28px` で縦積み。各 `article` の構造は**全件同一**（同粒度が要件）：
1. `border-top`（1件目のみ `1px solid #14161A`、2件目以降 `1px solid #D8D9D5`）＋ `padding-top:14px`
2. タイトル行：`justify-content:space-between; align-items:baseline; gap:16px`。案件名 `h2` 15px/700 / `#14161A`、期間 mono 11px / `#1F4B8F` / `white-space:nowrap`（例 `2025.08 — 2025.12`、区切りは em dash）
3. メタ4セル：`display:grid; grid-template-columns:repeat(4,1fr); gap:1px; background:#D8D9D5; border:1px solid #D8D9D5`。各セルは `background:#FBFAF7; padding:8px 10px`、上段が mono 9px `#7C828C` のキー（TEAM / LANG / INFRA / DB / PROCESS）、下段が 11px `#14161A` の値。**1pxのgapに親の背景色が覗くことで罫線を作る**手法
4. 本文4ブロック：`display:grid; grid-template-columns:64px 1fr; gap:10px 14px; font-size:12px; line-height:1.9`。ラベルは **役割 / 課題 / 打手 / 成果** 固定（mono 10px / `#1F4B8F` / `padding-top:3px`）、本文 `#4A4F57`

**サイド目次（aside）の中身**
- 氏名（15px/700）＋肩書（11px / `#7C828C`）
- `CONTENTS`（mono 10px / letter-spacing .12em / `#7C828C`）
- 大項目リンク：`display:flex; gap:10px; align-items:baseline; padding:6px 8px; font-size:12px; color:#14161A`、番号は mono 10px `#7C828C`。**hover: `background:#E8EDF5`**
- 小項目（プロジェクト9件）：`padding-left:26px` のインデント、11px / `#4A4F57`。**hover: `color:#1F4B8F`**
- 末尾：GitHub リンク（mono 11px / `#1F4B8F`）＋「PDF をダウンロード」ボタン（`border:1px solid #1F4B8F; color:#1F4B8F; font-size:11px; padding:8px 10px`、**hover で `background:#1F4B8F; color:#FBFAF7` に反転**）
- ナビ内リンクは下線なし（`border-bottom:none`）

---

## Interactions & Behavior
ほぼ静的です。実装が必要な挙動は以下のみ。

1. **目次リンク** → 同一ページ内アンカー（`#sec-01`, `#sec-02`, `#sec-03`, `#p-01`〜`#p-09`）。`scroll-behavior:smooth` と各アンカーに `scroll-margin-top:24px` 程度
2. **現在位置ハイライト（任意・推奨）** → IntersectionObserver で表示中セクションの目次項目に `background:#1F4B8F; color:#FBFAF7` を当てる（hover とは別表現の反転で示す）
3. **「PDF をダウンロード」** → `window.print()` を呼ぶだけ（下記の印刷CSSで画面と同じ紙面が出る）。事前生成PDFを配る場合は静的ファイルへのリンクに差し替え
4. **アニメーション** → 意図的に持たせていません。hover の色変化のみ（transition は 120ms ease 程度まで）
5. **レスポンシブ** → 本文794px固定が前提。狭いビューポートでの推奨：`aside` を非表示、`main` を `width:100%; max-width:794px; padding:24px`。本文の `132px 1fr` は 96px 程度まで詰めるか1カラムに落として構わない

### 印刷 / PDF（このデザインの中核要件）
```css
@page { size: A4; margin: 14mm 0; }
@media print {
  body { background: #fff; }
  [data-print="hide"] { display: none !important; }                        /* サイド目次・PDFボタン */
  [data-print="page"] { padding: 0 !important; border: none !important; }  /* main の枠と外側padding */
  [data-print="keep"] { break-inside: avoid; page-break-inside: avoid; }   /* article・要約・スキル */
  [data-print="lead"] { break-after: avoid; page-break-after: avoid; }     /* セクション見出しラベル */
}
```
守るべき印刷ルール5点：
1. プロジェクト1件＝改ページ禁止の1ブロック
2. 見出し直後の改ページ禁止（見出しは本文と同伴）
3. サイド目次・ホバー・スクロール演出は印刷時に非表示
4. 各ページ下部に氏名とページ番号を反復（HTMLの `footer` は最終ページのみ。全ページ反復が必要なら印刷時に `position:fixed; bottom:0` のフッター、または印刷用テンプレートで対応）
5. 背景ベタは1箇所まで（インク量とグレースケール化を考慮）

## State Management
実質不要。
- `activeSection: string`（目次ハイライト用、IntersectionObserver 由来）
- `showRail: boolean`（サイド目次の表示切替。デザイン上のオプションで、実装では省略可）
- データ取得なし。経歴データは静的 JSON / MDX / CMS のいずれかで持つのが素直

```ts
type Project = {
  id: string;            // "p-01"
  title: string;
  period: string;        // "2025.08 — 2025.12"
  team: string;          // "4 人／業務委託"
  lang: string;
  infra: string;         // "Docker / Buildkite / GCP"（DBを含める場合はキーを "INFRA / DB" に）
  process: string;
  role: string; issue: string; action: string; result: string;  // 役割/課題/打手/成果
};
```

## Design Tokens

### Color
| token | hex | 用途 |
|---|---|---|
| ink | `#14161A` | 見出し・強調テキスト |
| ink-70 | `#4A4F57` | 本文 |
| ink-45 | `#7C828C` | 補助・キャプション |
| rule | `#D8D9D5` | 罫線 |
| rule-strong | `#C9C8C2` | 紙の外枠 |
| paper | `#FBFAF7` | 紙面背景（やや暖色の白） |
| paper-2 | `#F2F1EC` | サイド目次・面の下地 |
| desk | `#E7E6E1` | 画面の地色（紙の外側） |
| accent | `#1F4B8F` | リンク・番号・年数・期間 |
| accent-tint | `#E8EDF5` | hover 背景 |

アクセントは**濃紺1色のみ**。ステータス色や第2アクセントは持ちません（グレースケール印刷でも階層が保たれる）。

### Typography
- 和文・欧文本文: **Noto Sans JP**（400 / 500 / 700）
- データ的な文字列（年月・番号・年数・カテゴリラベル）: **JetBrains Mono**（400 / 500）
- スケール（px）: display 44 / h1 34 / h2 22 / h3 17 / body-lg 15 / body 13 / small 12 / label 11 / micro 10 / nano 9
- line-height: 本文 1.9〜1.95、見出し 1.2〜1.4
- letter-spacing: 見出し `.02em`、mono の全大文字ラベル `.08em〜.16em`
- 最小は 9px（mono の注記のみ）。**本文は12px未満にしない**

### Space
4px ベース: `4 / 8 / 12 / 16 / 24 / 32 / 48 / 64`。セクション間 40〜64、ブロック間 24〜32、行内 8。これ以外の余白は使いません。

### Grid / Geometry
- 本文カラム幅 **794px**（A4 210mm @96dpi）、内側パディング 56px
- ラベル2カラム `132px | 1fr`（gap 16px）。スキルのカテゴリ表は `88px | 1fr`、経歴の4ブロックは `64px | 1fr`
- サイド目次 214px、本文とのgap 40px
- **border-radius: 0（全要素）**、**box-shadow: なし**。角丸と影を一切使わないことがこのデザインの硬さの根拠
- 罫線は 1px（`#D8D9D5`）／強調 1px・2px（`#14161A`）／点線 `1px dotted #D8D9D5`

## Assets
画像・アイコン・ロゴは**一切使用していません**（顔写真も無し）。外部依存は Google Fonts の Noto Sans JP と JetBrains Mono のみ。本番ではセルフホストして `font-display:swap` を推奨。

## Notes
- 氏名「山田 太郎」と `github.com/yamada-taro` はプレースホルダー。実データに差し替えてください
- 経歴データ（9件）は `resume-site-1a.dc.html` 内にハードコード。実装時は上記スキーマで外部データ化を推奨
- 雇用形態（業務委託／正社員）はメタ4セルの TEAM 欄に併記（掲載可否は本人判断）
