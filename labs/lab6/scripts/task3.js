const fruits = [
    { name: "apple", price: 200 },
    { name: "orange", price: 300 },
    { name: "grapes", price: 750 },
];

const processFruits = (fruitsArray) => {
    return fruitsArray.map((fruit, index) => ({
        id: index + 1,
        name: fruit.name,
        price: fruit.price * 0.8
    }));
};

console.log("Original fruits:", fruits);
console.log("Processed fruits:", processFruits(fruits)); 