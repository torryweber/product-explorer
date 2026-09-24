// ===== Sample Product Data =====
const DATA = {
  brands: [
    {
      id: "apple",
      name: "Apple",
      icon: "🍎",
      color: "linear-gradient(135deg, #333 0%, #111 100%)",
      categories: [
        {
          id: "iphone",
          name: "iPhone",
          icon: "📱",
          color: "linear-gradient(135deg, #007aff, #0051a8)",
          products: [
            { id: "ip16pro", name: "iPhone 16 Pro", price: "$999", emoji: "📱", desc: "Titanium design. A18 Pro chip. Camera Control. The most advanced iPhone ever.", tag: "New" },
            { id: "ip16", name: "iPhone 16", price: "$799", emoji: "📱", desc: "A18 chip. Camera Control. Longer battery life. Built for Apple Intelligence.", tag: "Popular" },
            { id: "ip15", name: "iPhone 15", price: "$699", emoji: "📱", desc: "Dynamic Island. 48MP camera. USB-C. Still an excellent choice.", tag: null },
            { id: "ipse", name: "iPhone SE", price: "$429", emoji: "📱", desc: "Powerful A15 chip in a classic design. Most affordable iPhone.", tag: "Value" }
          ]
        },
        {
          id: "mac",
          name: "Mac",
          icon: "💻",
          color: "linear-gradient(135deg, #86868b, #515154)",
          products: [
            { id: "mba", name: "MacBook Air M3", price: "$1,099", emoji: "💻", desc: "Incredibly thin and light. All-day battery. M3 performance.", tag: "Best Seller" },
            { id: "mbp", name: "MacBook Pro 14\"", price: "$1,599", emoji: "💻", desc: "M4 Pro chip. Liquid Retina XDR. Pro performance anywhere.", tag: "Pro" },
            { id: "imac", name: "iMac 24\"", price: "$1,299", emoji: "🖥️", desc: "Stunning 4.5K display. M3 chip. Seven vibrant colors.", tag: null },
            { id: "macmini", name: "Mac mini", price: "$599", emoji: "🖥️", desc: "Desktop power in a tiny form. M4 chip. Versatile ports.", tag: "Value" }
          ]
        },
        {
          id: "watch",
          name: "Watch",
          icon: "⌚️",
          color: "linear-gradient(135deg, #ff2d55, #c9184a)",
          products: [
            { id: "s10", name: "Apple Watch Series 10", price: "$399", emoji: "⌚️", desc: "Thinnest ever. Bigger display. Advanced health sensors.", tag: "New" },
            { id: "ultra2", name: "Apple Watch Ultra 2", price: "$799", emoji: "⌚️", desc: "Titanium. 36-hour battery. Precision dual-frequency GPS.", tag: "Adventure" },
            { id: "se", name: "Apple Watch SE", price: "$249", emoji: "⌚️", desc: "Essential features. Crash Detection. Great value.", tag: "Value" }
          ]
        },
        {
          id: "airpods",
          name: "AirPods",
          icon: "🎧",
          color: "linear-gradient(135deg, #fff, #e0e0e0)",
          products: [
            { id: "ap4", name: "AirPods 4", price: "$129", emoji: "🎧", desc: "Open-ear design. Active Noise Cancellation option. USB-C.", tag: "New" },
            { id: "appro", name: "AirPods Pro 2", price: "$249", emoji: "🎧", desc: "Adaptive Audio. Transparency. Best-in-class ANC.", tag: "Pro" },
            { id: "apmax", name: "AirPods Max", price: "$549", emoji: "🎧", desc: "Over-ear. Computational audio. Premium materials.", tag: null }
          ]
        }
      ]
    },
    {
      id: "nike",
      name: "Nike",
      icon: "✔️",
      color: "linear-gradient(135deg, #111, #333)",
      categories: [
        {
          id: "running",
          name: "Running",
          icon: "🏃",
          color: "linear-gradient(135deg, #ff6b00, #e55a00)",
          products: [
            { id: "pegasus", name: "Nike Pegasus 41", price: "$140", emoji: "👟", desc: "Responsive cushioning. Breathable mesh. Everyday running staple.", tag: "Best Seller" },
            { id: "invincible", name: "Invincible 3", price: "$180", emoji: "👟", desc: "Maximum ZoomX foam. Softest ride for long distances.", tag: "Cushion" },
            { id: "vaporfly", name: "Vaporfly 3", price: "$260", emoji: "👟", desc: "Carbon plate. Race-day speed. Official marathon favorite.", tag: "Race" }
          ]
        },
        {
          id: "lifestyle",
          name: "Lifestyle",
          icon: "👟",
          color: "linear-gradient(135deg, #000, #444)",
          products: [
            { id: "airforce", name: "Air Force 1 '07", price: "$110", emoji: "👟", desc: "The icon that started it all. Timeless style.", tag: "Icon" },
            { id: "dunk", name: "Dunk Low", price: "$115", emoji: "👟", desc: "Classic basketball silhouette. Endless colorways.", tag: "Popular" },
            { id: "blazer", name: "Blazer Mid '77", price: "$105", emoji: "👟", desc: "Vintage-inspired. Clean lines. Everyday versatility.", tag: null }
          ]
        },
        {
          id: "apparel",
          name: "Apparel",
          icon: "👕",
          color: "linear-gradient(135deg, #222, #555)",
          products: [
            { id: "techfleece", name: "Tech Fleece Hoodie", price: "$130", emoji: "🧥", desc: "Lightweight warmth. Modern fit. Signature Nike look.", tag: "Best Seller" },
            { id: "dri-fit", name: "Dri-FIT Tee", price: "$35", emoji: "👕", desc: "Sweat-wicking. Soft hand-feel. Everyday training.", tag: null },
            { id: "shorts", name: "Challenge Court Shorts", price: "$45", emoji: "🩳", desc: "Breathable. Stretch. Built for movement.", tag: null }
          ]
        }
      ]
    },
    {
      id: "samsung",
      name: "Samsung",
      icon: "📱",
      color: "linear-gradient(135deg, #1428a0, #0d1a6b)",
      categories: [
        {
          id: "galaxy",
          name: "Galaxy Phones",
          icon: "📱",
          color: "linear-gradient(135deg, #1428a0, #0057b8)",
          products: [
            { id: "s24u", name: "Galaxy S24 Ultra", price: "$1,299", emoji: "📱", desc: "Titanium. S Pen. 200MP camera. Galaxy AI.", tag: "Flagship" },
            { id: "s24", name: "Galaxy S24", price: "$799", emoji: "📱", desc: "Compact power. Bright display. Galaxy AI features.", tag: "Popular" },
            { id: "zfold", name: "Galaxy Z Fold6", price: "$1,899", emoji: "📱", desc: "Unfolded productivity. Slimmer design. Multitasking king.", tag: "Fold" }
          ]
        },
        {
          id: "tv",
          name: "TVs",
          icon: "📺",
          color: "linear-gradient(135deg, #1a1a1a, #333)",
          products: [
            { id: "qn90", name: "QN90D Neo QLED", price: "$1,799", emoji: "📺", desc: "Mini-LED. 4K. Anti-reflection. Brightest picture.", tag: "Premium" },
            { id: "s90", name: "S90D OLED", price: "$1,499", emoji: "📺", desc: "True blacks. Infinite contrast. Cinema-ready.", tag: "OLED" }
          ]
        },
        {
          id: "buds",
          name: "Galaxy Buds",
          icon: "🎧",
          color: "linear-gradient(135deg, #5b5b5b, #2d2d2d)",
          products: [
            { id: "buds3pro", name: "Galaxy Buds3 Pro", price: "$249", emoji: "🎧", desc: "Intelligent ANC. 360 Audio. Seamless Galaxy pairing.", tag: "New" },
            { id: "budsfe", name: "Galaxy Buds FE", price: "$99", emoji: "🎧", desc: "Great sound. Solid ANC. Excellent value.", tag: "Value" }
          ]
        }
      ]
    },
    {
      id: "sony",
      name: "Sony",
      icon: "🎮",
      color: "linear-gradient(135deg, #000, #1a1a1a)",
      categories: [
        {
          id: "playstation",
          name: "PlayStation",
          icon: "🎮",
          color: "linear-gradient(135deg, #003087, #001a4d)",
          products: [
            { id: "ps5", name: "PlayStation 5", price: "$499", emoji: "🎮", desc: "Ultra-high speed SSD. DualSense. Immersive 4K gaming.", tag: "Console" },
            { id: "ps5pro", name: "PS5 Pro", price: "$699", emoji: "🎮", desc: "Enhanced ray tracing. 4K/60 with PSSR. Future-ready.", tag: "Pro" },
            { id: "portal", name: "PlayStation Portal", price: "$199", emoji: "📱", desc: "Remote play handheld. DualSense built-in. Stream your PS5.", tag: null }
          ]
        },
        {
          id: "audio",
          name: "Audio",
          icon: "🎧",
          color: "linear-gradient(135deg, #333, #111)",
          products: [
            { id: "wh1000", name: "WH-1000XM5", price: "$398", emoji: "🎧", desc: "Industry-leading noise canceling. 30-hour battery. Premium comfort.", tag: "Best Seller" },
            { id: "wf1000", name: "WF-1000XM5", price: "$298", emoji: "🎧", desc: "Best ANC in earbuds. Hi-Res Audio. Crystal clear calls.", tag: "Pro" }
          ]
        },
        {
          id: "cameras",
          name: "Cameras",
          icon: "📷",
          color: "linear-gradient(135deg, #444, #222)",
          products: [
            { id: "a7iv", name: "Alpha 7 IV", price: "$2,498", emoji: "📷", desc: "33MP full-frame. 4K60. Hybrid photo/video powerhouse.", tag: "Hybrid" },
            { id: "zv1", name: "ZV-1 II", price: "$899", emoji: "📷", desc: "Vlogging king. Wide lens. Product Showcase setting.", tag: "Creator" }
          ]
        }
      ]
    },
    {
      id: "adidas",
      name: "Adidas",
      icon: "🔺",
      color: "linear-gradient(135deg, #000, #222)",
      categories: [
        {
          id: "sneakers",
          name: "Sneakers",
          icon: "👟",
          color: "linear-gradient(135deg, #000, #333)",
          products: [
            { id: "samba", name: "Samba OG", price: "$100", emoji: "👟", desc: "Football heritage. Street icon. Timeless silhouette.", tag: "Icon" },
            { id: "ultraboost", name: "Ultraboost 1.0", price: "$190", emoji: "👟", desc: "Boost cushioning. Primeknit upper. Energy return.", tag: "Cushion" },
            { id: "gazelle", name: "Gazelle Indoor", price: "$100", emoji: "👟", desc: "Suede classic. Retro vibes. Everyday comfort.", tag: "Popular" }
          ]
        },
        {
          id: "sportswear",
          name: "Sportswear",
          icon: "👕",
          color: "linear-gradient(135deg, #1a1a1a, #444)",
          products: [
            { id: "tiro", name: "Tiro 24 Pants", price: "$45", emoji: "👖", desc: "AEROREADY. Slim fit. Training essential.", tag: null },
            { id: "essentials", name: "Essentials Hoodie", price: "$60", emoji: "🧥", desc: "Soft fleece. Classic logo. Everyday comfort.", tag: "Basic" }
          ]
        }
      ]
    },
    {
      id: "dyson",
      name: "Dyson",
      icon: "💨",
      color: "linear-gradient(135deg, #6e2c00, #3d1600)",
      categories: [
        {
          id: "vacuums",
          name: "Vacuums",
          icon: "🧹",
          color: "linear-gradient(135deg, #6e2c00, #4a1c00)",
          products: [
            { id: "v15", name: "V15 Detect", price: "$749", emoji: "🧹", desc: "Laser dust detection. Piezo sensor. Deep clean power.", tag: "Flagship" },
            { id: "gen5", name: "Gen5detect", price: "$849", emoji: "🧹", desc: "Most powerful cordless. HEPA filtration. Real-time counts.", tag: "New" }
          ]
        },
        {
          id: "hair",
          name: "Hair Care",
          icon: "💇",
          color: "linear-gradient(135deg, #8b4513, #5c2e0a)",
          products: [
            { id: "airwrap", name: "Airwrap Multi-styler", price: "$599", emoji: "💨", desc: "Style with air. No extreme heat. Multiple attachments.", tag: "Best Seller" },
            { id: "supersonic", name: "Supersonic Hair Dryer", price: "$429", emoji: "💨", desc: "Fast drying. Intelligent heat control. Lightweight.", tag: "Icon" }
          ]
        },
        {
          id: "air",
          name: "Air Treatment",
          icon: "🌬️",
          color: "linear-gradient(135deg, #2c5f2d, #1a3a1b)",
          products: [
            { id: "hp09", name: "Purifier Hot+Cool", price: "$799", emoji: "🌬️", desc: "Purifies. Heats. Cools. HEPA H13. Auto mode.", tag: "All-in-one" }
          ]
        }
      ]
    },
    {
      id: "bose",
      name: "Bose",
      icon: "🔊",
      color: "linear-gradient(135deg, #1a1a1a, #000)",
      categories: [
        {
          id: "headphones",
          name: "Headphones",
          icon: "🎧",
          color: "linear-gradient(135deg, #222, #000)",
          products: [
            { id: "qcultra", name: "QuietComfort Ultra", price: "$429", emoji: "🎧", desc: "World-class ANC. Immersive Audio. All-day comfort.", tag: "Flagship" },
            { id: "qc45", name: "QuietComfort 45", price: "$329", emoji: "🎧", desc: "Iconic comfort. Excellent noise canceling. Reliable classic.", tag: "Popular" }
          ]
        },
        {
          id: "speakers",
          name: "Speakers",
          icon: "🔈",
          color: "linear-gradient(135deg, #333, #111)",
          products: [
            { id: "soundlink", name: "SoundLink Flex", price: "$149", emoji: "🔈", desc: "Rugged. Waterproof. Surprisingly big sound.", tag: "Portable" },
            { id: "s1pro", name: "S1 Pro+", price: "$699", emoji: "🔈", desc: "Pro portable. Multi-position. Party-ready power.", tag: "Pro" }
          ]
        }
      ]
    },
    {
      id: "lego",
      name: "LEGO",
      icon: "🧱",
      color: "linear-gradient(135deg, #e3000b, #a80008)",
      categories: [
        {
          id: "technics",
          name: "Technic",
          icon: "⚙️",
          color: "linear-gradient(135deg, #ff6b00, #cc5500)",
          products: [
            { id: "porsche", name: "Porsche 911 RSR", price: "$149", emoji: "🏎️", desc: "1,580 pieces. Detailed engine. Authentic livery.", tag: "Advanced" },
            { id: "bugatti", name: "Bugatti Bolide", price: "$99", emoji: "🏎️", desc: "Hypercar build. Working features. Display stand.", tag: null }
          ]
        },
        {
          id: "icons",
          name: "Icons",
          icon: "🏛️",
          color: "linear-gradient(135deg, #0055a4, #003366)",
          products: [
            { id: "taj", name: "Taj Mahal", price: "$119", emoji: "🕌", desc: "2,022 pieces. Architectural beauty. Display masterpiece.", tag: "Landmark" },
            { id: "flower", name: "Flower Bouquet", price: "$59", emoji: "💐", desc: "Botanical collection. Forever blooms. Beautiful gift.", tag: "Popular" }
          ]
        },
        {
          id: "starwars",
          name: "Star Wars",
          icon: "⭐",
          color: "linear-gradient(135deg, #000, #1a1a2e)",
          products: [
            { id: "xwing", name: "X-Wing Starfighter", price: "$79", emoji: "🚀", desc: "Classic Rebel fighter. Minifigures included.", tag: "Classic" },
            { id: "at-at", name: "AT-AT", price: "$159", emoji: "🤖", desc: "Imperial walker. Highly detailed. Epic scale.", tag: null }
          ]
        }
      ]
    }
  ]
};

