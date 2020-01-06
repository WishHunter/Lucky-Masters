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
	document.querySelectorAll('.selection__tab-content').forEach(el => {
		let idElem = el.id;
		let flag = false;
		if (document.documentElement.clientWidth < 768) {
			if(!el.classList.contains('js-tab-active')) {
				el.classList.add('js-tab-active');
			} else {
				flag = true;
			};
			new Swiper ('#'+idElem, {
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
			if(!flag) {
				el.classList.remove('js-tab-active');
			};
		}

	})
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
