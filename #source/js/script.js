//====================  SCROLL ========================//
$(window).scroll(function (event) {
	var scr = $(this).scrollTop();
	sectors(scr);
});
function sectors(scr) {
	var w = $(window).outerWidth();
	var h = $(window).outerHeight();
	if (scr > 130) {
		$('.header').addClass('scroll');
	} else {
		$('.header').removeClass('scroll');
	}
}
//====================  <!-- SCROLL --> ========================//
//====================  UP ========================//
$(window).scroll(function () {
	var w = $(window).width();
	if ($(window).scrollTop() > 50) {
		$('#up').fadeIn(300);
	} else {
		$('#up').fadeOut(300);
	}
});
$('#up').click(function (event) {
	$('body,html').animate({ scrollTop: 0 }, 300);
});
//==================== <!-- UP --> ========================//
//====================  testWebP ========================//
function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else {
		document.querySelector('body').classList.add('no-webp');
	}
});
//====================  testWebP ========================//
//====================  ImageBg ========================//
function ibg() {
	function isIE() {
		let ibg = document.querySelectorAll(".ibg");
		for (var i = 0; i < ibg.length; i++) {
			if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
				ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
			}
		}
	}
}
ibg();
//====================  <!-- ImageBg -->  ========================//

//====================   GoTO -->  ========================//
$('.goto').click(function () {
	var el = $(this).attr('href').replace('#', '');

	var offset = 0;
	$('body,html').animate({ scrollTop: $('.' + el).offset().top + offset }, 500, function () { });

	if ($('.header-menu').hasClass('active')) {
		$('.header-menu, .header-menu__icon').removeClass('active');
		$('body').removeClass('lock');
	}
	return false;
});
//====================  <!-- GoTO -->  ========================//

$('.section__play-btn').click(function () {
	let dataVideo = $(this).closest('.section__video').find('.video').attr('data-video');
	$(this).closest('.section__video').find('.section__close-btn').css('opacity', '0.7');
	$(this).fadeOut()
	$(this).parent().parent().find('.section__video-overlay').fadeOut();

	$(this)
		.closest('.section__video').find('.video')
		.html('<iframe src="https://www.youtube.com/embed/' + dataVideo + '?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
});
$('.section__close-btn').click(function () {

	$(this).closest('.section__video').find('.video').html('');
	$(this).parent().parent().find('.section__video-overlay, .section__play-btn').fadeIn();
	$(this).css("opacity", "0");
})


//====================  Video  ========================//
$('.video-play').click(function () {
	$('#video').get(0).play();
	$(this).fadeOut();
	$('.video__poster').fadeOut();
});
//====================  <!-- Video -->  ========================//
//====================  Price-counter  ========================//
const counters = document.querySelectorAll('.price-content__price-count');
const speed = 130; // The lower the slower

counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = + Math.round(counter.innerText);
		const inc = Math.round(target / speed);
		if (count < target) {
			counter.innerText = count + inc;
			setTimeout(updateCount, 10);
		} else {
			counter.innerText = target;
		}
	};
	updateCount();
});
//==================== <!-- Price-counter --> ========================//
$('.slider-section').slick({
	arrows: false,
	autoplay: true,
	asNavFor: '.inside-slider'
});
$('.inside-slider').slick({
	dots: true,
	infinite: true,
	speed: 300,
	asNavFor: '.slider-section',
	arrows: false
});
$('.module-slider__body').slick({
	appendArrows: '.module-slider__control',
	nextArrow: '.control-module-slider__arrow-next',
	prevArrow: '.control-module-slider__arrow-prev',
	asNavFor: '.module-slider__body-r',
	adaptiveHeight: true
});
$('.module-slider__body-r').slick({
	asNavFor: '.module-slider__body',
	arrows: false,
	variableWidth: true
});

$(".module-slider__body-r .item-slider-r").on("click", function () {
	const index = $(this).attr("data-slick-index");
	$(".module-slider__body-r").slick("slickGoTo", index);
});

$('.reviews-slider').slick({
	dots: false,
	slidesToShow: 1,
	infinite: true,
	speed: 300,
	arrows: true
});
