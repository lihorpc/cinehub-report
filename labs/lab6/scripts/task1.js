function createProduct(obj, callback) {
    const product = {
        ...obj,
        id: Math.random().toString(36).substr(2, 9)
    };
    
    callback(product);
}

function logProduct(product) {
    console.log("Product:", product);
}

function logTotalPrice(product) {
    const totalPrice = product.price * product.quantity;
    console.log("Total price:", totalPrice);
}

const sampleProduct = {
    name: "Дроїд",
    price: 1500,
    quantity: 3,
};

createProduct(sampleProduct, logProduct);
createProduct(sampleProduct, logTotalPrice); 