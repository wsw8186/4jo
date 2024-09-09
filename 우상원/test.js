$(document).ready(function () {
    $('.slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '<div class="slick-next custom-arrow">&gt;</div>',
        prevArrow: '<div class="slick-prev custom-arrow">&lt;</div>',
        autoplay: true,
        autoplaySpeed: 3000,
    });
});

const header = document.querySelector('.transparent-header');
const menuItems = document.querySelectorAll('.menu-item');


menuItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        header.style.backgroundColor = 'rgba(255, 255, 255, 1)';
    });

    item.addEventListener('mouseout', () => {
        header.style.backgroundColor = 'transparent';
    });
});

window.onload = function () {
    const newSemesterBtn = document.getElementById('new-semester-btn');
    const wranglerBtn = document.getElementById('wrangler-btn');
    const newSemesterContent = document.getElementById('new-semester-content');
    const wranglerContent = document.getElementById('wrangler-content');

    
    newSemesterContent.style.display = 'block';
    wranglerContent.style.display = 'none';
    newSemesterBtn.classList.add('active-button'); 

    newSemesterBtn.addEventListener('click', function () {
        newSemesterContent.style.display = 'block';
        wranglerContent.style.display = 'none';

        newSemesterBtn.classList.add('active-button');
        wranglerBtn.classList.remove('active-button');
    });

    wranglerBtn.addEventListener('click', function () {
        wranglerContent.style.backgroundImage = "url('./img/wranglerbg.jpg')";
        wranglerContent.style.display = 'block';
        newSemesterContent.style.display = 'none';

        wranglerBtn.classList.add('active-button');
        newSemesterBtn.classList.remove('active-button');
    });

    document.querySelector('.hamburger-menu').addEventListener('click', function() {
        document.querySelector('.right-menu').classList.toggle('show');
        this.classList.toggle('active');
        });
};