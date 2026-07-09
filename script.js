// Data Default dengan Jalur File Gambar dari Folder assets/
const initialProducts = [
    { id: 1, name: "Céleste Ring", category: "La Promesse", price: 699000, img: "assets/celeste-ring.jpg", stock: 10, desc: "Crafted from premium 925 Sterling Silver finished with a thick layer of 18K Gold Plating for a luxurious shine." },
    { id: 2, name: "Élise Ring", category: "La Promesse", price: 749000, img: "assets/elise-ring.jpg", stock: 5, desc: "Exclusive sapphire cut wrapped in stunning 18-karat white gold that captivates the eye flawlessly." },
    { id: 3, name: "Étoile Necklace", category: "Lumière", price: 1099000, img: "assets/etoile-necklace.jpg", stock: 7, desc: "A sparkling star pendant necklace radiating the elegance and subtle cosmic beauty of modern women." },
    { id: 4, name: "Amour Necklace", category: "Lumière", price: 1199000, img: "assets/amour-necklace.jpg", stock: 4, desc: "Heart-designed premium necklace full of artistic detail, perfect for eternal promise tokens." },
    { id: 5, name: "Aurora Earrings", category: "Éclat", price: 599000, img: "assets/aurora-earrings.jpg", stock: 12, desc: "Earrings adorned with beautiful opal stones reflecting the magical iridescent Northern Lights dawn." },
    { id: 6, name: "Pearl Drop Earrings", category: "Éclat", price: 699000, img: "assets/pearl-drop-earrings.jpg", stock: 8, desc: "Specially selected organic natural saltwater pearls showcasing legendary white luxurious luster." },
    { id: 7, name: "Grace Bracelet", category: "Grâce", price: 799000, img: "assets/grace-bracelet.jpg", stock: 3, desc: "Gold solid chain bracelet with an exclusive complex finely woven pattern built by master artisans." },
    { id: 8, name: "Éternité Bracelet", category: "Grâce", price: 899000, img: "assets/eternite-bracelet.jpg", stock: 6, desc: "A flawless symbol of an infinite bond entirely encrusted with the finest micro diamonds gems." },
    { id: 9, name: "Luna Anklet", category: "Rêverie", price: 499000, img: "assets/luna-anklet.jpg", stock: 15, desc: "Luxury delicate anklet decorated with a graceful tiny polished crescent moon gold ornament." },
    { id: 10, name: "Fleur Anklet", category: "Rêverie", price: 549000, img: "assets/fleur-anklet.jpg", stock: 2, desc: "Flower petal soft motif anklet masterfully crafted from solid rare Indonesian rose gold." }
];

// Sinkronisasi database produk utama
let storedProducts = localStorage.getItem('erysh_products');
let products = JSON.parse(storedProducts) || initialProducts;
if(!localStorage.getItem('erysh_products')) {
    localStorage.setItem('erysh_products', JSON.stringify(products));
}

// DATABASE DATA PENJUALAN MASUK (REAL-TIME ORDER LOGS)
let salesLog = JSON.parse(localStorage.getItem('erysh_sales_log')) || [];

// State Keranjang Belanja & Filter Toko
let cart = JSON.parse(localStorage.getItem('belanjo_cart')) || [];
let currentCategory = 'all';
let searchQuery = '';
let maxPrice = 3000000;

