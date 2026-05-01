'use strict';

/* ─────────────────────────────────────────────────
   MAISON ÉLARA — main.js
   Rich, beautiful Unsplash fashion photography
   Every product has primary + two fallback URLs
───────────────────────────────────────────────── */

const PRODUCTS = [
  {
    id:1, name:'Le Manteau Neige', category:'women', tags:['women','new'],
    price:1290, badge:'New',
    img:'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=700&q=90&fit=crop&crop=top',
    fb1:'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=700&q=90&fit=crop&crop=top',
    fb2:'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=700&q=90&fit=crop&crop=top',
    alt:'Women luxury winter coat editorial'
  },
  {
    id:2, name:'Robe Dorée Silhouette', category:'women', tags:['women','new'],
    price:890, badge:'New',
    img:'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=700&q=90&fit=crop&crop=top',
    fb1:'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=700&q=90&fit=crop&crop=top',
    fb2:'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=700&q=90&fit=crop&crop=top',
    alt:'Women fashion silhouette dress editorial'
  },
  {
    id:3, name:'Pantalon Architecte', category:'men', tags:['men'],
    price:650, badge:null,
    img:'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=700&q=90&fit=crop&crop=top',
    fb1:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&q=90&fit=crop&crop=top',
    fb2:'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=700&q=90&fit=crop&crop=top',
    alt:'Men luxury tailored trousers editorial'
  },
  {
    id:4, name:'Blazer Lumière', category:'women', tags:['women','sale'],
    price:780, originalPrice:1100, badge:'Sale',
    img:'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=700&q=90&fit=crop&crop=top',
    fb1:'https://images.unsplash.com/photo-1558171813-2cb18f96b53e?w=700&q=90&fit=crop&crop=top',
    fb2:'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=700&q=90&fit=crop&crop=top',
    alt:'Women luxury blazer fashion editorial'
  },
  {
    id:5, name:'Chemise Ombré', category:'men', tags:['men','new'],
    price:420, badge:'New',
    img:'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=700&q=90&fit=crop&crop=top',
    fb1:'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=700&q=90&fit=crop&crop=top',
    fb2:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&q=90&fit=crop&crop=top',
    alt:'Men luxury shirt editorial'
  },
  {
    id:6, name:'Veste Capsule', category:'men', tags:['men','sale'],
    price:560, originalPrice:840, badge:'Sale',
    img:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&q=90&fit=crop&crop=top',
    fb1:'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=700&q=90&fit=crop&crop=top',
    fb2:'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=700&q=90&fit=crop&crop=top',
    alt:'Men luxury capsule jacket editorial'
  },
  {
    id:7, name:'Robe Voile Éternelle', category:'women', tags:['women'],
    price:1150, badge:null,
    img:'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=700&q=90&fit=crop&crop=top',
    fb1:'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=700&q=90&fit=crop&crop=top',
    fb2:'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=700&q=90&fit=crop&crop=top',
    alt:'Women luxury voile gown editorial'
  },
  {
    id:8, name:'Écharpe Nuage', category:'women', tags:['women','new'],
    price:320, badge:'New',
    img:'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=700&q=90&fit=crop&crop=top',
    fb1:'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=700&q=90&fit=crop&crop=top',
    fb2:'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=700&q=90&fit=crop&crop=top',
    alt:'Women fashion scarf editorial'
  },
  {
    id:9, name:'Manteau Soir', category:'women', tags:['women'],
    price:1480, badge:null,
    img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=90&fit=crop&crop=top',
    fb1:'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=700&q=90&fit=crop&crop=top',
    fb2:'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=700&q=90&fit=crop&crop=top',
    alt:'Women luxury evening coat editorial'
  },
  {
    id:10, name:'Costume Sculpteur', category:'men', tags:['men','new'],
    price:1890, badge:'New',
    img:'https://images.unsplash.com/photo-1598808503746-f34c53b9323e?w=700&q=90&fit=crop&crop=top',
    fb1:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&q=90&fit=crop&crop=top',
    fb2:'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=700&q=90&fit=crop&crop=top',
    alt:'Men luxury sculptor suit editorial'
  },
  {
    id:11, name:'Robe Ombres', category:'women', tags:['women','sale'],
    price:680, originalPrice:950, badge:'Sale',
    img:'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=700&q=90&fit=crop&crop=top',
    fb1:'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=700&q=90&fit=crop&crop=top',
    fb2:'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=700&q=90&fit=crop&crop=top',
    alt:'Women shadow dress fashion editorial'
  },
  {
    id:12, name:'Pardessus Silence', category:'men', tags:['men'],
    price:2100, badge:null,
    img:'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=700&q=90&fit=crop&crop=top',
    fb1:'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=700&q=90&fit=crop&crop=top',
    fb2:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&q=90&fit=crop&crop=top',
    alt:'Men luxury overcoat editorial'
  }
];

