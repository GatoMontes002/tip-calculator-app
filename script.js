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
    saludar();
}

const pulsarCosto = function(elem){
    costoComida = parseInt(elem.value, 10);
    saludar();
}

const pulsarDescuento = function(elem){
    descuento = elem;
}

const pulsarCustomTip = function(elem){
    //descuento = parseInt(elem.value, 10);
    descuento = elem
    console.log("Buscando");
    console.log(descuento);
    identificador = "p" + elem.toString();
    if (identificador==="p1000") identificador = "custom";
    mielemento = document.getElementById(identificador);
    if (identificador==="custom") descuento = mielemento.value;

    
    
    elementos = document.getElementsByName("descuento");
    miarray = [ document.getElementById("custom") ];
    
    elementos.forEach(el => miarray.push(el));
        
    miarray.forEach(el => {
        if (el===mielemento){ 
            el.style.color = "var(--veryDarkCyan)";
            el.style.backgroundColor = "var(--strongCyan)";
        }
        else{ 
            el.style.color = "var(--white)";
            el.style.backgroundColor = "var(--veryDarkCyan)";
        };
    });
    console.log('********');
    saludar();
}
