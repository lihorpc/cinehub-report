document.addEventListener('DOMContentLoaded', () => {
    const categories = document.querySelectorAll('#categories .item');
    console.log(`Number of categories: ${categories.length}`);

    categories.forEach(category => {
        const headerText = category.querySelector('h2').textContent;
        const itemsCount = category.querySelectorAll('ul > li').length;
        console.log(`Category: ${headerText}`);
        console.log(`Elements: ${itemsCount}`);
    });
});
