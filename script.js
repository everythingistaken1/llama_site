// Get the cart list and checkout button elements
const cartList = document.getElementById('cart-list');
const checkoutBtn = document.getElementById('checkout-btn');
const thankYouSection = document.getElementById('thank-you');
const cartLink = document.querySelector('a[href="#cart"]');

// Initialize the cart
let cart = [];

// Add event listeners to the add to cart buttons
document.querySelectorAll('.product button').forEach((button) => {
    button.addEventListener('click', (e) => {
        const product = e.target.parentNode;
        const productName = product.querySelector('h2').textContent;
        const productPrice = parseFloat(product.querySelector('p').textContent.split('$')[1]);
        cart.push({ name: productName, price: productPrice });
        updateCart();
    });
});

// Update the cart list and total
function updateCart() {
    cartList.innerHTML = '';
    let total = 0;
    cart.forEach((product) => {
        const li = document.createElement('li');
        li.textContent = `${product.name} - $${product.price.toFixed(2)}`;
        cartList.appendChild(li);
        total += product.price;
    });
    document.querySelector('#cart p').textContent = `Total: $${total.toFixed(2)}`;
    cartLink.textContent = `Cart (${cart.length})`;
}

// Add event listener to the checkout button
checkoutBtn.addEventListener('click', () => {
    // Simulate a payment process
    setTimeout(() => {
        thankYouSection.style.display = 'block';
        cart = [];
        updateCart();
    }, 2000);
});