$(function () {

	$(window).on("scroll", function () {
		if ($(window).scrollTop() > 50) {
			$('.header').addClass('header--scroll')
		}
		else
			$('.header').removeClass('header--scroll')
	});

});