// script.js

// 1. DATA AWAL PRODUK (MENGGUNAKAN PATH PATH GAMBAR LOKAL / URL)
const initialProducts = [
    {
        id: 1,
        name: "Céleste Diamond Ring",
        category: "La Promesse",
        price: 699000,
        img: "assets/celeste-ring.jpg", // Gantilah dengan file asli di folder assets/ Anda
        desc: "Cincin emas putih dengan mata berlian tunggal potongan berlian Eropa yang melambangkan janji suci abadi."
    },
    {
        id: 2,
        name: "Élise Luxury Ring",
        category: "La Promesse",
        price: 749000,
        img: "assets/elise-ring.jpg",
        desc: "Kombinasi eksklusif rose gold murni dan deretan berlian micro-pave yang memancarkan pesona anggun nan feminin."
    },
    {
        id: 3,
        name: "Aurore Golden Necklace",
        category: "Éternel",
        price: 1250000,
        img: "assets/aurore-necklace.jpg",
        desc: "Kalung liontin emas 18 karat yang terinspirasi dari fajar berkilau, melambangkan kemewahan tanpa batas."
    }
];

// Ambil data dari LocalStorage jika ada, jika tidak pakai data awal
let products = JSON.parse(localStorage.getItem("erysh_products")) || initialProducts;
let cart = JSON.parse(localStorage.getItem("erysh_cart")) || [];

// Simpan data perubahan ke localstorage agar permanen
function saveData() {
    localStorage.setItem("erysh_products", JSON.stringify(products));
    localStorage.setItem("erysh_cart", JSON.stringify(cart));
}

// 2. RENDER KATALOG UTAMA
function renderProducts(filteredList = products) {
    const grid = document.getElementById("product-grid");
    grid.innerHTML = "";

    if(filteredList.length === 0) {
        grid.innerHTML = `<div class="col-span-full text-center text-gray-400 py-12">Produk tidak ditemukan.</div>`;
        return;
    }

    filteredList.forEach(p => {
        grid.innerHTML += `
            <div class="group border rounded-2xl p-4 bg-white shadow-sm hover:shadow-xl transition flex flex-col justify-between">
                <div>
                    <div class="w-full h-48 bg-ivory rounded-xl flex items-center justify-center mb-4 overflow-hidden border">
                        <img src="${p.img}" alt="${p.name}" class="w-full h-full object-cover group-hover:scale-105 transition duration-300" onerror="this.src='https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500'">
                    </div>
                    <span class="text-xs uppercase tracking-widest text-gold font-bold">${p.category}</span>
                    <h4 class="font-title text-lg mt-1 group-hover:text-gold transition cursor-pointer" onclick="openDetail(${p.id})">${p.name}</h4>
                    <p class="text-sm font-semibold mt-2 text-luxury">Rp ${p.price.toLocaleString('id-ID')}</p>
                </div>
                <button onclick="addToCart(${p.id})" class="w-full bg-luxury text-white text-sm py-2 rounded-xl mt-4 hover:bg-gold hover:text-luxury font-medium transition">
                    <i class="fa-solid fa-cart-plus mr-2"></i>Tambah
                </button>
            </div>
        `;
    });
    updateAdminTable();
}

// 3. FITUR LIVE FILTER (SEARCH & CATEGORY)
function filterProducts() {
    const searchVal = document.getElementById("search-input").value.toLowerCase();
    const catVal = document.getElementById("category-filter").value;
    const statusText = document.getElementById("product-status");

    let result = products.filter(p => {
        const matchSearch = p.name.toLowerCase().includes(searchVal);
        const matchCat = (catVal === "all") || (p.category === catVal);
        return matchSearch && matchCat;
    });

    statusText.innerText = `Menampilkan ${result.length} produk`;
    renderProducts(result);
}

// 4. MODAL DETAIL PRODUK
function openDetail(id) {
    const p = products.find(prod => prod.id === id);
    const modal = document.getElementById("detail-modal");
    const content = document.getElementById("modal-content");

    content.innerHTML = `
        <div class="w-full h-64 bg-ivory overflow-hidden border-b">
            <img src="${p.img}" alt="${p.name}" class="w-full h-full object-cover" onerror="this.src='https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500'">
        </div>
        <div class="p-6">
            <span class="text-xs uppercase font-bold text-gold">${p.category}</span>
            <h4 class="font-title text-2xl mt-1">${p.name}</h4>
            <p class="text-xl font-bold mt-2 text-luxury">Rp ${p.price.toLocaleString('id-ID')}</p>
            <p class="text-sm text-gray-500 mt-4 leading-relaxed">${p.desc}</p>
            <button onclick="addToCart(${p.id}); closeModal();" class="w-full bg-luxury text-white py-3 rounded-xl mt-6 hover:bg-gold hover:text-luxury transition font-bold">Masukkan Keranjang</button>
        </div>
    `;
    modal.classList.remove("hidden");
}

