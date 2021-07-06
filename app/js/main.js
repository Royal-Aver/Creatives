$(function () {

	$(window).on("scroll", function () {
		if ($(window).scrollTop() > 50) {
			$('.header').addClass('header--scroll')
		}
		else
			$('.header').removeClass('header--scroll')
	});

	$(window).on("scroll", function () {
		if ($(window).scrollTop() > 50) {
			$('.header__inner').addClass('header__inner--padding')
		}
		else
			$('.header__inner').removeClass('header__inner--padding')
	});

	$(window).on("scroll", function () {
		if ($(window).scrollTop() > 50) {
			$('.menu__link').addClass('menu__link--padding')
		}
		else
			$('.menu__link').removeClass('menu__link--padding')
	});

	$(".menu__link, .top__link").on("click", function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({ scrollTop: top }, 1500);
	});

	$('.burger, .menu__link').on('click', function () {
		$('.menu__list').toggleClass('menu__list--active');
	});

	// $('.burger').on('click', function () {
	// 	$('.burger').toggleClass('burger--active');
	// });

});