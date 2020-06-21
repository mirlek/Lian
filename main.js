 

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

  $(function(){
  $( '.post' ).hover(function() {
      $( this ).toggleClass( "post_clone" );
      
    }
 
  );
  
});


$(function(){
  $('.posts').hover(function(){
    $(this).toggleClass("hide");
    
  }  
);
/* $('.ost').hover(function(){
  $(this).toggleClass("fact");
}  
);
 */
});


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}




});