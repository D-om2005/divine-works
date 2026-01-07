// productdataandapplogic.js — Complete e-commerce app logic (SwiftUI-inspired)

// ===== PRODUCT DATA =====
window.PRODUCTS = [
  // Men's collection
  {
    id: "native-male-01",
    name: "Royal Kaftan — Sand",
    category: "men",
    type: "native",
    priceNGN: 65000,
    priceUSD: 85,
    priceGBP: 68,
    priceEUR: 78,
    sizes: ["S","M","L","XL","XXL"],
    image: "assets/native.svg",
    desc: "Hand-finished kaftan in desert-sand palette with tailored fit."
  },
  {
    id: "streetwear-male-01",
    name: "Urban Oversized Tee",
    category: "men",
    type: "streetwear",
    priceNGN: 18000,
    priceUSD: 24,
    priceGBP: 19,
    priceEUR: 22,
    sizes: ["XS","S","M","L","XL","XXL"],
    image: "assets/native.svg",
    desc: "100% cotton oversized tee with premium quality printing."
  },
  {
    id: "jersey-male-01",
    name: "Classic Sports Jersey",
    category: "men",
    type: "jerseys",
    priceNGN: 22000,
    priceUSD: 29,
    priceGBP: 23,
    priceEUR: 26,
    customizable: true,
    customizationFeeNGN: 3000,
    customizationFeeUSD: 4,
    customizationFeeGBP: 3,
    customizationFeeEUR: 4,
    sizes: ["S","M","L","XL","XXL"],
    image: "assets/native.svg",
    desc: "Breathable mesh jersey, perfect for casual wear."
  },
  {
    id: "jersey-male-02",
    name: "Retro Heritage Jersey",
    category: "men",
    type: "jerseys",
    priceNGN: 28000,
    priceUSD: 37,
    priceGBP: 29,
    priceEUR: 34,
    customizable: true,
    customizationFeeNGN: 3500,
    customizationFeeUSD: 4.5,
    customizationFeeGBP: 3.6,
    customizationFeeEUR: 4.2,
    sizes: ["S","M","L","XL","XXL"],
    image: "assets/native.svg",
    desc: "Vintage-inspired jersey with embroidered emblem."
  },
  // Women's collection
  {
    id: "native-female-01",
    name: "Aso Oke Set — Dawn",
    category: "women",
    type: "native",
    priceNGN: 95000,
    priceUSD: 125,
    priceGBP: 98,
    priceEUR: 115,
    sizes: ["S","M","L","XL"],
    image: "assets/native.svg",
    desc: "Elegant set with intricate weave, soft sheen, and modern cut."
  },
  {
    id: "native-female-02",
    name: "Elegance Wrapper — Sunset",
    category: "women",
    type: "native",
    priceNGN: 52000,
    priceUSD: 68,
    priceGBP: 54,
    priceEUR: 62,
    sizes: ["S","M","L","XL"],
    image: "assets/native.svg",
    desc: "Premium wrapper cloth with vibrant sunset palette."
  },
  {
    id: "streetwear-female-01",
    name: "Minimalist Cropped Top",
    category: "women",
    type: "streetwear",
    priceNGN: 16000,
    priceUSD: 21,
    priceGBP: 17,
    priceEUR: 19,
    sizes: ["XS","S","M","L","XL"],
    image: "assets/native.svg",
    desc: "Contemporary cropped top, perfect for layering."
  },
  {
    id: "jersey-female-01",
    name: "Athletic Performance Jersey",
    category: "women",
    type: "jerseys",
    priceNGN: 24000,
    priceUSD: 32,
    priceGBP: 25,
    priceEUR: 29,
    customizable: true,
    customizationFeeNGN: 3200,
    customizationFeeUSD: 4.2,
    customizationFeeGBP: 3.2,
    customizationFeeEUR: 3.6,
    sizes: ["XS","S","M","L","XL"],
    image: "assets/native.svg",
    desc: "Moisture-wicking performance jersey for active wear."
  },
  // New Arrivals
  {
    id: "new-01",
    name: "Fusion Jacket — Modern Blend",
    category: "new",
    type: "native",
    priceNGN: 75000,
    priceUSD: 99,
    priceGBP: 78,
    priceEUR: 90,
    sizes: ["S","M","L","XL"],
    image: "assets/native.svg",
    desc: "Bold fusion of traditional and contemporary design."
  },
  {
    id: "new-02",
    name: "Limited Edition Tee",
    category: "new",
    type: "streetwear",
    priceNGN: 12000,
    priceUSD: 16,
    priceGBP: 13,
    priceEUR: 15,
    sizes: ["S","M","L","XL","XXL"],
    image: "assets/native.svg",
    desc: "Exclusive design, only 500 pieces produced worldwide."
  }
  ,
  {
    id: "jersey-custom-01",
    name: "Custom Orange Jersey",
    category: "jerseys",
    type: "jerseys",
    priceNGN: 26000,
    priceUSD: 34,
    priceGBP: 27,
    priceEUR: 31,
    customizable: true,
    customizationFeeNGN: 3500,
    customizationFeeUSD: 4.5,
    customizationFeeGBP: 3.6,
    customizationFeeEUR: 4.2,
    sizes: ["S","M","L","XL","XXL"],
    image: "assets/jersey_custom.svg",
    desc: "Custom orange jersey inspired by traditional prints — personalize with name and number."
  }
];

