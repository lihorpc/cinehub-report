const images = [
    {
        preview: 'https://i.ytimg.com/vi/c9fsBy45YTQ/maxresdefault.jpg',
        original: 'https://i.ytimg.com/vi/c9fsBy45YTQ/maxresdefault.jpg',
        description: 'Hokkaido Flower',
    },
    {
        preview: 'https://images.thedirect.com/media/article_full/heres-what-powers-galadriels-ring-has-in-rings-of-power.jpg',
        original: 'https://images.thedirect.com/media/article_full/heres-what-powers-galadriels-ring-has-in-rings-of-power.jpg',
        description: 'Container Haulage Freight',
    },
    {
        preview: 'https://i.ytimg.com/vi/SzS8Ao0H6Co/maxresdefault.jpg',
        original: 'https://www.impericon.com/cdn/shop/articles/Witcher_Season_3_1200x1200_crop_center.webp?v=1718095442',
        description: 'Aerial Beach View',
    },
    {
        preview: 'https://t.ctcdn.com.br/wQkKKDBe1HpwEmbJ7ADMfLznS_Q=/990x557/smart/i350335.jpeg',
        original: 'https://static.wikia.nocookie.net/gameofthrones/images/e/e0/Dragons_S8_Ep_1.jpg/revision/latest/scale-to-width-down/1200?cb=20190415031732',
        description: 'Hokkaido Flower',
    },
    {
        preview: 'https://i.ytimg.com/vi/9GgxinPwAGc/maxresdefault.jpg',
        original: 'https://i.ytimg.com/vi/9GgxinPwAGc/maxresdefault.jpg',
        description: 'Container Haulage Freight',
    },
    {
        preview: 'https://i.ytimg.com/vi/8QnMmpfKWvo/maxresdefault.jpg',
        original: 'https://i.ytimg.com/vi/8QnMmpfKWvo/maxresdefault.jpg',
        description: 'Aerial Beach View',
    },
];

function createGalleryItem(image) {
    return `
        <li class="gallery-item">
            <img
                class="gallery-image"
                src="${image.preview}"
                data-source="${image.original}"
                alt="${image.description}"
            />
        </li>
    `;
}

function renderGallery() {
    const galleryEl = document.querySelector('.gallery');
    const galleryMarkup = images.map(createGalleryItem).join('');
    galleryEl.innerHTML = galleryMarkup;
}

function handleGalleryClick(event) {
    if (event.target.nodeName !== 'IMG') {
        return;
    }

    const largeImageUrl = event.target.dataset.source;
    const imageDescription = event.target.alt;

    const instance = basicLightbox.create(`
        <img src="${largeImageUrl}" alt="${imageDescription}">
    `);

    instance.show();
}

document.addEventListener('DOMContentLoaded', () => {
    renderGallery();
    document.querySelector('.gallery').addEventListener('click', handleGalleryClick);
}); 