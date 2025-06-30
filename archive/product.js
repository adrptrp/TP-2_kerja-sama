// Product Detail Page Logic

// Duplicate products array from shop.js
const products = [
  {
    id: 1,
    name: "Xiaomi Redmi 12C",
    brand: "Xiaomi",
    category: "smartphone",
    price: 1499000,
    description: `Chipset: MediaTek Helio G85\nRAM: 4GB\nStorage: 64GB/128GB\nDisplay: 6.71\" HD+ 1650x720, IPS LCD\nKamera Belakang: 50MP + 0.08MP depth\nKamera Depan: 5MP\nBaterai: 5000mAh, 18W charging\nOS: Android 12, MIUI 13\nConnectivity: 4G LTE, WiFi, Bluetooth 5.3\nSensor: Fingerprint (side), accelerometer, proximity\nDimensi: 168.76 x 76.41 x 8.77mm\nBerat: 192g`,
    image: "assets/phone1.png",
    stock: 20
  },
  {
    id: 2,
    name: "Samsung Galaxy A04s",
    brand: "Samsung",
    category: "smartphone",
    price: 2199000,
    description: `Chipset: Exynos 850\nRAM: 4GB\nStorage: 64GB\nDisplay: 6.5\" HD+ 1600x720, PLS LCD\nKamera Belakang: 50MP + 2MP macro + 2MP depth\nKamera Depan: 5MP\nBaterai: 5000mAh, 15W charging\nOS: Android 12, One UI 4.1\nConnectivity: 4G LTE, WiFi, Bluetooth 5.0\nSensor: Fingerprint (side), accelerometer, proximity\nDimensi: 164.7 x 76.7 x 9.1mm\nBerat: 195g`,
    image: "assets/phone2.png",
    stock: 15
  },
  {
    id: 3,
    name: "Realme C55",
    brand: "Realme",
    category: "smartphone",
    price: 2899000,
    description: `Chipset: MediaTek Helio G88\nRAM: 6GB\nStorage: 128GB\nDisplay: 6.72\" FHD+ 2400x1080, IPS LCD, 90Hz\nKamera Belakang: 64MP + 2MP depth\nKamera Depan: 8MP\nBaterai: 5000mAh, 33W SuperVOOC\nOS: Android 13, realme UI 4.0\nConnectivity: 4G LTE, WiFi, Bluetooth 5.2\nSensor: Fingerprint (side), accelerometer, gyro, proximity\nDimensi: 165.6 x 75.9 x 7.89mm\nBerat: 189.5g`,
    image: "assets/phone3.png",
    stock: 10
  },
  {
    id: 4,
    name: "Xiaomi Redmi Note 12 Pro",
    brand: "Xiaomi",
    category: "smartphone",
    price: 4699000,
    description: `Chipset: MediaTek Dimensity 1080\nRAM: 8GB\nStorage: 256GB\nDisplay: 6.67\" FHD+ 2400x1080, AMOLED, 120Hz\nKamera Belakang: 50MP + 8MP ultrawide + 2MP macro\nKamera Depan: 16MP\nBaterai: 5000mAh, 67W turbo charging\nOS: Android 12, MIUI 14\nConnectivity: 4G LTE, WiFi 6, Bluetooth 5.2\nSensor: Fingerprint (in-display), accelerometer, gyro, proximity, compass\nDimensi: 162.9 x 76 x 7.9mm\nBerat: 187g`,
    image: "assets/phone4.png",
    stock: 12
  },
  {
    id: 5,
    name: "Samsung Galaxy A54 5G",
    brand: "Samsung",
    category: "smartphone",
    price: 5999000,
    description: `Chipset: Exynos 1380\nRAM: 8GB\nStorage: 256GB\nDisplay: 6.4\" FHD+ 2340x1080, Super AMOLED, 120Hz\nKamera Belakang: 50MP + 12MP ultrawide + 5MP macro\nKamera Depan: 32MP\nBaterai: 5000mAh, 25W charging\nOS: Android 13, One UI 5.1\nConnectivity: 5G, WiFi 6, Bluetooth 5.3\nSensor: Fingerprint (in-display), accelerometer, gyro, proximity, compass\nDimensi: 158.2 x 76.7 x 8.2mm\nBerat: 202g`,
    image: "assets/phone5.png",
    stock: 8
  },
  {
    id: 6,
    name: "OPPO Reno8 T",
    brand: "OPPO",
    category: "smartphone",
    price: 4499000,
    description: `Chipset: MediaTek Helio G99\nRAM: 8GB\nStorage: 256GB\nDisplay: 6.43\" FHD+ 2400x1080, AMOLED, 90Hz\nKamera Belakang: 100MP + 2MP depth + 2MP macro\nKamera Depan: 32MP\nBaterai: 4800mAh, 67W SuperVOOC\nOS: Android 13, ColorOS 13.1\nConnectivity: 4G LTE, WiFi 5, Bluetooth 5.3\nSensor: Fingerprint (in-display), accelerometer, gyro, proximity, compass\nDimensi: 160.8 x 73.8 x 7.7mm\nBerat: 180g`,
    image: "assets/phone6.png",
    stock: 10
  },
  {
    id: 7,
    name: "Vivo V27e",
    brand: "Vivo",
    category: "smartphone",
    price: 4999000,
    description: `Chipset: MediaTek Helio G99\nRAM: 8GB\nStorage: 256GB\nDisplay: 6.62\" FHD+ 2400x1080, AMOLED, 120Hz\nKamera Belakang: 64MP + 2MP depth + 2MP macro\nKamera Depan: 32MP\nBaterai: 4600mAh, 66W FlashCharge\nOS: Android 13, Funtouch OS 13\nConnectivity: 4G LTE, WiFi 5, Bluetooth 5.3\nSensor: Fingerprint (in-display), accelerometer, gyro, proximity, compass\nDimensi: 164.1 x 74.8 x 7.36mm\nBerat: 185g`,
    image: "assets/phone1.png",
    stock: 10
  },
  {
    id: 8,
    name: "Xiaomi 13T Pro",
    brand: "Xiaomi",
    category: "smartphone",
    price: 9999000,
    description: `Chipset: MediaTek Dimensity 9200+\nRAM: 12GB\nStorage: 512GB\nDisplay: 6.67\" FHD+ 2712x1220, AMOLED, 144Hz, HDR10+\nKamera Belakang: 50MP + 50MP telephoto + 12MP ultrawide\nKamera Depan: 20MP\nBaterai: 5000mAh, 120W HyperCharge\nOS: Android 13, MIUI 14\nConnectivity: 5G, WiFi 7, Bluetooth 5.4\nSensor: Fingerprint (in-display), accelerometer, gyro, proximity, compass, barometer\nDimensi: 162.2 x 75.7 x 8.49mm\nBerat: 206g`,
    image: "assets/phone2.png",
    stock: 7
  },
  {
    id: 9,
    name: "Samsung Galaxy S23 FE",
    brand: "Samsung",
    category: "smartphone",
    price: 8999000,
    description: `Chipset: Exynos 2200\nRAM: 8GB\nStorage: 256GB\nDisplay: 6.4\" FHD+ 2340x1080, Dynamic AMOLED 2X, 120Hz\nKamera Belakang: 50MP + 12MP ultrawide + 8MP telephoto\nKamera Depan: 10MP\nBaterai: 4500mAh, 25W charging, 15W wireless\nOS: Android 13, One UI 5.1\nConnectivity: 5G, WiFi 6E, Bluetooth 5.3\nSensor: Fingerprint (in-display), accelerometer, gyro, proximity, compass, barometer\nDimensi: 158 x 76.5 x 8.2mm\nBerat: 209g`,
    image: "assets/phone3.png",
    stock: 8
  },
  {
    id: 10,
    name: "iPhone 14",
    brand: "Apple",
    category: "smartphone",
    price: 13999000,
    description: `Chipset: Apple A15 Bionic\nRAM: 6GB\nStorage: 128GB\nDisplay: 6.1\" 2556x1179, Super Retina XDR OLED, 60Hz\nKamera Belakang: 12MP + 12MP ultrawide\nKamera Depan: 12MP TrueDepth\nBaterai: 3279mAh, 20W charging, 15W MagSafe wireless\nOS: iOS 16\nConnectivity: 5G, WiFi 6, Bluetooth 5.3\nSensor: Face ID, accelerometer, gyro, proximity, compass, barometer\nDimensi: 146.7 x 71.5 x 7.8mm\nBerat: 172g`,
    image: "assets/phone4.png",
    stock: 6
  },
  {
    id: 11,
    name: "Samsung Galaxy S24 Ultra",
    brand: "Samsung",
    category: "smartphone",
    price: 19999000,
    description: `Chipset: Snapdragon 8 Gen 3\nRAM: 12GB\nStorage: 512GB\nDisplay: 6.8\" QHD+ 3120x1440, Dynamic AMOLED 2X, 120Hz, S Pen\nKamera Belakang: 200MP + 50MP periscope + 10MP telephoto + 12MP ultrawide\nKamera Depan: 12MP\nBaterai: 5000mAh, 45W charging, 15W wireless\nOS: Android 14, One UI 6.1\nConnectivity: 5G, WiFi 7, Bluetooth 5.3\nSensor: Fingerprint (in-display), accelerometer, gyro, proximity, compass, barometer\nDimensi: 162.3 x 79 x 8.6mm\nBerat: 232g`,
    image: "assets/phone5.png",
    stock: 5
  },
  {
    id: 12,
    name: "iPhone 15 Pro Max",
    brand: "Apple",
    category: "smartphone",
    price: 21999000,
    description: `Chipset: Apple A17 Pro\nRAM: 8GB\nStorage: 256GB\nDisplay: 6.7\" 2796x1290, Super Retina XDR OLED, 120Hz ProMotion\nKamera Belakang: 48MP + 12MP ultrawide + 12MP telephoto (5x)\nKamera Depan: 12MP TrueDepth\nBaterai: 4441mAh, 27W charging, 15W MagSafe wireless\nOS: iOS 17\nConnectivity: 5G, WiFi 6E, Bluetooth 5.3\nSensor: Face ID, LiDAR, accelerometer, gyro, proximity, compass, barometer\nDimensi: 159.9 x 76.7 x 8.25mm\nBerat: 221g`,
    image: "assets/phone6.png",
    stock: 4
  },
  {
    id: 13,
    name: "ASUS ROG Phone 7",
    brand: "ASUS",
    category: "smartphone",
    price: 12999000,
    description: `Chipset: Snapdragon 8 Gen 2\nRAM: 12GB\nStorage: 256GB\nDisplay: 6.78\" FHD+ 2448x1080, AMOLED, 165Hz\nKamera Belakang: 50MP + 13MP ultrawide + 5MP macro\nKamera Depan: 32MP\nBaterai: 6000mAh, 65W charging\nOS: Android 13, ROG UI\nConnectivity: 5G, WiFi 7, Bluetooth 5.3\nSensor: Fingerprint (in-display), accelerometer, gyro, proximity, compass\nFitur Gaming: AirTrigger 6, GameCool 7, Armory Crate\nDimensi: 173 x 77 x 10.3mm\nBerat: 239g`,
    image: "assets/phone1.png",
    stock: 6
  },
  {
    id: 14,
    name: "RedMagic 8 Pro",
    brand: "RedMagic",
    category: "smartphone",
    price: 9999000,
    description: `Chipset: Snapdragon 8 Gen 2\nRAM: 12GB\nStorage: 256GB\nDisplay: 6.8\" FHD+ 2480x1116, AMOLED, 120Hz\nKamera Belakang: 50MP + 8MP ultrawide + 2MP macro\nKamera Depan: 16MP under-display\nBaterai: 6000mAh, 65W charging\nOS: Android 13, RedMagic OS 6.0\nConnectivity: 5G, WiFi 6E, Bluetooth 5.3\nSensor: Fingerprint (in-display), accelerometer, gyro, proximity\nFitur Gaming: ICE 11.0 Multi-Dimensional Cooling, Red Core 2\nDimensi: 163.98 x 76.35 x 8.9mm\nBerat: 228g`,
    image: "assets/phone2.png",
    stock: 6
  }
];

