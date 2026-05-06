// ─── CATALOG DATA ───────────────────────────────────────────────────────────
const catalog = [
  // VACUNO
  { name: 'Asado', price: 17999, cat: 'vacuno' },
  { name: 'Lomo', price: 29500, cat: 'vacuno' },
  { name: 'Vacío', price: 22500, cat: 'vacuno' },
  { name: 'Cuadril', price: 20600, cat: 'vacuno' },
  { name: 'Falda parrillera', price: 13700, cat: 'vacuno' },
  { name: 'Ojo de bife', price: 24590, cat: 'vacuno' },
  { name: 'Tapa de asado', price: 18400, cat: 'vacuno' },
  { name: 'Arañita', price: 17600, cat: 'vacuno' },
  { name: 'Asado americano', price: 19500, cat: 'vacuno' },
  { name: 'Picaña', price: 22500, cat: 'vacuno' },
  { name: 'Costillar', price: 17999, cat: 'vacuno' },
  { name: 'Riñonada', price: 20600, cat: 'vacuno' },
  { name: 'Nalga', price: 21600, cat: 'vacuno' },
  { name: 'Bife de chorizo', price: 24590, cat: 'vacuno' },
  { name: 'Bola de lomo', price: 19600, cat: 'vacuno' },
  { name: 'Bife ancho', price: 17800, cat: 'vacuno' },
  { name: 'Cuadrada', price: 19600, cat: 'vacuno' },
  { name: 'Bife angosto', price: 17900, cat: 'vacuno' },
  { name: 'Peceto', price: 22500, cat: 'vacuno' },
  { name: 'Entraña', price: 29500, cat: 'vacuno' },
  { name: 'Palomita', price: 17600, cat: 'vacuno' },
  { name: 'Tapa de nalga', price: 18400, cat: 'vacuno' },
  { name: 'Roast beef', price: 17600, cat: 'vacuno' },
  { name: 'Marucha', price: 16900, cat: 'vacuno' },
  { name: 'Paleta', price: 17600, cat: 'vacuno' },
  { name: 'Tortuguita', price: 17600, cat: 'vacuno' },
  { name: 'Colita', price: 22500, cat: 'vacuno' },
  { name: 'Osobuco', price: 10999, cat: 'vacuno' },
  { name: 'Matambre', price: 16600, cat: 'vacuno' },
  { name: 'Espinazo', price: 5500, cat: 'vacuno' },
  { name: 'Osobuco del Rey', price: 10999, cat: 'vacuno' },
  { name: 'Picada Especial', price: 17600, cat: 'vacuno' },
  { name: 'Tomahawk', price: 19500, cat: 'vacuno' },
  { name: 'Falda Puchero', price: 13700, cat: 'vacuno' },
  { name: 'Chiquizuela', price: 10999, cat: 'vacuno' },
  // CERDO
  { name: 'Carré', price: 8500, cat: 'cerdo' },
  { name: 'Carré americano', price: 8500, cat: 'cerdo' },
  { name: 'Carré deshuesado', price: 10460, cat: 'cerdo' },
  { name: 'Pechito', price: 8500, cat: 'cerdo' },
  { name: 'Bondiola', price: 9799, cat: 'cerdo' },
  { name: 'Matambrito', price: 10900, cat: 'cerdo' },
  { name: 'Churrasquito', price: 14520, cat: 'cerdo' },
  { name: 'Solomillo', price: 10900, cat: 'cerdo' },
  { name: 'Ribs de cerdo', price: 12500, cat: 'cerdo' },
  { name: 'Paleta de cerdo', price: 6500, cat: 'cerdo' },
  { name: 'Jamón', price: 7100, cat: 'cerdo' },
  { name: 'Nalga de cerdo', price: 8999, cat: 'cerdo' },
  { name: 'Peceto de cerdo', price: 8999, cat: 'cerdo' },
  { name: 'Bola de lomo de cerdo', price: 8999, cat: 'cerdo' },
  { name: 'Cuadril de cerdo', price: 8999, cat: 'cerdo' },
  { name: 'Colita de cuadril de cerdo', price: 8999, cat: 'cerdo' },
  { name: 'Cuadrada de cerdo', price: 8999, cat: 'cerdo' },
  { name: 'Tortuguita de cerdo', price: 8999, cat: 'cerdo' },
  { name: 'Osobuco de cerdo', price: 10999, cat: 'cerdo' },
  // POLLO
  { name: 'Pollo entero', price: 4900, cat: 'pollo' },
  { name: 'Pata y muslo', price: 4900, cat: 'pollo' },
  { name: 'Pata y muslo deshuesado', price: 9800, cat: 'pollo' },
  { name: 'Suprema', price: 12500, cat: 'pollo' },
  { name: 'Alitas', price: 2900, cat: 'pollo' },
  // ACHURAS
  { name: 'Mollejas', price: 34300, cat: 'achuras' },
  { name: 'Chinchulín', price: 6300, cat: 'achuras' },
  { name: 'Rueda', price: 5750, cat: 'achuras' },
  { name: 'Riñón', price: 6000, cat: 'achuras' },
  { name: 'Tripa gorda', price: 5750, cat: 'achuras' },
  { name: 'Lengua', price: 12150, cat: 'achuras' },
  { name: 'Hígado', price: 5450, cat: 'achuras' },
  { name: 'Corazón', price: 7428, cat: 'achuras' },
  { name: 'Centro', price: 11750, cat: 'achuras' },
  { name: 'Mondongo', price: 11000, cat: 'achuras' },
  { name: 'Seso', price: 2900, cat: 'achuras' },
  { name: 'Rabo', price: 11000, cat: 'achuras' },
  { name: 'Quijada', price: 7750, cat: 'achuras' },
  // EMBUTIDOS & ESPECIALES
  { name: 'Rebozadas de carne', price: 10900, cat: 'embutidos' },
  { name: 'Rebozadas de pollo', price: 9999, cat: 'embutidos' },
  { name: 'Hamburguesa de carne', price: 17600, cat: 'embutidos' },
  { name: 'Hamburguesa de pollo', price: 17600, cat: 'embutidos' },
  { name: 'Salchichas viena con piel', price: 12200, cat: 'embutidos' },
  { name: 'Chorizos de carne', price: 13000, cat: 'embutidos' },
  { name: 'Salchichas Parrilleras', price: 14200, cat: 'embutidos' },
  { name: 'Chorizo Puro cerdo', price: 13000, cat: 'embutidos' },
  { name: 'Morcilla rosca', price: 7900, cat: 'embutidos' },
  { name: 'Morcilla atada', price: 7900, cat: 'embutidos' },
  { name: 'Morcilla vasca', price: 9999, cat: 'embutidos' },
  { name: 'Chorizo colorado', price: 21500, cat: 'embutidos' },
  { name: 'Nuggets', price: 15500, cat: 'embutidos' },
  { name: 'Provoletta Parrillera', price: 4550, cat: 'embutidos' },
  { name: 'Panceta Salada', price: 24900, cat: 'embutidos' },
  { name: 'Panceta Ahumada', price: 24500, cat: 'embutidos' },
];

