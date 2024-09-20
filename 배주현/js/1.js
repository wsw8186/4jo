const mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    slidesPerColumn: 2,
    slidesPerGroup :3,
    spaceBetween: 10,
    pagination : { // 페이징
		el : '.swiper-pagination',
		clickable : true, // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
	},
    // on: {
    //   init: function () {},
    //   orientationchange: function(){},
    //   beforeResize: function(){
    //     let vw = window.innerWidth;
    //     if(vw > 1000){
    //       mySwiper.params.slidesPerView = 3
    //         mySwiper.params.slidesPerColumn = 3
    //         mySwiper.params.slidesPerGroup = 3;
    //     } else {
    //       mySwiper.params.slidesPerView = 4
    //         mySwiper.params.slidesPerColumn = 2
    //         mySwiper.params.slidesPerGroup =4;
    //     }
    //     mySwiper.init();
    //   },
    // },
});

