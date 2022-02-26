/* Template Name: MKBIO || Onepage fashion designer template
   Author: MK Themes
   Email: support@mkthemes.in
   Website: https://mkthemes.in
   Version: 1.0.0
   Created: February 2022
   File Description: Init all plugins here
*/


/* ======= Index =========*/
/**
 * Slick slider - Testimonal Section
 */


// Sticky header 
// Sticky header js
$(window).load(function(){
   $(this).on('scroll', function(){
       if($(this).scrollTop() > 50){
           $('header').addClass('sticky');
       }
       else{
           $('header').removeClass('sticky');
       }
   })
})
// Sticky header js



// Slick slider

$(document).ready(function(){
   $('.testimonial-slider').slick({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
   });
 });


 AOS.init();

