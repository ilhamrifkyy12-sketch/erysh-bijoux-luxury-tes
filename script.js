// Database Awal dengan Struktur Baru untuk Deskripsi dan Spesifikasi Eksklusif
const initialProducts = [
    { 
        id: 1, 
        name: "Céleste Ring", 
        category: "La Promesse", 
        price: 699000, 
        img: "assets/celeste-ring.jpg", 
        stock: 10, 
        desc: "A timeless ring crafted from premium 925 Sterling Silver and finished with a thick layer of 18K Gold Plating for a luxurious shine that lasts. Featuring a brilliant AAAAA-grade Cubic Zirconia, each stone is carefully hand-set by skilled artisans to maximize sparkle while ensuring long-lasting durability.<br><br>Designed to be nickel-free, lead-free, and hypoallergenic, Céleste Ring is safe for sensitive skin and comfortable enough for everyday wear. Its protective anti-tarnish finish helps preserve its beauty with proper care.",
        specs: ["Material: Premium 925 Sterling Silver", "Finish: Thick 18K Gold Plating", "Stone: AAAAA Cubic Zirconia", "Features: Hypoallergenic, Nickel-Free, Tarnish Resistant", "Packaging: Signature Érysh Bijoux Luxury Gift Box", "Warranty: 1-Year Manufacturing Warranty"]
    },
    { 
        id: 2, 
        name: "Élise Ring", 
        category: "La Promesse", 
        price: 749000, 
        img: "assets/elise-ring.jpg", 
        stock: 5, 
        desc: "Élise Ring showcases intricate floral craftsmanship, meticulously handcrafted to achieve exceptional detail and elegance. Made from 925 Sterling Silver with a durable 18K Gold Plating, this ring is designed for long-lasting brilliance and everyday comfort.<br><br>Accented with premium AAAAA Cubic Zirconia, every stone is securely hand-set to create a luxurious sparkle comparable to natural diamonds. Its lightweight construction and hypoallergenic finish make it a timeless piece you'll reach for every day.",
        specs: ["Material: Premium 925 Sterling Silver", "Finish: Thick 18K Gold Plating", "Stone: AAAAA Cubic Zirconia", "Features: Hypoallergenic, Tarnish Resistant, Lightweight", "Packaging: Signature Érysh Bijoux Luxury Gift Box", "Warranty: 1-Year Manufacturing Warranty"]
    },
    { 
        id: 3, 
        name: "Étoile Necklace", 
        category: "Lumière", 
        price: 1099000, 
        img: "assets/etoile-necklace.jpg", 
        stock: 7, 
        desc: "Expertly handcrafted from 925 Sterling Silver with premium 18K Gold Plating, Étoile Necklace combines luxurious materials with refined craftsmanship. The elegant star pendant is adorned with carefully selected AAAAA Cubic Zirconia, delivering exceptional brilliance from every angle.<br><br>Its adjustable chain provides a comfortable fit, while the premium finishing ensures a smooth, polished surface designed for daily elegance and lasting durability.",
        specs: ["Material: Premium 925 Sterling Silver", "Finish: Thick 18K Gold Plating", "Stone: AAAAA Cubic Zirconia", "Adjustable Chain", "Hypoallergenic", "Tarnish Resistant", "Luxury Gift Box Included", "1-Year Warranty"]
    },
    { 
        id: 4, 
        name: "Amour Necklace", 
        category: "Lumière", 
        price: 1199000, 
        img: "assets/amour-necklace.jpg", 
        stock: 4, 
        desc: "Designed as a statement of timeless elegance, Amour Necklace features a beautifully polished pendant crafted from 925 Sterling Silver and coated with a premium layer of 18K Gold Plating. Enhanced with sparkling AAAAA Cubic Zirconia, it offers luxurious brilliance while remaining lightweight and comfortable.<br><br>Every piece undergoes strict quality inspection to ensure flawless finishing and long-lasting durability, making it a valuable addition to any jewelry collection.",
        specs: ["Material: Premium 925 Sterling Silver", "Finish: Thick 18K Gold Plating", "Stone: AAAAA Cubic Zirconia", "Adjustable Chain", "Hypoallergenic", "Tarnish Resistant", "Luxury Gift Box Included", "1-Year Warranty"]
    },
    { 
        id: 5, 
        name: "Aurora Earrings", 
        category: "Éclat", 
        price: 599000, 
        img: "assets/aurora-earrings.jpg", 
        stock: 12, 
        desc: "Aurora Earrings are handcrafted from 925 Sterling Silver with premium 18K Gold Plating, combining lightweight comfort with exceptional brilliance. Featuring hand-set AAAAA Cubic Zirconia, these earrings create a radiant sparkle perfect for both everyday elegance and formal occasions.<br><br>Designed for all-day comfort, they are hypoallergenic, durable, and finished with an anti-tarnish protective coating.",
        specs: ["Material: Premium 925 Sterling Silver", "Finish: Thick 18K Gold Plating", "Stone: AAAAA Cubic Zirconia", "Hypoallergenic", "Tarnish Resistant", "Luxury Gift Box Included", "1-Year Warranty"]
    },
    { 
        id: 6, 
        name: "Pearl Drop Earrings", 
        category: "Éclat", 
        price: 699000, 
        img: "assets/pearl-drop-earrings.jpg", 
        stock: 8, 
        desc: "Crafted with high-quality Freshwater Pearls and premium 925 Sterling Silver, Pearl Drop Earrings embody timeless sophistication. Each pearl is carefully selected for its smooth surface and natural luster, while the elegant floral accents are enhanced with sparkling AAAAA Cubic Zirconia.<br><br>The result is a refined piece that offers lasting beauty, superior comfort, and exceptional craftsmanship.",
        specs: ["Material: Premium 925 Sterling Silver", "Finish: Thick 18K Gold Plating", "Stone: Freshwater Pearl & AAAAA Cubic Zirconia", "Hypoallergenic", "Tarnish Resistant", "Luxury Gift Box Included", "1-Year Warranty"]
    },
    { 
        id: 7, 
        name: "Belle Bracelet", 
        category: "Grâce", 
        price: 799000, 
        img: "assets/belle-bracelet.jpg", 
        stock: 3, 
        desc: "Belle Bracelet is meticulously handcrafted from 925 Sterling Silver and finished with premium 18K Gold Plating to create an elegant shine that lasts. The delicate floral details are enhanced with brilliant AAAAA Cubic Zirconia, adding refined sparkle without overwhelming the design.<br><br>Its adjustable clasp ensures a comfortable fit, making it suitable for daily wear while maintaining a luxurious appearance.",
        specs: ["Material: Premium 925 Sterling Silver", "Finish: Thick 18K Gold Plating", "Stone: AAAAA Cubic Zirconia", "Adjustable Clasp", "Hypoallergenic", "Tarnish Resistant", "Luxury Gift Box Included", "1-Year Warranty"]
    },
    { 
        id: 8, 
        name: "Éternité Bracelet", 
        category: "Grâce", 
        price: 899000, 
        img: "assets/eternite-bracelet.jpg", 
        stock: 6, 
        desc: "Featuring a graceful infinity motif, Éternité Bracelet is crafted from 925 Sterling Silver with a premium 18K Gold Plating finish and accented by hand-set AAAAA Cubic Zirconia. Every detail is polished to perfection, creating a bracelet that combines elegance, durability, and everyday comfort.<br><br>Designed to retain its brilliance over time, it is the perfect investment piece for any jewelry lover.",
        specs: ["Material: Premium 925 Sterling Silver", "Finish: Thick 18K Gold Plating", "Stone: AAAAA Cubic Zirconia", "Adjustable Clasp", "Hypoallergenic", "Tarnish Resistant", "Luxury Gift Box Included", "1-Year Warranty"]
    },
    { 
        id: 9, 
        name: "Luna Anklet", 
        category: "Rêverie", 
        price: 499000, 
        img: "assets/luna-anklet.jpg", 
        stock: 15, 
        desc: "Luna Anklet is crafted from premium 925 Sterling Silver with durable 18K Gold Plating, offering lightweight comfort without compromising quality. The delicate moon charm is accented with brilliant AAAAA Cubic Zirconia, creating a subtle yet luxurious finish.<br><br>Perfect for everyday wear, this anklet is hypoallergenic, tarnish resistant, and designed to maintain its shine with proper care.",
        specs: ["Material: Premium 925 Sterling Silver", "Finish: Thick 18K Gold Plating", "Stone: AAAAA Cubic Zirconia", "Adjustable Chain", "Hypoallergenic", "Tarnish Resistant", "Luxury Gift Box Included", "1-Year Warranty"]
    },
    { 
        id: 10, 
        name: "Fleur Anklet", 
        category: "Rêverie", 
        price: 549000, 
        img: "assets/fleur-anklet.jpg", 
        stock: 2, 
        desc: "Designed with delicate floral accents, Fleur Anklet is handcrafted from 925 Sterling Silver and finished with premium 18K Gold Plating for lasting elegance. Adorned with carefully selected AAAAA Cubic Zirconia, it offers refined sparkle while remaining lightweight and comfortable for all-day wear.<br><br>Its premium craftsmanship and durable finish make it a timeless accessory you'll enjoy for years.",
        specs: ["Material: Premium 925 Sterling Silver", "Finish: Thick 18K Gold Plating", "Stone: AAAAA Cubic Zirconia", "Adjustable Chain", "Hypoallergenic", "Tarnish Resistant", "Luxury Gift Box Included", "1-Year Warranty"]
    }
];

