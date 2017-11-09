//    переменные на калькулятор
var a,c1,c2 = 0;
var b1,b2 = 1;
var d1 = 650;
var d2 = 600;
var porters = document.getElementById('porters');
$(document).ready(function(){
    $('#total_price').next().hide();
})
noUiSlider.create(porters, {
    start: 1,
    step: 1,
    connect: [true, false],
    range: {
        'min': 0,
        'max': 10
    }
});
porters.noUiSlider.on('update', function( values ) {
    var values = parseInt(values);
    $('#porters-input').val(values).trigger('update');
});


var length_carniz = document.getElementById('length_carniz');

noUiSlider.create(length_carniz, {
    start: 0,
    step: 1,
    connect: [true, false],
    range: {
        'min': 0,
        'max': 10
    }
});
length_carniz.noUiSlider.on('update', function( values ) {
    var values = parseInt(values);
    a = values;
    $('#length_carniz-input').val(values).trigger('update');
});


var tulle = document.getElementById('tulle');

noUiSlider.create(tulle, {
    start: 0,
    step: 1,
    connect: [true, false],
    range: {
        'min': 0,
        'max': 10
    }
});
tulle.noUiSlider.on('update', function( values ) {
    var values = parseInt(values);
    $('#tulle-input').val(values).trigger('update');
});


var porters_kf = document.getElementById('porters_kf');

noUiSlider.create(porters_kf, {
    start: 1.5,
    step: 0.5,
    connect: [true, false],
    range: {
        'min': 1,
        'max': 3
    }
});
porters_kf.noUiSlider.on('update', function( values ) {
    var values = parseFloat(values).toFixed(1);
    b1 = values;
    $('#porters_kf-input').val(values).trigger('update');
});


var tulle_kf = document.getElementById('tulle_kf');

noUiSlider.create(tulle_kf, {
    start: 1.5,
    step: 0.5,
    tooltips: [ false],
    connect: [true, false],
    range: {
        'min': 1,
        'max': 3
    }
});
tulle_kf.noUiSlider.on('update', function( values ) {
    var values = parseFloat(values).toFixed(1);
    b2 = values;
    $('#tulle_kf-input').val(values).trigger('update');
});


var porters_price = document.getElementById('porters_price');

noUiSlider.create(porters_price, {
    start: 0,
    step: 500,
    connect: [true, false],
    range: {
        'min': 1000,
        'max': 3000
    }
});
porters_price.noUiSlider.on('update', function( values ) {
    var values = parseInt(values);
    c1 = values;
    $('#porters_price-input').val(values).trigger('update');
});


var tulle_price = document.getElementById('tulle_price');

noUiSlider.create(tulle_price, {
    start: 0,
    step: 500,
    connect: [true, false],
    range: {
        'min': 500,
        'max': 2500
    }
});
tulle_price.noUiSlider.on('update', function( values ) {
    var values = parseInt(values);
    c2 = values;
    $('#tulle_price-input').val(values).trigger('update');

});
$('#tulle_price-input').focus(function () {
    $(this).val('');
});
$('.calculator_input').on('update',function () {
    var total_price = ((c1+d1)*b1*a)+((c2+d2)*b2*a);
    $('#total_price').text(total_price + ' руб.');
    if(total_price !== 0 ){
        // $('#total_price').show();
        // $('#total_price').next().show();
    }else{
        // $('#total_price').next().hide();
        // $('#total_price').hide();
    }
});