// ===== State =====
let currentBrand = null;
let currentCategory = null;
let currentProduct = null;
let previousScreen = "home";
let cart = [];

// ===== DOM Refs =====
const screens = {
  home: document.getElementById("home-screen"),
  categories: document.getElementById("categories-screen"),
  products: document.getElementById("products-screen"),
  detail: document.getElementById("detail-screen"),
  cart: document.getElementById("cart-screen")
};

const brandsGrid = document.getElementById("brands-grid");
const categoriesGrid = document.getElementById("categories-grid");
const productsGrid = document.getElementById("products-grid");
const productDetail = document.getElementById("product-detail");
const cartContent = document.getElementById("cart-content");
const statusBar = document.querySelector(".status-bar");

// ===== Helpers =====
function updateTime() {
  const now = new Date();
  const h = now.getHours();
  const m = now.getMinutes().toString().padStart(2, "0");
  document.getElementById("status-time").textContent = `${h}:${m}`;
}

function parsePrice(priceStr) {
  return parseFloat(priceStr.replace(/[$,]/g, "")) || 0;
}

function formatPrice(num) {
  return "$" + num.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

function showScreen(name) {
  const currentActive = document.querySelector(".screen.active");
  const next = screens[name];
  if (currentActive && currentActive !== next) {
    currentActive.classList.add("leaving");
    currentActive.classList.remove("active");
    setTimeout(() => {
      currentActive.classList.remove("leaving");
      currentActive.style.visibility = "hidden";
    }, 340);
  }
  next.classList.remove("leaving");
  next.style.visibility = "visible";
  next.classList.add("active");
  if (name === "home") statusBar.classList.remove("dark");
  else statusBar.classList.add("dark");
  if (name !== "cart") previousScreen = name;
}

// ===== Cart Logic =====
function getCartCount() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

function getCartTotal() {
  return cart.reduce((sum, item) => sum + item.priceNum * item.qty, 0);
}

function updateCartBadges() {
  const count = getCartCount();
  ["cart-badge-cat", "cart-badge-prod", "cart-badge-detail"].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.textContent = count > 99 ? "99+" : count;
    if (count > 0) el.classList.add("show");
    else el.classList.remove("show");
  });
}

