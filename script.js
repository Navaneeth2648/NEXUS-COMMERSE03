/* =========================================================
   NEXUS E-COMMERCE — script1.js  (Upgraded)
   Push Notifications | Real Product Images | Working Links
   ========================================================= */

// ===== PRODUCT DATA WITH REAL UNSPLASH IMAGES =====
const PRODUCTS = [
  { id:1,  title:"Nexus Phone 15 Ultra",       price:1099, oldPrice:1399, discount:21, rating:4.9, reviews:2841, category:"electronics", img:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop&auto=format", badge:"NEW",     trending:true,  deal:false, desc:"The most powerful Nexus phone ever. 200MP camera, 5nm chip, 6000mAh battery. Titanium frame." },
  { id:2,  title:"AirWave Pro Headphones",      price:349,  oldPrice:499,  discount:30, rating:4.8, reviews:1523, category:"electronics", img:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop&auto=format", badge:"HOT",     trending:true,  deal:true,  desc:"40-hour ANC, spatial audio, titanium headband. The only headphones you'll ever need." },
  { id:3,  title:"Nexus Watch X Pro",           price:599,  oldPrice:799,  discount:25, rating:4.7, reviews:987,  category:"accessories", img:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&auto=format", badge:"SALE",    trending:false, deal:true,  desc:"Blood oxygen, ECG, GPS. 18-day battery. Sapphire crystal display with always-on AMOLED." },
  { id:4,  title:"AI Gaming Chair Omega",       price:899,  oldPrice:1199, discount:25, rating:4.6, reviews:654,  category:"gaming",      img:"https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=400&h=400&fit=crop&auto=format", badge:"DEAL",    trending:true,  deal:true,  desc:"Adaptive lumbar AI, 4D armrests, premium PU leather. Designed for 16-hour gaming sessions." },
  { id:5,  title:"HoloDesk 4K Display",         price:1599, oldPrice:1999, discount:20, rating:4.9, reviews:432,  category:"electronics", img:"https://images.unsplash.com/photo-1527443224154-c4a573d31dfd?w=400&h=400&fit=crop&auto=format", badge:"PREMIUM", trending:true,  deal:false, desc:"32\" 4K OLED, 1ms response, 144Hz. VESA HDR 1000. Quantum dot color accuracy." },
  { id:6,  title:"Quantum Keyboard QK1",        price:249,  oldPrice:329,  discount:24, rating:4.8, reviews:2100, category:"gaming",      img:"https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop&auto=format", badge:"HOT",     trending:true,  deal:false, desc:"Hall-effect switches, per-key RGB, aluminum CNC frame. Zero latency wired/wireless." },
  { id:7,  title:"NexHome Smart Hub",           price:299,  oldPrice:399,  discount:25, rating:4.5, reviews:876,  category:"smart",       img:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&auto=format", badge:"SALE",    trending:false, deal:true,  desc:"Control 256 devices, built-in AI assistant, Matter & Thread, works with everything." },
  { id:8,  title:"AI Vision Glasses Gen 2",     price:799,  oldPrice:999,  discount:20, rating:4.4, reviews:312,  category:"ai",          img:"https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=400&h=400&fit=crop&auto=format", badge:"NEW",     trending:true,  deal:false, desc:"Real-time AR overlays, GPT-5 powered, 8-hour battery. The future on your face." },
  { id:9,  title:"Nexus Laptop Pro 16",         price:2499, oldPrice:2999, discount:17, rating:4.9, reviews:1876, category:"electronics", img:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop&auto=format", badge:"PREMIUM", trending:true,  deal:false, desc:"M4 Ultra chip, 32GB RAM, 2TB SSD. 22-hour battery. The thinnest 16-inch laptop ever." },
  { id:10, title:"Pulse Fitness Band Ultra",    price:199,  oldPrice:279,  discount:29, rating:4.6, reviews:3421, category:"accessories", img:"https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=400&fit=crop&auto=format", badge:"HOT",     trending:false, deal:true,  desc:"Continuous glucose monitor, sleep coach, stress score. 14-day battery, IP68 waterproof." },
  { id:11, title:"HoloVR Headset Z1",           price:699,  oldPrice:899,  discount:22, rating:4.7, reviews:741,  category:"gaming",      img:"https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=400&h=400&fit=crop&auto=format", badge:"NEW",     trending:true,  deal:false, desc:"4K per eye, 120Hz, eye tracking, hand tracking. 3 hours immersion on a single charge." },
  { id:12, title:"SoundPod Speaker 360",        price:449,  oldPrice:599,  discount:25, rating:4.8, reviews:1234, category:"electronics", img:"https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop&auto=format", badge:"DEAL",    trending:false, deal:true,  desc:"360° spatial audio, 24-hour playtime, IP67. Pair 100 units for multi-room audio." },
  { id:13, title:"Nexus Drone X7",              price:1199, oldPrice:1499, discount:20, rating:4.5, reviews:543,  category:"ai",          img:"https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&h=400&fit=crop&auto=format", badge:"NEW",     trending:true,  deal:false, desc:"8K camera, 45-min flight, obstacle avoidance AI, follow-me mode. FAA-ready RTF." },
  { id:14, title:"Cyber Fashion Jacket",        price:349,  oldPrice:499,  discount:30, rating:4.6, reviews:289,  category:"fashion",     img:"https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop&auto=format", badge:"SALE",    trending:false, deal:true,  desc:"Graphene-woven, temperature-regulating, wireless charging pocket, RGB edge lighting." },
  { id:15, title:"AI Desk Lamp Lumina",         price:149,  oldPrice:199,  discount:25, rating:4.7, reviews:1876, category:"smart",       img:"https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop&auto=format", badge:"HOT",     trending:false, deal:false, desc:"Circadian rhythm sync, adaptive brightness AI, wireless charging base, UV-free." },
  { id:16, title:"Nexus Earbuds Pro 4",         price:279,  oldPrice:369,  discount:24, rating:4.9, reviews:4521, category:"electronics", img:"https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop&auto=format", badge:"BEST",    trending:true,  deal:false, desc:"6-mic ANC, 42-hour total, lossless audio, in-ear heart rate. Truly wireless." }
];

// ===== STATE =====
let cart = JSON.parse(localStorage.getItem('nexus_cart') || '[]');
let wishlist = JSON.parse(localStorage.getItem('nexus_wishlist') || '[]');
let recentlyViewed = JSON.parse(localStorage.getItem('nexus_recent') || '[]');
let searchHistory = JSON.parse(localStorage.getItem('nexus_search_history') || '[]');
let currentUser = JSON.parse(localStorage.getItem('nexus_user') || 'null');

// ===== NOTIFICATION CENTRE STATE =====
let notifications = JSON.parse(localStorage.getItem('nexus_notifications') || '[]');
let unreadCount = notifications.filter(n => !n.read).length;

// ===== PUSH NOTIFICATION SYSTEM =====
function showPushNotif(type, title, msg, icon) {
  const container = document.getElementById('pushNotifContainer');
  const notif = document.createElement('div');
  const id = Date.now();
  notif.className = `push-notif type-${type}`;
  notif.id = `pn-${id}`;
  notif.innerHTML = `
    <div class="push-notif-icon">${icon}</div>
    <div class="push-notif-body">
      <div class="push-notif-title">${title}</div>
      <div class="push-notif-msg">${msg}</div>
      <div class="push-notif-time">Just now</div>
    </div>
    <button class="push-notif-close" onclick="dismissPushNotif('pn-${id}')">✕</button>
    <div class="push-notif-progress"><div class="push-notif-progress-bar"></div></div>
  `;
  container.appendChild(notif);

  // Add to notification centre
  addToNotifCentre(type, title, msg, icon);

  // Auto dismiss after 5s
  setTimeout(() => dismissPushNotif(`pn-${id}`), 5200);
}

function dismissPushNotif(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.add('fade-out');
  setTimeout(() => el.remove(), 350);
}

// ===== NOTIFICATION CENTRE =====
function addToNotifCentre(type, title, msg, icon) {
  const notif = {
    id: Date.now(),
    type, title, msg, icon,
    time: new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'}),
    read: false
  };
  notifications.unshift(notif);
  if (notifications.length > 30) notifications = notifications.slice(0, 30);
  localStorage.setItem('nexus_notifications', JSON.stringify(notifications));
  unreadCount++;
  updateNotifBadge();
  renderNotifList();
}

function updateNotifBadge() {
  const badge = document.getElementById('notifCount');
  if (!badge) return;
  badge.textContent = unreadCount > 99 ? '99+' : unreadCount;
  badge.style.display = unreadCount > 0 ? 'flex' : 'none';
}

function renderNotifList() {
  const list = document.getElementById('notifList');
  if (!list) return;
  if (notifications.length === 0) {
    list.innerHTML = '<div class="notif-empty">🔔 No notifications yet</div>';
    return;
  }
  list.innerHTML = notifications.map(n => `
    <div class="notif-item ${n.read ? 'read' : ''}" onclick="markNotifRead(${n.id})">
      <div class="notif-item-icon">${n.icon}</div>
      <div class="notif-item-body">
        <div class="notif-item-title">${n.title}</div>
        <div class="notif-item-msg">${n.msg}</div>
        <div class="notif-item-time">${n.time}</div>
      </div>
      ${!n.read ? '<div class="notif-item-dot"></div>' : ''}
    </div>
  `).join('');
}

function markNotifRead(id) {
  const n = notifications.find(x => x.id === id);
  if (n && !n.read) {
    n.read = true;
    unreadCount = Math.max(0, unreadCount - 1);
    updateNotifBadge();
    renderNotifList();
    localStorage.setItem('nexus_notifications', JSON.stringify(notifications));
  }
}

function clearAllNotifications(e) {
  if (e) e.stopPropagation();
  notifications = [];
  unreadCount = 0;
  localStorage.removeItem('nexus_notifications');
  updateNotifBadge();
  renderNotifList();
  showToast('🗑️ All notifications cleared', 'info');
}

// Bell click → mark all read
document.getElementById('notifBell').addEventListener('click', (e) => {
  e.stopPropagation();
  notifications.forEach(n => n.read = true);
  unreadCount = 0;
  updateNotifBadge();
  renderNotifList();
  localStorage.setItem('nexus_notifications', JSON.stringify(notifications));
});

// Close notif dropdown on outside click
document.addEventListener('click', (e) => {
  const bell = document.getElementById('notifBell');
  if (bell && !bell.contains(e.target)) {
    const dd = document.getElementById('notifDropdown');
    if (dd) dd.style.display = '';
  }
});

// ===== LOADING SCREEN =====
window.addEventListener('load', () => {
  const lp = document.getElementById('loaderParticles');
  for (let i = 0; i < 20; i++) {
    const p = document.createElement('div');
    p.style.cssText = `
      position:absolute; border-radius:50%;
      width:${Math.random()*6+2}px; height:${Math.random()*6+2}px;
      background:${['#a855f7','#ec4899','#3b82f6'][Math.floor(Math.random()*3)]};
      left:${Math.random()*100}%; top:${Math.random()*100}%;
      opacity:${Math.random()*0.5+0.2};
      animation: float ${Math.random()*4+3}s ease-in-out ${Math.random()*2}s infinite;
    `;
    lp.appendChild(p);
  }
  setTimeout(() => {
    document.getElementById('loader').classList.add('fade-out');
    setTimeout(() => {
      document.getElementById('loader').style.display = 'none';
      revealOnScroll();
      // Welcome push notification
      setTimeout(() => {
        showPushNotif('info','Welcome to NEXUS 🚀','Explore 12,000+ premium products curated for you.','🌟');
      }, 800);
    }, 600);
  }, 2800);
});

// ===== PARTICLE CANVAS =====
(function initParticles() {
  const canvas = document.getElementById('particleCanvas');
  const ctx = canvas.getContext('2d');
  let w = canvas.width = window.innerWidth;
  let h = canvas.height = window.innerHeight;
  const particles = [];
  const colors = ['#a855f7','#3b82f6','#ec4899','#06b6d4'];
  for (let i = 0; i < 80; i++) {
    particles.push({
      x: Math.random()*w, y: Math.random()*h,
      vx: (Math.random()-0.5)*0.4, vy: (Math.random()-0.5)*0.4,
      r: Math.random()*2+0.5,
      color: colors[Math.floor(Math.random()*colors.length)],
      alpha: Math.random()*0.4+0.1
    });
  }
  function drawParticles() {
    ctx.clearRect(0, 0, w, h);
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
      if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
      ctx.fillStyle = p.color; ctx.globalAlpha = p.alpha; ctx.fill();
    });
    ctx.globalAlpha = 1;
    requestAnimationFrame(drawParticles);
  }
  drawParticles();
  window.addEventListener('resize', () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; });
})();

// ===== CURSOR GLOW =====
const cursorGlow = document.getElementById('cursorGlow');
const cursorDot  = document.getElementById('cursorDot');
document.addEventListener('mousemove', e => {
  cursorGlow.style.left = e.clientX + 'px';
  cursorGlow.style.top  = e.clientY + 'px';
  cursorDot.style.left  = e.clientX + 'px';
  cursorDot.style.top   = e.clientY + 'px';
});

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
  document.getElementById('backToTop').classList.toggle('show', window.scrollY > 400);
  revealOnScroll();
  updateActiveNavLink();
});
document.getElementById('backToTop').addEventListener('click', () => { window.scrollTo({ top: 0, behavior: 'smooth' }); });

