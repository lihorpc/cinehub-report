// Функція для створення масиву випадкових чисел заданої довжини
function createRandomArray(length) {
    return Array.from({ length }, () => Math.floor(Math.random() * 10));
}

// Функція для знаходження максимального елементу в масиві
function findMax(arr) {
    return Math.max(...arr);
}

// Функція для створення масиву B на основі масиву A
function createArrayB(arrayA) {
    const max = findMax(arrayA);
    return arrayA.map(element => element * max);
}

// Функція для сортування масиву методом вставки за зменшенням
function insertionSortDesc(arr) {
    const sortedArr = [...arr]; // Створюємо копію масиву
    for (let i = 1; i < sortedArr.length; i++) {
        const current = sortedArr[i];
        let j = i - 1;
        
        while (j >= 0 && sortedArr[j] < current) {
            sortedArr[j + 1] = sortedArr[j];
            j--;
        }
        sortedArr[j + 1] = current;
    }
    return sortedArr;
}

// Основна функція для демонстрації роботи
function demonstrateArrayOperations() {
    // Отримуємо розмір масиву від користувача
    const size = parseInt(prompt("Введіть розмір масиву:"));
    
    if (isNaN(size) || size <= 0) {
        console.log("Помилка: Введіть додатне число");
        return;
    }

    // Створюємо та виводимо початковий масив A
    const arrayA = createRandomArray(size);
    console.log("Масив A:", arrayA);

    // Створюємо та виводимо масив B
    const arrayB = createArrayB(arrayA);
    console.log("Масив B (bi = max*ai):", arrayB);

    // Сортуємо та виводимо відсортований масив B
    const sortedArrayB = insertionSortDesc(arrayB);
    console.log("Відсортований масив B (за зменшенням):", sortedArrayB);
}

// Викликаємо функцію при завантаженні сторінки
window.addEventListener('load', () => {
    demonstrateArrayOperations();
}); 