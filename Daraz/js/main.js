document.addEventListener("DOMContentLoaded", () => {
  let cartCount = 0;
  const cartBadge = document.querySelector(".cart-count");

  // 1. Categories Data
  const categories = [
    { name: "Mobiles", icon: "fa-mobile-screen-button", color: "#f85606", bg: "#fff2ed" },
    { name: "Laptops", icon: "fa-laptop", color: "#2a9d8f", bg: "#e8f7f5" },
    { name: "Watches", icon: "fa-stopwatch", color: "#457b9d", bg: "#edf5fa" },
    { name: "Audio", icon: "fa-headphones", color: "#6a4c93", bg: "#f3edf7" },
    { name: "Cameras", icon: "fa-camera", color: "#f4a261", bg: "#fef6ee" },
    { name: "Gaming", icon: "fa-gamepad", color: "#e63946", bg: "#fdeced" },
    { name: "Shoes", icon: "fa-shoe-prints", color: "#355070", bg: "#edf1f5" },
    { name: "Fashion", icon: "fa-shirt", color: "#d90429", bg: "#fce6e9" },
  ];

  const catContainer = document.getElementById("categoriesGrid");
  if (catContainer) {
    catContainer.innerHTML = categories.map(cat => `
      <div class="category-card">
        <div class="category-img" style="background-color: ${cat.bg}; color: ${cat.color};">
          <i class="fa-solid ${cat.icon}"></i>
        </div>
        <span class="category-name">${cat.name}</span>
      </div>
    `).join("");
  }

  // 2. Just For You Data with Working Online Product Photos
  const products = [
    { 
      id: 101, 
      title: "M10 Wireless TWS Bluetooth Earbuds Touch Sensor Digital Display", 
      price: 849, 
      oldPrice: 1999, 
      discount: "-58%", 
      rating: 4.8, 
      reviews: 432, 
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format&fit=crop&q=80" 
    },
    { 
      id: 102, 
      title: "Smart Watch Ultra 8 Display Wireless Charging Sports Fitness Tracker", 
      price: 1799, 
      oldPrice: 3500, 
      discount: "-49%", 
      rating: 4.6, 
      reviews: 189, 
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=80" 
    },
    { 
      id: 103, 
      title: "Men Casual Lightweight Running Sneakers Sports Shoes", 
      price: 1450, 
      oldPrice: 2800, 
      discount: "-48%", 
      rating: 4.5, 
      reviews: 95, 
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=80" 
    },
    { 
      id: 104, 
      title: "Rechargeable RGB Wireless Ergonomic Optical Gaming Mouse 3200 DPI", 
      price: 699, 
      oldPrice: 1200, 
      discount: "-42%", 
      rating: 4.7, 
      reviews: 310, 
      image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&auto=format&fit=crop&q=80" 
    },
    { 
      id: 105, 
      title: "Heavy Bass Foldable Bluetooth Wireless Stereo Headphone with Mic", 
      price: 2199, 
      oldPrice: 4200, 
      discount: "-48%", 
      rating: 4.9, 
      reviews: 520, 
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=80" 
    },
    { 
      id: 106, 
      title: "Wireless Bluetooth Surround Sound Portable Stereo Speaker", 
      price: 1899, 
      oldPrice: 3800, 
      discount: "-50%", 
      rating: 4.7, 
      reviews: 215, 
      image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500&auto=format&fit=crop&q=80" 
    },
    
    { 
      id: 107, 
      title: "Polarized Sunglasses Men Women Classic UV400 Protection Sun Glasses", 
      price: 499, 
      oldPrice: 1100, 
      discount: "-55%", 
      rating: 4.3, 
      reviews: 132, 
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&auto=format&fit=crop&q=80" 
    },
    { 
      id: 108, 
      title: "Stainless Steel Double Vacuum Insulated Thermal Water Bottle 750ml", 
      price: 890, 
      oldPrice: 1600, 
      discount: "-44%", 
      rating: 4.8, 
      reviews: 88, 
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&auto=format&fit=crop&q=80" 
    },
    { 
      id: 109, 
      title: "RGB Backlit Mechanical Feeling USB Wired Gaming Keyboard", 
      price: 1299, 
      oldPrice: 2200, 
      discount: "-41%", 
      rating: 4.5, 
      reviews: 175, 
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop&q=80" 
    },
    { 
      id: 110, 
      title: "Multi-Angle Adjustable Aluminum Desk Stand for Tablets & Mobile Phones", 
      price: 349, 
      oldPrice: 850, 
      discount: "-59%", 
      rating: 4.6, 
      reviews: 210, 
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&auto=format&fit=crop&q=80" 
    },
    { 
      id: 111, 
      title: "Men Casual Cotton Polo T-Shirt Breathable Summer Short Sleeve", 
      price: 799, 
      oldPrice: 1500, 
      discount: "-47%", 
      rating: 4.4, 
      reviews: 114, 
      image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500&auto=format&fit=crop&q=80" 
    },
    { 
      id: 112, 
      title: "Universal Flexible 360 Rotation Car Dashboard Phone Holder Stand", 
      price: 399, 
      oldPrice: 899, 
      discount: "-56%", 
      rating: 4.4, 
      reviews: 79, 
      image: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=500&auto=format&fit=crop&q=80" 
    }
  ];

  const prodContainer = document.getElementById("productsGrid");
  function renderProducts(items) {
    if (!prodContainer) return;
    prodContainer.innerHTML += items.map(p => `
      <div class="product-card">
        <div class="card-img-wrap">
          <img src="${p.image}" alt="${p.title}" loading="lazy" />
          <span class="discount-badge">${p.discount}</span>
        </div>
        <div class="card-info">
          <div class="card-title">${p.title}</div>
          <div class="card-price">Rs. ${p.price.toLocaleString()}</div>
          <div class="card-original-price">
            <span class="old-price">Rs. ${p.oldPrice.toLocaleString()}</span>
          </div>
          <div class="card-rating">
            <div class="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star-half-stroke"></i>
            </div>
            <span class="rating-count">(${p.reviews})</span>
          </div>
          <button class="add-cart-btn" data-id="${p.id}"><i class="fa-solid fa-cart-plus"></i> Add to Cart</button>
        </div>
      </div>
    `).join("");

    attachCartEvents();
  }

  function attachCartEvents() {
    document.querySelectorAll(".add-cart-btn").forEach(btn => {
      btn.onclick = () => {
        cartCount++;
        if (cartBadge) cartBadge.textContent = cartCount;
        btn.textContent = "Added ✓";
        btn.style.backgroundColor = "var(--daraz-orange)";
        btn.style.color = "#fff";
        setTimeout(() => {
          btn.innerHTML = `<i class="fa-solid fa-cart-plus"></i> Add to Cart`;
          btn.style.backgroundColor = "#fff4ed";
          btn.style.color = "var(--daraz-orange)";
        }, 1200);
      };
    });
  }

  // Initial load
  renderProducts(products);

  // Load More Button
  const loadBtn = document.getElementById("loadMoreBtn");
  if (loadBtn) {
    loadBtn.addEventListener("click", () => {
      renderProducts(products.slice(0, 6));
    });
  }

  // Search Functionality
  const searchInput = document.getElementById("searchInput");
  const searchBtn = document.getElementById("searchBtn");

  function handleSearch() {
    const term = searchInput.value.trim().toLowerCase();
    const allCards = document.querySelectorAll("#productsGrid .product-card");

    allCards.forEach(card => {
      const title = card.querySelector(".card-title").textContent.toLowerCase();
      if (title.includes(term)) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  }

  if (searchInput && searchBtn) {
    searchBtn.addEventListener("click", handleSearch);
    searchInput.addEventListener("keyup", (e) => {
      if (e.key === "Enter" || searchInput.value === "") {
        handleSearch();
      }
    });
  }
});