function toggleNav() {
  document.getElementById('mobileMenu').classList.toggle('open');
  document.getElementById('hamburger').classList.toggle('active');
}

function updateActiveNavLink() {
  const sections = ['hero','categories','deals','products','contact'];
  const links = document.querySelectorAll('.nav-link');
  let current = '';
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el && el.getBoundingClientRect().top < 120) current = id;
  });
  links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#'+current));
}

// ===== THEME TOGGLE =====
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  themeToggle.textContent = document.body.classList.contains('light-mode') ? '🌞' : '🌙';
  localStorage.setItem('nexus_theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
});
if (localStorage.getItem('nexus_theme') === 'light') {
  document.body.classList.add('light-mode');
  themeToggle.textContent = '🌞';
}

// ===== GREETING =====
function setGreeting() {
  const h = new Date().getHours();
  const g = h < 12 ? 'Good Morning' : h < 17 ? 'Good Afternoon' : 'Good Evening';
  const greetEl = document.getElementById('heroGreeting');
  if (greetEl) greetEl.textContent = currentUser ? `${g}, ${currentUser.name} 👋` : `${g} 👋`;
}
setGreeting();

// ===== TYPING ANIMATION =====
const typeWords = ['SHOPPING', 'LIVING', 'TOMORROW', 'EXPERIENCE', 'LUXURY'];
let typeIndex = 0, charIndex = 0, typing = true;
const typeEl = document.getElementById('typeText');
function typeAnimation() {
  if (!typeEl) return;
  const word = typeWords[typeIndex];
  if (typing) {
    typeEl.textContent = word.slice(0, ++charIndex);
    if (charIndex === word.length) { typing = false; setTimeout(typeAnimation, 1800); return; }
  } else {
    typeEl.textContent = word.slice(0, --charIndex);
    if (charIndex === 0) { typing = true; typeIndex = (typeIndex + 1) % typeWords.length; }
  }
  setTimeout(typeAnimation, typing ? 120 : 60);
}
typeAnimation();

