/**
 * FoodDice — Firebase Configuration EXAMPLE
 *
 * 複製這個檔案，重新命名為 firebase-config.js，
 * 然後填入你的 Firebase 專案真實設定值。
 *
 * 取得方式：
 *   Firebase Console → 你的專案 → 專案設定（齒輪圖示）
 *   → 你的應用程式 → Firebase SDK 程式碼片段 → 設定
 */

const FIREBASE_CONFIG = {
  apiKey:            "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain:        "your-project-id.firebaseapp.com",
  projectId:         "your-project-id",
  storageBucket:     "your-project-id.appspot.com",
  messagingSenderId: "123456789012",
  appId:             "1:123456789012:web:abcdefabcdefabcdef"
};

window.__firebaseConfigured = FIREBASE_CONFIG.apiKey !== "YOUR_API_KEY";
