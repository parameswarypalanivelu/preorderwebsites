    document.getElementById('preorder-form').addEventListener('submit', function(event) {
        event.preventDefault();

        // Get values from the preorder form
        const foodItem = document.getElementById('food-item').value;
        const quantity = document.getElementById('quantity').value;
        const deliveryTime = document.getElementById('delivery-time').value;

        // Store the order in localStorage
        let orders = JSON.parse(localStorage.getItem('orders')) || [];
        const order = { foodItem, quantity, deliveryTime };
        orders.push(order);
        localStorage.setItem('orders', JSON.stringify(orders));

        // Show order confirmation
        document.getElementById('order-confirmation').classList.remove('hidden');

        // Optionally, log the order details
        console.log(`Order placed: ${foodItem} x ${quantity}, Delivery Time: ${deliveryTime}`);

        // Reset the form
        this.reset();
    });

    // Function to load and display orders from localStorage
    function loadOrders() {
        const orders = JSON.parse(localStorage.getItem('orders')) || [];
        const ordersList = document.getElementById('orders-list');
        if (orders.length > 0) {
            ordersList.innerHTML = '';
            orders.forEach(order => {
                const orderItem = document.createElement('li');
                orderItem.textContent = `${order.foodItem} x ${order.quantity}, Delivery Time: ${order.deliveryTime}`;
                ordersList.appendChild(orderItem);
            });
        } else {
            ordersList.innerHTML = '<li>No orders placed yet.</li>';
        }
    }

    // Call loadOrders function when the page is loaded
    window.onload = loadOrders;