// ===== COUNTDOWN TIMER =====
function startCountdown() {
  const end = new Date();
  end.setHours(end.getHours() + 5, end.getMinutes() + 34, end.getSeconds() + 22);
  function update() {
    const diff = end - new Date();
    if (diff <= 0) return;
    const h = String(Math.floor(diff/3600000)).padStart(2,'0');
    const m = String(Math.floor((diff%3600000)/60000)).padStart(2,'0');
    const s = String(Math.floor((diff%60000)/1000)).padStart(2,'0');
    document.getElementById('cdHours').textContent = h;
    document.getElementById('cdMins').textContent  = m;
    document.getElementById('cdSecs').textContent  = s;
  }
  update(); setInterval(update, 1000);
}
startCountdown();

// ===== HERO STATS COUNTER =====
function animateCounter(el, target, decimals=0) {
  const duration = 2000;
  const start = performance.now();
  function step(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 4);
    const value = eased * target;
    el.textContent = decimals > 0 ? value.toFixed(decimals) : Math.floor(value).toLocaleString();
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

// ===== SCROLL REVEAL =====
function revealOnScroll() {
  document.querySelectorAll('.reveal').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) el.classList.add('visible');
  });
  document.querySelectorAll('[data-target]').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80 && !el.dataset.counted) {
      el.dataset.counted = '1';
      const t = parseFloat(el.dataset.target);
      animateCounter(el, t, el.dataset.target.includes('.') ? 1 : 0);
    }
  });
}
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.section-header, .cat-card, .stat-card, .review-card, .faq-item').forEach(el => {
    el.classList.add('reveal');
  });
});

// ===== RENDER PRODUCTS =====
function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(5 - full - (half?1:0));
}

function createProductCard(product) {
  const inWishlist = wishlist.some(w => w.id === product.id);
  const card = document.createElement('div');
  card.className = 'product-card';
  card.setAttribute('data-category', product.category);
  card.setAttribute('data-id', product.id);
  card.innerHTML = `
    <div class="product-img-wrap">
      <img src="${product.img}"
           alt="${product.title}"
           class="product-img"
           loading="lazy"
           onerror="this.parentElement.innerHTML='<div class=\\'img-error-fallback\\'><span>📦</span><small>${product.title.split(' ')[0]}</small></div>'"
      />
      ${product.badge ? `<div class="product-badge ${product.deal ? 'deal-badge' : ''}">${product.badge}</div>` : ''}
      <button class="wishlist-btn ${inWishlist ? 'active' : ''}" onclick="toggleWishlist(${product.id}, event)" title="Wishlist">
        ${inWishlist ? '♥' : '♡'}
      </button>
      <button class="quick-view-btn" onclick="openQuickView(${product.id}, event)">Quick View →</button>
    </div>
    <div class="product-info">
      <div class="product-title">${product.title}</div>
      <div class="product-rating">
        <span class="stars">${renderStars(product.rating)}</span>
        <span class="rating-count">(${product.reviews.toLocaleString()})</span>
      </div>
      <div class="product-price-row">
        <span class="product-price">$${product.price.toLocaleString()}</span>
        <span class="product-old-price">$${product.oldPrice.toLocaleString()}</span>
        <span class="product-discount">-${product.discount}%</span>
      </div>
      <button class="add-to-cart-btn" onclick="addToCart(${product.id})">+ Add to Cart</button>
    </div>
  `;
  return card;
}

function renderProducts(products, container) {
  const el = document.getElementById(container);
  if (!el) return;
  el.innerHTML = '';
  products.forEach((p, i) => {
    const card = createProductCard(p);
    card.style.animationDelay = `${i * 0.05}s`;
    card.classList.add('reveal');
    el.appendChild(card);
  });
  revealOnScroll();
}

