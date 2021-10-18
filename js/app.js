const slides = document.getElementsByClassName('carousel__testimonial');


let slidePosition = 0;
const totalSlides = slides.length;


document.getElementById('carousel__button__next').addEventListener('click', moveToNextSlide);
document.getElementById('carousel__button__prev').addEventListener('click', moveToPrevSlide);

function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove('active');
        slide.classList.add('hidden');
    }
}

function moveToNextSlide() {
    hideAllSlides();
    
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    
    slides[slidePosition].classList.add("active");
    slides[slidePosition].classList.remove("hidden");
}

function moveToPrevSlide() {
    hideAllSlides();
    
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }
    
    slides[slidePosition].classList.add("active");
    slides[slidePosition].classList.remove("hidden");
}