function showPage(pageId) {
    document.querySelectorAll('.page-section').forEach(p => p.classList.add('hidden'));
    const targetPage = document.getElementById(pageId);
    if(targetPage) targetPage.classList.remove('hidden');
    
    if(pageId === 'admin-page') {
        renderAdminTable();
        renderSalesTable();
        updateAnalyticsUI();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// RENDER KATALOG USER
function renderProducts() {
    const grid = document.getElementById('productGrid');
    if(!grid) return;
    grid.innerHTML = '';
    
    const filtered = products.filter(p => 
        (currentCategory === 'all' || p.category === currentCategory) && 
        p.price <= maxPrice &&
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    if(filtered.length === 0) {
        grid.innerHTML = `<div class="col-span-full text-center text-gray-400 py-12 bg-white rounded-2xl border border-dashed"><p class="text-sm">Jewelry Collection is Not Found.</p></div>`;
        return;
    }

    filtered.forEach(p => {
        const isOutOfStock = p.stock <= 0;
        grid.innerHTML += `
            <div class="bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 flex flex-col justify-between group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div class="cursor-pointer" onclick="openDetail(${p.id})">
                    <div class="w-full h-44 bg-ivory rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                        <img src="${p.img}" alt="${p.name}" class="w-full h-full object-cover rounded-xl" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=400&q=80';">
                        <span class="absolute top-2 right-2 ${isOutOfStock ? 'bg-red-500 text-white' : 'bg-white/90 text-gray-700'} text-[9px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                            ${isOutOfStock ? 'Habis' : `Stok: ${p.stock}`}
                        </span>
                    </div>
                    <span class="text-[10px] uppercase font-bold tracking-widest text-gold">${p.category} Collection</span>
                    <h3 class="font-title font-bold text-darkBlack text-base sm:text-lg mt-1 group-hover:text-gold transition-colors truncate">${p.name}</h3>
                    <p class="text-xs sm:text-sm font-semibold text-gray-700 mt-1">Rp ${parseInt(p.price).toLocaleString('id-ID')}</p>
                </div>
                <button onclick="addToCart(${p.id})" ${isOutOfStock ? 'disabled class="mt-4 w-full bg-gray-200 text-gray-400 text-xs py-2.5 rounded-xl uppercase tracking-wider font-semibold cursor-not-allowed"' : 'class="mt-4 w-full bg-darkBlack text-white text-xs py-2.5 rounded-xl uppercase tracking-wider font-semibold hover:bg-gold transition shadow-sm active:scale-95 duration-150"'} >
                    ${isOutOfStock ? 'Out of Stock' : '+ Add To Cart'}
                </button>
            </div>`;
    });
}

function filterCategory(e, category) { 
    currentCategory = category; 
    const buttons = document.querySelectorAll('#categoryButtons button');
    buttons.forEach(btn => {
        btn.classList.remove('bg-darkBlack', 'text-white');
        btn.classList.add('bg-white', 'text-gray-600');
    });
    if (e && e.currentTarget) {
        e.currentTarget.classList.remove('bg-white', 'text-gray-600');
        e.currentTarget.classList.add('bg-darkBlack', 'text-white');
    }
    renderProducts();
}

function handleSearch() {
    searchQuery = document.getElementById('searchInput').value;
    renderProducts();
}

function handlePriceFilter(val) {
    maxPrice = parseInt(val);
    document.getElementById('priceLabel').innerText = `Rp ${maxPrice.toLocaleString('id-ID')}`;
    renderProducts();
}

// 1. DETAIL PRODUK (UBAH LINE ARTISAN -> COLLECTION & HAPUS ACQUIRE ASSET)
function openDetail(id) {
    const product = products.find(p => p.id === id);
    if(!product) return;
    const content = document.getElementById('modalContent');
    const isOutOfStock = product.stock <= 0;
    
    content.innerHTML = `
        <div class="text-center">
            <div class="w-40 h-40 mx-auto mb-4 overflow-hidden rounded-xl bg-ivory flex items-center justify-center border">
                <img src="${product.img}" alt="${product.name}" class="w-full h-full object-cover rounded-xl" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=400&q=80';">
            </div>
            <span class="text-xs uppercase text-gold font-bold tracking-wider">${product.category} Collection</span>
            <h3 class="text-xl sm:text-2xl font-bold font-title text-darkBlack my-2">${product.name}</h3>
            <p class="text-gray-500 text-xs sm:text-sm px-2 my-4 font-light leading-relaxed">${product.desc}</p>
            <p class="text-xs text-gray-400 mb-2">Available Quantity: <span class="font-bold text-darkBlack">${product.stock} Pcs</span></p>
            <p class="text-xl sm:text-2xl font-bold text-gold mb-6">Rp ${parseInt(product.price).toLocaleString('id-ID')}</p>
            <button onclick="addToCart(${product.id}); closeModal();" ${isOutOfStock ? 'disabled class="w-full bg-gray-200 text-gray-400 text-sm py-3.5 rounded-xl font-bold uppercase tracking-widest cursor-not-allowed"' : 'class="w-full bg-darkBlack text-gold text-sm py-3.5 rounded-xl font-bold uppercase tracking-widest hover:bg-gold hover:text-white transition"'} >
                ${isOutOfStock ? 'Stok Habis' : 'Add To Cart'}
            </button>
        </div>`;
    document.getElementById('detailModal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('detailModal').classList.add('hidden');
}

function toggleCartModal() {
    document.getElementById('cartModal').classList.toggle('hidden');
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    if(!product) return;
    
    const exist = cart.find(item => item.id === id);
    const currentQtyInCart = exist ? exist.quantity : 0;
    
    if (currentQtyInCart >= product.stock) {
        alert(`Maaf, batas maksimal stok yang tersedia di gudang adalah ${product.stock} pcs.`);
        return;
    }

    if(exist) {
        exist.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCartUI();
}

function changeQty(id, delta) {
    const item = cart.find(i => i.id === id);
    const product = products.find(p => p.id === id);
    if(!item || !product) return;
    
    if (delta > 0 && item.quantity >= product.stock) {
        alert(`Gagal menambah kuantitas. Stok produk hanya tersisa ${product.stock} pcs.`);
        return;
    }
    
    item.quantity += delta;
    if(item.quantity <= 0) {
        removeFromCart(id);
    } else {
        updateCartUI();
    }
}

function removeFromCart(id) {
    cart = cart.filter(i => i.id !== id);
    updateCartUI();
}

function updateCartUI() {
    localStorage.setItem('belanjo_cart', JSON.stringify(cart));
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    document.getElementById('cartCount').innerText = count;
    document.getElementById('cartTotal').innerText = `Rp ${total.toLocaleString('id-ID')}`;
    
    const list = document.getElementById('cartItemsList');
    if(list) {
        list.innerHTML = '';
        if(cart.length === 0) {
            list.innerHTML = `<div class="text-center py-12"><span class="text-3xl block mb-2">🛍️</span><p class="text-gray-400 text-xs sm:text-sm">Shopping Cart is Empty.</p></div>`;
        } else {
            cart.forEach(item => {
                list.innerHTML += `
                    <div class="flex items-center justify-between border-b pb-3 border-gray-100">
                        <div class="flex items-center space-x-3">
                            <div class="w-12 h-12 bg-gray-50 rounded-lg overflow-hidden flex items-center justify-center border flex-shrink-0">
                                <img src="${item.img}" alt="${item.name}" class="w-full h-full object-cover" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=100&q=80';">
                            </div>
                            <div>
                                <h4 class="font-bold text-xs sm:text-sm text-darkBlack truncate max-w-[120px]">${item.name}</h4>
                                <p class="text-[11px] text-gold font-medium">Rp ${parseInt(item.price).toLocaleString('id-ID')} x ${item.quantity}</p>
                            </div>
                        </div>
                        <div class="flex items-center space-x-1.5 sm:space-x-2">
                            <button onclick="changeQty(${item.id}, -1)" class="bg-gray-100 text-[10px] sm:text-xs px-2 py-0.5 rounded hover:bg-gray-200 font-bold">-</button>
                            <span class="text-xs sm:text-sm font-bold w-4 text-center">${item.quantity}</span>
                            <button onclick="changeQty(${item.id}, 1)" class="bg-gray-100 text-[10px] sm:text-xs px-2 py-0.5 rounded hover:bg-gray-200 font-bold">+</button>
                            <button onclick="removeFromCart(${item.id})" class="text-red-400 hover:text-red-600 text-xs pl-1 sm:pl-2 transition">Rem</button>
                        </div>
                    </div>`;
            });
        }
    }

    const checkSummary = document.getElementById('checkoutItemsList');
    if(checkSummary && !document.getElementById('checkout-page').classList.contains('hidden')) {
        checkSummary.innerHTML = '';
        cart.forEach(item => {
            checkSummary.innerHTML += `
                <div class="flex justify-between items-center text-xs sm:text-sm text-gray-600">
                    <span>${item.name} (x${item.quantity})</span>
                    <span class="font-semibold">Rp ${(item.price * item.quantity).toLocaleString('id-ID')}</span>
                </div>`;
        });
        document.getElementById('checkoutSubtotal').innerText = `Rp ${total.toLocaleString('id-ID')}`;
        document.getElementById('checkoutTotal').innerText = `Rp ${total.toLocaleString('id-ID')}`;
    }
}

function goToCheckoutPage() {
    if(cart.length === 0) {
        alert('Keranjang belanja Anda masih kosong!');
        return;
    }
    toggleCartModal();
    showPage('checkout-page');
    updateCartUI();
}

// 2. PROSES PEMBAYARAN DAN INTEGRASI KERJA DATA LANGSUNG MASUK KE ADMIN + REDIRECT SUCCESS PAGE
function processPayment(e) {
    e.preventDefault();
    const num = document.getElementById('billingPhone').value;
    if(num.length < 10) {
        document.getElementById('phoneError').classList.remove('hidden');
        return;
    }
    document.getElementById('phoneError').classList.add('hidden');
    
    // Validasi stok produk sebelum pemotongan logistik
    for (let item of cart) {
        const targetProduct = products.find(p => p.id === item.id);
        if (!targetProduct || targetProduct.stock < item.quantity) {
            alert(`Transaksi Gagal! Stok untuk produk "${item.name}" tidak mencukupi di gudang store.`);
            return;
        }
    }

    let itemDetailsString = [];
    let currentTransactionTotal = 0;

    // Kurangi stok barang dari inventory control secara otomatis
    cart.forEach(item => {
        const targetProduct = products.find(p => p.id === item.id);
        if (targetProduct) {
            targetProduct.stock -= item.quantity;
            currentTransactionTotal += (item.price * item.quantity);
            itemDetailsString.push(`${item.name} (x${item.quantity})`);
        }
    });

    const selectedGateway = document.querySelector('input[name="paymentGateway"]:checked').value;
    const customerName = document.getElementById('billingName').value;
    const joinedItems = itemDetailsString.join(', ');

    // Objek Data Pesanan Pelanggan Baru
    const newOrder = {
        name: customerName,
        phone: num,
        email: document.getElementById('billingEmail').value,
        address: document.getElementById('billingAddress').value,
        paymentMethod: selectedGateway,
        items: joinedItems,
        totalRevenue: currentTransactionTotal
    };

    // Push data masuk ke database Log Penjualan Admin (Local Storage)
    salesLog.push(newOrder);
    localStorage.setItem('erysh_sales_log', JSON.stringify(salesLog));
    localStorage.setItem('erysh_products', JSON.stringify(products));

    // INJEKSI DATA KE HALAMAN SUKSES (SUCCESS PAGE)
    document.getElementById('successPaymentMethod').innerText = `🛡️ ${selectedGateway}`;
    document.getElementById('successCustomerName').innerText = customerName;
    document.getElementById('successItems').innerText = joinedItems;
    document.getElementById('successItems').title = joinedItems; 
    document.getElementById('successTotal').innerText = `Rp ${currentTransactionTotal.toLocaleString('id-ID')}`;

    // Kosongkan keranjang belanja
    cart = [];
    updateCartUI();
    document.getElementById('checkoutForm').reset();
    renderProducts();

    // Alihkan tampilan langsung ke Payment Success Page secara mulus
    showPage('success-page');
}

// 3. REKAP RENDER TABEL DATA PENJUALAN MASUK PADA ADMIN
function renderSalesTable() {
    const tbody = document.getElementById('salesTableBody');
    if(!tbody) return;
    tbody.innerHTML = '';

    if (salesLog.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5" class="p-8 text-center text-gray-400 bg-gray-50/50">Belum ada data penjualan masuk dari pengguna.</td></tr>`;
        return;
    }

    // Tampilkan log penjualan (urutan terbaru di atas)
    [...salesLog].reverse().forEach(order => {
        tbody.innerHTML += `
            <tr class="hover:bg-indigo-50/30 transition text-xs sm:text-sm">
                <td class="p-4">
                    <div class="font-bold text-darkBlack">${order.name}</div>
                    <div class="text-[11px] text-gray-400">${order.phone} | ${order.email}</div>
                </td>
                <td class="p-4 text-gray-500 max-w-[180px] truncate" title="${order.address}">${order.address}</td>
                <td class="p-4"><span class="bg-indigo-100 text-indigo-700 font-medium text-[11px] px-2.5 py-1 rounded-md whitespace-nowrap">🛡️ ${order.paymentMethod}</span></td>
                <td class="p-4 text-gray-700 italic font-light">${order.items}</td>
                <td class="p-4 font-bold text-green-600 whitespace-nowrap">Rp ${order.totalRevenue.toLocaleString('id-ID')}</td>
            </tr>`;
    });
}

function updateAnalyticsUI() {
    const totalRevenue = salesLog.reduce((sum, order) => sum + order.totalRevenue, 0);
    
    const revEl = document.getElementById('analyticsRevenue');
    if(revEl) {
        revEl.innerText = `Rp ${totalRevenue.toLocaleString('id-ID')}`;
    }

    const countEl = document.getElementById('analyticsOrderCount');
    if(countEl) {
        countEl.innerText = `${salesLog.length} Pesanan`;
    }
}

// RENDER ADMIN DATA CONTROL PANEL INVENTORY
function renderAdminTable() {
    const tbody = document.getElementById('adminTableBody');
    if(!tbody) return;
    tbody.innerHTML = '';

    products.forEach(p => {
        tbody.innerHTML += `
            <tr class="hover:bg-gray-50 transition text-xs sm:text-sm">
                <td class="p-4 w-20 text-center flex-shrink-0">
                    <div class="w-10 h-10 mx-auto overflow-hidden rounded-lg bg-gray-50 border flex items-center justify-center">
                        <img src="${p.img}" alt="${p.name}" class="w-full h-full object-cover" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=100&q=80';">
                    </div>
                </td>
                <td class="p-4 font-bold text-darkBlack">${p.name}</td>
                <td class="p-4"><span class="bg-gray-100 text-gray-600 text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap">${p.category}</span></td>
                <td class="p-4 font-semibold text-gold whitespace-nowrap">Rp ${parseInt(p.price).toLocaleString('id-ID')}</td>
                <td class="p-4 font-bold ${p.stock <= 2 ? 'text-red-500' : 'text-gray-700'}">${p.stock} Pcs</td>
                <td class="p-4 text-center space-y-1 sm:space-y-0 sm:space-x-2 whitespace-nowrap">
                    <button onclick="openAdminEditModal(${p.id})" class="text-blue-500 hover:text-blue-700 font-semibold text-xs border border-blue-200 px-2 py-1 rounded bg-blue-50/50 transition inline-block">Edit</button>
                    <button onclick="deleteAdminProduct(${p.id})" class="text-red-500 hover:text-red-700 font-semibold text-xs border border-red-200 px-2 py-1 rounded bg-red-50/50 transition inline-block">Hapus</button>
                </td>
            </tr>`;
    });
}

function openAdminAddModal() {
    document.getElementById('adminForm').reset();
    document.getElementById('adminProductId').value = '';
    document.getElementById('adminModalTitle').innerText = 'Tambah Koleksi Perhiasan Baru';
    document.getElementById('adminModal').classList.remove('hidden');
}

function openAdminEditModal(id) {
    const p = products.find(prod => prod.id === id);
    if(!p) return;
    document.getElementById('adminProductId').value = p.id;
    document.getElementById('adminProductImg').value = p.img;
    document.getElementById('adminProductName').value = p.name;
    document.getElementById('adminProductCategory').value = p.category;
    document.getElementById('adminProductPrice').value = p.price;
    document.getElementById('adminProductStock').value = p.stock;
    document.getElementById('adminProductDesc').value = p.desc;
    
    document.getElementById('adminModalTitle').innerText = 'Edit Rincian Koleksi Masterpiece';
    document.getElementById('adminModal').classList.remove('hidden');
}

function closeAdminModal() {
    document.getElementById('adminModal').classList.add('hidden');
}

function saveAdminProduct(e) {
    e.preventDefault();
    const id = document.getElementById('adminProductId').value;
    const img = document.getElementById('adminProductImg').value;
    const name = document.getElementById('adminProductName').value;
    const category = document.getElementById('adminProductCategory').value;
    const price = parseInt(document.getElementById('adminProductPrice').value);
    const stock = parseInt(document.getElementById('adminProductStock').value);
    const desc = document.getElementById('adminProductDesc').value;

    if(id) {
        const index = products.findIndex(p => p.id == id);
        if(index !== -1) {
            products[index] = { id: parseInt(id), name, category, price, img, stock, desc };
        }
    } else {
        const newId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
        products.push({ id: newId, name, category, price, img, stock, desc });
    }

    localStorage.setItem('erysh_products', JSON.stringify(products));
    renderAdminTable();
    renderProducts();
    closeAdminModal();
    alert('Konfigurasi data perhiasan & jumlah stok berhasil diperbarui!');
}

function deleteAdminProduct(id) {
    if(confirm('Apakah Anda yakin ingin menghapus mahakarya perhiasan ini dari catalog utama toko?')) {
        products = products.filter(p => p.id !== id);
        localStorage.setItem('erysh_products', JSON.stringify(products));
        renderAdminTable();
        renderProducts();
    }
}

window.onload = function() {
    renderProducts();
    updateCartUI();
};
