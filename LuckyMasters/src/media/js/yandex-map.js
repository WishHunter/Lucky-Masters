if (document.querySelector('#main-contacts__map')) {
    ymaps.ready(init);
    function init(){
        var myMap = new ymaps.Map("main-contacts__map", {
            center: [56.12, 44.12],
            zoom: 13,
            controls: [],
        });
        myMap.geoObjects
            .add(new ymaps.Placemark([56.12, 44.12], {
                balloonContent: '<strong>Lucky Masters</strong>'
            }, {
                preset: 'islands#icon',
                iconColor: '#3d7d7f'
            }));
        myMap.behaviors.disable(['drag', 'scrollZoom']);
    }
}

if (document.querySelector('#contacts__map')) {
    ymaps.ready(init);
    function init(){
        var myMap = new ymaps.Map("contacts__map", {
            center: [56.12, 44.12],
            zoom: 10
        });

        myMap.geoObjects
            .add(new ymaps.Placemark([56.12, 44.12], {
                balloonContent: '<strong>Lucky Masters</strong>'
            }, {
                preset: 'islands#icon',
                iconColor: '#3d7d7f'
            }));
    };
}