function formatRupiah(number) {
  return 'Rp' + number.toLocaleString('id-ID');
}

function getProductIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return parseInt(params.get('id'), 10);
}

function renderProductDetail(product) {
  const container = document.getElementById('product-detail-container');
  if (!product) {
    container.innerHTML = '<div style="text-align:center;padding:3rem;">Produk tidak ditemukan.</div>';
    return;
  }

  // Extract key features (contoh: ambil 3 fitur utama dari deskripsi atau hardcode untuk iPhone 15 Pro Max)
  let keyFeatures = [];
  if (product.id === 12) {
    keyFeatures = [
      'Sistem kamera canggih',
      'Baterai tahan seharian',
      'Chip A17 Bionic'
    ];
  } else {
    keyFeatures = [
      product.brand,
      product.category,
      product.price > 10000000 ? 'Flagship' : 'Value'
    ];
  }

  // Parse description into spec table
  const specs = {};
  product.description.split('\n').forEach(line => {
    const [label, ...rest] = line.split(':');
    if (label && rest.length) {
      specs[label.trim()] = rest.join(':').trim();
    }
  });

  container.innerHTML = `
    <div class="product-detail-header">
      <div class="product-detail-image">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="product-detail-title">${product.name}</div>
      <div class="product-detail-price">${formatRupiah(product.price)}</div>
      <div class="product-detail-keyfeatures">
        ${keyFeatures.map(f => `<div class="product-detail-keyfeature">${f}</div>`).join('')}
      </div>
    </div>
    <div class="product-detail-section">
      <h3>Spesifikasi</h3>
      <div class="product-detail-specs">
        ${Object.entries(specs).map(([label, value]) => `
          <div class="product-detail-specs-label">${label}</div>
          <div class="product-detail-specs-value">${value}</div>
        `).join('')}
      </div>
    </div>
    <div class="product-detail-buy">
      <button class="product-detail-buy-btn">Beli / Tambah ke Keranjang</button>
    </div>
  `;
}

