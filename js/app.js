let carrito = [];

function agregarAlCarrito(producto) {
  carrito.push(producto);
  actualizarCarrito();
}

function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  actualizarCarrito();
}

function actualizarCarrito() {
  let total = 0;
  let carritoHTML = '';
  carrito.forEach((producto, index) => {
    total += producto.precio;
    carritoHTML += `
      <tr>
        <td>${producto.nombre}</td>
        <td>1</td>
        <td>$${producto.precio}</td>
        <td><button onclick="eliminarDelCarrito(${index})">Eliminar</button></td>
      </tr>
    `;
  });
  document.getElementById('tablaCarrito').innerHTML = carritoHTML;
  document.getElementById('total').innerText = 'Total: $' + total;
}
