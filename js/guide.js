/**
 * FoodDice guide.js — FAQ accordion rendering and interaction
 */

const FAQ_DATA = {
  'zh-TW': [
    {
      q: '怎麼把餐廳加入清單？',
      a: '在 Google Maps 點擊任何餐廳後，FoodDice 面板會自動出現在右側。點擊「＋ 加入清單」按鈕即可收藏。你可以在面板頂部切換到「我的清單」分頁來管理所有收藏的餐廳。'
    },
    {
      q: '怎麼隨機抽選今天要吃哪間？',
      a: '在 FoodDice 面板中點擊「🎲 就吃這個！」按鈕，或前往面板的「隨機抽選」分頁。你可以依距離、料理類型篩選，然後擲骰子讓 FoodDice 幫你做決定！'
    },
    {
      q: '怎麼回報異常店家？回報後多久有積分？',
      a: '在 Google Maps 點擊一間標示「營業中」但實際未開業的店家，然後在 FoodDice 面板點擊「⚠ 回報未開業」。回報成功後積分通常在幾秒內即時更新，你可以在面板底部看到目前積分，或來排行榜頁面查看排名。'
    },
    {
      q: '支援哪些語言？',
      a: 'FoodDice 目前支援繁體中文、簡體中文、英文、日文。官網和 Extension 都會根據你的瀏覽器語言自動切換，也可以在頁面底部手動選擇語言。'
    },
    {
      q: '我的資料存在哪裡？會收集個資嗎？',
      a: '你的餐廳清單儲存在瀏覽器的 Local Storage（僅限你自己的裝置，不上傳伺服器）。回報記錄和積分會上傳到 Firebase 伺服器，但只包含匿名的回報資料，不會收集任何可識別個人身份的資訊。'
    },
    {
      q: '為什麼 FoodDice 面板沒有出現？',
      a: '請確認 Extension 已正確安裝並啟用（瀏覽器右上角工具列中應該可以看到 FoodDice 圖示）。如果已啟用但面板仍未出現，請嘗試重新整理 Google Maps 頁面，或重新啟動瀏覽器。如果問題持續，歡迎至聯絡頁面回報。'
    }
  ],
  'zh-CN': [
    {
      q: '怎么把餐厅加入清单？',
      a: '在 Google Maps 点击任意餐厅后，FoodDice 面板会自动出现在右侧。点击「＋ 加入清单」按钮即可收藏。你可以在面板顶部切换到「我的清单」标签页来管理所有收藏的餐厅。'
    },
    {
      q: '怎么随机抽选今天吃哪家？',
      a: '在 FoodDice 面板中点击「🎲 就吃这个！」按钮，或前往面板的「随机抽选」标签页。你可以按距离、菜系类型筛选，然后掷骰子让 FoodDice 帮你做决定！'
    },
    {
      q: '怎么举报异常店家？举报后多久有积分？',
      a: '在 Google Maps 点击一家标注「营业中」但实际未开业的店家，然后在 FoodDice 面板点击「⚠ 举报未开业」。举报成功后积分通常在几秒内实时更新，你可以在面板底部查看当前积分，或来排行榜页面查看排名。'
    },
    {
      q: '支持哪些语言？',
      a: 'FoodDice 目前支持繁体中文、简体中文、英文、日文。网站和 Extension 都会根据你的浏览器语言自动切换，也可以在页面底部手动选择语言。'
    },
    {
      q: '我的数据存在哪里？会收集个人信息吗？',
      a: '你的餐厅清单存储在浏览器的 Local Storage（仅限你自己的设备，不上传服务器）。举报记录和积分会上传到 Firebase 服务器，但只包含匿名的举报数据，不会收集任何可识别个人身份的信息。'
    },
    {
      q: '为什么 FoodDice 面板没有出现？',
      a: '请确认扩展已正确安装并启用（浏览器右上角工具栏中应该可以看到 FoodDice 图标）。如果已启用但面板仍未出现，请尝试刷新 Google Maps 页面，或重启浏览器。如果问题持续，欢迎在联系页面反馈。'
    }
  ],
  'en': [
    {
      q: 'How do I add a restaurant to my list?',
      a: 'Click on any restaurant in Google Maps and the FoodDice panel will appear automatically on the right side. Click the "+ Add to List" button to save it. You can manage all saved restaurants by switching to the "My List" tab at the top of the panel.'
    },
    {
      q: 'How do I randomly pick a restaurant?',
      a: 'Click the "🎲 Let\'s eat this!" button in the FoodDice panel, or go to the "Random Pick" tab. You can filter by distance and cuisine type, then roll the dice to let FoodDice decide for you!'
    },
    {
      q: 'How do I report a closed restaurant? When will I get my points?',
      a: 'Click on a restaurant marked as "Open" on Google Maps that is actually closed, then click "⚠ Report as Closed" in the FoodDice panel. Your points are usually updated within seconds. Check the bottom of the panel for your current score, or visit the leaderboard page to see your rank.'
    },
    {
      q: 'Which languages are supported?',
      a: 'FoodDice currently supports Traditional Chinese, Simplified Chinese, English, and Japanese. Both the website and Extension automatically switch based on your browser language. You can also manually select a language at the bottom of any page.'
    },
    {
      q: 'Where is my data stored? Is my personal info collected?',
      a: 'Your restaurant list is stored in your browser\'s Local Storage (on your device only, never uploaded). Report records and scores are uploaded to Firebase, but only anonymous report data is stored — no personally identifiable information is ever collected.'
    },
    {
      q: 'Why isn\'t the FoodDice panel showing up?',
      a: 'Make sure the Extension is installed and enabled (you should see the FoodDice icon in your browser toolbar). If it\'s enabled but the panel still doesn\'t appear, try refreshing Google Maps or restarting your browser. If the issue persists, please reach out on our Contact page.'
    }
  ],
  'ja': [
    {
      q: 'レストランをリストに追加するにはどうすればいいですか？',
      a: 'Google Mapsで任意のレストランをクリックすると、FoodDiceパネルが右側に自動表示されます。「＋ リストに追加」ボタンをクリックして保存してください。パネル上部の「マイリスト」タブに切り替えると、保存済みのレストランを管理できます。'
    },
    {
      q: 'ランダムにレストランを選ぶにはどうすればいいですか？',
      a: 'FoodDiceパネルの「🎲 これを食べよう！」ボタンをクリックするか、「ランダム選択」タブに移動してください。距離や料理の種類でフィルタリングしてから、サイコロを振ってFoodDiceに決めてもらいましょう！'
    },
    {
      q: '閉まっているお店を報告するにはどうすればいいですか？ポイントはいつ付きますか？',
      a: 'Google Mapsで「営業中」と表示されているが実際には閉まっているお店をクリックし、FoodDiceパネルで「⚠ 閉店を報告」をクリックしてください。ポイントは通常数秒以内にリアルタイムで更新されます。パネル下部で現在のスコアを確認するか、ランキングページで順位を確認してください。'
    },
    {
      q: 'どの言語に対応していますか？',
      a: 'FoodDiceは現在、繁体字中国語、簡体字中国語、英語、日本語に対応しています。ウェブサイトと拡張機能の両方がブラウザの言語設定に基づいて自動的に切り替わります。どのページの下部でも手動で言語を選択することができます。'
    },
    {
      q: 'データはどこに保存されますか？個人情報は収集されますか？',
      a: 'レストランリストはブラウザのLocal Storageに保存されます（お使いのデバイスのみ、サーバーにはアップロードされません）。報告記録とスコアはFirebaseにアップロードされますが、匿名の報告データのみで、個人を特定できる情報は一切収集されません。'
    },
    {
      q: 'FoodDiceパネルが表示されないのはなぜですか？',
      a: '拡張機能が正しくインストールされ、有効になっていることを確認してください（ブラウザのツールバーにFoodDiceアイコンが表示されているはずです）。有効になっているのにパネルが表示されない場合は、Google Mapsを更新するか、ブラウザを再起動してみてください。問題が解決しない場合は、お問い合わせページからご連絡ください。'
    }
  ]
};