const catLabels = {
  vacuno: 'Vacuno', cerdo: 'Cerdo', pollo: 'Pollo',
  achuras: 'Achuras', embutidos: 'Embutidos',
};

// ─── HELPERS ────────────────────────────────────────────────────────────────
function formatPrice(p) {
  return '$ ' + p.toLocaleString('es-AR');
}
function safeId(name) {
  return 'qty-' + name.replace(/[^a-zA-Z0-9]/g, '-');
}

// ─── CART STATE ─────────────────────────────────────────────────────────────
const cart = {};

function changeCartQty(name, price, cat, delta) {
  if (!cart[name]) cart[name] = { qty: 0, price, cat };
  cart[name].qty = Math.max(0, cart[name].qty + delta);
  if (cart[name].qty === 0) delete cart[name];
  const el = document.getElementById(safeId(name));
  if (el) el.textContent = cart[name]?.qty || 0;
  updateCartUI();
}

function updateCartUI() {
  const entries = Object.entries(cart);
  const totalItems = entries.reduce((s, [, v]) => s + v.qty, 0);
  const countEl = document.getElementById('cart-count');
  countEl.textContent = totalItems;
  countEl.style.display = totalItems > 0 ? 'flex' : 'none';

  const cartItemsEl = document.getElementById('cart-items');
  if (entries.length === 0) {
    cartItemsEl.innerHTML = '<p class="cart-empty">Todavía no agregaste productos.</p>';
  } else {
    cartItemsEl.innerHTML = entries.map(([name, item]) => `
      <div class="cart-item">
        <div class="cart-item-info">
          <div class="cart-item-name">${name}</div>
          <div class="cart-item-subprice">${formatPrice(item.price)} / kg</div>
        </div>
        <div class="cart-item-qty">
          <button class="cart-qty-btn" data-action="dec" data-name="${name}">−</button>
          <span>${item.qty} kg</span>
          <button class="cart-qty-btn" data-action="inc" data-name="${name}">+</button>
        </div>
        <div class="cart-item-total">${formatPrice(item.price * item.qty)}</div>
      </div>
    `).join('');
  }

  const total = entries.reduce((s, [, v]) => s + v.price * v.qty, 0);
  document.getElementById('cart-total-price').textContent = formatPrice(total);

  const wspBtn = document.getElementById('cart-whatsapp');
  wspBtn.style.opacity = entries.length === 0 ? '.4' : '1';
  wspBtn.style.pointerEvents = entries.length === 0 ? 'none' : 'auto';
}

