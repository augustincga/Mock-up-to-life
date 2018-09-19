let makeNavigationStickyOnScroll = function () {
	let $navigationMenu = $('.navigation');
	let headerWidthOffset = 90;

	if ($(window).scrollTop() >= headerWidthOffset) {
		$navigationMenu.addClass('js-navigation-fixed');
	}
	else {
		$navigationMenu.removeClass('js-navigation-fixed');
	}
}

let resetAccordion = function() {
	$('.accordion__item-content').css({'display':'none'});
	$('.accordion__item-title').removeClass('accordion__item-title--black');
	$('.accordion__item-title').find('i').remove();
	$('.accordion__item-title').append('<i class="fas fa-angle-down"></i>');
}

let bindEventHandlers = function () {
	$(window).on('scroll', makeNavigationStickyOnScroll);

	$('.main-carousel').flickity({
		cellAlign: 'left',
		contain: true
	});

	$('.js-toggle-accordion').on('click', function(){
		let $itemContent = $(this).next();

		if($itemContent.css('display') === 'flex') {
			resetAccordion();
		} else {
			resetAccordion();
			$itemContent.css({'display':'flex'});
			$(this).addClass('accordion__item-title--black');
			$(this).find('i').remove();
			$(this).append('<i class="fas fa-angle-up"></i>');
		}
	})

	$('.mobile-list__menu-btn').on('click', function(){
		$('.mobile__list').toggle('fast');
	})
}

$(document).ready(function () {
	bindEventHandlers();
})