function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const existingItem = cart.find(item => item.id === product.id);
  if (existingItem) {
    if (existingItem.quantity < product.stock) {
      existingItem.quantity++;
    } else {
      showNotification('Stok produk habis!');
      return;
    }
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  showNotification('Produk ditambahkan ke keranjang!');
}

function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartCount = document.querySelector('.cart-count');
  if (cartCount) cartCount.textContent = count;
}

function showNotification(message) {
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: #28a745;
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    z-index: 1001;
    animation: slideIn 0.3s ease;
  `;
  notification.textContent = message;
  document.body.appendChild(notification);
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => notification.remove(), 300);
  }, 2000);
}

// Main
const productId = getProductIdFromUrl();
const product = products.find(p => p.id === productId);
renderProductDetail(product);

// Add event listener for Add to Cart button after rendering
document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
  setTimeout(() => {
    const btn = document.querySelector('.product-detail-buy-btn');
    if (btn) {
      btn.addEventListener('click', () => {
        if (product) addToCart(product);
      });
    }
  }, 100);
});

// --- CART MODAL LOGIC (copy from shop.js, minimal) ---
function displayCart() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  if (!cartItems || !cartTotal) return;
  if (cart.length === 0) {
    cartItems.innerHTML = `
      <div class="empty-cart">
        <div class="empty-cart-icon">🛒</div>
        <p>Your cart is empty</p>
      </div>
    `;
    cartTotal.textContent = '0.00';
    return;
  }
  cartItems.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-image">
        <img src="${item.image}" alt="${item.name}" style="width:60px;height:60px;object-fit:contain;" />
      </div>
      <div class="cart-item-info">
        <div class="cart-item-title">${item.name}</div>
        <div class="cart-item-price">${formatRupiah(item.price)}</div>
      </div>
      <div class="cart-item-quantity">
        <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, -1)">-</button>
        <span>${item.quantity}</span>
        <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, 1)">+</button>
      </div>
    </div>
  `).join('');
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  cartTotal.textContent = formatRupiah(total);
}

