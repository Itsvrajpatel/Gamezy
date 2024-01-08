'use strict';



const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navbarToggler = document.querySelector("[data-nav-toggler]");

navbarToggler.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.remove("active");
    navbarToggler.classList.remove("active");
  });
}


/**
 * header
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 200) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

// HTML
<button id="addToCartButton" onclick="addToCart('Product Name', 9.99)">Add to Cart</button>

// JavaScript
function addToCart(productName, price) {
  // Create an object to represent the item
  var item = {
    name: productName,
    price: price
  };
  
  // Check if the cart exists in the local storage
  var cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  // Add the item to the cart
  cart.push(item);
  
  // Store the updated cart in the local storage
  localStorage.setItem('cart', JSON.stringify(cart));
  
  // Provide some feedback to the user
  alert('Product added to cart!');
}
