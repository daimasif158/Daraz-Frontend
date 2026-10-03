document.addEventListener("DOMContentLoaded", () => {
  // Live Countdown Timer
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  function updateTimer() {
    const now = new Date();
    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);
    const diff = endOfDay - now;

    const hrs = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / 1000 / 60) % 60);
    const secs = Math.floor((diff / 1000) % 60);

    if (hoursEl) hoursEl.textContent = String(hrs).padStart(2, "0");
    if (minutesEl) minutesEl.textContent = String(mins).padStart(2, "0");
    if (secondsEl) secondsEl.textContent = String(secs).padStart(2, "0");
  }

  setInterval(updateTimer, 1000);
  updateTimer();

  // Flash Sale Items with Online Working Images
  const flashData = [
    {
      id: 1,
      title: "M10 TWS Wireless Bluetooth Earbuds Touch Control",
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&auto=format&fit=crop&q=80",
      price: 699,
      oldPrice: 1999,
      discount: "-65%"
    },
    {
      id: 2,
      title: "Smart Watch Ultra 8 Full HD Display Waterproof",
      image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&auto=format&fit=crop&q=80",
      price: 1849,
      oldPrice: 4500,
      discount: "-59%"
    },
    {
      id: 3,
      title: "Men Casual Lightweight Running Sneakers Sports Shoes",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&auto=format&fit=crop&q=80",
      price: 1399,
      oldPrice: 2800,
      discount: "-50%"
    },
    {
      id: 4,
      title: "Portable Mini USB Rechargeable Handheld Cooling Fan",
      image: "https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=400&auto=format&fit=crop&q=80",
      price: 499,
      oldPrice: 1200,
      discount: "-58%"
    },
    {
      id: 5,
      title: "Portable Wireless Bluetooth Speaker Deep Bass Waterproof",
      image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500&auto=format&fit=crop&q=80",
      price: 1599,
      oldPrice: 3200,
      discount: "-50%"
    },
    {
      id: 6,
      title: "RGB Gaming Mouse 7 Programmable Buttons 3200 DPI",
      image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=400&auto=format&fit=crop&q=80",
      price: 899,
      oldPrice: 1600,
      discount: "-44%"
    }
  ];

  const container = document.getElementById("flashProducts");
  if (container) {
    container.innerHTML = flashData.map(p => `
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
        </div>
      </div>
    `).join("");
  }
});