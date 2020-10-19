//Adaptive functions
//====================  Mobile Menu ========================//
$('.header-menu__icon').click(function (event) {
	$(this).toggleClass('active');
	$('.header-menu').toggleClass('active');
});


$(window).on('load resize', function () {
	if ($(window).width() < 768) {
		$('.body-slider:not(.slick-initialized)').slick({
			dots: true,
			infinite: true,
			speed: 300,
			arrows: false
		});
	} else {
		$(".body-slider.slick-initialized").slick("unslick");
	}
});