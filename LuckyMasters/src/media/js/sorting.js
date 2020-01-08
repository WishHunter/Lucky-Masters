if (document.querySelector('.sorting')) {
  
    document.querySelectorAll('.js-link-catalog').forEach(function(val) {
      val.addEventListener('click', (evt)=>{  
          evt.preventDefault();
          catalogOpen(val);
          document.querySelector('.sorting__nav').classList.toggle("nav-open");
          document.querySelector('.js-sorting__menu-mobile').classList.toggle("nav-open");
      });
    });
  
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

      if (document.querySelector(val.dataset.class).classList.contains('sorting__content-sublist')) {
        document.querySelector(val.dataset.class).parentElement.classList.add('js-subopen');
      }
    }  
  }