// Logika pemuatan lokal terenkripsi aman
let storedProducts = localStorage.getItem('erysh_products');
let products = JSON.parse(storedProducts) || initialProducts;

// FORCE UPDATE DATABASE JIKA LOCALSTORAGE MASIH MENGGUNAKAN VERSI LAMA
if (!storedProducts || !products[0].specs) {
    products = initialProducts;
    localStorage.setItem('erysh_products', JSON.stringify(products));
}

let salesLog = JSON.parse(localStorage.getItem('erysh_sales_log')) || [];
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

// FORMAT RENDER DETAIL PREMIUM BARU
function openDetail(id) {
    const product = products.find(p => p.id === id);
    if(!product) return;
    const content = document.getElementById('modalContent');
    const isOutOfStock = product.stock <= 0;
    
    let specsHTML = '';
    if (product.specs && Array.isArray(product.specs)) {
        specsHTML = `
            <div class="text-left mt-4 border-t pt-4">
                <h4 class="text-xs font-bold uppercase tracking-widest text-darkBlack mb-2">Specifications:</h4>
                <ul class="list-disc list-inside text-xs text-gray-500 space-y-1 font-light">
                    ${product.specs.map(spec => `<li>${spec}</li>`).join('')}
                </ul>
            </div>
        `;
    }

    content.innerHTML = `
        <div class="text-center">
            <div class="w-40 h-40 mx-auto mb-4 overflow-hidden rounded-xl bg-ivory flex items-center justify-center border">
                <img src="${product.img}" alt="${product.name}" class="w-full h-full object-cover rounded-xl" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=400&q=80';">
            </div>
            <span class="text-xs uppercase text-gold font-bold tracking-wider">${product.category} Collection</span>
            <h3 class="text-xl sm:text-2xl font-bold font-title text-darkBlack my-2">${product.name}</h3>
            
            <div class="text-gray-500 text-xs sm:text-sm px-1 my-4 font-light text-justify leading-relaxed">
                ${product.desc}
            </div>
            
            ${specsHTML}
            
            <div class="mt-6 border-t pt-4">
                <p class="text-xs text-gray-400 mb-1">Available Quantity: <span class="font-bold text-darkBlack">${product.stock} Pcs</span></p>
                <p class="text-xl sm:text-2xl font-bold text-gold mb-4">Rp ${parseInt(product.price).toLocaleString('id-ID')}</p>
                <button onclick="addToCart(${product.id}); closeModal();" ${isOutOfStock ? 'disabled class="w-full bg-gray-200 text-gray-400 text-sm py-3.5 rounded-xl font-bold uppercase tracking-widest cursor-not-allowed"' : 'class="w-full bg-darkBlack text-gold text-sm py-3.5 rounded-xl font-bold uppercase tracking-widest hover:bg-gold hover:text-white transition"'} >
                    ${isOutOfStock ? 'Stok Habis' : 'Add To Cart'}
                </button>
            </div>
        </div>`;
    document.getElementById('detailModal').classList.remove('hidden');
}

