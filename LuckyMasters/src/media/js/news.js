if (document.querySelector('.news')) {
		
		document.querySelector('.news__article').classList.add('js-open');
		document.querySelector('.news__nav-link').classList.add('js-active-link');
	
		document.querySelectorAll('.js-link-news').forEach(function(val) {
			val.addEventListener('click', (evt)=>{  
					evt.preventDefault();
					newsOpen(val);
					document.querySelector('.news__nav').classList.toggle("nav-open");
					document.querySelector('.js-news__menu-mobile').classList.toggle("nav-open");
			});
		});
	
		function newsOpen(val) {
	    	document.querySelector('.js-open').classList.remove('js-open');
			document.querySelector('.js-active-link').classList.remove('js-active-link');
		  	document.querySelector(val.dataset.id).classList.add('js-open');
			val.classList.add('js-active-link');
		}  
}