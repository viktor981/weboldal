document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const clearCartButton = document.getElementById("clear-cart");

    let total = 0;

    addToCartButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const price = parseFloat(button.getAttribute("data-price"));
            total += price;

            const cartItem = document.createElement("li");
            cartItem.textContent = button.previousElementSibling.textContent;
            cartItems.appendChild(cartItem);

            cartTotal.textContent = total.toFixed(2);
        });
    });

    clearCartButton.addEventListener("click", () => {
        cartItems.innerHTML = ""; 
        total = 0;
        cartTotal.textContent = total.toFixed(2);
    });
});