# Copy Title and URL (Firefox Extension)

開いているページの「タイトル」と「URL」を、改行区切りの2行形式でクリップボードにコピーするシンプルな Firefox 拡張機能（Manifest V3）です。

```text
ページタイトル
https://example.com/
```

## 特徴

- **シンプルな2行出力**: 余計な装飾（Markdownリンクやラベル）を付けず、タイトルとURLのみをコピーします。
- **最小限の権限**: `activeTab` と `clipboardWrite` のみを使用し、常時タブ監視やページ内容へのアクセス（ホスト権限）は行いません。
- **即時フィードバック**: 実行時にツールバーアイコンのバッジに一時的に `OK` または `ERR` を表示します。

## 使い方

1. ツールバーのアイコンをクリックするか、ショートカットキーを押します。
2. デフォルトのショートカットキー: `Alt + Shift + C`
   - Firefox の `about:addons` -> 歯車アイコン -> 「拡張機能のショートカットを管理」から変更可能です。

## ローカルでの読み込み手順（開発用）

1. Firefox で `about:debugging#/runtime/this-firefox` を開きます。
2. 「一時的な拡張機能を読み込む... (Load Temporary Add-on...)」をクリックします。
3. 本リポジトリ内の `manifest.json` を選択します。

## 開発・パッケージング

```bash
# 構文・権限チェック (web-ext lint)
npx web-ext lint

# AMO提出用 ZIP パッケージのビルド (web-ext-artifacts/ に生成)
npx web-ext build
```

## プライバシーポリシー

[Privacy Policy](PRIVACY.md)

## ライセンス

[MIT License](LICENSE)

