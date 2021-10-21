function Total() {
    var cart = {
        items: [
            { name: "apple", price: 300 },
            { name: "banana", price: 100 },
            { name: "grapes", price: 200 },
            { name: "pineapple", price: 150 },

        ],
        totalPrice: function() {
            var total = 0;
            for (var i = 0; i < cart.items.length - 1; i++) {
                total = total + cart.items[i][1];
            }
            return (this.totalPrice.total);
        }
    }
    alert(cart.totalPrice() + "HOI");
}