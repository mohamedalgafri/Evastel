


      var swiper = new Swiper(".mySwiperHeader", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });


    ////////////////////////////////////////////////


    var swiper = new Swiper(".mySwiperCard", {
      slidesPerView: 1,
      spaceBetween: 10,
      breakpoints: {
        540: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
      },
    });


    ////////////////////////////////////////////////



      var swiper = new Swiper(".mySwiperGred", {
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        // navigation: {
        //     nextEl: ".swiper-button-next",
        //     prevEl: ".swiper-button-prev",
  
        //   },
      });

      /////////////////////////////////////////////////////

      var swiper = new Swiper(".mySwiperGredMob", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
  




    ////////////////////////////////////////////////////


      var swiper = new Swiper(".mySwiperPartners", {
        slidesPerView: 1,
        spaceBetween: 10,
        grabCursor: true,
        autoplayDisableOnInteraction: false,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        breakpoints: {
          460: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          991: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        },
      });