renderProducts(PRODUCTS, 'productsGrid');
renderProducts(PRODUCTS.filter(p => p.deal), 'dealsGrid');
renderProducts(PRODUCTS.filter(p => p.trending).slice(0, 6), 'recommendationsGrid');

function renderTrending() {
  const slider = document.getElementById('trendingSlider');
  if (!slider) return;
  PRODUCTS.filter(p => p.trending).forEach(p => slider.appendChild(createProductCard(p)));
}
renderTrending();

function slideLeft()  { document.getElementById('trendingSlider').scrollBy({ left: -280, behavior: 'smooth' }); }
function slideRight() { document.getElementById('trendingSlider').scrollBy({ left: 280, behavior: 'smooth' }); }

function filterProducts(category, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const filtered = category === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.category === category);
  renderProducts(filtered, 'productsGrid');
}

function filterByCategory(category) {
  document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
  const btn = [...document.querySelectorAll('.filter-btn')].find(b => b.onclick?.toString().includes(`'${category}'`));
  if (btn) filterProducts(category, btn);
}

// ===== CART SYSTEM =====
function saveCart() { localStorage.setItem('nexus_cart', JSON.stringify(cart)); }

function addToCart(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;
  const existing = cart.find(c => c.id === id);
  if (existing) { existing.qty++; }
  else { cart.push({ ...product, qty: 1 }); }
  saveCart();
  updateCartUI();
  renderCartItems();
  addToRecentlyViewed(id);
  // Push notification for add to cart
  showPushNotif(
    'cart',
    'Added to Cart 🛒',
    `${product.title} — $${product.price.toLocaleString()}`,
    '🛒'
  );
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  saveCart();
  updateCartUI();
  renderCartItems();
  showToast('🗑️ Item removed from cart', 'info');
}

function updateQty(id, delta) {
  const item = cart.find(c => c.id === id);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  if (item.qty === 0) { removeFromCart(id); return; }
  saveCart();
  updateCartUI();
  renderCartItems();
}

function clearCart() {
  cart = [];
  saveCart();
  updateCartUI();
  renderCartItems();
  showToast('🛒 Cart cleared', 'info');
}

function updateCartUI() {
  const total = cart.reduce((s, c) => s + c.qty, 0);
  document.getElementById('cartCount').textContent = total;
}

function renderCartItems() {
  const el = document.getElementById('cartItems');
  const footer = document.getElementById('cartFooter');
  if (!el) return;
  if (cart.length === 0) {
    el.innerHTML = `<div class="empty-state"><div class="empty-icon">🛒</div><p>Your cart is empty</p><a href="#products" onclick="closeCart()" class="btn-primary">Start Shopping</a></div>`;
    if (footer) footer.style.display = 'none';
    return;
  }
  el.innerHTML = '';
  cart.forEach(item => {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <img src="${item.img}" alt="${item.title}" class="cart-item-img" onerror="this.src='data:image/svg+xml,<svg xmlns=\\'http://www.w3.org/2000/svg\\'><rect width=\\'70\\' height=\\'70\\' fill=\\'%230f0f20\\'/></svg>'" />
      <div class="cart-item-info">
        <div class="cart-item-title">${item.title}</div>
        <div class="cart-item-price">$${(item.price * item.qty).toLocaleString()}</div>
        <div class="cart-item-controls">
          <button class="qty-btn" onclick="updateQty(${item.id}, -1)">−</button>
          <span class="qty-display">${item.qty}</span>
          <button class="qty-btn" onclick="updateQty(${item.id}, +1)">+</button>
          <button class="cart-item-remove" onclick="removeFromCart(${item.id})">🗑️</button>
        </div>
      </div>
    `;
    el.appendChild(div);
  });
  const subtotal = cart.reduce((s, c) => s + c.price * c.qty, 0);
  document.getElementById('cartSubtotal').textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById('cartTotal').textContent = `$${subtotal.toFixed(2)}`;
  if (footer) footer.style.display = 'flex';
}

// ===== WISHLIST =====
function saveWishlist() { localStorage.setItem('nexus_wishlist', JSON.stringify(wishlist)); }

function toggleWishlist(id, event) {
  event.stopPropagation();
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;
  const idx = wishlist.findIndex(w => w.id === id);
  if (idx > -1) {
    wishlist.splice(idx, 1);
    showToast(`💔 Removed from wishlist`, 'info');
  } else {
    wishlist.push(product);
    // Push notification for wishlist
    showPushNotif(
      'wishlist',
      'Added to Wishlist ♥',
      `${product.title} saved for later.`,
      '♥'
    );
  }
  saveWishlist();
  updateWishlistUI();
  renderWishlistItems();
  document.querySelectorAll(`[data-id="${id}"] .wishlist-btn`).forEach(btn => {
    const isNow = wishlist.some(w => w.id === id);
    btn.classList.toggle('active', isNow);
    btn.textContent = isNow ? '♥' : '♡';
  });
}

function updateWishlistUI() {
  document.getElementById('wishlistCount').textContent = wishlist.length;
}

function renderWishlistItems() {
  const el = document.getElementById('wishlistItems');
  if (!el) return;
  if (wishlist.length === 0) {
    el.innerHTML = `<div class="empty-state"><div class="empty-icon">♡</div><p>Your wishlist is empty</p></div>`;
    return;
  }
  el.innerHTML = '';
  wishlist.forEach(item => {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <img src="${item.img}" alt="${item.title}" class="cart-item-img" />
      <div class="cart-item-info">
        <div class="cart-item-title">${item.title}</div>
        <div class="cart-item-price">$${item.price.toLocaleString()}</div>
        <div class="cart-item-controls">
          <button class="add-to-cart-btn" style="padding:0.4rem 0.75rem; font-size:0.78rem;" onclick="addToCart(${item.id})">Add to Cart</button>
          <button class="cart-item-remove" onclick="toggleWishlist(${item.id}, event)">🗑️</button>
        </div>
      </div>
    `;
    el.appendChild(div);
  });
}

// ===== RECENTLY VIEWED =====
function addToRecentlyViewed(id) {
  recentlyViewed = recentlyViewed.filter(r => r !== id);
  recentlyViewed.unshift(id);
  if (recentlyViewed.length > 6) recentlyViewed = recentlyViewed.slice(0, 6);
  localStorage.setItem('nexus_recent', JSON.stringify(recentlyViewed));
  renderRecentlyViewed();
}

