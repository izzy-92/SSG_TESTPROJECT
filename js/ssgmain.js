
// 슬라이드 배너
const swiper = new Swiper(".middle_box", {
    slidesPerView: 1,
    loop: true,
    breakpoints: {
        769: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
      },
    autoplay: {
        delay: 5000,
    }
});



// 슬라이드 배너 재생,정지 버튼
const playbtn = document.querySelector('.play_btn');

playbtn.addEventListener('click', function() {
    swiper.autoplay.start();
})

const stopbtn =document.querySelector('.stop_btn');

stopbtn.addEventListener('click', function() {
    swiper.autoplay.stop();
})