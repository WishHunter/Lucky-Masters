!(function () {
    document.querySelector('.js-open-menu').addEventListener('click', function (evn) {
        evn.preventDefault();
        this.classList.toggle("nav-open");
        document.querySelector('.nav').classList.toggle("nav-open");
    })
})();