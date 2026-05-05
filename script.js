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
  vacuno: 'Vacuno',
  cerdo: 'Cerdo',
  pollo: 'Pollo',
  achuras: 'Achuras',
  embutidos: 'Embutidos',
};

function formatPrice(p) {
  return '$ ' + p.toLocaleString('es-AR');
}

function renderCatalog(cat) {
  const grid = document.getElementById('catalog-grid');
  const items = cat === 'all' ? catalog : catalog.filter(p => p.cat === cat);
  grid.innerHTML = items.map(p => `
    <div class="corte-card">
      <div class="corte-name">${p.name}</div>
      <div class="corte-price">${formatPrice(p.price)}<span class="corte-unit"> / kg</span></div>
      <span class="corte-tag">${catLabels[p.cat]}</span>
    </div>
  `).join('');
}

document.querySelectorAll('.cat-tab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.cat-tab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderCatalog(btn.dataset.cat);
  });
});

renderCatalog('all');

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
