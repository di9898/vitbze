 var swiperMobile = new Swiper('.swiper-container.swiper-full-mobile', {
      slidesPerView: 4,
      spaceBetween: 50,
      slideToClickedSlide:true,
      centeredSlides:true,
     pagination: {
        el: '.swiper-pagination',
        clickable: true,

      },
effect: "coverflow",
      grabCursor: true,
     
      coverflowEffect: {
        rotate: -10,
        stretch: 10,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
   
      loop:true,
        autoplay: {
          delay: 3000,
        },


        keyboard: {
        enabled: true,
        onlyInViewport: true,
      },


      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },


       breakpoints: {
      
            
            640: {
              freemode:true,
              slidesPerView: 2,
              spaceBetween: 20,
            },
            320: {
              freemode:true,
              slidesPerView: 3,
              spaceBetween: 20,
            }
      }

    });

 document.addEventListener( "click", ( evnt ) => {
        if (evnt.target?.closest?.('a[href^="#/"]')) {
          evnt.preventDefault();
          alert( "Thank you for clicking, but that's a demo link." );
        }
      });

      document.addEventListener('DOMContentLoaded', () => {

                  new Mmenu("#menu", {    theme     : "white",
    navbars   : {
      content : [ "prev", "title" ]
    },
  
    setSelected : {
      hover: true
    }}, {});
        
              });

      // Trigger CSS animations on scroll.
// Detailed explanation can be found at http://www.bram.us/2013/11/20/scroll-animations/

// Looking for a version that also reverses the animation when
// elements scroll below the fold again?
// --> Check https://codepen.io/bramus/pen/vKpjNP

jQuery(function($) {
  
  // Function which adds the 'animated' class to any '.animatable' in view
  var doAnimations = function() {
    
    // Calc current offset and get all animatables
    var offset = $(window).scrollTop() + $(window).height(),
        $animatables = $('.animatable');
    
    // Unbind scroll handler if we have no animatables
    if ($animatables.length == 0) {
      $(window).off('scroll', doAnimations);
    }
    
    // Check all animatables and animate them if necessary
    $animatables.each(function(i) {
       var $animatable = $(this);
      if (($animatable.offset().top + $animatable.height() - 20) < offset) {
        $animatable.removeClass('animatable').addClass('animated');
      }
    });

  };
  
  // Hook doAnimations on scroll, and trigger a scroll
  $(window).on('scroll', doAnimations);
  $(window).trigger('scroll');

});

