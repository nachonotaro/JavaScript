/* 
let colonias = 50;

function coloniasEnVenta(){
let cantidad = prompt("¿cuantas colonias quiere?");
    if(cantidad <= colonias && cantidad > 0){
        colonias -= cantidad;
        document.getElementById("colonias").textContent = colonias;
        alert(`Compraste ${cantidad} de colonias, gracias por su compra.Quedan ${colonias} disponibles.`);

    } else{
        if(cantidad <= 0){
            alert("No es posible comprar menos de cero colonias. :(");
        } else{
            alert(`Disculpe no quedan esa cantidad de colonias. Quedan ${colonias} disponibles`)
        }
    }
    while(colonias > 0){
        break
    }

} */
/* const Producto = function(nombre,precio,cantidades){
    this.nombre=nombre;
    this.precio=precio;
    this.stock=stock;
}

let colonia1= new Producto (Inglesa, 8000, 50)
let colonia2= new Producto (Henon, 8000, 50)
let colonia3= new Producto (Lavanda, 8000, 50)

let lista = [colonia1,colonia2,colonia3]

function filtrarProductos(){
    let palabraClave = prompt("ingrese su busqueda").toUpperCase().trim()
    let resultado = lista.filter((x)=>x.nombre.toUpperCase().includes(palabraClave))

    if(resultado.length>0){
        console.resultado
    } else{
        alert("No exsiste"+ palabraClave)
    }


} */

// Lista de productos con sus precios
const productos = {
    "colonias inglesa": 8000,
    "colonias heno": 7500,
    "colonias lavanda": 6000,
};

// Función para calcular el total de la compra
function calcularTotal(carrito) {
    let total = 0;
    for (let producto in carrito) {
        total += carrito[producto] * productos[producto];
    }
    return total;
}
// Chat con cliente
function chat() {
    let carrito = {};
    let continuar = true;

    while (continuar) {
        let producto = prompt("¿Qué producto desea comprar? (Colonias Inglesa, Colonias Heno, Colonias Lavanda").toLowerCase();
        if (producto.toLowerCase() in productos) {
            let cantidad = parseInt(prompt(`¿Cuántas ${producto} desea comprar?`));
            carrito[producto.toLowerCase()] = cantidad;
        } else {
            let agregarNuevo = prompt("Producto no encontrado. ¿Desea agregar un nuevo producto a la lista? (si/no)").toLowerCase();
            if (agregarNuevo === "si") {
                let nuevoProducto = prompt("Ingrese el nombre del nuevo producto:");
                let nuevoPrecio = parseFloat(prompt(`Ingrese el precio de ${nuevoProducto}:`));
                productos[nuevoProducto.toLowerCase()] = nuevoPrecio;
            } else {
                continuar = false;
            }
        }
    }

    // Mostrar carrito y total
    console.log("Carrito de compras:");
    for (let producto in carrito) {
        console.log(`${producto}: ${carrito[producto]}`);
    }
    console.log(`Total a pagar: $${calcularTotal(carrito)}`);
}

// Ejecutar la función principal
chat();