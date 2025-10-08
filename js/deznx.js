/*! HTML JS Functions v1.0 2016-09 | (c) deznx foundation - David Bey | agentbey.com */
/* Script for Mobile Menu */
$(document).ready(function() {
	$("#toggle").click(function() {
		$("#navbar").toggle();
		$('#toggle').toggleClass('on');
	});
});

/* Script for Smooth Scrolling */
$(function() {
	$('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
});

/*  Script for ScrollToTop */
$(document).ready(function() {
	//Check to see if the window is top if not then display button
	$(window).scroll(function() {
		if ($(this).scrollTop() > 50) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
});

	//Click event to scroll to top
	$('.scrollToTop').click(function() {
		$('html, body').animate({
			scrollTop: 0
		}, 800);
		return false;
	});

window.addEventListener('scroll', function(e) {

            if( $(window).scrollTop() <= 50) {
                $('.wow').removeClass('animated');
                $('.wow').removeAttr('style');
                new WOW().init();
            }
});