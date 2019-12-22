ymaps.ready(init);
function init(){
    var myMap = new ymaps.Map("contacts__map", {
        center: [56.20, 44.08],
        zoom: 17,
        controls: [],
    });
    myMap.behaviors.disable(['drag', 'scrollZoom']);
}