$(document).ready(function () {
  // Inicializa el carrusel
  var carrusel = $('.carruselEntornos').slick({
    arrows: false,
    dots: true,
    swipe: true,
    draggable: true,
    infinite: true,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 3000
  });

  // Maneja el evento afterChange para reiniciar el autoplay
  carrusel.on('afterChange', function(event, slick, currentSlide){
    carrusel.slick('slickPlay');
  });
});
