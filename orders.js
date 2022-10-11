function orders(product, count) {
    let price = 0;

    if (product == 'coffee') {
        price = 1.50 * count;
    } else if (product == 'water') {
        price = 1.00 * count;
    } else if (product == 'coke') {
        price = 1.40 * count;
    } else if (product == 'snacks') {
        price = 2.00 * count;
    }
    console.log(price.toFixed(2));
}
orders("water", 5)