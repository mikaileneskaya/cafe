function createStars() {
    const stars = document.querySelector('.stars');
    const numStars = 500;

    for (let i = 0; i < numStars; i++) {
        setTimeout(() => {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.setProperty('--star-size', Math.random());
            star.style.setProperty('--star-x', Math.random());
            star.style.animationDuration = `${1 + Math.random() * 50}s`;
            stars.appendChild(star);
        }, Math.random() * 5000);
    }
}

createStars();


let swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 80,
        modifier: 10,
        slideShadows: true
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    breakpoints: {
        640: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 2
        },
        1560: {
            slidesPerView: 3
        }
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
});

const SCROLL_THRESHOLD = 400;
const scrollToTopButton = document.querySelector(".scroll-to-top");
window.addEventListener("scroll", () => {
    if (window.scrollY > SCROLL_THRESHOLD) {
        scrollToTopButton.style.position = "fixed";
        scrollToTopButton.style.display = "flex";
    } else {
        scrollToTopButton.style.display = "none";
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
