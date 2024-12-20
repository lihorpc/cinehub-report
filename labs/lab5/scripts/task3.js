function filterArray(numbers, value) {
  const filteredNumbers = [];
  
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > value) {
      filteredNumbers.push(numbers[i]);
    }
  }
  
  return filteredNumbers;
}

console.log('Array: [1, 2, 3, 4, 5], Value: 3, Result:', filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log('Array: [1, 2, 3, 4, 5], Value: 4, Result:', filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log('Array: [1, 2, 3, 4, 5], Value: 5, Result:', filterArray([1, 2, 3, 4, 5], 5)); // []
console.log('Array: [12, 24, 8, 41, 76], Value: 38, Result:', filterArray([12, 24, 8, 41, 76], 38)); // [41, 76] 