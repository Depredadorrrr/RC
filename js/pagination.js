const comics = [
    { imgSrc: 'comics/cm1.jpg', title: 'Edd n’ Between – Hermit Moth 1' },
    { imgSrc: 'comics/cm2.jpg', title: 'Edd n’ Between – Hermit Moth 2' },
    { imgSrc: 'comics/cm3.jpg', title: 'Edd n’ Between – Hermit Moth 3' },
    { imgSrc: 'comics/cm4.jpg', title: 'Edd n’ Between – Hermit Moth 4' },
    { imgSrc: 'comics/cm5.jpg', title: 'Edd n’ Between – Hermit Moth 5' },
    { imgSrc: 'comics/cm1.jpg', title: 'Edd n’ Between – Hermit Moth 6' },
    { imgSrc: 'comics/cm1.jpg', title: 'Edd n’ Between – Hermit Moth 7' },
    { imgSrc: 'comics/cm1.jpg', title: 'Edd n’ Between – Hermit Moth 8' },
    { imgSrc: 'comics/cm1.jpg', title: 'Edd n’ Between – Hermit Moth 9' },
    { imgSrc: 'comics/cm1.jpg', title: 'Edd n’ Between – Hermit Moth 10' },
    { imgSrc: 'comics/cm1.jpg', title: 'Edd n’ Between – Hermit Moth 11' },
    { imgSrc: 'comics/cm1.jpg', title: 'Edd n’ Between – Hermit Moth 12' },
    { imgSrc: 'comics/cm1.jpg', title: 'Edd n’ Between – Hermit Moth 8' },
    { imgSrc: 'comics/cm1.jpg', title: 'Edd n’ Between – Hermit Moth 9' },
    { imgSrc: 'comics/cm1.jpg', title: 'Edd n’ Between – Hermit Moth 10' },
    { imgSrc: 'comics/cm1.jpg', title: 'Edd n’ Between – Hermit Moth 11' },
    { imgSrc: 'comics/cm1.jpg', title: 'Edd n’ Between – Hermit Moth 12' },
    { imgSrc: 'comics/cm1.jpg', title: 'Edd n’ Between – Hermit Moth 8' },
    { imgSrc: 'comics/cm1.jpg', title: 'Edd n’ Between – Hermit Moth 9' },
    { imgSrc: 'comics/cm1.jpg', title: 'Edd n’ Between – Hermit Moth 10' },
    { imgSrc: 'comics/cm1.jpg', title: 'Edd n’ Between – Hermit Moth 11' },
    { imgSrc: 'comics/cm1.jpg', title: 'Edd n’ Between – Hermit Moth 12' },
];

const comicsContainer = document.getElementById('comicsContainer');
const pagination = document.getElementById('pagination');
const comicsPerPage = 8;
let currentPage = 1;
const imageCache = new Map();

function displayComics(page) {
comicsContainer.innerHTML = '';
const start = (page - 1) * comicsPerPage;
const end = page * comicsPerPage;
const paginatedComics = comics.slice(start, end);

paginatedComics.forEach((comic, index) => {
    const comicElement = document.createElement('a');
    comicElement.href = 'comics/Transylvania Milf 2/Transylvania-Milf-2.html';
    comicElement.className = 'comic';
    comicElement.innerHTML = `
    <img data-src="${comic.imgSrc}" alt="" class="comic__img lazy-load" id="comic-img-${start + index}">
    <p class="comic__title">${comic.title}</p>
    `;
    comicsContainer.appendChild(comicElement);
});

lazyLoadImages();
}

function setupPagination() {
const pageCount = Math.ceil(comics.length / comicsPerPage);
pagination.innerHTML = '';

for (let i = 1; i <= pageCount; i++) {
    const button = document.createElement('button');
    button.innerText = i;
    button.addEventListener('click', () => {
    currentPage = i;
    displayComics(currentPage);
    });
    pagination.appendChild(button);
}
}

function lazyLoadImages() {
const lazyImages = document.querySelectorAll('.lazy-load');
const config = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        const img = entry.target;
        if (!imageCache.has(img.id)) {
        img.src = img.dataset.src;
        imageCache.set(img.id, img.dataset.src);
        }
        img.classList.remove('lazy-load');
        observer.unobserve(img);
    }
    });
}, config);

lazyImages.forEach(image => {
    if (imageCache.has(image.id)) {
    image.src = imageCache.get(image.id);
    image.classList.remove('lazy-load');
    } else {
    imageObserver.observe(image);
    }
});
}

displayComics(currentPage);
setupPagination();