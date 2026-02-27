/**
 * FoodDice leaderboard.js
 * Reads from Firebase Firestore (leaderboard collection).
 * Falls back to mock data when Firebase is not configured.
 */

// ── Mock data (used during development) ───────────────────────────────────────

const MOCK_DATA = {
  weekly: [
    { name: 'foodie_master', avatar: '🐼', reports: 152, score: 580 },
    { name: '美食偵探_Lin',  avatar: '🦊', reports: 92,  score: 230 },
    { name: '地圖糾察隊',    avatar: '🐸', reports: 74,  score: 180 },
    { name: 'MapWatcher88',  avatar: '🐱', reports: 61,  score: 145 },
    { name: '小明的冒險',    avatar: '🦁', reports: 48,  score: 112 },
    { name: '台北美食王',    avatar: '🐻', reports: 35,  score:  87 },
    { name: 'Taipei Foodie', avatar: '🦋', reports: 29,  score:  72 },
    { name: '報報達人',      avatar: '🐧', reports: 22,  score:  55 },
    { name: 'GoogleMapper',  avatar: '🐨', reports: 18,  score:  44 },
    { name: '地圖守護者',    avatar: '🦉', reports: 12,  score:  30 },
  ],
  monthly: [
    { name: '台北美食王',    avatar: '🐻', reports: 320, score: 1240 },
    { name: 'foodie_master', avatar: '🐼', reports: 280, score: 1050 },
    { name: '美食偵探_Lin',  avatar: '🦊', reports: 195, score:  780 },
    { name: 'MapWatcher88',  avatar: '🐱', reports: 160, score:  620 },
    { name: '地圖糾察隊',    avatar: '🐸', reports: 140, score:  540 },
    { name: '小明的冒險',    avatar: '🦁', reports: 110, score:  420 },
    { name: 'Taipei Foodie', avatar: '🦋', reports: 88,  score:  330 },
    { name: '報報達人',      avatar: '🐧', reports: 72,  score:  280 },
    { name: 'GoogleMapper',  avatar: '🐨', reports: 60,  score:  230 },
    { name: '地圖守護者',    avatar: '🦉', reports: 45,  score:  180 },
  ],
  allTime: [
    { name: 'foodie_master', avatar: '🐼', reports: 1852, score: 7210 },
    { name: '台北美食王',    avatar: '🐻', reports: 1540, score: 5980 },
    { name: '美食偵探_Lin',  avatar: '🦊', reports: 1120, score: 4340 },
    { name: '地圖糾察隊',    avatar: '🐸', reports: 890,  score: 3460 },
    { name: 'MapWatcher88',  avatar: '🐱', reports: 720,  score: 2800 },
    { name: '小明的冒險',    avatar: '🦁', reports: 560,  score: 2170 },
    { name: 'Taipei Foodie', avatar: '🦋', reports: 440,  score: 1700 },
    { name: '報報達人',      avatar: '🐧', reports: 380,  score: 1460 },
    { name: 'GoogleMapper',  avatar: '🐨', reports: 310,  score: 1200 },
    { name: '地圖守護者',    avatar: '🦉', reports: 250,  score:  970 },
  ]
};

// ── Tab state ──────────────────────────────────────────────────────────────────

let currentTab = 'weekly';
let cachedData = {};

// ── DOM refs ──────────────────────────────────────────────────────────────────

const podiumEl    = document.getElementById('lb-podium');
const tableEl     = document.getElementById('lb-table-body');
const emptyEl     = document.getElementById('lb-empty');
const tabBtns     = document.querySelectorAll('.tab-btn');

// ── Skeleton builders ─────────────────────────────────────────────────────────

function skeletonPodium() {
  return `
    <div class="podium-place place-2">
      <div class="podium-user-info">
        <div class="podium-avatar skeleton" style="width:48px;height:48px;border-radius:50%"></div>
        <div class="skeleton" style="width:80px;height:14px;margin:8px auto 4px"></div>
        <div class="skeleton" style="width:60px;height:18px;margin:0 auto"></div>
      </div>
      <div class="podium-block" style="background:#b0b7c3;height:72px;width:110px;border-radius:10px 10px 0 0"></div>
    </div>
    <div class="podium-place place-1">
      <div class="podium-user-info">
        <div class="podium-avatar skeleton" style="width:56px;height:56px;border-radius:50%"></div>
        <div class="skeleton" style="width:90px;height:14px;margin:8px auto 4px"></div>
        <div class="skeleton" style="width:70px;height:20px;margin:0 auto"></div>
      </div>
      <div class="podium-block" style="background:#e6a800;height:100px;width:110px;border-radius:10px 10px 0 0"></div>
    </div>
    <div class="podium-place place-3">
      <div class="podium-user-info">
        <div class="podium-avatar skeleton" style="width:44px;height:44px;border-radius:50%"></div>
        <div class="skeleton" style="width:75px;height:14px;margin:8px auto 4px"></div>
        <div class="skeleton" style="width:55px;height:16px;margin:0 auto"></div>
      </div>
      <div class="podium-block" style="background:#b07035;height:55px;width:110px;border-radius:10px 10px 0 0"></div>
    </div>`;
}

