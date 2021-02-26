$(function () {

   let header = $("#header");
   let introH = $("#intro").innerHeight();
   let scrollOffset = $(window).scrollTop;


   /*Fixed header*/
   checkScroll(scrollOffset);

   $(window).on("scroll", function () {
      scrollOffset = $(this).scrollTop();
      checkScroll(scrollOffset);



   });
   function checkScroll() {

      if (scrollOffset >= introH - 51) {
         header.addClass("fixed");

      } else {
         header.removeClass("fixed");

      }
   }



   /*Smooth scroll */
   $("[data-scroll]").on("click", function (event) {
      event.preventDefault();

      let $this = $(this);
      let blockId = $(this).data('scroll');
      let blockOffset = $(blockId).offset().top;

      $("#nav a").removeClass("active");
      $this.addClass("active");

      $("html, body").animate({
         scrollTop: blockOffset - 51
      }, 1900);
   });


   /*menu nav toggle */
   $("#nav-toggle").on("click", function (event) {
      event.preventDefault();

      $(this).toggleClass("active");
      $("#nav").toggleClass("active");
      $('body').toggleClass("lock");


   });

   $("#nav a").on("click", function (event) {
      event.preventDefault();

      $("#nav").removeClass("active");

      $("#nav-toggle").removeClass("active");
      $('body').toggleClass("lock");
      // $().toggleClass("active");


   });
   /*collapse accordion*/
   $("[data-collapse]").on("click", function (event) {
      event.preventDefault();

      let $this = $(this);
      let blockId = $(this).data('collapse');

      $(this).toggleClass("active");
      $(blockId).slideToggle();


   });

   /*Slider */
   $("[data-slider]").slick({
      infinite: true,
      fade: false,
      slidesToShow: 1,
      slidesToScroll: 1,
   });








});