// ===== CURRENCY & PRICE LOGIC =====
const CURRENCIES = {
  NGN: { symbol: "₦", rate: 1 },
  USD: { symbol: "$", rate: 0.0013 },
  GBP: { symbol: "£", rate: 0.00105 },
  EUR: { symbol: "€", rate: 0.0012 }
};

let currentCurrency = localStorage.getItem("currency") || "NGN";

function getPrice(product) {
  return product[`price${currentCurrency}`];
}

function formatPrice(price) {
  const currency = CURRENCIES[currentCurrency];
  return `${currency.symbol}${price.toLocaleString()}`;
}

// ===== CART MANAGEMENT =====
function getCart() {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

const GIFT_WRAP_FEES = { NGN: 2000, USD: 2.5, GBP: 2, EUR: 2.3 };

function addToCart(productId, size, options = {}) {
  if (!size) {
    showToast("Please select a size");
    return false;
  }

  const cart = getCart();
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return false;

  // compute customization fee (in current currency)
  let customFee = 0;
  if (product.customizable && options.customText) {
    customFee += product[`customizationFee${currentCurrency}`] || 0;
  }
  if (options.giftWrap) {
    customFee += GIFT_WRAP_FEES[currentCurrency] || 0;
  }

  // check for exact match (same size and same customization)
  const existingItem = cart.find(item => item.id === productId && item.size === size
    && (item.customText || '') === (options.customText || '')
    && (item.customNumber || '') === (options.customNumber || '')
    && !!item.giftWrap === !!options.giftWrap
  );

  if (existingItem) {
    existingItem.qty++;
  } else {
    const cartItem = { ...product, size, qty: 1 };
    if (options.customText) cartItem.customText = options.customText;
    if (options.customNumber) cartItem.customNumber = options.customNumber;
    if (options.giftWrap) cartItem.giftWrap = true;
    if (customFee) cartItem.customFee = customFee;
    cart.push(cartItem);
  }

  saveCart(cart);
  showToast(`${product.name} added to cart!`);
  return true;
}

function removeFromCart(productId, size) {
  let cart = getCart();
  cart = cart.filter(item => !(item.id === productId && item.size === size));
  saveCart(cart);
}

function updateCartQty(productId, size, qty) {
  const cart = getCart();
  const item = cart.find(i => i.id === productId && i.size === size);
  if (item) {
    item.qty = Math.max(1, qty);
    saveCart(cart);
  }
}

function getCartTotal() {
  return getCart().reduce((sum, item) => {
    const base = getPrice(item) || 0;
    const fee = item.customFee || 0;
    return sum + ((base + fee) * item.qty);
  }, 0);
}

// ===== PRODUCT RENDERING =====
function renderProducts(container, products = PRODUCTS) {
  container.innerHTML = "";
  if (products.length === 0) {
    container.innerHTML = '<div class="empty-state"><h3>No products found</h3><p>Try adjusting your filters.</p></div>';
    return;
  }
  
  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "card";
    const isLuxury = (product.priceNGN && product.priceNGN >= 70000) || product.category === 'new' || product.type === 'native';
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <div class="content">
        <div style="display:flex; align-items:center; justify-content:space-between; gap:12px;">
          <h3>${product.name}</h3>
          ${isLuxury ? '<span class="badge-lux">Luxury</span>' : ''}
        </div>
        <p>${product.desc.substring(0, 50)}...</p>
        <div class="price">${formatPrice(getPrice(product))}</div>
      </div>
    `;
    card.addEventListener("click", () => {
      localStorage.setItem("selectedProduct", product.id);
      window.location.href = "Productdetailpage.html";
    });
    container.appendChild(card);
  });
}

function renderProductDetail(container, productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) {
    container.innerHTML = '<div class="empty-state"><h3>Product not found</h3></div>';
    return;
  }

  let selectedSize = "";
  
  // Build base layout
  let html = `
    <div class="product-hero">
      <div class="gallery">
        <img src="${product.image}" alt="${product.name}" />
      </div>
      <div class="details">
        <h2>${product.name}</h2>
        <div class="price">${formatPrice(getPrice(product))}</div>
        <p>${product.desc}</p>
        <h4>Sizes</h4>
        <div id="size-list" class="size-grid"></div>
  `;

  // If jersey/customizable, add customization UI
  if (product.customizable) {
    const fee = product[`customizationFee${currentCurrency}`] || 0;
    html += `
      <h4 style="margin-top:12px;">Customization</h4>
      <div style="display:grid; gap:8px; margin-bottom:8px;">
        <input id="custom-text" placeholder="Name (e.g. A. Smith)" style="padding:10px; border-radius:10px; border:1px solid var(--border-light); background:var(--glass-muted); color:var(--text);" />
        <input id="custom-number" placeholder="Number (optional)" style="padding:10px; border-radius:10px; border:1px solid var(--border-light); background:var(--glass-muted); color:var(--text);" />
        <label style="display:flex; align-items:center; gap:8px;"><input id="gift-wrap" type="checkbox" /> Gift wrap (adds ${formatPrice(GIFT_WRAP_FEES[currentCurrency] || 0)})</label>
        <div style="color:var(--muted); font-size:13px;">Personalization fee: ${formatPrice(fee)}</div>
      </div>
    `;
  }

  html += `
        <div class="actions" style="margin-top:18px; display:flex; gap:12px;">
          <button class="btn primary" id="add-to-cart" style="flex:1;">Add to cart</button>
          <a class="btn" href="cartpage.html" style="flex:1; text-align:center; line-height:1.5;">View cart</a>
        </div>
      </div>
    </div>
  `;

  container.innerHTML = html;

  const sizeGrid = container.querySelector("#size-list");
  product.sizes.forEach(size => {
    const sizeBtn = document.createElement("button");
    sizeBtn.className = "size";
    sizeBtn.textContent = size;
    sizeBtn.addEventListener("click", () => {
      document.querySelectorAll(".size").forEach(b => b.classList.remove("active"));
      sizeBtn.classList.add("active");
      selectedSize = size;
    });
    sizeGrid.appendChild(sizeBtn);
  });

  container.querySelector("#add-to-cart").addEventListener("click", () => {
    const customTextEl = container.querySelector("#custom-text");
    const customNumberEl = container.querySelector("#custom-number");
    const giftWrapEl = container.querySelector("#gift-wrap");

    const options = {};
    if (product.customizable && customTextEl && customTextEl.value.trim()) options.customText = customTextEl.value.trim();
    if (product.customizable && customNumberEl && customNumberEl.value.trim()) options.customNumber = customNumberEl.value.trim();
    if (product.customizable && giftWrapEl && giftWrapEl.checked) options.giftWrap = true;

    if (addToCart(product.id, selectedSize, options)) {
      setTimeout(() => window.location.href = "cartpage.html", 800);
    }
  });
}

function renderCart(container) {
  const cart = getCart();
  const total = getCartTotal();
  
  if (cart.length === 0) {
    container.innerHTML = `
      <div class="empty-state" style="padding: 80px 20px;">
        <h3>Your cart is empty</h3>
        <p>Start shopping and add some items!</p>
        <a class="btn primary" href="Shoplisting.html" style="margin-top: 20px;">Continue shopping</a>
      </div>
    `;
    return;
  }
  
  let html = `<table class="cart-table"><thead><tr><th>Product</th><th>Size</th><th>Details</th><th>Price</th><th>Qty</th><th>Total</th><th></th></tr></thead><tbody>`;

  cart.forEach(item => {
    const basePrice = getPrice(item);
    const fee = item.customFee || 0;
    const itemTotal = (basePrice + fee) * item.qty;
    let details = "";
    if (item.customText) details += `Name: ${item.customText}`;
    if (item.customNumber) details += (details ? " | " : "") + `#${item.customNumber}`;
    if (item.giftWrap) details += (details ? " | " : "") + `Gift wrap`;

    html += `
      <tr>
        <td><strong>${item.name}</strong></td>
        <td>${item.size}</td>
        <td>${details || '-'}</td>
        <td>${formatPrice(basePrice + fee)}</td>
        <td><input type="number" value="${item.qty}" min="1" max="99" 
          onchange="window.updateCartQtyUI('${item.id}', '${item.size}', this.value)" 
          style="width:50px; padding:6px; border:1px solid var(--border-light); border-radius:8px; background:var(--glass-muted); color:var(--text);" /></td>
        <td>${formatPrice(itemTotal)}</td>
        <td><button class="btn" onclick="window.removeCartItemUI('${item.id}', '${item.size}')" style="padding:6px 10px; font-size:12px;">Remove</button></td>
      </tr>
    `;
  });
  
  html += `</tbody></table>`;
  html += `<div style="margin-top:24px; text-align:right;">
    <h3>Total: ${formatPrice(total)}</h3>
  </div>`;
  html += `<div class="cart-actions">
    <a class="btn" href="Shoplisting.html">Continue shopping</a>
    <a class="btn primary" href="checkoutpage.html">Proceed to checkout</a>
  </div>`;
  
  container.innerHTML = html;
}

