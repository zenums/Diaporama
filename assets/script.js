const slides = [
    {
        "image": "./assets/images/slideshow/slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "./assets/images/slideshow/slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "./assets/images/slideshow/slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "./assets/images/slideshow/slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

const banner = document.getElementById('banner');
const dotsContainer = banner.querySelector('.dots');
const arrow_left = document.querySelector('.arrow_left');
const arrow_right = document.querySelector('.arrow_right');

let currentSlide = 0;

function Slider() {
    slides.forEach((slide, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) {
            dot.classList.add('dot_selected');
        }
        dotsContainer.appendChild(dot);
    });

    const slideImage = document.createElement('img');
    slideImage.src = slides[currentSlide].image;
    slideImage.classList.add('banner-img');
    banner.appendChild(slideImage);

    const text = document.createElement('p');
    text.innerHTML = slides[currentSlide].tagLine;
    banner.appendChild(text);
}
Slider();

arrow_left.addEventListener('click', () => {
    currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
    updateSlide();
});

arrow_right.addEventListener('click', () => {
    currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
    updateSlide();
});

function updateSlide() {
    const slideImage = banner.querySelector('.banner-img');
    slideImage.src = slides[currentSlide].image;

    const text = banner.querySelector('p');
    text.innerHTML = slides[currentSlide].tagLine;

	const dots = banner.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.classList.add('dot_selected');
        } else {
            dot.classList.remove('dot_selected');
        }
    });
}
