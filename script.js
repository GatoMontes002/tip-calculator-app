let cantidadDePersonas = 1
let costoComida = 0
let descuento = 0

const saludar  = function(){
    console.log(cantidadDePersonas);
    console.log(costoComida);
    console.log(descuento);
    console.log("-------------------");
}

const pulsarPersonas  = function(elem){
    cantidadDePersonas = parseInt(elem.value, 10);
}

const pulsarCosto = function(elem){
    costoComida = parseInt(elem.value, 10);
    console.log(cantidadDePersonas*costoComida);
}

const pulsarDescuento = function(elem){
    descuento = elem;
}

const pulsarCustomTip = function(elem){
    descuento = parseInt(elem.value, 10);
}