function closeModal() {
    document.getElementById("detail-modal").classList.add("hidden");
}

// 5. MANAJEMEN KERANJANG BELANJA (CART)
function toggleCart() {
    const sidebar = document.getElementById("cart-sidebar");
    sidebar.classList.toggle("translate-x-full");
}

function addToCart(id) {
    const item = cart.find(c => c.id === id);
    if(item) {
        item.qty += 1;
    } else {
        const prod = products.find(p => p.id === id);
        cart.push({ ...prod, qty: 1 });
    }
    saveData();
    updateCartUI();
}

function removeFromCart(id) {
    cart = cart.filter(c => c.id !== id);
    saveData();
    updateCartUI();
}

function updateCartUI() {
    const container = document.getElementById("cart-items");
    const countSpan = document.getElementById("cart-count");
    const totalSpan = document.getElementById("cart-total");
    
    container.innerHTML = "";
    let total = 0;
    let count = 0;

    cart.forEach(c => {
        total += (c.price * c.qty);
        count += c.qty;
        container.innerHTML += `
            <div class="flex gap-4 items-center border-b pb-4">
                <img src="${c.img}" class="w-16 h-16 object-cover rounded-lg border bg-ivory" onerror="this.src='https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500'">
                <div class="flex-1">
                    <h5 class="text-sm font-medium line-clamp-1">${c.name}</h5>
                    <p class="text-xs text-gray-400">${c.qty}x - Rp ${c.price.toLocaleString('id-ID')}</p>
                </div>
                <button onclick="removeFromCart(${c.id})" class="text-red-500 hover:text-red-700 text-sm"><i class="fa-solid fa-trash"></i></button>
            </div>
        `;
    });

    countSpan.innerText = count;
    totalSpan.innerText = `Rp ${total.toLocaleString('id-ID')}`;
}

function checkout() {
    if(cart.length === 0) {
        alert("Keranjang belanja Anda masih kosong!");
        return;
    }
    alert("Simulasi Pembayaran Sukses!\nPesanan Anda berhasil diteruskan ke sistem invoice digital Érysh Bijoux.");
    cart = [];
    saveData();
    updateCartUI();
    toggleCart();
}

// 6. BACKEND SIMULASI: OPERASI DASHBOARD ADMIN
function updateAdminTable() {
    const tbody = document.getElementById("admin-table-body");
    tbody.innerHTML = "";

    products.forEach(p => {
        tbody.innerHTML += `
            <tr class="border-b hover:bg-gray-50">
                <td class="py-3 flex items-center gap-2">
                    <img src="${p.img}" class="w-8 h-8 object-cover rounded border bg-ivory" onerror="this.src='https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500'">
                    <span class="font-medium truncate max-w-[150px]">${p.name}</span>
                </td>
                <td class="py-3">${p.category}</td>
                <td class="py-3 font-semibold">Rp ${p.price.toLocaleString('id-ID')}</td>
                <td class="py-3 text-center">
                    <button onclick="deleteProduct(${p.id})" class="text-red-500 hover:text-red-700 text-sm"><i class="fa-solid fa-trash"></i> Hapus</button>
                </td>
            </tr>
        `;
    });
}

function addLocalProduct(e) {
    e.preventDefault();
    
    const name = document.getElementById("admin-name").value;
    const category = document.getElementById("admin-category").value;
    const price = parseInt(document.getElementById("admin-price").value);
    const img = document.getElementById("admin-img").value;
    const desc = document.getElementById("admin-desc").value;

    const newProduct = {
        id: Date.now(), // Generate ID unik menggunakan timestamp waktu saat ini
        name: name,
        category: category,
        price: price,
        img: img,
        desc: desc
    };

    products.push(newProduct);
    saveData();
    renderProducts();
    
    // Reset Form Input Admin
    document.getElementById("admin-form").reset();
    alert(`Sukses menambahkan "${name}" ke dalam katalog!`);
}

function deleteProduct(id) {
    if(confirm("Apakah Anda yakin ingin menghapus perhiasan ini dari katalog e-commerce?")) {
        products = products.filter(p => p.id !== id);
        // Hapus juga dari keranjang jika produk tersebut sedang diorder
        cart = cart.filter(c => c.id !== id);
        
        saveData();
        renderProducts();
        updateCartUI();
    }
}

// Inisialisasi Tampilan Saat Pertama Kali Website Dimuat
window.onload = function() {
    renderProducts();
    updateCartUI();
};