function updateCartQuantity(productId, change) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const item = cart.find(item => item.id === productId);
  if (!item) return;
  const newQuantity = item.quantity + change;
  if (newQuantity <= 0) {
    cart = cart.filter(i => i.id !== productId);
  } else {
    const product = products.find(p => p.id === productId);
    if (newQuantity > product.stock) {
      showNotification('Stok produk habis!');
      return;
    }
    item.quantity = newQuantity;
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  displayCart();
}

function setupCartModalEvents() {
  const headerCart = document.querySelector('.header__cart');
  const cartModal = document.getElementById('cart-modal');
  const closeCart = document.getElementById('close-cart');
  const checkoutBtn = document.getElementById('checkout-btn');
  if (headerCart) headerCart.addEventListener('click', () => {
    cartModal.classList.add('active');
    displayCart();
  });
  if (closeCart) closeCart.addEventListener('click', () => {
    cartModal.classList.remove('active');
  });
  if (cartModal) cartModal.addEventListener('click', (e) => {
    if (e.target === cartModal) {
      cartModal.classList.remove('active');
    }
  });
  if (checkoutBtn) checkoutBtn.addEventListener('click', () => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
      showNotification('Keranjang kosong!');
      return;
    }
    window.location.href = 'checkout.html';
  });
  // Close cart with Escape key
  document.addEventListener('keydown', (e) => {
    const cartModal = document.getElementById('cart-modal');
    if (e.key === 'Escape' && cartModal && cartModal.classList.contains('active')) {
      cartModal.classList.remove('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
  setupCartModalEvents();
  setTimeout(() => {
    const btn = document.querySelector('.product-detail-buy-btn');
    if (btn) {
      btn.addEventListener('click', () => {
        if (product) addToCart(product);
      });
    }
  }, 100);
}); 