if (document.querySelector('.hero__slider')) {
	new Swiper ('.hero__slider', {
		loop: true,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true
		},
		breakpoints: {
			768: {
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				}
			}
		}
	});
}

if (document.querySelector('.selection__tab-content')) {

	let ourVideoSlider = new Swiper ('.selection__tab-content', {
		loop: false,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		}
	});
	if (document.documentElement.clientWidth > 767) {
		ourVideoSlider.destroy();	
	}
}

if (document.querySelector('.our-video__slider--mob')) {
	let ourVideoSlider = new Swiper ('.our-video__slider--mob', {
		loop: false,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true
		},
	});
	if (document.documentElement.clientWidth > 1279) {
		ourVideoSlider.destroy();	
	}
}
