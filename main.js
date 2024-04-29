//let declara variable, prompt escribe en la pagina//
//= asignacion. == comparacion. === compraracion estricta//
//let mate = "yerba"
// const pi = 3.14
// let numero1 = 5
// let numero2 = 12
// console.log(resultado)
// let resultado = numero1 + numero2



/* let nombre = prompt("ingresa tu nombre");
if (nombre == "santi") {

    alert("bienvenido santi");

} else if(nombre== "male") {
    alert("vos no sos santi")

} */

/* let numero = prompt("ingrese numero")
let resultado = (numero > 5)

console.log(resultado);

if (resultado) {
    alert("es mayor a 5")
} else {
    alert("no es mayor")
}

console.warn("mensaje alerta")
console.error("mensaje error") */


//for   desde,hasta,acturalizacion o incremento



/* for(let i=0 ; i > 5; i++ ) {

    console.log("hola mundo" + i)

} */
/* 
let numero1 =parseInt(prompt("ingrese numero"))

for(let i = 1 ; i <= 10 ; i++ ){

    let resultado1 = numero1 * i

    alert( resultado1)
}
 */


//breaks

/* for(let i=0 ; i <= 10 ; i++ ){
    if(i==5){
        break;
    }
    alert(i)
}
 */

//while, se repite hasta que el usuario aprete esc

/* while(entrada != "ESC"){

    alert("el usuario ingreso" + entrada);

    entrada= prompt("ingresar otro ")

} */

/* let nombre=prompt("ingrese su nombre")
alert("bienvenido"+nombre)

function saludar(){
    let nombre=prompt("ingrese su nombre")
    alert("bienvenido"+nombre)

} */
/* 
let nombre= prompt("ingresa tu nombre")

function saludar(nombre){
    console.log("hola ${nombre}")
}

saludar(nombre) */

/* const iva = 1.21

function calcularIva(importe){
    if(parseFloat(importe)){
        let resultado = importe * iva
        alert("el importe mas iva es: " + resultado)
    
    }
}

function calcularpreciofinal(){
    let precioDelProducto = parseFloat(prompt("ingresa precio del producto"))
    calcularIva(precioDelProducto)
    alert("el importe final es:" + resultado)
}

calcularpreciofinal()
 */



/* bucles: while o do while o for */

/* function suma(num1,num2){
    let resultado = num1 + num2
    alert(resultado)
}


function normal(num1,num2){
    return num1+num2
}


let funcionAnonima = function (a,b){
    return a+b
}


let funcionFlecha = (a,b)=> { //funcion flecha es literalmente =>
    return a+b
}
let funcionFlecha2 = (a,b) => a+b */

//objetos

/* const computadora1 = {  //variable que contiene objetos
    //clave:valor
    marca:"lenovo",
    procesador:"ryzen 7 5700",
    ram: 32,

}

console.log(computadora1)

computadora2.marca="mac"

console.log(computadora2.marca) */
/* let entradasDisponibles = 100; */ // Entradas totales


let colonias = 50;

function coloniasEnVenta(){
let cantidad = prompt("¿cuantas colonias quiere?");
    if(cantidad <= colonias && cantidad > 0){
        colonias -= cantidad;
        document.getElementById("colonias").textContent = colonias;
        alert(`Compraste ${cantidad} de colonias, gracias por su compra.Quedan ${colonias} disponibles.`);

    } else{
        if(cantidad <= 0){
            alert("No es posible comprar menos que cero colonias");
        } else{
            alert(`Disculpe no quedan esa cantidad de colonias. Quedan ${colonias} disponibles`)
        }
    }
    while(colonias > 0){
        break
    }

}