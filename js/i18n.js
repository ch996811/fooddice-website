/**
 * FoodDice i18n — Language detection, translations, and DOM update logic.
 * Supported: zh-TW, zh-CN, en, ja
 * Priority: localStorage → navigator.language → 'en'
 */

const TRANSLATIONS = {
  'zh-TW': {
    nav: {
      home: '首頁', leaderboard: '排行榜', guide: '使用教學',
      contact: '聯絡我們', install: '免費安裝'
    },
    hero: {
      badge: 'Chrome 擴充功能',
      title: '今天吃什麼？<br>讓 FoodDice 決定！',
      subtitle: '收藏喜愛餐廳、隨機抽選今日美食、回報異常店家換取積分',
      cta: '安裝 Chrome Extension',
      learn: '了解更多',
      stat: { users: '用戶', restaurants: '收藏餐廳', reports: '異常回報' }
    },
    features: {
      title: '三大核心功能',
      subtitle: '疊加在 Google Maps 上，無縫融入你的日常習慣',
      save:   { title: '收藏餐廳', desc: '在 Google Maps 上瀏覽時，一鍵將餐廳加入個人清單。支援分類標籤，輕鬆管理你的美食口袋名單。' },
      random: { title: '隨機抽選', desc: '選擇不了今天吃什麼？擲骰子讓 FoodDice 幫你決定！可以篩選距離、類型，告別選擇困難。' },
      report: { title: '回報異常', desc: '發現 Google Maps 標示營業但實際未開的店家？回報它！累積積分登上排行榜，守護所有美食愛好者。' }
    },
    howto: {
      title: '如何開始使用？',
      subtitle: '30 秒完成安裝，立刻解決選餐難題',
      step1: { title: '安裝 Extension', desc: '前往 Chrome Web Store，點擊安裝' },
      step2: { title: '開啟 Google Maps', desc: '在瀏覽器開啟 maps.google.com' },
      step3: { title: '點擊任何餐廳', desc: 'FoodDice 面板自動出現在側邊' },
      step4: { title: '開始享用！', desc: '收藏、抽選、回報，一切都搞定' }
    },
    screenshots: { title: '看看它長什麼樣子' },
    leaderboard: {
      title: '本週回報英雄榜',
      subtitle: '感謝這些用戶讓 Google Maps 資料更準確',
      rank: '名次', user: '用戶', reports: '回報數', score: '積分',
      viewAll: '查看完整排行榜 →'
    },
    cta: {
      title: '準備好了嗎？',
      subtitle: '免費安裝，立刻解決「今天吃什麼」的世紀難題',
      btn: '免費安裝 FoodDice'
    },
    footer: {
      tagline: '解決你的選擇困難，讓吃飯更有趣',
      pages: '頁面', links: '連結', language: '語言',
      chrome: 'Chrome Web Store', github: 'GitHub', privacy: '隱私權政策',
      copyright: '© 2025 FoodDice. 版權所有。'
    },
    leaderboardPage: {
      hero: { title: '排行榜', subtitle: '積分越高，代表你讓越多人避免踩雷！' },
      scoreInfo: {
        title: '如何獲得積分？',
        desc: '每次回報一間標示營業但實際未開的店家，即可獲得 2 積分。本週榜每週一凌晨重置；總榜永久累計，展現你對地圖準確度的長期貢獻。'
      },
      tab: { weekly: '本週', monthly: '本月', allTime: '總榜' },
      th: { rank: '名次', user: '用戶', reports: '回報數', score: '積分' },
      empty: '本期還沒有回報紀錄，快去第一個回報！'
    },
    guidePage: {
      hero: { title: '使用教學', subtitle: '從安裝到上手，5 分鐘搞定！' },
      install: {
        title: '安裝步驟',
        step1: { title: '前往 Chrome Web Store', desc: '搜尋「FoodDice」或點擊下方按鈕直達頁面' },
        step2: { title: '點擊「加到 Chrome」', desc: '確認權限後，Extension 立即安裝完成' },
        step3: { title: '開啟 Google Maps', desc: '前往 maps.google.com，FoodDice 已自動啟動' },
        step4: { title: '點擊任何餐廳', desc: 'FoodDice 面板自動彈出，開始使用吧！' }
      },
      faq: { title: '常見問題' },
      video: { title: '影片教學', desc: '影片教學即將推出，敬請期待！' },
      cta: { text: '準備好了嗎？', btn: '立即安裝 FoodDice' }
    },
    contactPage: {
      hero: { title: '聯絡我們', subtitle: '有問題、建議或合作邀約都歡迎！' },
      form: {
        name: '你的姓名', namePlaceholder: '請輸入姓名',
        email: 'Email 信箱', emailPlaceholder: 'your@email.com',
        type: '詢問類型',
        typeProblem: '問題回報', typeSuggestion: '功能建議',
        typeCollaboration: '合作洽詢', typeOther: '其他',
        message: '訊息內容', messagePlaceholder: '請描述你的問題或建議...',
        submit: '送出訊息'
      },
      success: { title: '已成功送出！', desc: '感謝你的訊息，我們通常會在 1–3 個工作天內回覆。' },
      error: '送出失敗，請稍後再試。'
    }
  },

  'zh-CN': {
    nav: {
      home: '首页', leaderboard: '排行榜', guide: '使用教程',
      contact: '联系我们', install: '免费安装'
    },
    hero: {
      badge: 'Chrome 扩展程序',
      title: '今天吃什么？<br>让 FoodDice 决定！',
      subtitle: '收藏喜爱餐厅、随机抽选今日美食、举报异常店铺换取积分',
      cta: '安装 Chrome Extension',
      learn: '了解更多',
      stat: { users: '用户', restaurants: '收藏餐厅', reports: '异常举报' }
    },
    features: {
      title: '三大核心功能',
      subtitle: '叠加在 Google Maps 上，无缝融入你的日常习惯',
      save:   { title: '收藏餐厅', desc: '在 Google Maps 浏览时，一键将餐厅加入个人清单。支持分类标签，轻松管理你的美食口袋名单。' },
      random: { title: '随机抽选', desc: '选不了今天吃什么？掷骰子让 FoodDice 帮你决定！可以筛选距离、类型，告别选择困难。' },
      report: { title: '举报异常', desc: '发现 Google Maps 标注营业但实际未开的店家？举报它！累积积分登上排行榜，守护所有美食爱好者。' }
    },
    howto: {
      title: '如何开始使用？',
      subtitle: '30 秒完成安装，立即解决选餐难题',
      step1: { title: '安装 Extension', desc: '前往 Chrome Web Store，点击安装' },
      step2: { title: '打开 Google Maps', desc: '在浏览器打开 maps.google.com' },
      step3: { title: '点击任意餐厅', desc: 'FoodDice 面板自动出现在侧边' },
      step4: { title: '开始享用！', desc: '收藏、抽选、举报，一切搞定' }
    },
    screenshots: { title: '看看它长什么样子' },
    leaderboard: {
      title: '本周举报英雄榜',
      subtitle: '感谢这些用户让 Google Maps 数据更准确',
      rank: '名次', user: '用户', reports: '举报数', score: '积分',
      viewAll: '查看完整排行榜 →'
    },
    cta: {
      title: '准备好了吗？',
      subtitle: '免费安装，立即解决「今天吃什么」的世纪难题',
      btn: '免费安装 FoodDice'
    },
    footer: {
      tagline: '解决你的选择困难，让吃饭更有趣',
      pages: '页面', links: '链接', language: '语言',
      chrome: 'Chrome Web Store', github: 'GitHub', privacy: '隐私政策',
      copyright: '© 2025 FoodDice. 版权所有。'
    },
    leaderboardPage: {
      hero: { title: '排行榜', subtitle: '积分越高，代表你让越多人避免踩坑！' },
      scoreInfo: {
        title: '如何获得积分？',
        desc: '每次举报一间标注营业但实际未开的店家，即可获得 2 积分。本周榜每周一凌晨重置；总榜永久累计，展现你对地图准确度的长期贡献。'
      },
      tab: { weekly: '本周', monthly: '本月', allTime: '总榜' },
      th: { rank: '名次', user: '用户', reports: '举报数', score: '积分' },
      empty: '本期还没有举报记录，快去第一个举报！'
    },
    guidePage: {
      hero: { title: '使用教程', subtitle: '从安装到上手，5 分钟搞定！' },
      install: {
        title: '安装步骤',
        step1: { title: '前往 Chrome 网上应用店', desc: '搜索「FoodDice」或点击下方按钮直达页面' },
        step2: { title: '点击「添加到 Chrome」', desc: '确认权限后，扩展立即安装完成' },
        step3: { title: '打开 Google Maps', desc: '前往 maps.google.com，FoodDice 已自动启动' },
        step4: { title: '点击任意餐厅', desc: 'FoodDice 面板自动弹出，开始使用吧！' }
      },
      faq: { title: '常见问题' },
      video: { title: '视频教程', desc: '视频教程即将推出，敬请期待！' },
      cta: { text: '准备好了吗？', btn: '立即安装 FoodDice' }
    },
    contactPage: {
      hero: { title: '联系我们', subtitle: '有问题、建议或合作邀约都欢迎！' },
      form: {
        name: '你的姓名', namePlaceholder: '请输入姓名',
        email: 'Email 邮箱', emailPlaceholder: 'your@email.com',
        type: '咨询类型',
        typeProblem: '问题反馈', typeSuggestion: '功能建议',
        typeCollaboration: '合作洽谈', typeOther: '其他',
        message: '消息内容', messagePlaceholder: '请描述你的问题或建议...',
        submit: '发送消息'
      },
      success: { title: '发送成功！', desc: '感谢你的消息，我们通常会在 1–3 个工作日内回复。' },
      error: '发送失败，请稍后再试。'
    }
  },

  'en': {
    nav: {
      home: 'Home', leaderboard: 'Leaderboard', guide: 'Guide',
      contact: 'Contact', install: 'Install Free'
    },
    hero: {
      badge: 'Chrome Extension',
      title: 'What to Eat Today?<br>Let FoodDice Decide!',
      subtitle: 'Save restaurants, randomly pick today\'s meal, and report inaccurate listings for points',
      cta: 'Install Chrome Extension',
      learn: 'Learn More',
      stat: { users: 'Users', restaurants: 'Saved Restaurants', reports: 'Reports Filed' }
    },
    features: {
      title: '3 Core Features',
      subtitle: 'Overlays on Google Maps, seamlessly fitting into your daily routine',
      save:   { title: 'Save Restaurants', desc: 'While browsing Google Maps, add any restaurant to your personal list with one click. Supports tags for easy organization.' },
      random: { title: 'Random Pick', desc: 'Can\'t decide what to eat? Roll the dice and let FoodDice choose! Filter by distance and cuisine type to end meal paralysis.' },
      report: { title: 'Report Issues', desc: 'Found a restaurant marked open on Google Maps but actually closed? Report it! Earn points and climb the leaderboard.' }
    },
    howto: {
      title: 'How to Get Started?',
      subtitle: 'Install in 30 seconds and solve your dining dilemma instantly',
      step1: { title: 'Install Extension', desc: 'Visit Chrome Web Store and click Install' },
      step2: { title: 'Open Google Maps', desc: 'Go to maps.google.com in your browser' },
      step3: { title: 'Click Any Restaurant', desc: 'FoodDice panel appears automatically on the side' },
      step4: { title: 'Start Enjoying!', desc: 'Save, pick randomly, report — all sorted' }
    },
    screenshots: { title: 'See It in Action' },
    leaderboard: {
      title: 'This Week\'s Report Heroes',
      subtitle: 'Thanks to these users for making Google Maps more accurate',
      rank: 'Rank', user: 'User', reports: 'Reports', score: 'Score',
      viewAll: 'View Full Leaderboard →'
    },
    cta: {
      title: 'Ready to Start?',
      subtitle: 'Free to install — solve the "what to eat" dilemma once and for all',
      btn: 'Install FoodDice for Free'
    },
    footer: {
      tagline: 'Solving your dining dilemma, making meals more fun',
      pages: 'Pages', links: 'Links', language: 'Language',
      chrome: 'Chrome Web Store', github: 'GitHub', privacy: 'Privacy Policy',
      copyright: '© 2025 FoodDice. All rights reserved.'
    },
    leaderboardPage: {
      hero: { title: 'Leaderboard', subtitle: 'The higher your score, the more people you\'ve helped avoid closed restaurants!' },
      scoreInfo: {
        title: 'How to Earn Points?',
        desc: 'Earn 2 points for every successful report of a restaurant marked as open but actually closed. The weekly board resets every Monday; the all-time board accumulates forever.'
      },
      tab: { weekly: 'This Week', monthly: 'This Month', allTime: 'All Time' },
      th: { rank: 'Rank', user: 'User', reports: 'Reports', score: 'Score' },
      empty: 'No reports yet this period — be the first to report!'
    },
    guidePage: {
      hero: { title: 'User Guide', subtitle: 'From install to expert in 5 minutes!' },
      install: {
        title: 'Installation Steps',
        step1: { title: 'Visit Chrome Web Store', desc: 'Search for "FoodDice" or click the install button below' },
        step2: { title: 'Click "Add to Chrome"', desc: 'Confirm permissions and the extension installs instantly' },
        step3: { title: 'Open Google Maps', desc: 'Go to maps.google.com — FoodDice is already active' },
        step4: { title: 'Click Any Restaurant', desc: 'The FoodDice panel pops up automatically. Start using it!' }
      },
      faq: { title: 'FAQ' },
      video: { title: 'Video Tutorial', desc: 'Video tutorial coming soon — stay tuned!' },
      cta: { text: 'Ready to Start?', btn: 'Install FoodDice Now' }
    },
    contactPage: {
      hero: { title: 'Contact Us', subtitle: 'Questions, suggestions, or partnership inquiries — we\'d love to hear from you!' },
      form: {
        name: 'Your Name', namePlaceholder: 'Enter your name',
        email: 'Email Address', emailPlaceholder: 'your@email.com',
        type: 'Inquiry Type',
        typeProblem: 'Bug Report', typeSuggestion: 'Feature Request',
        typeCollaboration: 'Partnership', typeOther: 'Other',
        message: 'Message', messagePlaceholder: 'Describe your issue or suggestion...',
        submit: 'Send Message'
      },
      success: { title: 'Message Sent!', desc: 'Thanks for reaching out. We usually reply within 1–3 business days.' },
      error: 'Failed to send. Please try again later.'
    }
  },

  'ja': {
    nav: {
      home: 'ホーム', leaderboard: 'ランキング', guide: '使い方',
      contact: 'お問い合わせ', install: '無料インストール'
    },
    hero: {
      badge: 'Chrome 拡張機能',
      title: '今日何食べる？<br>FoodDiceに決めてもらおう！',
      subtitle: 'レストランをお気に入り登録・ランダム抽選・誤情報を報告してポイント獲得',
      cta: 'Chrome Extensionをインストール',
      learn: '詳しく見る',
      stat: { users: 'ユーザー', restaurants: '保存済みレストラン', reports: '報告件数' }
    },
    features: {
      title: '3つの主要機能',
      subtitle: 'Google Mapsに重ねて表示、日常にシームレスに溶け込む',
      save:   { title: 'レストランを保存', desc: 'Google Mapsを閲覧中にワンクリックでお気に入りリストに追加。タグ付けで簡単に管理できます。' },
      random: { title: 'ランダム選択', desc: '今日の食事が決められない？サイコロを振ってFoodDiceに決めてもらおう！距離・種類でフィルタリングも可能。' },
      report: { title: '誤情報を報告', desc: 'Google Mapsで営業中と表示されているのに実際は閉まっているお店を発見したら報告しよう！ポイントを貯めてランキングへ。' }
    },
    howto: {
      title: '使い始め方は？',
      subtitle: '30秒でインストール完了、すぐに食事の悩みを解決',
      step1: { title: '拡張機能をインストール', desc: 'Chrome ウェブストアにアクセスしてインストール' },
      step2: { title: 'Google Mapsを開く', desc: 'ブラウザでmaps.google.comを開く' },
      step3: { title: 'レストランをクリック', desc: 'FoodDiceパネルがサイドに自動表示' },
      step4: { title: '楽しんでください！', desc: '保存・抽選・報告、全部できます' }
    },
    screenshots: { title: '使用イメージ' },
    leaderboard: {
      title: '今週の報告ヒーロー',
      subtitle: 'Google Mapsをより正確にしてくれるユーザーに感謝',
      rank: '順位', user: 'ユーザー', reports: '報告数', score: 'スコア',
      viewAll: '全ランキングを見る →'
    },
    cta: {
      title: '準備はできましたか？',
      subtitle: '無料でインストール、「今日何食べる」問題を一発解決',
      btn: 'FoodDiceを無料でインストール'
    },
    footer: {
      tagline: '食事の選択困難を解決、食べることをもっと楽しく',
      pages: 'ページ', links: 'リンク', language: '言語',
      chrome: 'Chrome ウェブストア', github: 'GitHub', privacy: 'プライバシーポリシー',
      copyright: '© 2025 FoodDice. All rights reserved.'
    },
    leaderboardPage: {
      hero: { title: 'ランキング', subtitle: 'スコアが高いほど、多くの人を助けたことになります！' },
      scoreInfo: {
        title: 'ポイントの獲得方法は？',
        desc: '「営業中」と表示されているが実際には閉まっているお店を報告するたびに 2ポイント獲得。週間ランキングは毎週月曜日にリセット、総合ランキングは永久集計です。'
      },
      tab: { weekly: '今週', monthly: '今月', allTime: '全期間' },
      th: { rank: '順位', user: 'ユーザー', reports: '報告数', score: 'スコア' },
      empty: 'まだ報告がありません。最初の報告者になりましょう！'
    },
    guidePage: {
      hero: { title: '使い方ガイド', subtitle: 'インストールから使いこなしまで、5分で完了！' },
      install: {
        title: 'インストール手順',
        step1: { title: 'Chrome ウェブストアにアクセス', desc: '「FoodDice」で検索するか、下のボタンから直接アクセス' },
        step2: { title: '「Chromeに追加」をクリック', desc: '権限を確認して、拡張機能がすぐにインストールされます' },
        step3: { title: 'Google Mapsを開く', desc: 'maps.google.comにアクセス — FoodDiceはすでに有効です' },
        step4: { title: '任意のレストランをクリック', desc: 'FoodDiceパネルが自動的に表示されます。使い始めましょう！' }
      },
      faq: { title: 'よくある質問' },
      video: { title: '動画チュートリアル', desc: '動画チュートリアルは近日公開予定です。お楽しみに！' },
      cta: { text: '準備はできましたか？', btn: 'FoodDiceをインストール' }
    },
    contactPage: {
      hero: { title: 'お問い合わせ', subtitle: 'ご質問、ご提案、またはビジネスのお問い合わせはお気軽に！' },
      form: {
        name: 'お名前', namePlaceholder: 'お名前を入力してください',
        email: 'メールアドレス', emailPlaceholder: 'your@email.com',
        type: 'お問い合わせ種別',
        typeProblem: 'バグ報告', typeSuggestion: '機能リクエスト',
        typeCollaboration: 'ビジネス提携', typeOther: 'その他',
        message: 'メッセージ', messagePlaceholder: 'ご質問やご提案をご記入ください...',
        submit: '送信する'
      },
      success: { title: '送信完了！', desc: 'お問い合わせありがとうございます。通常 1〜3 営業日以内にご返信いたします。' },
      error: '送信に失敗しました。後ほど再度お試しください。'
    }
  }
};

