// Data produk (sama seperti sebelumnya)
const products = [
  { id: 1, name: "SAMBO", image: "gambar/sambo.jpg", price: "$600", description: "Deskripsi singkat produk 1" },
  { id: 2, name: "KLIBO", image: "gambar/klibo.jpg", price: "$999", description: "Pria terkenal dengan sebutan klibo atau idih sebel,dengan penampilan yang seadanya tetapi menarik di mata wanita karena wajahnya yang manis. Pria yang energik dan aktif cocok untuk menjadi pacar sewaan anda." },
  { id: 3, name: "IDAM", image: "gambar/idam.jpg", price: "$650", description: "Deskripsi singkat produk 3" }
];

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
      <button id="addCart" class="btn-cart">Booking</button>
      <div class="navigation">
        <button id="prev" class="btn-nav">Previous</button>
        <button id="next" class="btn-nav">Next</button>
      </div>
    </div>
  </div>
`;


  // Event Tambah ke Keranjang
  const addCartBtn = document.getElementById("addCart");
  addCartBtn.addEventListener("click", () => {
    alert(`${product.name} ditambahkan ke keranjang!`);
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

const productDetailDiv = document.getElementById("productDetail");
if (productDetailDiv) {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get("id")) || 1;
  showProduct(productId);
}
