$( document ).ready(function() {
    new Splide('.splide', {
        type: 'loop',
        arrowPath: 'M2 2L2 42L42 22.2239L2 2Z',
        rewind: 'true',
        page : 'splide__pagination__page your-class-page'
    } ).mount();
    
    configSplide();
});

function configSplide() {
    var customArrow = $('.splide__arrow--next').find("svg");
    
    customArrow.addClass('splide__custom-arrow');
    customArrow.attr({
        'width' : "18",
        'height' : "38",
        'viewBox' : "0 0 18 38",
        'fill' : "none"
    });
    customArrow.find("path").attr({
        'stroke' : "white",
        'stroke-width' : "3.36454",
        'stroke-linecap' : "round",
        'stroke-linejoin' : "round",
        'd' : "M2 2L2 36L16 19.1904L2 2Z"
    });
};