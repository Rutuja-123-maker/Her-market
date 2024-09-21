// Sample product data
const products = [
    { id: 1, name: "Fryums", category: "Snacks", price: 50, image: "images/fryums.jpg" },
    { id: 2, name: "Mango Pickle", category: "Pickles", price: 100, image: "images/pickles.jpg" },
    { id: 3, name: "Dry Garlic Chutney", category: "Pickles", price: 80, image: "images/chutney.jpg" },
    { id: 4, name: "Handmade Decorative Pieces", category: "Crafts", price: 250, image: "images/handicrafts.jpg" },
    { id: 5, name: "Handloom Table Runners", category: "Home Decor", price: 300, image: "images/handloom.jpg" },
    { id: 6, name: "Handmade Jewelry", category: "Crafts", price: 150, image: "images/jewelry.jpg" },
    { id: 7, name: "Homemade Papads", category: "Snacks", price: 60, image: "images/papads.jpg" },
    { id: 8, name: "Clay Pots", category: "Home Decor", price: 180, image: "images/pottery.jpg" },
    { id: 9, name: "Homemade Laddus", category: "Snacks", price: 120, image: "images/sweets.jpg" },
    { id: 10, name: "Handmade Quilts", category: "Home Decor", price: 400, image: "images/quilts.jpg" }
];

// Cart array to hold added products
let cart = [];

// Function to display products in the grid
function displayProducts(productsToShow) {
    const productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = ''; // Clear the grid

    productsToShow.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: Rs. ${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productGrid.appendChild(productDiv);
    });
}

// Function to filter products by category
function filterProducts(category) {
    if (category === 'All') {
        displayProducts(products);
    } else {
        const filteredProducts = products.filter(product => product.category === category);
        displayProducts(filteredProducts);
    }
}

// Function to add products to the cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    alert(`${product.name} has been added to the cart.`);
}

// Add event listeners to filter buttons
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        const category = e.target.getAttribute('data-category');
        filterProducts(category);
    });
});

// Display all products by default
displayProducts(products);
