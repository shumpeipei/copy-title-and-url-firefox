# AMO (addons.mozilla.org) 掲載情報（Listing Draft）

AMO のアドオン申請画面（Listing / Description）でコピー＆ペーストして使用できる掲載用テキストです。

---

## 基本情報

- **アドオン名 (Name)**: `Copy Title and URL`
- **対象カテゴリ (Categories)**:
  - 主要カテゴリ: `タブ (Tabs)`
  - サブカテゴリ: `その他 (Other)` または `外観・デザイン (Appearance)` / `フィード、ニュース、ブログ`
- **ライセンス (License)**: `MIT License`
- **サポートURL (Support Website / Issue Tracker)**:
  - `https://github.com/shumpeipei/copy-title-and-url-firefox/issues`
- **ホームページ (Homepage)**:
  - `https://github.com/shumpeipei/copy-title-and-url-firefox`

---

## ストア掲載テキスト

### 1. 要約 (Summary)
> ※ 最大 250 文字

**日本語:**
開いているページの「タイトル」と「URL」を、改行区切りの2行形式でクリップボードへ素早くコピーします。余計な権限を必要とせず、ショートカット（Alt+Shift+C）でも動作します。

**English (英語):**
Easily copy the active tab's title and URL to your clipboard in a clean 2-line format. Minimal permissions, zero tracking, and customizable keyboard shortcut (Alt+Shift+C).

---

### 2. 詳細説明 (Description)

**日本語:**
```markdown
開いているページの「タイトル」と「URL」を、使い勝手の良い2行形式で素早くコピーできる軽量な拡張機能です。

【コピーされる形式】
-----------------------------------
ページタイトル
https://example.com/
-----------------------------------

■ 特徴
・シンプルな2行出力: Markdownリンクや不要な修飾文字列を含めず、タイトルとURLのみをプレーンテキストでコピーします。
・キーボードショートカット対応: デフォルトで `Alt + Shift + C` に割り当てられており、ワンタッチで素早くコピーできます（ショートカットは about:addons から自由に変更可能）。
・視覚的なフィードバック: コピー成功時にはツールバーアイコン上に「OK」、失敗時には「ERR」バッジが一時的に表示されます。
・最小限の権限設計: `activeTab` と `clipboardWrite` のみを使用。ページ内容の読み取りや常時バックグラウンド監視、外部へのデータ送信は一切行いません。
```

**English (英語):**
```markdown
A fast, lightweight Firefox extension to copy the current page's title and URL to your clipboard in a clean 2-line format.

【Format】
-----------------------------------
Page Title
https://example.com/
-----------------------------------

■ Features
- Clean 2-Line Output: Copies pure plain text without unwanted prefixes, trailing whitespace, or markdown formatting.
- Keyboard Shortcut: Trigger instantly with `Alt + Shift + C` (customizable via about:addons shortcut settings).
- Visual Feedback: Shows a quick temporary badge ("OK" or "ERR") on the toolbar icon.
- Privacy & Minimal Permissions: Only requests `activeTab` and `clipboardWrite`. Absolutely no data collection, no background tracking, and no network requests.
```

---

### 3. プライバシーポリシー (Privacy Policy)

**日本語:**
```
本拡張機能は、ユーザーの個人情報、閲覧履歴、通信内容などのデータを一切収集、保存、送信、または第三者と共有しません。
すべての処理はローカルブラウザ内で完結します。
```

**English:**
```
Copy Title and URL does not collect, track, store, or transmit any user data or browsing activity. All processing runs entirely locally within your browser.
```