function renderRecentlyViewed() {
  const section = document.getElementById('recentViewSection');
  const grid = document.getElementById('recentViewGrid');
  if (!section || !grid) return;
  if (recentlyViewed.length === 0) { section.style.display = 'none'; return; }
  section.style.display = 'block';
  const products = recentlyViewed.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);
  renderProducts(products, 'recentViewGrid');
}
renderRecentlyViewed();

// ===== SIDEBAR OPEN/CLOSE =====
function openCart() {
  renderCartItems();
  document.getElementById('cartSidebar').classList.add('open');
  document.getElementById('cartOverlay').classList.add('show');
}
function closeCart() {
  document.getElementById('cartSidebar').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('show');
}
function openWishlist() {
  renderWishlistItems();
  document.getElementById('wishlistSidebar').classList.add('open');
  document.getElementById('wishlistOverlay').classList.add('show');
}
function closeWishlist() {
  document.getElementById('wishlistSidebar').classList.remove('open');
  document.getElementById('wishlistOverlay').classList.remove('show');
}

// ===== QUICK VIEW =====
function openQuickView(id, event) {
  if (event) event.stopPropagation();
  const p = PRODUCTS.find(p => p.id === id);
  if (!p) return;
  addToRecentlyViewed(id);
  const content = document.getElementById('quickViewContent');
  content.innerHTML = `
    <img src="${p.img}" alt="${p.title}" class="qv-img" onerror="this.style.display='none'" />
    <div class="qv-rating">
      <span class="stars">${renderStars(p.rating)}</span>
      <span style="color:var(--text-muted); font-size:0.85rem;">${p.rating} (${p.reviews.toLocaleString()} reviews)</span>
    </div>
    <div class="qv-title">${p.title}</div>
    <div class="qv-price-row">
      <span class="qv-price">$${p.price.toLocaleString()}</span>
      <span class="qv-old-price">$${p.oldPrice.toLocaleString()}</span>
      <span class="product-discount">-${p.discount}%</span>
    </div>
    <p class="qv-desc">${p.desc}</p>
    <div style="display:flex; gap:1rem; flex-wrap:wrap;">
      <button class="btn-primary" onclick="addToCart(${p.id}); closeQuickView()">+ Add to Cart</button>
      <button class="btn-secondary" onclick="toggleWishlist(${p.id}, event)">♡ Wishlist</button>
    </div>
  `;
  document.getElementById('quickViewOverlay').classList.add('show');
  document.getElementById('quickViewModal').classList.add('show');
  document.getElementById('quickViewModal').style.display = 'block';
}
function closeQuickView() {
  document.getElementById('quickViewOverlay').classList.remove('show');
  document.getElementById('quickViewModal').classList.remove('show');
  document.getElementById('quickViewModal').style.display = 'none';
}

// ===== AUTH MODAL =====
function openAuth() {
  if (currentUser) {
    showToast(`👋 Logged in as ${currentUser.name}`, 'info');
    return;
  }
  document.getElementById('authOverlay').classList.add('show');
  document.getElementById('authModal').classList.add('show');
  document.getElementById('authModal').style.display = 'block';
}
function closeAuth() {
  document.getElementById('authOverlay').classList.remove('show');
  document.getElementById('authModal').classList.remove('show');
  document.getElementById('authModal').style.display = 'none';
}
function switchAuth(tab) {
  ['loginForm','signupForm','forgotForm'].forEach(id => document.getElementById(id).classList.add('hidden'));
  ['loginTab','signupTab'].forEach(id => document.getElementById(id).classList.remove('active'));
  if (tab === 'login') {
    document.getElementById('loginForm').classList.remove('hidden');
    document.getElementById('loginTab').classList.add('active');
  } else if (tab === 'signup') {
    document.getElementById('signupForm').classList.remove('hidden');
    document.getElementById('signupTab').classList.add('active');
  } else {
    document.getElementById('forgotForm').classList.remove('hidden');
  }
}
function togglePass(id) {
  const input = document.getElementById(id);
  input.type = input.type === 'password' ? 'text' : 'password';
}

function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value.trim();
  const pass  = document.getElementById('loginPass').value;
  const users = JSON.parse(localStorage.getItem('nexus_users') || '[]');
  const user  = users.find(u => u.email === email && u.password === pass);
  if (!user) { showToast('❌ Invalid email or password', 'error'); return; }
  currentUser = user;
  localStorage.setItem('nexus_user', JSON.stringify(user));
  if (document.getElementById('rememberMe').checked) {
    localStorage.setItem('nexus_remember', email);
  }
  closeAuth();
  document.getElementById('loginBtn').textContent = `👤 ${user.name.split(' ')[0]}`;
  setGreeting();
  // Push notification for login
  showPushNotif(
    'login',
    `Welcome back, ${user.name.split(' ')[0]}! 👋`,
    'You are now signed in to NEXUS.',
    '🔐'
  );
}

function handleSignup(e) {
  e.preventDefault();
  const name    = document.getElementById('signupName').value.trim();
  const email   = document.getElementById('signupEmail').value.trim();
  const pass    = document.getElementById('signupPass').value;
  const confirm = document.getElementById('signupConfirm').value;
  if (pass !== confirm) { showToast('❌ Passwords do not match', 'error'); return; }
  if (pass.length < 6)  { showToast('❌ Password must be at least 6 characters', 'error'); return; }
  const users = JSON.parse(localStorage.getItem('nexus_users') || '[]');
  if (users.find(u => u.email === email)) { showToast('❌ Email already registered', 'error'); return; }
  const user = { name, email, password: pass };
  users.push(user);
  localStorage.setItem('nexus_users', JSON.stringify(users));
  currentUser = user;
  localStorage.setItem('nexus_user', JSON.stringify(user));
  closeAuth();
  document.getElementById('loginBtn').textContent = `👤 ${name.split(' ')[0]}`;
  setGreeting();
  // Push notification for signup
  showPushNotif(
    'login',
    `Welcome to NEXUS, ${name.split(' ')[0]}! 🎉`,
    'Your account has been created. Happy shopping!',
    '🚀'
  );
}

function handleForgot(e) {
  e.preventDefault();
  const email = document.getElementById('forgotEmail').value;
  showToast(`📧 Reset link sent to ${email}`, 'success');
  switchAuth('login');
}