// ── Render FAQ Accordion ──────────────────────────────────────────────────────

function renderFAQ() {
  const lang = window.__fooddiceLang || 'en';
  const faqs = FAQ_DATA[lang] || FAQ_DATA['en'];
  const container = document.getElementById('faq-accordion');
  if (!container) return;

  container.innerHTML = faqs.map((item, i) => `
    <div class="accordion-item">
      <button class="accordion-trigger" aria-expanded="false" aria-controls="faq-panel-${i}" id="faq-btn-${i}">
        <span>${item.q}</span>
        <span class="accordion-icon" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </span>
      </button>
      <div class="accordion-panel" id="faq-panel-${i}" role="region" aria-labelledby="faq-btn-${i}" hidden>
        <div class="accordion-body">${item.a}</div>
      </div>
    </div>
  `).join('');

  // Accordion interaction
  container.querySelectorAll('.accordion-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      const panel = document.getElementById(btn.getAttribute('aria-controls'));

      // Close all
      container.querySelectorAll('.accordion-trigger').forEach(b => {
        b.setAttribute('aria-expanded', 'false');
        b.closest('.accordion-item').classList.remove('open');
      });
      container.querySelectorAll('.accordion-panel').forEach(p => { p.hidden = true; });

      // Open clicked (if it was closed)
      if (!expanded) {
        btn.setAttribute('aria-expanded', 'true');
        btn.closest('.accordion-item').classList.add('open');
        panel.hidden = false;
      }
    });
  });
}

// Re-render when language changes
document.addEventListener('click', e => {
  if (e.target.closest('.lang-btn')) {
    setTimeout(renderFAQ, 200); // after i18n applies
  }
});

renderFAQ();