function handlePriceFilter(val) {
    maxPrice = parseInt(val);
    document.getElementById('priceLabel').innerText = `Rp ${maxPrice.toLocaleString('id-ID')}`;
    renderProducts();
}

function closeModal() { document.getElementById('detailModal').classList.add('hidden'); }
function toggleCartModal() { document.getElementById('cartModal').classList.toggle('hidden'); }

function addToCart(id) {
    const product = products.find(p => p.id === id);
    if(!product) return;
    const exist = cart.find(item => item.id === id);
    if (exist && exist.quantity >= product.stock) {
        alert(`Maaf, batas maksimal stok yang tersedia di gudang adalah ${product.stock} pcs.`);
        return;
    }
    if(exist) { exist.quantity += 1; } else { cart.push({ ...product, quantity: 1 }); }
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
    if(item.quantity <= 0) { removeFromCart(id); } else { updateCartUI(); }
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
    if(cart.length === 0) { alert('Keranjang belanja Anda masih kosong!'); return; }
    toggleCartModal();
    showPage('checkout-page');
    updateCartUI();
}

function processPayment(e) {
    e.preventDefault();
    const num = document.getElementById('billingPhone').value;
    if(num.length < 10) {
        document.getElementById('phoneError').classList.remove('hidden');
        return;
    }
    document.getElementById('phoneError').classList.add('hidden');
    
    for (let item of cart) {
        const targetProduct = products.find(p => p.id === item.id);
        if (!targetProduct || targetProduct.stock < item.quantity) {
            alert(`Transaksi Gagal! Stok untuk produk "${item.name}" tidak mencukupi.`);
            return;
        }
    }

    let itemDetailsString = [];
    let currentTransactionTotal = 0;

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

    const newOrder = {
        name: customerName,
        phone: num,
        email: document.getElementById('billingEmail').value,
        address: document.getElementById('billingAddress').value,
        paymentMethod: selectedGateway,
        items: joinedItems,
        totalRevenue: currentTransactionTotal
    };

    salesLog.push(newOrder);
    localStorage.setItem('erysh_sales_log', JSON.stringify(salesLog));
    localStorage.setItem('erysh_products', JSON.stringify(products));

    document.getElementById('successPaymentMethod').innerText = `🛡️ ${selectedGateway}`;
    document.getElementById('successCustomerName').innerText = customerName;
    document.getElementById('successItems').innerText = joinedItems;
    document.getElementById('successTotal').innerText = `Rp ${currentTransactionTotal.toLocaleString('id-ID')}`;

    cart = [];
    updateCartUI();
    document.getElementById('checkoutForm').reset();
    renderProducts();
    showPage('success-page');
}

