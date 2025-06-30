// Checkout Cellular Hub - Only dynamic cart-based checkout

function formatRupiah(number) {
  return 'Rp ' + number.toLocaleString('id-ID');
}

function renderCheckoutProducts() {
  const list = document.getElementById('checkout-products-list');
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  if (!list) return;
  if (cart.length === 0) {
    list.innerHTML = '<div style="padding:1.5rem; text-align:center; color:#888;">Keranjang kosong.</div>';
    return;
  }
  list.innerHTML = cart.map(item => `
    <div class="produk-box">
      <div class="produk-img"><img src="${item.image}" alt="${item.name}"></div>
      <div class="produk-info">
        <div class="produk-nama">${item.name}</div>
        <div class="produk-harga">${formatRupiah(item.price)} x ${item.quantity}</div>
      </div>
    </div>
  `).join('');
}

function renderCheckoutSummary(shippingValue = 'reg') {
  const summary = document.getElementById('checkout-summary-list');
  const totalSummary = document.getElementById('total-summary');
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  if (!summary || !totalSummary) return;
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = shippingValue === 'hemat' ? 5000 : 10000;
  const service = 1000;
  summary.innerHTML = `
    <div class="rincian-row"><span>Subtotal Produk</span><span>${formatRupiah(subtotal)}</span></div>
    <div class="rincian-row"><span>Subtotal Pengiriman</span><span id="shipping-summary">${formatRupiah(shipping)}</span></div>
    <div class="rincian-row"><span>Biaya Layanan</span><span>${formatRupiah(service)}</span></div>
  `;
  totalSummary.textContent = formatRupiah(subtotal + shipping + service);
}

function setupShippingChange() {
  const radios = document.querySelectorAll('input[name="shipping"]');
  radios.forEach(radio => {
    radio.addEventListener('change', function() {
      renderCheckoutSummary(this.value);
    });
  });
}

function showThankYouMessage() {
  document.body.innerHTML = `
    <div style="min-height:100vh;display:flex;align-items:center;justify-content:center;background:#f9f8f6;">
      <div style="background:#fff;padding:3rem 2.5rem;border-radius:18px;box-shadow:0 2px 12px rgba(0,0,0,0.06);text-align:center;">
        <h1 style="font-size:2.5rem;color:#667eea;margin-bottom:1.2rem;">Thank you for your order!</h1>
        <p style="font-size:1.2rem;color:#444;">Pesanan Anda telah diterima.<br>Anda akan diarahkan ke halaman utama...</p>
      </div>
    </div>
  `;
  localStorage.removeItem('cart');
  setTimeout(() => {
    window.location.href = 'index.html';
  }, 3000);
}

document.addEventListener('DOMContentLoaded', function() {
  renderCheckoutProducts();
  renderCheckoutSummary();
  setupShippingChange();
  const orderBtn = document.querySelector('.buat-pesanan-btn');
  if (orderBtn) {
    orderBtn.addEventListener('click', function(e) {
      e.preventDefault();
      showThankYouMessage();
    });
  }
}); 