function renderCheckout(container) {
  const cart = getCart();
  const total = getCartTotal();
  
  if (cart.length === 0) {
    container.innerHTML = '<div class="empty-state"><h3>Cart is empty</h3><a class="btn primary" href="Shoplisting.html">Shop now</a></div>';
    return;
  }
  
  let html = `<h2>Order Summary</h2><table class="cart-table"><thead><tr><th>Product</th><th>Size</th><th>Details</th><th>Qty</th><th>Total</th></tr></thead><tbody>`;

  cart.forEach(item => {
    const base = getPrice(item) || 0;
    const fee = item.customFee || 0;
    const itemTotal = (base + fee) * item.qty;
    let details = "";
    if (item.customText) details += `Name: ${item.customText}`;
    if (item.customNumber) details += (details ? " | " : "") + `#${item.customNumber}`;
    if (item.giftWrap) details += (details ? " | " : "") + `Gift wrap`;
    html += `<tr><td>${item.name}</td><td>${item.size}</td><td>${details || '-'}</td><td>${item.qty}</td><td>${formatPrice(itemTotal)}</td></tr>`;
  });
  
  html += `</tbody></table>`;
  html += `<div style="margin-top:28px; text-align:right;"><h3>Grand Total: ${formatPrice(total)}</h3></div>`;
  html += `<div class="actions" style="margin-top:28px; display:flex; gap:12px; justify-content:flex-end;">
    <button class="btn primary" onclick="processPayment('flutterwave')">Pay with Flutterwave</button>
    <button class="btn primary" onclick="processPayment('paystack')">Pay with Paystack</button>
    <button class="btn primary" onclick="processPayment('stripe')">Pay with Stripe</button>
  </div>`;
  
  container.innerHTML = html;
}