function skeletonRows(n = 7) {
  return Array.from({ length: n }, () => `
    <tr>
      <td><div class="skeleton" style="width:36px;height:14px"></div></td>
      <td><div class="skeleton" style="width:120px;height:14px"></div></td>
      <td><div class="skeleton" style="width:50px;height:14px"></div></td>
      <td><div class="skeleton" style="width:50px;height:14px"></div></td>
    </tr>`).join('');
}

// ── Renderers ─────────────────────────────────────────────────────────────────

const MEDALS = ['🥇', '🥈', '🥉'];
const PODIUM_HEIGHTS = [100, 72, 55];
const PODIUM_COLORS  = [
  'linear-gradient(135deg,#F9C200,#E6A800)',
  'linear-gradient(135deg,#B0B7C3,#909aa9)',
  'linear-gradient(135deg,#CF8C4B,#b07035)'
];

function renderPodium(top3) {
  const order = [top3[1], top3[0], top3[2]].filter(Boolean); // 2nd, 1st, 3rd visual order
  const dataOrder = [1, 0, 2]; // map visual to rank
  return order.map((user, vi) => {
    const rank = dataOrder[vi];
    return `
      <div class="podium-place place-${rank + 1}">
        <div class="podium-user-info">
          <div class="podium-avatar">${user.avatar}</div>
          <div class="podium-name">${escHtml(user.name)}</div>
          <div class="podium-score-label">${user.score} pts</div>
          <div class="podium-reports-label">${user.reports} 回報</div>
        </div>
        <div class="podium-block" style="height:${PODIUM_HEIGHTS[rank]}px;background:${PODIUM_COLORS[rank]}">
          <span class="podium-medal">${MEDALS[rank]}</span>
          <span class="podium-rank">${rank + 1}</span>
        </div>
      </div>`;
  }).join('');
}

function renderTableRows(users, startRank = 4) {
  return users.map((u, i) => `
    <tr>
      <td><strong>#${startRank + i}</strong></td>
      <td>${u.avatar} ${escHtml(u.name)}</td>
      <td>${u.reports}</td>
      <td><strong>${u.score}</strong></td>
    </tr>`).join('');
}

function escHtml(str) {
  return String(str).replace(/[&<>"']/g, c =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

// ── Data loading ──────────────────────────────────────────────────────────────

async function loadData(tab) {
  if (cachedData[tab]) return cachedData[tab];

  if (window.__firebaseConfigured && typeof firebase !== 'undefined') {
    try {
      const now = new Date();
      let query = firebase.firestore().collection('leaderboard');

      if (tab === 'weekly') {
        const weekAgo = new Date(now - 7 * 86400000);
        query = query.where('lastReport', '>=', firebase.firestore.Timestamp.fromDate(weekAgo));
      } else if (tab === 'monthly') {
        const monthAgo = new Date(now - 30 * 86400000);
        query = query.where('lastReport', '>=', firebase.firestore.Timestamp.fromDate(monthAgo));
      }

      const snap = await query.orderBy('score', 'desc').limit(10).get();
      const data = snap.docs.map(d => d.data());
      cachedData[tab] = data;
      return data;
    } catch (err) {
      console.warn('Firebase read failed, using mock data:', err);
    }
  }

  // Fallback to mock data
  cachedData[tab] = MOCK_DATA[tab];
  return MOCK_DATA[tab];
}

// ── Render tab ────────────────────────────────────────────────────────────────

async function renderTab(tab) {
  // Show skeletons immediately
  if (podiumEl) podiumEl.innerHTML = skeletonPodium();
  if (tableEl)  tableEl.innerHTML  = skeletonRows();
  if (emptyEl)  emptyEl.hidden = true;

  const data = await loadData(tab);

  if (!data || data.length === 0) {
    if (podiumEl) podiumEl.innerHTML = '';
    if (tableEl)  tableEl.innerHTML  = '';
    if (emptyEl)  emptyEl.hidden = false;
    return;
  }

  const top3 = data.slice(0, 3);
  const rest  = data.slice(3);

  if (podiumEl) podiumEl.innerHTML = renderPodium(top3);
  if (tableEl)  tableEl.innerHTML  = renderTableRows(rest, 4);
}

// ── Tab click handler ─────────────────────────────────────────────────────────

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tabBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentTab = btn.dataset.tab;
    renderTab(currentTab);
  });
});

// ── Init Firebase (if configured) ─────────────────────────────────────────────

if (window.__firebaseConfigured && typeof firebase !== 'undefined') {
  try {
    firebase.initializeApp(FIREBASE_CONFIG);
  } catch (e) {
    // already initialized
  }
}

// ── Start ─────────────────────────────────────────────────────────────────────

renderTab(currentTab);
