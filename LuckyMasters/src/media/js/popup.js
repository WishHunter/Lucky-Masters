!(function() {

    if (document.querySelector('.js-open-popup')) {

        document.querySelectorAll('.js-open-popup').forEach(function(val) {
            val.addEventListener('click', (evt)=>{  
                evt.preventDefault();
                popupOpen(val);
            });
        });
        document.querySelectorAll('.js-close-popup').forEach(function(val) {
            val.addEventListener('click', (evt)=>{  
                evt.preventDefault();
                popupClose(val);
            });
        });
    }
    
    function popupOpen(elem) {
        document.querySelector(elem.dataset.id).classList.add('popup-open');
    }
    function popupClose(elem) {
        document.querySelector(elem.dataset.id).classList.remove('popup-open');
    }
})()