// ===== UI HELPERS =====
function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

// Simulated payment processor UI
function processPayment(provider) {
  // Create modal
  const modal = document.createElement('div');
  modal.style.position = 'fixed';
  modal.style.left = 0;
  modal.style.top = 0;
  modal.style.width = '100%';
  modal.style.height = '100%';
  modal.style.display = 'flex';
  modal.style.alignItems = 'center';
  modal.style.justifyContent = 'center';
  modal.style.background = 'rgba(0,0,0,0.45)';
  modal.style.zIndex = 2000;

  const card = document.createElement('div');
  card.style.background = 'var(--glass-bright)';
  card.style.padding = '24px';
  card.style.borderRadius = '12px';
  card.style.boxShadow = '0 20px 60px rgba(0,0,0,0.6)';
  card.style.minWidth = '320px';
  card.style.color = 'var(--text)';

  card.innerHTML = `<div style="text-align:center;"><h3 style="margin:0 0 8px;">${provider.toUpperCase()} — Payment</h3><p style="color:var(--muted); margin:0 0 12px;">Processing your payment securely...</p><div class="loading"></div></div>`;
  modal.appendChild(card);
  document.body.appendChild(modal);

  setTimeout(() => {
    // simulate success
    modal.querySelector('.loading').remove();
    card.innerHTML = `<div style="text-align:center;"><h3 style="margin:0 0 8px;">Payment successful</h3><p style="color:var(--muted);">Thank you — your order is confirmed.</p><button class="btn primary" id="close-pay">Continue</button></div>`;
    document.getElementById('close-pay').addEventListener('click', () => {
      document.body.removeChild(modal);
      // clear cart and redirect to thank-you
      saveCart([]);
      showToast('Order confirmed — cart cleared');
      window.location.href = 'index.html';
    });
  }, 1400);
}