let cartCount = 0, toastTimeout = null;

/* ── LOADER ──────────────────────────── */
function initLoader() {
  window.addEventListener('load', () =>
    setTimeout(() => document.getElementById('loader').classList.add('hidden'), 2200));
}

/* ── NAVIGATION ──────────────────────── */
function navigate(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  const navbar = document.getElementById('navbar');
  if (page !== 'home') navbar.classList.add('scrolled');
  else if (window.scrollY < 60) navbar.classList.remove('scrolled');
  if (page === 'products') renderProducts('all');
  setTimeout(initScrollReveal, 120);
  closeMobileMenu();
}

function initNavLinks() {
  document.querySelectorAll('[data-page]').forEach(el =>
    el.addEventListener('click', () => navigate(el.dataset.page)));
}

/* ── STICKY NAV ──────────────────────── */
function initScrollNav() {
  window.addEventListener('scroll', () => {
    const active = document.querySelector('.page.active');
    const navbar = document.getElementById('navbar');
    if (active && active.id === 'page-home' && window.scrollY < 60)
      navbar.classList.remove('scrolled');
    else navbar.classList.add('scrolled');
  }, { passive: true });
}

/* ── MOBILE MENU ─────────────────────── */
function toggleMobile() {
  const links = document.querySelector('.nav-links');
  if (links.style.display === 'flex') { closeMobileMenu(); return; }
  Object.assign(links.style, {
    display:'flex', flexDirection:'column', position:'absolute',
    top:'72px', left:'0', right:'0', background:'rgba(250,248,245,0.97)',
    padding:'1.5rem 2rem', gap:'1.5rem',
    backdropFilter:'blur(12px)', boxShadow:'0 8px 24px rgba(0,0,0,0.08)'
  });
  links.querySelectorAll('a').forEach(a => a.style.color = 'var(--text-primary)');
}
function closeMobileMenu() {
  const links = document.querySelector('.nav-links');
  if (window.innerWidth <= 900) links.style.display = 'none';
}

/* ── SCROLL REVEAL ───────────────────── */
function initScrollReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in-view'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
  document.querySelectorAll('.reveal,.reveal-left,.reveal-right,.stagger').forEach(el => {
    if (!el.classList.contains('in-view')) obs.observe(el);
  });
}

/* ── PRODUCT CARD HTML ───────────────── */
function productCard(p) {
  return `
    <div class="product-card" data-id="${p.id}">
      <div class="product-img-wrap">
        <img class="product-photo"
          src="${p.img}"
          alt="${p.alt}"
          loading="lazy"
          onerror="this.onerror=null;this.src='${p.fb1}';this.addEventListener('error',()=>{this.src='${p.fb2}';})"
        />
        ${p.badge ? `<div class="product-badge${p.badge==='Sale'?' badge-sale':''}">${p.badge}</div>` : ''}
        <div class="product-overlay">
          <button class="add-btn" onclick="addToCart(event,${p.id},'${p.name}')">Add to Cart</button>
        </div>
      </div>
      <div class="product-info">
        <div class="product-name">${p.name}</div>
        <div class="product-meta">
          <span class="product-category">${p.category==='women'?'Womenswear':'Menswear'}</span>
          <span class="product-price">
            ${p.originalPrice?`<span class="price-old">€${p.originalPrice}</span>`:''}€${p.price}
          </span>
        </div>
      </div>
    </div>`;
}

