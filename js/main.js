var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
   
    loop: true,
  
    
  
    // Navigation arrows
    navigation: {
      nextEl: '.slider-button--next',
      prevEl: '.slider-button--prev',
    },
    
    keyboard: {
        enabled: true,
        onlyInViewport: false,
      }, 
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })
  ymaps.ready(init);
  function init(){
      var myMap = new ymaps.Map("map", {
          center: [13.73510588, 100.51754903],
          zoom: 7
      });
  }