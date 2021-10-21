function Total() {
    var cart = {
        items: [
            { name: "apple", price: 300 },
            { name: "banana", price: 100 },
            { name: "grapes", price: 200 },
            { name: "pineapple", price: 150 },

        ],
        totalPrice: function() {
            let total = 0;
            for (var i = 0; i < cart.items.length; i++) {
                total = total + cart.items[i].price;
            }
            alert("The total of the list of fruits is " + total);
        }
    }

    cart.totalPrice();
    // console.log(a);

}