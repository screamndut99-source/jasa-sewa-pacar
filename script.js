// Data produk, dengan array images untuk multi-gambar
const products = [
  { 
    id: 1, 
    name: "SAMBO", 
    images: ["gambar/sambo.jpg", "gambar/sambo2.jpg", "gambar/sambo3.jpg", "gambar/sambo4.jpg", "gambar/sambo5.jpg", "gambar/sambo6.jpg", "gambar/agus.jpg"], 
    price: "$600", 
    description: "Mantan joki motor jalanan yang beralih passion menjadi seorang ahli slot. Murah senyum dan pandai merangkai sebuah pantun yang membuat hati para wanita meleleh seperti aspal kepanasan. Sambo yang sekarang sedang bekerja sebagai pemantau server pgsoft bergabung dengan kami untuk mencari kesenangan karena masalalu percintaannya yang kelam. Jangan lupa jika berkencan dengan Sambo panggil dia dengan panggilan Seng.", 
    telegram: "https://t.me/sambo111234" 
  },
  { 
    id: 2, 
    name: "KELIBO", 
    images: ["gambar/klibo.jpg", "gambar/klibo2.jpg", "gambar/klibo3.jpg", "gambar/klibo4.jpg", "gambar/klibo5.jpg", "gambar/agus.jpg"], 
    price: "R$999", 
    description: "Pria terkenal dengan sebutan kelibo ,dengan penampilan yang seadanya tetapi menarik di mata wanita karena wajahnya yang manis. Tetapi kisah cintanya yang tidak mulus, Kelibo memutuskan bergabung dengan Tim kami untuk mencari kesenangan bersama wanita-wanita yang ingin menyewa atau menjadikan dia pacar sewaan.", 
    telegram: "https://t.me/kelibo12" 
  },
  { 
    id: 3, 
    name: "IDAM", 
    images: ["gambar/idam.jpg", "gambar/idam2.jpg", "gambar/idam3.jpg", "gambar/agus.jpg"], 
    price: "$650", 
    description: "Germo yang akrab dipanggil gendut karena badannya yang gemoy mirip dengan presiden kita Prabowo. Gendut diduga sebagai saudara kandung dari komedian ternama Indonesia si Adul, orangnya dikenal dengan humorisnya dan pandai memikat hati seorang oun khmer, membuat dugaan orang-orang terhadap dirinya sebagai saudara komedian Adul semakin terbukti.", 
    telegram: "https://t.me/Halamadridista15" 
  }
];

// Fungsi menampilkan detail produk
function showProduct(id) {
  const productDetailDiv = document.getElementById("productDetail");
  const product = products.find(p => p.id === id);

  if (!product) {
    productDetailDiv.innerHTML = `<p>Produk tidak ditemukan.</p>`;
    return;
  }

  // Buat slide untuk setiap gambar
  let slides = product.images.map(img => `
    <div class="swiper-slide">
      <img src="${img}" alt="${product.name}">
    </div>
  `).join("");

  productDetailDiv.innerHTML = `
    <div class="product-detail-container">
      <div class="swiper mySwiper">
        <div class="swiper-wrapper">
          ${slides}
        </div>
        <!-- Pagination & Navigation -->
        <div class="swiper-pagination"></div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </div>
      <div class="product-info">
        <h2>${product.name}</h2>
        <p class="price">${product.price}</p>
        <p class="description">${product.description}</p>
        <button id="addCart" class="btn-cart" data-telegram="${product.telegram}">Booking</button>
        <div class="navigation">
          <button id="prev" class="btn-nav">Previous</button>
          <button id="next" class="btn-nav">Next</button>
        </div>
      </div>
    </div>
  `;

  // Event Tombol Booking → buka link Telegram
  const addCartBtn = document.getElementById("addCart");
  addCartBtn.addEventListener("click", (e) => {
    const telegramLink = e.target.dataset.telegram;
    window.open(telegramLink, "_blank");
  });

  // Event Next / Previous
  document.getElementById("next").addEventListener("click", () => {
    let nextId = id + 1;
    if (nextId > products.length) nextId = 1;
    window.location.href = `product.html?id=${nextId}`;
  });

  document.getElementById("prev").addEventListener("click", () => {
    let prevId = id - 1;
    if (prevId < 1) prevId = products.length;
    window.location.href = `product.html?id=${prevId}`;
  });

  // Inisialisasi Swiper
  new Swiper(".mySwiper", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

// Ambil ID produk dari URL
const productDetailDiv = document.getElementById("productDetail");
if (productDetailDiv) {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get("id")) || 1;
  showProduct(productId);
}
