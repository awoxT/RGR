document.addEventListener("DOMContentLoaded", function () {
    const sliderContainer = document.querySelector('.slider-container');
    const slides = Array.from(sliderContainer.querySelectorAll('img'));
    const prevArrow = document.querySelector('.slider-arrow.prev');
    const nextArrow = document.querySelector('.slider-arrow.next');
    let currentSlide = 0;

    function showSlide(n) {
        const slideWidth = slides[0].clientWidth;
        const transformValue = -slideWidth * n;
        sliderContainer.style.transform = `translateX(${transformValue}px)`;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    prevArrow.addEventListener('click', prevSlide);
    nextArrow.addEventListener('click', nextSlide);

    showSlide(currentSlide);
    setInterval(nextSlide, 5000);
});

$(document).ready(function() {
    $(".open-modal").click(function() {
        $("#myModal").css("display", "block");
    });

    $(".close").click(function() {
        $("#myModal").css("display", "none");
    });
});

const menuIcon = document.querySelector('.menu-icon');
const navigation = document.querySelector('.navigation');

menuIcon.addEventListener('click', () => {
    navigation.classList.toggle('open');
});