// Cart items — event delegation for +/- inside panel
document.getElementById('cart-items').addEventListener('click', (e) => {
  const btn = e.target.closest('.cart-qty-btn');
  if (!btn) return;
  const name = btn.dataset.name;
  const item = cart[name];
  if (!item) return;
  changeCartQty(name, item.price, item.cat, btn.dataset.action === 'inc' ? 1 : -1);
});

// ─── CART OPEN / CLOSE ──────────────────────────────────────────────────────
function openCart() {
  document.getElementById('cart-panel').classList.add('open');
  document.getElementById('cart-overlay').classList.add('open');
}
function closeCart() {
  document.getElementById('cart-panel').classList.remove('open');
  document.getElementById('cart-overlay').classList.remove('open');
}
document.getElementById('cart-fab').addEventListener('click', openCart);
document.getElementById('cart-close').addEventListener('click', closeCart);
document.getElementById('cart-overlay').addEventListener('click', closeCart);

// Clear cart
document.getElementById('cart-clear').addEventListener('click', () => {
  Object.keys(cart).forEach(k => delete cart[k]);
  document.querySelectorAll('.qty-display').forEach(el => el.textContent = '0');
  updateCartUI();
});

// ─── WHATSAPP ORDER ─────────────────────────────────────────────────────────
document.getElementById('cart-whatsapp').addEventListener('click', () => {
  const entries = Object.entries(cart);
  if (entries.length === 0) return;
  const lines = entries.map(([name, item]) =>
    `• ${name}: ${item.qty} kg — ${formatPrice(item.price * item.qty)}`
  );
  const total = entries.reduce((s, [, v]) => s + v.price * v.qty, 0);
  const msg = `Hola! Quiero hacer el siguiente pedido:\n\n${lines.join('\n')}\n\nTotal estimado: ${formatPrice(total)}`;
  window.open('https://wa.me/54911?text=' + encodeURIComponent(msg), '_blank');
});

// ─── CATALOG RENDER ─────────────────────────────────────────────────────────
const imgPlaceholder = `
  <div class="corte-img-placeholder">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" width="30" height="30">
      <rect x="3" y="8" width="18" height="13" rx="2"/>
      <circle cx="12" cy="14.5" r="3"/>
      <path d="M8 8V6a2 2 0 012-2h4a2 2 0 012 2v2"/>
    </svg>
  </div>`;

