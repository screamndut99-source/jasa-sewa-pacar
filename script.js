// Data produk
const products = [
  { 
    id: 1, 
    name: "SAMBO", 
    image: "gambar/sambo.jpg", 
    price: "$600", 
    description: "Mantan joki motor jalanan yang beralih passion menjadi seorang ahli slot. Murah senyum dan pandai merangkai sebuah pantun yang membuat hati para wanita meleleh seperti aspal kepanasan. Sambo yang sekarang sedang bekerja sebagai pemantau server pgsoft bergabung dengan kami untuk mencari kesenangan karena masalalu percintaannya yang kelam. Jangan lupa jika berkencan dengan Sambo panggil dia dengan panggilan Seng.", 
    telegram: "https://t.me/sambo111234" 
  },
  { 
    id: 2, 
    name: "KLIBO", 
    image: "gambar/klibo.jpg", 
    price: "R$999", 
    description: "Pria terkenal dengan sebutan klibo ,dengan penampilan yang seadanya tetapi menarik di mata wanita karena wajahnya yang manis. Tetapi kisah cintanya yang tidak mulus, Klibo memutuskan bergabung dengan Tim kami untuk mencari kesenangan bersama wanita-wanita yang ingin menyewa atau menjadikan dia pacar sewaan.", 
    telegram: "https://t.me/kelibo12" 
  },
  { 
    id: 3, 
    name: "IDAM", 
    image: "gambar/idam.jpg", 
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

  productDetailDiv.innerHTML = `
    <div class="product-detail-container">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}">
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
    alert(`Hubungi Telegram ${product.name}`);
    window.open(telegramLink, "_blank");
  });

  // Event Next
  const nextBtn = document.getElementById("next");
  nextBtn.addEventListener("click", () => {
    let nextId = id + 1;
    if (nextId > products.length) nextId = 1;
    window.location.href = `product.html?id=${nextId}`;
  });

  // Event Previous
  const prevBtn = document.getElementById("prev");
  prevBtn.addEventListener("click", () => {
    let prevId = id - 1;
    if (prevId < 1) prevId = products.length;
    window.location.href = `product.html?id=${prevId}`;
  });
}

// Ambil ID produk dari URL
const productDetailDiv = document.getElementById("productDetail");
if (productDetailDiv) {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get("id")) || 1;
  showProduct(productId);
}
