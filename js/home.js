 $("#wrapper").click(function () {
     $(".menu").toggleClass("close");
     $(".navbar").toggleClass("change-bar");
 });



 $(".slider").slick({
     dots: true,
     infinite: true,
     slidesToshow: 1,
     fade: true,
     prevArrow:'<span class="priv_arrow"><i class="fa-solid fa-caret-left fa-2x"></i></span>',
     nextArrow:'<span class="next_arrow"><i class="fa-solid fa-caret-right fa-2x" ></i></span>',
 }).on('beforeChange', function () {
     anime({
         targets: '.slider .card svg',
         duration: 1500,
         translateX: [0, 250],
         rotate: [0, 45],
         opacity: [1, 0],

     });
     anime({
         targets: '.slider .text > *',
         opacity: [1, 0],
         delay: anime.stagger(50)
     });
 }).on('afterChange', function () {
     anime({
         targets: '.slider .card svg',
         duration: 1500,
         translateX: [250, 0],
         rotate: [45, 0],
         opacity: [0, 1],

     });
     anime({
         targets: '.slider .text > *',
         opacity: [0, 1],
         delay: anime.stagger(50),
     });

 });