/* ── RENDER PRODUCTS ─────────────────── */
function renderProducts(filter = 'all') {
  const grid = document.getElementById('products-grid');
  if (!grid) return;
  const list = filter === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.tags.includes(filter));
  grid.innerHTML = list.map(productCard).join('');
  setTimeout(initScrollReveal, 80);
}

function renderHomeProducts() {
  const grid = document.getElementById('home-products-grid');
  if (!grid) return;
  grid.innerHTML = PRODUCTS.slice(0, 4).map(productCard).join('');
}

/* ── FILTER BAR ──────────────────────── */
function initFilters() {
  const bar = document.getElementById('filter-bar');
  if (!bar) return;
  bar.addEventListener('click', e => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    bar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProducts(btn.dataset.filter);
  });
}

/* ── CART ────────────────────────────── */
function addToCart(e, id, name) {
  e.stopPropagation();
  const btn = e.currentTarget;
  btn.classList.add('added'); btn.textContent = 'Added ✓';
  setTimeout(() => { btn.classList.remove('added'); btn.textContent = 'Add to Cart'; }, 1800);
  cartCount++;
  const cb = document.querySelector('.cart-btn');
  if (cb) cb.textContent = `Cart (${cartCount})`;
  showToast(`"${name}" added to cart`);
}

/* ── TOAST ───────────────────────────── */
function showToast(msg) {
  const toast = document.getElementById('cart-toast');
  const tm = document.getElementById('toast-msg');
  if (!toast || !tm) return;
  tm.textContent = msg; toast.classList.add('show');
  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove('show'), 3000);
}

/* ── NEWSLETTER ──────────────────────── */
function handleNewsletter(inputId) {
  const el = inputId ? document.getElementById(inputId) : document.querySelector('.newsletter-input');
  if (!el) return;
  if (el.value && el.value.includes('@')) { showToast('Welcome to the Maison! ✓'); el.value = ''; }
  else { el.style.borderColor = 'var(--accent)'; el.focus(); setTimeout(() => el.style.borderColor = '', 1800); }
}

/* ── CONTACT ─────────────────────────── */
function handleContact() {
  const n = document.getElementById('contact-name');
  const e = document.getElementById('contact-email');
  const s = document.getElementById('contact-subject');
  const m = document.getElementById('contact-msg');
  const btn = document.querySelector('.form-submit');
  const txt = document.getElementById('submit-text');
  let valid = true;
  [n, e, m].forEach(f => {
    if (!f || !f.value.trim()) {
      valid = false;
      if (f) { f.style.borderColor = 'var(--accent)'; setTimeout(() => f.style.borderColor = '', 2000); }
    }
  });
  if (!valid) return;
  txt.textContent = 'Message Sent ✓'; btn.style.background = 'var(--accent)';
  showToast('Message received. We will be in touch.');
  setTimeout(() => {
    txt.textContent = 'Send Message'; btn.style.background = '';
    [n, e, s, m].forEach(f => { if (f) f.value = ''; });
  }, 3500);
}

/* ── PARALLAX HERO ───────────────────── */
function initParallax() {
  const img = document.querySelector('.hero-img');
  if (!img) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY < window.innerHeight)
      img.style.transform = `scale(1.06) translateY(${window.scrollY * 0.16}px)`;
  }, { passive: true });
}

/* ── INIT ────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initNavLinks();
  initScrollNav();
  initScrollReveal();
  initFilters();
  initParallax();
  renderHomeProducts();
  renderProducts('all');
});
