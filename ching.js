const products = [
    { name: 'Bamboo Bed D1', price: 9989.99, image: 'https://verybamboo.com/wp-content/uploads/2016/09/Bamboo-Timber-Bed.jpg' },
    { name: 'Bamboo Bed D2', price: 9989.99, image: 'https://5.imimg.com/data5/SELLER/Default/2022/1/ST/GT/IE/136141532/bed-and-devan-500x500.jpg' },
    { name: 'Bamboo Bed D3', price: 9989.99, image: 'https://vdxl.im/8718475714149_m_en_hd_1.jpg' },
    { name: 'Bamboo Bed D4', price: 9989.99, image: 'https://www.bambuskeskus.ee/32-large_default/bamboo-bed-eco.jpg' },
    { name: 'Bamboo Bed D5', price: 9989.99, image: 'https://foter.com/photos/237/bamboo-bedroom-sets-1.jpg?s=pi' },
    { name: 'Bamboo Sala Set D1', price:5000.99, image: 'https://media.karousell.com/media/photos/products/2021/11/17/bamboo_sala_set_1637135824_dacd709e.jpg' },
    { name: 'Bamboo Sala Set D2', price: 5000.99, image: 'https://media.karousell.com/media/photos/products/2022/7/20/bamboo_sala_set_1658292365_f2e5971a_progressive.jpg' },
    { name: 'Bamboo Sala Set D3', price: 5000.99, image: 'https://media.karousell.com/media/photos/products/2023/9/26/bamboo_sala_set_1695694949_6db0beaa.jpg' },
    { name: 'Bamboo Sala Set D4', price: 5000.99, image: 'https://media.karousell.com/media/photos/products/2022/8/29/bamboo_sofa_sala_set_1661745163_90c458b2.jpg' },
    { name: 'Bamboo Sala Set D5', price: 5000.99, image: 'https://media.karousell.com/media/photos/products/2022/5/14/bamboo_chair_set_1652538350_79c6b5aa.jpg' },
    { name: 'Bamboo Dining Set D1', price: 6899.99, image: 'https://img.gkbcdn.com/s3/p/2021-02-09/Dining-Set-5-Pieces-Bamboo-445622-0.jpg' },
    { name: 'Bamboo Dining Set D2', price: 6899.99, image: 'https://img.vntg.com/15885348047569/bohemian-rattan-and-bamboo-dining-set-1980s.jpg' },
    { name: 'Bamboo Dining Set D3', price: 6899.99, image: 'https://a.1stdibscdn.com/organic-modern-rattan-round-dining-table-set-with-4-matching-chairs-for-sale/f_9198/f_341634521683387233844/f_34163452_1683387234711_bg_processed.jpg?disable=upscale&auto=webp&quality=60&width=640' },
    { name: 'Bamboo Dining Set D4', price: 6899.99, image: 'https://5.imimg.com/data5/RC/DE/ZT/SELLER-3535903/bamboo-dininng-table-1000x1000.jpg' },
    { name: 'Bamboo Dining Set D5', price: 6899.99, image: 'https://3.imimg.com/data3/TX/NM/MY-2376704/bamboo-dining-500x500.jpg' }
];

const cart = [];

// Function to display products
function displayProducts() {
    const productList = document.getElementById('product-list');
    products.forEach((product, index) => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <img src="${product.image}" alt="${product.name}" />
            <p>Price: ₱${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${index})">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
}

// Function to add items to the cart
function addToCart(index) {
    const product = products[index];
    cart.push(product);
    updateCartDisplay();
}

// Function to update the cart display
function updateCartDisplay() {
    const cartDisplay = document.getElementById('cart-display');
    const totalPriceElement = document.getElementById('total-price');

    cartDisplay.innerHTML = ''; // Clear previous cart display
    let total = 0;

    cart.forEach((item) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerText = `${item.name} - ₱${item.price.toFixed(2)}`;
        cartDisplay.appendChild(cartItem);
        total += item.price; // Calculate total price
    });

    totalPriceElement.innerText = `₱${total.toFixed(2)}`; // Update total price display
}

// Initial call to display products
displayProducts();
