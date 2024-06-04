
async function obtenerProductos() {
    try {
        const response = await fetch('product.json'); // Reemplaza con la ruta correcta al archivo JSON
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const productos = await response.json();
        renderizarProductos(productos.productos);

    } catch (error) {
        console.error('Error al obtener los productos:', error);
    }
}

function renderizarProductos(productos) {
    const contenedorProductos = document.getElementById('productos-container');

    productos.forEach(producto => {
        const productoDiv = document.createElement('div');
        productoDiv.className = 'col-md-4';

        productoDiv.innerHTML = `
            <div class="card mb.4 shado2-sm">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">${producto.descripcion}</p>
                    <p class="card-text"><strong>Precio: $${producto.precio.toFixed(2)}</strong></p>
                    <p class="card-text">Cantidad en stock: ${producto.stock}</p>
                    <button class="btn btn-success" onclick="agregarAlCarrito('${producto.nombre}' , ${producto.precio})">Agregar al carrito</button>
                </div>
            </div>
        `;
        contenedorProductos.appendChild(productoDiv);
    });
}

let carrito = [];

function agregarAlCarrito(nombre, precio) {
    const productoEnCarrito = carrito.find(producto  => producto.nombre === nombre);

        if(productoEnCarrito){
        productoEnCarrito.stock++;
        }else{
        carrito.push({ nombre, precio, stock: 1});
        }

    guardarCarritoEnLocalStorage();
    actualizarContenidoCarrito();
}

function guardarCarritoEnLocalStorage(){
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

function obtenerCarritoDesdeLocalStorage(){
    const carritoGuardado = localStorage.getItem('carrito');
    return carritoGuardado ? JSON.parse(carritoGuardado) : [];
}

function actualizarContenidoCarrito() {
    const carritoBody = document.getElementById('carrito-body');
    carritoBody.innerHTML = '';
    carrito = obtenerCarritoDesdeLocalStorage();

    carrito.forEach(producto => {
        const filaProducto = document.createElement('tr');
        filaProducto.innerHTML = `
        <td>${producto.nombre}</td>
        <td>${producto.stock}</td>
        <td>$${producto.precio.toFixed(2)}</td>
        <td>$${(producto.precio * producto.stock).toFixed(2)}</td>
        `;
        carritoBody.appendChild(filaProducto);
    });
}

function realizarCompra(){
    Swal.fire({
        icon: 'success',
        title: '!Compra realizada!',
        text: '!Gracias por su compra!',
        confirmButtonText: 'Aceptar'
    });
    carrito = [];
    guardarCarritoEnLocalStorage();

    actualizarContenidoCarrito();
}
document.querySelector('#miModal .modal-footer .btn-primary').addEventListener('click', realizarCompra);


//Lo estoy configuradno todavia
carrito = obtenerCarritoDesdeLocalStorage();
obtenerProductos();
actualizarContenidoCarrito();

function filtrarProducto(){
    const filtro = document.getElementById('buscador').value.toLowerCase();
    const productos = document.getElementById('productos-container').getElementsByClassName('card-body');

    Array.from(productos).forEach(producto => {
        const nombreProducto = producto.querySelector('.card-title').textContent.toLowerCase();
        if(nombreProducto.includes(filtro)){
            producto.style.display = 'block';
        } else{
            producto.style.display = 'none';
        }
    });

}