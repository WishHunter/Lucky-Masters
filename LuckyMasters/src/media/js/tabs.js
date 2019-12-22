!(function() {

    document.querySelectorAll('.js-tab-link').forEach(  function(val) {
        val.addEventListener('click', (evt)=>{  
            evt.preventDefault();
            tabSwith(val);
        });
    });

    function tabSwith(e) {

        if (e.classList.contains('js-tab-active')) {
            return;
        }

        e.parentElement.parentElement.querySelector('.js-tab-active').classList.remove('js-tab-active');
        e.classList.add('js-tab-active');

        let content = '#' + e.dataset.id;
        let active_content = document.querySelector(content);

        active_content.parentElement.querySelector('.js-tab-active').classList.remove('js-tab-active');
        active_content.classList.add('js-tab-active');
    }
})()