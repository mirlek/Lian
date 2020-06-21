$(document).ready(function(){
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 80) {
				$(".header").addClass("header-sticky");
			} else {
				$('.header').removeClass("header-sticky");
			}
		});
  });
  
  $(function(){
    $('.burger_lines').click(function(){
        $(this).toggleClass('burger_cross');
        $('.nav_bar').toggleClass('nav_bar_toggle');
        $('.nav').toggleClass('nav_toggle');
        $('.nav__item').toggleClass('nav__item_toggle');
        
    })
  });

});