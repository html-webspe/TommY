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

	if ($('.header-menu__mobile').hasClass('active')) {
		$('.header-menu__mobile,.header-menu__icon').removeClass('active');
		$('body').removeClass('lock');
	}
	return false;
});
//====================  <!-- GoTO -->  ========================//

//====================  <-- Подсказка -->  ========================//

//====================  <!-- Подсказка -->  ========================//


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


$('.section-slider').slick({
	dots: true,
	infinite: true,
	speed: 300,
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
	variableWidth: true,

});
/*
$('.module-slider__body').slick({
	appendArrows: '.module-slider__control',
	nextArrow: '.control-module-slider__arrow-next',
	prevArrow: '.control-module-slider__arrow-prev',
	dots: true,
	asNavFor: '.module-slider__body-1',
	appendDots: $('.module-slider__dots'),
	customPaging: function (slider, i) {
		i++
		return '<span class="module-slider__dots-dot">' + i + '</span>';
	}
});

$('.module-slider__body-1').slick({
	asNavFor: '.module-slider__body',
	arrows: false,
	adaptiveHeight: true
});*/