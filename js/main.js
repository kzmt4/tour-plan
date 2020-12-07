$(document).ready(function () {
  var hotelSlider = new Swiper('.hotel-slider', {
    // Optional parameters
   
    loop: true,
  
    
  
    // Navigation arrows
    navigation: {
      nextEl: '.hotel-slider__button--next',
      prevEl: '.hotel-slider__button--prev',
    },
    
    keyboard: {
        enabled: true,
        onlyInViewport: false,
      }, 
  
    // And if we need scrollbar
    
  })

  var reviewsSlider = new Swiper('.reviews-slider', {
    // Optional parameters
   
    loop: true,
  
    
  
    // Navigation arrows
    navigation: {
      nextEl: '.reviews-slider__button--next',
      prevEl: '.reviews-slider__button--prev',
    },
    
    keyboard: {
        enabled: true,
        onlyInViewport: false,
      }, 
  
    
  });
var menuButton = document.querySelector(".menu-button")
menuButton.addEventListener("click", function (){
  console.log("Клик по кнопке меню");
  document.querySelector(".navbar-bottom")
  .classList.toggle("navbar-bottom--visible");

});
var closeModalButton = $('.modal__close'); 
var modalButton = $('[data-toggle="modal"]');
  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);

  
    function closeModal(event){
      event.preventDefault();
      var modalOverlay = $(".modal__overlay");
      var modalDialog = $(".modal__dialog");
      modalOverlay.removeClass('modal__overlay--active');
      modalDialog.removeClass('modal__dialog--active');
    }

    function openModal(){
      console.log("Вызов модального окна");
      var modalOverlay = $(".modal__overlay");
      var modalDialog = $(".modal__dialog");
      modalOverlay.addClass('modal__overlay--active');
      modalDialog.addClass('modal__dialog--active');
      
    }
});