// Global functions for onclick handlers
window.updateCartQtyUI = function(productId, size, qty) {
  updateCartQty(productId, size, parseInt(qty));
  location.reload();
};

window.removeCartItemUI = function(productId, size) {
  removeFromCart(productId, size);
  location.reload();
};

// ===== PAGE INIT =====
document.addEventListener("DOMContentLoaded", () => {
  const productGrid = document.getElementById("product-grid");
  const mainContent = document.querySelector("main");
  const currencySelect = document.getElementById("currency");
  
  // Currency selector
  if (currencySelect) {
    currencySelect.value = currentCurrency;
    currencySelect.addEventListener("change", (e) => {
      currentCurrency = e.target.value;
      localStorage.setItem("currency", currentCurrency);
      location.reload();
    });
  }
  
  // Shop page - Render products with category filtering
  if (productGrid) {
    const params = new URLSearchParams(window.location.search);
    const category = params.get("cat");
    const filtered = category ? PRODUCTS.filter(p => p.category === category) : PRODUCTS;
    renderProducts(productGrid, filtered);
  }
  
  // Product detail page
  if (mainContent && mainContent.classList.contains("section") && !productGrid) {
    const productId = localStorage.getItem("selectedProduct");
    if (productId) {
      renderProductDetail(mainContent, productId);
    }
  }
  
  // Cart page
  const cartContent = document.getElementById("cart-content");
  if (cartContent) {
    renderCart(cartContent);
  }
  
  // Checkout page
  const checkoutContent = document.getElementById("checkout-content");
  if (checkoutContent) {
    renderCheckout(checkoutContent);
  }
  
  // Home page - Featured collections
  const homeCollections = document.getElementById("home-collections");
  if (homeCollections) {
    renderProducts(homeCollections, PRODUCTS.slice(0, 6));
  }
});