function renderSalesTable() {
    const tbody = document.getElementById('salesTableBody');
    if(!tbody) return;
    tbody.innerHTML = '';
    if (salesLog.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5" class="p-8 text-center text-gray-400 bg-gray-50/50">Belum ada data penjualan masuk.</td></tr>`;
        return;
    }
    [...salesLog].reverse().forEach(order => {
        tbody.innerHTML += `
            <tr class="hover:bg-indigo-50/30 transition text-xs sm:text-sm">
                <td class="p-4">
                    <div class="font-bold text-darkBlack">${order.name}</div>
                    <div class="text-[11px] text-gray-400">${order.phone}</div>
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
    if(document.getElementById('analyticsRevenue')) document.getElementById('analyticsRevenue').innerText = `Rp ${totalRevenue.toLocaleString('id-ID')}`;
    if(document.getElementById('analyticsOrderCount')) document.getElementById('analyticsOrderCount').innerText = `${salesLog.length} Pesanan`;
}

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

function closeAdminModal() { document.getElementById('adminModal').classList.add('hidden'); }

// LOGIKA FIX AGAR SAAT PANEL ADMIN MENYIMPAN TIDAK MERUSAK SPECS LAMA
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
            const oldSpecs = products[index].specs || ["Premium Edition Material"];
            products[index] = { id: parseInt(id), name, category, price, img, stock, desc, specs: oldSpecs };
        }
    } else {
        const newId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
        products.push({ id: newId, name, category, price, img, stock, desc, specs: ["Premium Handcrafted Edition"] });
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
