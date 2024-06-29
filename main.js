const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container h1", scrollRevealOption);

ScrollReveal().reveal(".header__container h4", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__container .btn", {
  ...scrollRevealOption,
  delay: 1000,
});


document.addEventListener('DOMContentLoaded', () => {
  const testimonialsSwiper = new Swiper('.testimonials__swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 5000,
    },
  });

  // Menambahkan event listener untuk tombol "next"
  const nextButton = document.querySelector('.swiper-button-next');

  nextButton.addEventListener('click', () => {
    testimonialsSwiper.slideNext();
  });
});