function addToCart(product) {
  const existing = cart.find(i => i.id === product.id);
  if (existing) existing.qty += 1;
  else cart.push({ id: product.id, name: product.name, price: product.price, priceNum: parsePrice(product.price), emoji: product.emoji, qty: 1 });
  updateCartBadges();
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(i => i.id !== id);
  updateCartBadges();
  renderCart();
}

function renderCart() {
  if (cart.length === 0) {
    cartContent.innerHTML = `<div class="cart-empty"><div class="empty-icon">🛒</div><h3>Your cart is empty</h3><p>Browse products and add something you like</p></div>`;
    return;
  }
  const itemsHtml = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-emoji">${item.emoji}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${item.price}</div>
      </div>
      <div class="cart-item-qty">
        <button class="qty-btn" data-id="${item.id}" data-delta="-1">−</button>
        <span class="qty-num">${item.qty}</span>
        <button class="qty-btn" data-id="${item.id}" data-delta="1">+</button>
      </div>
    </div>`).join("");
  const total = getCartTotal();
  cartContent.innerHTML = `${itemsHtml}<div class="cart-footer"><div class="cart-total-row"><span class="cart-total-label">Total</span><span class="cart-total-value">${formatPrice(total)}</span></div><button class="checkout-btn" id="checkout-btn">Checkout</button></div>`;
  cartContent.querySelectorAll(".qty-btn").forEach(btn => {
    btn.addEventListener("click", () => changeQty(btn.dataset.id, parseInt(btn.dataset.delta, 10)));
  });
  const checkoutBtn = document.getElementById("checkout-btn");
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      alert(`Thanks! Your order total is ${formatPrice(total)}. (Demo only)`);
      cart = [];
      updateCartBadges();
      renderCart();
    });
  }
}

// ===== Render Functions =====
function renderBrands(filter = "") {
  brandsGrid.innerHTML = "";
  const q = filter.trim().toLowerCase();
  const list = DATA.brands.filter(b => !q || b.name.toLowerCase().includes(q));
  if (list.length === 0) {
    brandsGrid.innerHTML = `<p style="grid-column:1/-1;text-align:center;color:rgba(255,255,255,0.6);padding:40px 0;">No brands found</p>`;
    return;
  }
  list.forEach((brand, i) => {
    const item = document.createElement("div");
    item.className = "icon-item";
    item.style.animationDelay = `${i * 0.03}s`;
    item.innerHTML = `<div class="icon" style="background: ${brand.color}">${brand.icon}</div><span class="icon-label">${brand.name}</span>`;
    item.addEventListener("click", () => openBrand(brand));
    brandsGrid.appendChild(item);
  });
}

function renderCategories(brand) {
  categoriesGrid.innerHTML = "";
  document.getElementById("brand-title").textContent = brand.name;
  brand.categories.forEach((cat, i) => {
    const item = document.createElement("div");
    item.className = "icon-item";
    item.style.animationDelay = `${i * 0.04}s`;
    item.innerHTML = `<div class="icon" style="background: ${cat.color}">${cat.icon}</div><span class="icon-label">${cat.name}</span>`;
    item.addEventListener("click", () => openCategory(cat));
    categoriesGrid.appendChild(item);
  });
}

function renderProducts(category, filter = "") {
  productsGrid.innerHTML = "";
  document.getElementById("category-title").textContent = category.name;
  document.getElementById("back-category-label").textContent = currentBrand.name;
  const q = filter.trim().toLowerCase();
  const list = category.products.filter(p => !q || p.name.toLowerCase().includes(q));
  if (list.length === 0) {
    productsGrid.innerHTML = `<p style="grid-column:1/-1;text-align:center;color:#8e8e93;padding:40px 0;">No products found</p>`;
    return;
  }
  list.forEach((prod, i) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.style.animationDelay = `${i * 0.05}s`;
    card.innerHTML = `<div class="product-image">${prod.emoji}</div><div class="product-info"><div class="product-name">${prod.name}</div><div class="product-price">${prod.price}</div>${prod.tag ? `<span class="product-tag">${prod.tag}</span>` : ""}</div>`;
    card.addEventListener("click", () => openProduct(prod));
    productsGrid.appendChild(card);
  });
}

function renderDetail(product) {
  document.getElementById("detail-title").textContent = product.name;
  productDetail.innerHTML = `<div class="detail-hero">${product.emoji}</div><div class="detail-info"><h3>${product.name}</h3><div class="detail-price">${product.price}</div><p class="detail-desc">${product.desc}</p><div class="detail-meta"><span class="meta-chip">${currentBrand.name}</span><span class="meta-chip">${currentCategory.name}</span>${product.tag ? `<span class="meta-chip">${product.tag}</span>` : ""}</div><button class="cta-btn" id="add-to-cart">Add to Cart</button></div>`;
  const cartBtn = document.getElementById("add-to-cart");
  cartBtn.addEventListener("click", () => {
    if (cartBtn.classList.contains("added")) return;
    addToCart(product);
    cartBtn.classList.add("added");
    cartBtn.textContent = "Added ✓";
    setTimeout(() => { cartBtn.classList.remove("added"); cartBtn.textContent = "Add to Cart"; }, 1400);
  });
}

// ===== Navigation =====
function openBrand(brand) {
  currentBrand = brand;
  renderCategories(brand);
  showScreen("categories");
}

function openCategory(category) {
  currentCategory = category;
  document.getElementById("product-search").value = "";
  renderProducts(category);
  showScreen("products");
}

function openProduct(product) {
  currentProduct = product;
  renderDetail(product);
  showScreen("detail");
}

function openCart() {
  renderCart();
  showScreen("cart");
}

// ===== Event Listeners =====
document.getElementById("back-to-home").addEventListener("click", () => { currentBrand = null; showScreen("home"); });
document.getElementById("back-to-categories").addEventListener("click", () => { currentCategory = null; showScreen("categories"); });
document.getElementById("back-to-products").addEventListener("click", () => { currentProduct = null; showScreen("products"); });
document.getElementById("back-from-cart").addEventListener("click", () => { showScreen(previousScreen || "home"); });

["cart-btn-cat", "cart-btn-prod", "cart-btn-detail"].forEach(id => {
  const btn = document.getElementById(id);
  if (btn) btn.addEventListener("click", openCart);
});

document.getElementById("home-search").addEventListener("input", (e) => renderBrands(e.target.value));
document.getElementById("product-search").addEventListener("input", (e) => {
  if (currentCategory) renderProducts(currentCategory, e.target.value);
});

// ===== Init =====
updateTime();
setInterval(updateTime, 30000);
renderBrands();
updateCartBadges();
showScreen("home");