function renderCatalog(cat) {
  const grid = document.getElementById('catalog-grid');
  const items = cat === 'all' ? catalog : catalog.filter(p => p.cat === cat);
  grid.innerHTML = items.map(p => `
    <div class="corte-card" data-name="${p.name}" data-price="${p.price}" data-cat="${p.cat}">
      ${imgPlaceholder}
      <div class="corte-card-body">
        <div class="corte-name">${p.name}</div>
        <div class="corte-price">${formatPrice(p.price)}<span class="corte-unit"> / kg</span></div>
        <span class="corte-tag">${catLabels[p.cat]}</span>
        <div class="qty-controls">
          <button class="qty-btn" data-delta="-1">−</button>
          <span class="qty-display" id="${safeId(p.name)}">${cart[p.name]?.qty || 0}</span>
          <button class="qty-btn" data-delta="1">+</button>
        </div>
      </div>
    </div>
  `).join('');
}

// Catalog grid — event delegation for +/- buttons
document.getElementById('catalog-grid').addEventListener('click', (e) => {
  const btn = e.target.closest('.qty-btn');
  if (!btn) return;
  const card = btn.closest('.corte-card');
  const { name, price, cat } = card.dataset;
  changeCartQty(name, parseInt(price), cat, parseInt(btn.dataset.delta));
});

// ─── CATEGORY TABS ──────────────────────────────────────────────────────────
document.querySelectorAll('.cat-tab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.cat-tab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderCatalog(btn.dataset.cat);
  });
});

// ─── MINIMIZE CATALOG ───────────────────────────────────────────────────────
let catalogOpen = false; // Empezamos con el catálogo cerrado

function updateCatalogVisibility() {
  const grid = document.getElementById('catalog-grid');
  const tabs = document.querySelector('.cat-tabs');
  grid.style.display = catalogOpen ? 'grid' : 'none';
  tabs.style.display = catalogOpen ? 'flex' : 'none';
  document.getElementById('catalog-toggle-text').textContent = catalogOpen ? 'Minimizar' : 'Ver catálogo';
  document.getElementById('catalog-toggle-icon').style.transform = catalogOpen ? 'rotate(0deg)' : 'rotate(180deg)';
}

// Evento para el botón
document.getElementById('catalog-toggle').addEventListener('click', () => {
  catalogOpen = !catalogOpen;
  updateCatalogVisibility();
});

// Inicializamos la vista minimizada al cargar
updateCatalogVisibility();

// ─── INIT ────────────────────────────────────────────────────────────────────
renderCatalog('all');
updateCartUI();

// ─── SCROLL REVEAL ──────────────────────────────────────────────────────────
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
reveals.forEach(el => io.observe(el));

// ─── FLECHA DE NAVEGACIÓN SECUENCIAL ────────────────────────────────────────
const scrollBtn = document.getElementById('next-section-btn');

// Este es el orden exacto de tus secciones
const sectionsIds = ['cortes', 'nosotros', 'pedidos', 'contacto'];

if (scrollBtn) {
  scrollBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Evita que la página salte brusco al hacer clic
    
    // Buscamos cuál es la próxima sección que está más abajo en la pantalla
    for (let i = 0; i < sectionsIds.length; i++) {
      const section = document.getElementById(sectionsIds[i]);
      if (section) {
        const rect = section.getBoundingClientRect();
        
        // Si el borde superior de la sección está por debajo del rango visible (más de 50px)
        // Significa que es nuestra próxima parada
        if (rect.top > 50) { 
          section.scrollIntoView({ behavior: 'smooth' });
          return; // Detenemos la función para que solo baje a UNA sección por clic
        }
      }
    }
  });

  // Opcional: Ocultar la flecha cuando ya estemos en "contacto" (el final de la página)
  window.addEventListener('scroll', () => {
    const contactoSection = document.getElementById('contacto');
    if (contactoSection) {
      const rect = contactoSection.getBoundingClientRect();
      // Si la sección de contacto ya está casi en el centro de la pantalla, ocultamos la flecha
      if (rect.top < window.innerHeight / 2) {
        scrollBtn.classList.add('hidden');
      } else {
        scrollBtn.classList.remove('hidden');
      }
    }
  });
}