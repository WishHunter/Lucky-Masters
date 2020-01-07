!(function () {
    document.querySelector('.js-open-menu').addEventListener('click', function (evn) {
        evn.preventDefault();
        this.classList.toggle("nav-open");
        document.querySelector('.nav').classList.toggle("nav-open");
    });

    if (document.querySelector('.js-productions__menu-mobile')) {
        document.querySelector('.js-productions__menu-mobile').addEventListener('click', function (evn) {
            evn.preventDefault();
            this.classList.toggle("nav-open");
            document.querySelector('.productions__nav').classList.toggle("nav-open");
        });
        
    }

    if (document.querySelector('.js-news__menu-mobile')) {
        document.querySelector('.js-news__menu-mobile').addEventListener('click', function (evn) {
            evn.preventDefault();
            this.classList.toggle("nav-open");
            document.querySelector('.news__nav').classList.toggle("nav-open");
        });        
    }
})();