if (document.querySelector('.productions')) {

  document.querySelector('.productions__content-sublist').classList.add('js-open');
  document.querySelector('.productions__content-list').classList.add('js-subopen');

  document.querySelectorAll('.js-link-catalog').forEach(function(val) {
    val.addEventListener('click', (evt)=>{  
        evt.preventDefault();
        catalogOpen(val);
        document.querySelector('.productions__nav').classList.toggle("nav-open");
        document.querySelector('.js-productions__menu-mobile').classList.toggle("nav-open");
    });
  });

  function catalogOpen(val) {
    if (document.querySelector('.js-open')) {
      document.querySelector('.js-open').classList.remove('js-open');
    }
    if (document.querySelector('.js-subopen')) {
      document.querySelector('.js-subopen').classList.remove('js-subopen');
    }
    
    document.querySelector(val.dataset.class).classList.add('js-open');
    if (document.querySelector(val.dataset.class).classList.contains('productions__content-sublist')) {
      document.querySelector(val.dataset.class).parentElement.classList.add('js-subopen');
    }
  }  
}