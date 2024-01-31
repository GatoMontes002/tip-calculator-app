let cantidadDePersonas = 0
let costoComida = 0
let descuento = 0

const saludar  = function(){
    if (cantidadDePersonas===0) return;

    valorPropina = costoComida * descuento / 100 / cantidadDePersonas;
    console.log(valorPropina)
    elem = document.getElementById("propina");
    elem.innerText = "$" + valorPropina.toFixed(2);

    valorComida = valorPropina + costoComida / cantidadDePersonas;
    elem = document.getElementById("costoPorpersona");
    elem.innerText = "$" + valorComida.toFixed(2);

    
}

const reset  = function(){
    cantidadDePersonas = 0;
    costoComida = 0;
    descuento = 0;
    elem = document.getElementById("propina");
    elem.innerText = "$0.0" 
    elem = document.getElementById("costoPorpersona");
    elem.innerText = "$0.0" 

    elem = document.getElementById("cantPersonas");
    elem.value = "0" 

    elem = document.getElementById("costo");
    elem.value = "0" 

    elem = document.getElementById("custom");
    elem.value = "" 

    elementos = document.getElementsByName("descuento");
    miarray = [ document.getElementById("custom") ];
    
    elementos.forEach(el => miarray.push(el));
        
    miarray.forEach(el => {
        el.style.color = "var(--white)";
        el.style.backgroundColor = "var(--veryDarkCyan)";
    });
    
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

    if (identificador!=="custom")
        document.getElementById("custom").value = "";

    saludar();
}