// ===== CHECKOUT =====
function openCheckout() {
  if (cart.length === 0) { showToast('🛒 Your cart is empty', 'info'); return; }
  closeCart();
  renderOrderSummary();
  document.getElementById('checkoutOverlay').classList.add('show');
  document.getElementById('checkoutModal').classList.add('show');
  document.getElementById('checkoutModal').style.display = 'block';
}
function closeCheckout() {
  document.getElementById('checkoutOverlay').classList.remove('show');
  document.getElementById('checkoutModal').classList.remove('show');
  document.getElementById('checkoutModal').style.display = 'none';
  document.getElementById('paymentProcessing').classList.add('hidden');
  document.getElementById('paymentSuccess').classList.add('hidden');
  document.getElementById('cardForm').classList.remove('hidden');
  document.querySelectorAll('.pay-tab').forEach((t,i) => t.classList.toggle('active', i===0));
}

function renderOrderSummary() {
  const subtotal = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const summaryHTML = `
    ${cart.slice(0, 3).map(c => `<div class="total-row"><span>${c.title} ×${c.qty}</span><span>$${(c.price*c.qty).toFixed(2)}</span></div>`).join('')}
    ${cart.length > 3 ? `<div class="total-row"><span>+${cart.length-3} more items</span></div>` : ''}
    <div class="total-row grand"><span>Total</span><span>$${subtotal.toFixed(2)}</span></div>
  `;
  ['orderSummaryMini','orderSummaryUpi','orderSummaryNet'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = summaryHTML;
  });
}

function switchPayment(type, btn) {
  document.querySelectorAll('.pay-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('cardForm').classList.toggle('hidden', type !== 'card');
  document.getElementById('upiForm').classList.toggle('hidden', type !== 'upi');
  document.getElementById('netbankForm').classList.toggle('hidden', type !== 'netbank');
  document.getElementById('paymentProcessing').classList.add('hidden');
  document.getElementById('paymentSuccess').classList.add('hidden');
}

function formatCard(input) {
  let v = input.value.replace(/\D/g,'').slice(0, 16);
  input.value = v.replace(/(.{4})/g,'$1 ').trim();
  const badge = document.getElementById('cardTypeBadge');
  if (v.startsWith('4')) badge.textContent = '💙';
  else if (v.startsWith('5')) badge.textContent = '🔴';
  else if (v.startsWith('3')) badge.textContent = '🟡';
  else badge.textContent = '💳';
}
function formatExpiry(input) {
  let v = input.value.replace(/\D/g,'');
  if (v.length >= 2) v = v.slice(0,2) + '/' + v.slice(2,4);
  input.value = v;
}
function selectUpi(el) {
  document.querySelectorAll('.upi-app').forEach(a => a.classList.remove('selected'));
  el.classList.add('selected');
}

function processPayment(e, type='card') {
  if (e) e.preventDefault();
  if (type === 'card') {
    const name = document.getElementById('cardName').value.trim();
    const num  = document.getElementById('cardNumber').value.replace(/\s/g,'');
    const exp  = document.getElementById('cardExpiry').value;
    const cvv  = document.getElementById('cardCvv').value;
    if (!name) { showToast('❌ Enter cardholder name', 'error'); return; }
    if (num.length !== 16) { showToast('❌ Invalid card number', 'error'); return; }
    if (!/^\d{2}\/\d{2}$/.test(exp)) { showToast('❌ Invalid expiry date', 'error'); return; }
    if (cvv.length < 3) { showToast('❌ Invalid CVV', 'error'); return; }
  }

  document.getElementById('cardForm').classList.add('hidden');
  document.getElementById('upiForm').classList.add('hidden');
  document.getElementById('netbankForm').classList.add('hidden');
  document.getElementById('paymentProcessing').classList.remove('hidden');

  const steps = ['proc1','proc2','proc3'];
  steps.forEach((id, i) => { setTimeout(() => document.getElementById(id).classList.add('done'), (i+1)*800); });

  setTimeout(() => {
    document.getElementById('paymentProcessing').classList.add('hidden');
    document.getElementById('paymentSuccess').classList.remove('hidden');
    const orderId = 'NX-' + Date.now().toString(36).toUpperCase();
    document.getElementById('orderId').textContent = orderId;
    const subtotal = cart.reduce((s, c) => s + c.price * c.qty, 0);
    // Push notification for payment
    showPushNotif(
      'payment',
      'Payment Successful! 🎉',
      `Order ${orderId} confirmed — $${subtotal.toFixed(2)}. Delivery in 2–3 days.`,
      '✅'
    );
  }, 3200);
}

// ===== SEARCH =====
let searchTimeout;
function openSearch() {
  document.getElementById('searchOverlay').classList.add('open');
  setTimeout(() => document.getElementById('searchInput').focus(), 100);
  renderRecentSearches();
}
function closeSearch() {
  document.getElementById('searchOverlay').classList.remove('open');
  document.getElementById('searchSuggestions').classList.remove('show');
  document.getElementById('searchInput').value = '';
}
function handleSearch() {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    const q = document.getElementById('searchInput').value.trim().toLowerCase();
    const sugEl = document.getElementById('searchSuggestions');
    if (!q) { sugEl.classList.remove('show'); return; }
    const matches = PRODUCTS.filter(p => p.title.toLowerCase().includes(q) || p.category.includes(q)).slice(0, 6);
    if (matches.length === 0) { sugEl.classList.remove('show'); return; }
    sugEl.innerHTML = matches.map(p => `
      <div class="suggestion-item" onclick="selectSuggestion('${p.title}', ${p.id})">
        <span>🔍</span>
        <span>${p.title}</span>
        <span style="color:var(--purple); font-size:0.8rem; margin-left:auto;">$${p.price}</span>
      </div>`).join('');
    sugEl.classList.add('show');
  }, 200);
}
function searchKeydown(e) {
  if (e.key === 'Enter') {
    const q = document.getElementById('searchInput').value.trim();
    if (q) { saveSearchHistory(q); closeSearch(); filterProductsBySearch(q); }
  } else if (e.key === 'Escape') { closeSearch(); }
}
function selectSuggestion(title, id) {
  saveSearchHistory(title);
  closeSearch();
  openQuickView(id, null);
}
function saveSearchHistory(q) {
  searchHistory = searchHistory.filter(h => h !== q);
  searchHistory.unshift(q);
  if (searchHistory.length > 8) searchHistory = searchHistory.slice(0, 8);
  localStorage.setItem('nexus_search_history', JSON.stringify(searchHistory));
}
function renderRecentSearches() {
  const el = document.getElementById('recentSearches');
  if (searchHistory.length === 0) { el.classList.remove('show'); return; }
  el.innerHTML = `
    <div class="recent-header">
      <span>Recent Searches</span>
      <button class="clear-history-btn" onclick="clearSearchHistory()">Clear All</button>
    </div>
    ${searchHistory.map(h => `<div class="recent-item" onclick="selectSuggestion('${h}', 0)"><span>🕐</span><span>${h}</span></div>`).join('')}`;
  el.classList.add('show');
}
function clearSearchHistory() {
  searchHistory = [];
  localStorage.setItem('nexus_search_history', JSON.stringify([]));
  document.getElementById('recentSearches').classList.remove('show');
}
function filterProductsBySearch(q) {
  const filtered = PRODUCTS.filter(p => p.title.toLowerCase().includes(q.toLowerCase()) || p.category.includes(q.toLowerCase()));
  renderProducts(filtered, 'productsGrid');
  document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
  showToast(`🔍 Found ${filtered.length} result(s) for "${q}"`, 'info');
}
function voiceSearch() {
  if (!('SpeechRecognition' in window) && !('webkitSpeechRecognition' in window)) {
    showToast('🎙️ Voice search not supported on this browser', 'error'); return;
  }
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SR();
  recognition.lang = 'en-US';
  recognition.start();
  showToast('🎙️ Listening...', 'info');
  recognition.onresult = (e) => {
    document.getElementById('searchInput').value = e.results[0][0].transcript;
    handleSearch();
  };
  recognition.onerror = () => showToast('❌ Voice search failed', 'error');
}

