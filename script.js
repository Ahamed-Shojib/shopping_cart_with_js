let cart = [];

        function addToCart(product, price) {
            cart.push({ product, price });
            updateCart();
        }

        function removeFromCart(index) {
            cart.splice(index, 1);
            updateCart();
        }

        function updateCart() {
            const cartList = document.getElementById("cart");
            const totalElement = document.getElementById("total");
            let total = 0;

            cartList.innerHTML = ''; // Clear the cart list

            cart.forEach((item, index) => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `${item.product} - $${item.price} <button class="btn btn-sm btn-outline-danger my-1 mx-3" onclick="removeFromCart(${index})">Remove</button>`;
                cartList.appendChild(listItem);
                total += item.price;
            });

            totalElement.textContent = total;
        }