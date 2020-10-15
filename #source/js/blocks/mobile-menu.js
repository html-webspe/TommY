//Adaptive functions
//====================  Mobile Menu ========================//
$('.header-menu__icon').click(function (event) {
	$(this).toggleClass('active');
	$('.header-menu').toggleClass('active');
});


$(window).resize(function (event) {
	adaptive_function();
});
function adaptive_header(w, h) {

	if (w < 600) {
		$('.body-slider').slick({
			dots: true,
			infinite: true,
			speed: 300,
			arrows: false
		});
	}
}
function adaptive_function() {
	var w = $(window).outerWidth();
	var h = $(window).outerHeight();
	adaptive_header(w, h);
}
adaptive_function();