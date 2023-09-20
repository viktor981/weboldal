const products=[{
    id:1,
    img:'images/61ayLJnlwYL.jpg',
    name:'Bone',
    description:"this is a fake bone",
    price:15.00
},
{
    id:2,
    img:'images/8707044_R_Z001A.jpg',
    name:'dog lead',
    description:"this is a dig lead",
    price:25.00
},
{
    id:3,
    img:'images/images.jpg',
    name:'dog bed',
    description:"this is a dog bed",
    price:35.00
},
{
    id:3,
    img:'images/images.jpg',
    name:'dog bed',
    description:"this is a dog bed",
    price:35.00
},

    {
id:3,
    img:'images/images.jpg',
    name:'dog bed',
    description:"this is a dog bed",
    price:35.00
},
{
id:3,
    img:'images/images.jpg',
    name:'dog bed',
    description:"this is a dog bed",
    price:35.00
},{
id:3,
    img:'images/images.jpg',
    name:'dog bed',
    description:"this is a dog bed",
    price:35.00
},{
    id:3,
        img:'images/images.jpg',
        name:'dog bed',
        description:"this is a dog bed",
        price:35.00
    },{
        id:3,
            img:'images/images.jpg',
            name:'dog bed',
            description:"this is a dog bed",
            price:35.00
        },{
            id:3,
                img:'images/images.jpg',
                name:'dog bed',
                description:"this is a dog bed",
                price:35.00
            }
]

console.log(products)

    const main=document.querySelector('.main-element')
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const clearCartButton = document.getElementById("clear-cart");

   let total = 0;
    products.forEach(product=>{
        main.innerHTML+=` <div class="product">
            <p>${product.name}</p>
            <div class='img-container'>
                <img src="${product.img}" alt="">
            </div>
            <p class="desc">${product.description}</p>
            <p class="price">$${product.price.toFixed(2)}</p>`
    
    })

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