// ── Helpers ──────────────────────────────────────────────────────────────────

function getNestedValue(obj, dotKey) {
  return dotKey.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : undefined), obj);
}

function detectLanguage() {
  const saved = localStorage.getItem('fooddice-lang');
  if (saved && TRANSLATIONS[saved]) return saved;

  const nav = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
  if (nav === 'zh-tw' || nav === 'zh-hk') return 'zh-TW';
  if (nav.startsWith('zh')) return 'zh-CN';
  if (nav.startsWith('ja')) return 'ja';
  return 'en';
}

// ── Apply translations to DOM ─────────────────────────────────────────────────

function applyLanguage(lang) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS['en'];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = getNestedValue(t, el.dataset.i18n);
    if (val !== undefined) el.textContent = val;
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const val = getNestedValue(t, el.dataset.i18nHtml);
    if (val !== undefined) el.innerHTML = val;
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const val = getNestedValue(t, el.dataset.i18nPlaceholder);
    if (val !== undefined) el.placeholder = val;
  });

  // Highlight active lang button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  document.documentElement.lang = lang;
  window.__fooddiceLang = lang;
}

// ── Language switcher ─────────────────────────────────────────────────────────

function switchLanguage(lang) {
  if (!TRANSLATIONS[lang]) return;
  localStorage.setItem('fooddice-lang', lang);

  document.body.classList.add('lang-fade');
  setTimeout(() => {
    applyLanguage(lang);
    document.body.classList.remove('lang-fade');
  }, 150);
}

// ── Init ──────────────────────────────────────────────────────────────────────

(function init() {
  const lang = detectLanguage();
  applyLanguage(lang);

  // Wire lang buttons (works even before DOMContentLoaded since script is defer-like)
  document.addEventListener('click', e => {
    const btn = e.target.closest('.lang-btn');
    if (btn && btn.dataset.lang) switchLanguage(btn.dataset.lang);
  });
})();

// Expose for other scripts (e.g. guide.js)
window.__fooddiceTranslations = TRANSLATIONS;
