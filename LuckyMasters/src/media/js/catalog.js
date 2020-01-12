if (document.querySelector('.productions')) {

  document.querySelector('.productions__content-sublist').classList.add('js-open');
  document.querySelector('.productions__content-list').classList.add('js-subopen');
	document.querySelector('.productions__nav-sublink').classList.add('js-active-link');
	
  document.querySelectorAll('.js-link-catalog').forEach(function(val) {
    val.addEventListener('click', (evt)=>{  
        evt.preventDefault();
        catalogOpen(val);
        document.querySelector('.productions__nav').classList.toggle("nav-open");
        document.querySelector('.js-productions__menu-mobile').classList.toggle("nav-open");
    });
  });
}

if (document.querySelector('.js-product-subdesc')) {
	document.querySelectorAll('.js-product-subdesc').forEach(function (val) {
		val.addEventListener('click', (evt) => {
			evt.preventDefault();
			subdescToggle(val);
		});
	});
}

function subdescToggle(val) {
	val.previousElementSibling.classList.toggle('js-subdesc-open');
	
	if (!val.previousElementSibling.style.height) {
		val.previousElementSibling.style.height = val.previousElementSibling.firstElementChild.offsetHeight + 'px';
		return;
	}
	val.previousElementSibling.style.height = '';
}


function catalogOpen(val) {
	if (document.querySelector('.js-open')) {
		document.querySelector('.js-open').classList.remove('js-open');
	}
	if (document.querySelector('.js-subopen')) {
		document.querySelector('.js-subopen').classList.remove('js-subopen');
	}

	document.querySelector('.js-active-link').classList.remove('js-active-link');


	document.querySelector(val.dataset.class).classList.add('js-open');
	val.classList.add('js-active-link');

	if (document.querySelector(val.dataset.class).classList.contains('productions__content-sublist')) {
		document.querySelector(val.dataset.class).parentElement.classList.add('js-subopen');
	}


	document.querySelectorAll('.productions__product-subdesc').forEach(function (el) {
		el.style.height = '';
	});
}  