// ===== TOAST NOTIFICATIONS =====
function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(20px)';
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}

// ===== FAQ ACCORDION =====
function toggleFaq(el) {
  const item = el.parentElement;
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

// ===== NEWSLETTER =====
function subscribeNewsletter(e) {
  e.preventDefault();
  const email = document.getElementById('newsletterEmail').value.trim();
  const msg = document.getElementById('newsletterMsg');
  if (!email) return;
  const subs = JSON.parse(localStorage.getItem('nexus_subs') || '[]');
  if (subs.includes(email)) { showToast('📧 Already subscribed!', 'info'); return; }
  subs.push(email);
  localStorage.setItem('nexus_subs', JSON.stringify(subs));
  msg.textContent = `🎉 You're in! Check ${email} for your welcome gift.`;
  msg.classList.remove('hidden');
  document.getElementById('newsletterEmail').value = '';
  showToast('🎉 Subscribed successfully!', 'success');
  setTimeout(() => msg.classList.add('hidden'), 5000);
}

// ===== CONTACT FORM =====
function submitContact(e) {
  e.preventDefault();
  showToast('✅ Message sent! We\'ll respond within 24 hours.', 'success');
  e.target.reset();
}

// ===== REVIEWS SLIDER DOTS =====
(function initReviewDots() {
  const slider = document.getElementById('reviewsSlider');
  const dotsEl  = document.getElementById('reviewDots');
  if (!slider || !dotsEl) return;
  const cards = slider.querySelectorAll('.review-card');
  cards.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = `dot ${i === 0 ? 'active' : ''}`;
    dot.onclick = () => cards[i].scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
    dotsEl.appendChild(dot);
  });
  slider.addEventListener('scroll', () => {
    const idx = Math.round(slider.scrollLeft / slider.offsetWidth);
    dotsEl.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === idx));
  });
})();

// ===== CHATBOT =====
const BOT_RESPONSES = [
  "I'd be happy to help you with that! 😊",
  "Great question! Let me check our inventory for you.",
  "Our most popular item right now is the Nexus Phone 15 Ultra!",
  "We offer free shipping on all orders. Delivery in 1-3 business days.",
  "You can track your order in real-time from your dashboard.",
  "We have a 30-day hassle-free return policy on all products.",
  "Would you like me to find some product recommendations for you?",
  "Our flash deals end soon! Check the deals section for massive discounts."
];
function toggleChatbot() { document.getElementById('chatbot').classList.toggle('hidden'); }
function sendChat() {
  const input = document.getElementById('chatInput');
  const msgs  = document.getElementById('chatbotMessages');
  const text  = input.value.trim();
  if (!text) return;
  const userMsg = document.createElement('div');
  userMsg.className = 'chat-msg user';
  userMsg.textContent = text;
  msgs.appendChild(userMsg);
  input.value = '';
  msgs.scrollTop = msgs.scrollHeight;
  setTimeout(() => {
    const botMsg = document.createElement('div');
    botMsg.className = 'chat-msg bot';
    botMsg.textContent = BOT_RESPONSES[Math.floor(Math.random() * BOT_RESPONSES.length)];
    msgs.appendChild(botMsg);
    msgs.scrollTop = msgs.scrollHeight;
  }, 800);
}
document.getElementById('chatInput').addEventListener('keydown', e => { if (e.key === 'Enter') sendChat(); });

