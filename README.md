# FoodDice 官方網站

FoodDice Chrome Extension 的官方網站，部署在 GitHub Pages 上。

## 本地預覽

直接用瀏覽器開啟 `index.html`，或使用 VS Code 的 **Live Server** 套件（推薦，支援自動重整）。

```bash
# 如果有安裝 live-server
npx live-server
```

---

## 部署到 GitHub Pages

1. Push 程式碼到 GitHub
2. 進入 Repository → **Settings** → **Pages**
3. Source 選 **Deploy from a branch**
4. Branch 選 `main`，Folder 選 `/ (root)`
5. 儲存後約 1-2 分鐘，網站即可訪問

---

## 填入 Firebase 設定

1. 到 [Firebase Console](https://console.firebase.google.com/) 建立（或使用已有的）專案
2. 複製 `js/firebase-config.example.js` → 重新命名為 `js/firebase-config.js`
3. 填入你的真實 Firebase 設定值
4. **注意：** `firebase-config.js` 已加入 `.gitignore`，不會被 commit 到 GitHub

Firestore 資料結構（排行榜）：

```
leaderboard/
  {userId}/
    name:       string   // 顯示名稱
    avatar:     string   // emoji 頭像
    reports:    number   // 總回報次數
    score:      number   // 總積分
    lastReport: timestamp
```

---

## 填入 Formspree 設定（聯絡表單）

1. 到 [formspree.io](https://formspree.io) 免費註冊
2. 建立一個新表單，取得你的 Form ID（格式：`f/xxxxxxxx`）
3. 開啟 `js/contact.js`，找到第 7 行：
   ```js
   const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORMSPREE_ID';
   ```
4. 將 `YOUR_FORMSPREE_ID` 替換為你的 Form ID

---

## 專案結構

```
fooddice-website/
├── index.html           首頁
├── leaderboard.html     排行榜
├── guide.html           使用教學
├── contact.html         聯絡我們
├── css/
│   ├── main.css         全域樣式
│   └── animations.css   動畫
├── js/
│   ├── i18n.js          多語系（zh-TW / zh-CN / en / ja）
│   ├── main.js          導覽列、漢堡選單、捲動動畫
│   ├── leaderboard.js   排行榜（Firebase 讀取 + 假資料備援）
│   ├── guide.js         FAQ 手風琴
│   ├── contact.js       Formspree 表單送出
│   ├── firebase-config.js         ← 你需要建立這個（已 gitignore）
│   └── firebase-config.example.js ← 格式範例
└── assets/
    ├── logo.svg
    └── screenshots/
```

---

## 多語系支援

網站支援 **繁體中文、簡體中文、英文、日文**，自動根據瀏覽器語言偵測。
使用者也可以在頁面底部手動切換語言，選擇結果存入 `localStorage`。
