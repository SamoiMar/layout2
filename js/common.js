$(document).ready(function() {
	$('.carousel').carousel({
	  interval: 8000,
	  pause: 'hover'
	});
	$(function() {
		$(window).scroll(function() {
			if($(this).scrollTop() != 0) {
			$('#toTop').fadeIn();
			} else { 
			$('#toTop').fadeOut();
			}
		});
			$('#toTop').click(function() {
			$('body,html').animate({scrollTop:0},1500);	 
		});	 
	});	

    $("nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;            
        $('body,html').animate({scrollTop: top}, 1500);
    });

});