// ===== POLICY MODAL =====
const POLICIES = {
  privacy: {
    title: '🔒 Privacy Policy',
    badge: 'Last updated: May 2026',
    content: `
      <p>At NEXUS, your privacy is our priority. This policy explains how we collect, use, and protect your personal information.</p>
      <h3>Information We Collect</h3>
      <ul>
        <li>Account information (name, email, password hash)</li>
        <li>Order and transaction history</li>
        <li>Browsing behavior on our platform</li>
        <li>Device and browser information</li>
      </ul>
      <h3>How We Use Your Data</h3>
      <p>We use your data to process orders, personalize your experience, send promotional communications (with consent), and improve our services.</p>
      <h3>Data Security</h3>
      <p>All data is encrypted with AES-256. We never sell your personal information to third parties. Payment details are processed by PCI-DSS certified gateways — we never store card numbers.</p>
      <h3>Your Rights</h3>
      <p>You have the right to access, correct, or delete your personal data at any time. Contact us at privacy@nexusstore.io to exercise these rights.</p>
      <h3>Cookies</h3>
      <p>We use essential cookies for site functionality and analytics cookies (with consent) to improve the user experience.</p>
    `
  },
  terms: {
    title: '📋 Terms of Service',
    badge: 'Effective: January 2026',
    content: `
      <p>By using NEXUS, you agree to these Terms of Service. Please read them carefully before placing an order.</p>
      <h3>Account Responsibility</h3>
      <p>You are responsible for maintaining the confidentiality of your account credentials. NEXUS is not liable for unauthorized access due to compromised credentials.</p>
      <h3>Orders & Payments</h3>
      <p>All orders are subject to availability and confirmation. Prices are in USD unless otherwise stated. We reserve the right to cancel orders with full refunds.</p>
      <h3>Intellectual Property</h3>
      <p>All content on NEXUS — logos, product images, text — is owned by NEXUS Commerce Inc. and may not be reproduced without written permission.</p>
      <h3>Limitation of Liability</h3>
      <p>NEXUS shall not be liable for indirect, incidental, or consequential damages arising from use of our platform beyond the value of the order placed.</p>
      <h3>Governing Law</h3>
      <p>These terms are governed by the laws of India. Disputes shall be resolved in the courts of Bangalore, Karnataka.</p>
    `
  },
  cookie: {
    title: '🍪 Cookie Policy',
    badge: 'Updated: March 2026',
    content: `
      <p>NEXUS uses cookies to enhance your browsing experience and provide personalized service.</p>
      <h3>Essential Cookies</h3>
      <p>These are required for the website to function and cannot be disabled. They include session management, cart persistence, and security tokens.</p>
      <h3>Analytics Cookies</h3>
      <p>We use anonymized analytics to understand how visitors use our site. This helps us improve performance and content. You can opt-out at any time.</p>
      <h3>Marketing Cookies</h3>
      <p>With your consent, we use marketing cookies to show you relevant ads and offers. These can be disabled in your browser settings.</p>
      <h3>Managing Cookies</h3>
      <p>You can manage cookie preferences through your browser settings or our cookie preference center. Disabling essential cookies may affect site functionality.</p>
    `
  },
  refund: {
    title: '↩️ Refund Policy',
    badge: 'Customer-first policy',
    content: `
      <p>We want you to love your NEXUS purchase. If you're not satisfied, we make returns simple and hassle-free.</p>
      <h3>30-Day Returns</h3>
      <p>Return any product within 30 days of delivery for a full refund. Items must be in original condition with all packaging and accessories.</p>
      <h3>How to Return</h3>
      <ul>
        <li>Initiate a return via your account dashboard</li>
        <li>Print the prepaid return label we send to your email</li>
        <li>Drop the package at any authorized courier location</li>
        <li>Refund processed within 3–5 business days of receipt</li>
      </ul>
      <h3>Non-Returnable Items</h3>
      <p>Certain items cannot be returned: digital products, customized orders, hygiene products (used), and items marked as final sale.</p>
      <h3>Damaged or Defective Items</h3>
      <p>If your product arrives damaged or defective, contact us within 48 hours with photos. We'll arrange immediate replacement or full refund at no cost to you.</p>
    `
  }
};

function openPolicy(e, type) {
  e.preventDefault();
  const policy = POLICIES[type];
  if (!policy) return;
  const content = document.getElementById('policyContent');
  content.innerHTML = `
    <h2>${policy.title}</h2>
    <span class="policy-badge">${policy.badge}</span>
    ${policy.content}
  `;
  document.getElementById('policyOverlay').classList.add('show');
  document.getElementById('policyModal').classList.add('show');
  document.getElementById('policyModal').style.display = 'block';
}
function closePolicy() {
  document.getElementById('policyOverlay').classList.remove('show');
  document.getElementById('policyModal').classList.remove('show');
  document.getElementById('policyModal').style.display = 'none';
}

// ===== TRACK ORDER MODAL =====
function openTrackOrder(e) {
  e.preventDefault();
  document.getElementById('trackOverlay').classList.add('show');
  document.getElementById('trackModal').classList.add('show');
  document.getElementById('trackModal').style.display = 'block';
  document.getElementById('trackResult').classList.add('hidden');
  document.getElementById('trackOrderId').value = '';
}
function closeTrackOrder() {
  document.getElementById('trackOverlay').classList.remove('show');
  document.getElementById('trackModal').classList.remove('show');
  document.getElementById('trackModal').style.display = 'none';
}
function trackOrderLookup() {
  const orderId = document.getElementById('trackOrderId').value.trim();
  if (!orderId) { showToast('❌ Please enter an order ID', 'error'); return; }
  const result = document.getElementById('trackResult');
  result.classList.remove('hidden');
  // Simulate tracking
  const statuses = [
    { state:'done',   icon:'✅', title:'Order Confirmed',    desc:'Your payment was processed successfully.',    date: 'May 5, 2026 · 10:32 AM' },
    { state:'done',   icon:'📦', title:'Packaged',           desc:'Your order has been packed and labeled.',     date: 'May 5, 2026 · 4:15 PM' },
    { state:'active', icon:'🚚', title:'Out for Delivery',   desc:'Your package is on its way to you.',         date: 'May 7, 2026 · 9:00 AM' },
    { state:'',       icon:'🏠', title:'Delivered',          desc:'Expected today between 2–6 PM.',             date: 'Expected: May 7, 2026' }
  ];
  result.innerHTML = `
    <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:0.25rem;">Tracking result for <strong style="color:var(--purple)">${orderId.toUpperCase()}</strong></p>
    <div class="track-steps">
      ${statuses.map(s => `
        <div class="track-step ${s.state}">
          <div class="track-dot">${s.icon}</div>
          <div class="track-step-info">
            <div class="track-step-title">${s.title}</div>
            <div class="track-step-desc">${s.desc}</div>
            <div class="track-step-date">${s.date}</div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

// ===== RETURNS MODAL (using policy modal) =====
function openReturns(e) {
  e.preventDefault();
  openPolicy(e, 'refund');
}

// ===== SMOOTH SCROLL HELPER =====
function smoothScrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// ===== INITIALIZE UI =====
updateCartUI();
updateWishlistUI();
updateNotifBadge();
renderNotifList();

const rememberedEmail = localStorage.getItem('nexus_remember');
if (rememberedEmail) {
  const el = document.getElementById('loginEmail');
  if (el) el.value = rememberedEmail;
}
if (currentUser) {
  const btn = document.getElementById('loginBtn');
  if (btn) btn.textContent = `👤 ${currentUser.name.split(' ')[0]}`;
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e) {
    const id = this.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
  });
});

// Close overlays on Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeSearch(); closeQuickView(); closeAuth(); closeCheckout(); closePolicy(); closeTrackOrder();
  }
});

// Lazy Load Images
if ('IntersectionObserver' in window) {
  const imgObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) { img.src = img.dataset.src; img.removeAttribute('data-src'); }
        imgObserver.unobserve(img);
      }
    });
  }, { rootMargin: '200px' });
  document.querySelectorAll('img[data-src]').forEach(img => imgObserver.observe(img));
}

console.log('%cNEXUS Commerce — Upgraded Edition 🚀', 'color:#a855f7; font-family:monospace; font-size:16px; font-weight:bold;');
