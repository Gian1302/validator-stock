const MINIMO_STOCK = 5;

const cantidadProductosTexto = prompt(
  "¿Cuántos productos del local querés validar?",
);
const cantidadProductos = parseInt(cantidadProductosTexto);

let productosBajos = 0;

function pedirDatosProducto(numero) {
  const nombre = prompt(`Producto ${numero}: ingresá el nombre`);
  const stockTexto = prompt(`¿Cuántas unidades de "${nombre}" hay en stock?`);
  const stock = parseInt(stockTexto);
  return { nombre, stock };
}

function evaluarEstadoStock(stock, minimo) {
  if (stock < minimo) {
     return "bajo";
  } else if (stock === minimo) {
     return "limite";
  }  else {
     return "ok";
  } 
} 

  const mostrarResultadoProducto = function (nombre, estado, stock) {
  if (estado === "bajo") {
    console.log(`⚠️ ${nombre}: stock bajo (${stock} unidades). Necesita reposición.`);
  } else if (estado === "limite") {
    console.log(`🔶 ${nombre}: stock justo en el mínimo (${stock} unidades).`);
  } else {
    console.log(`✅ ${nombre}: stock OK (${stock} unidades).`);
  }
};

const mostrarResumenFinal = (bajos) => {
  if (bajos > 0) {
    console.log(`Resumen: ${bajos} producto(s) necesitan reposición.`);
    alert(`⚠️ Atención: ${bajos} producto(s) necesitan reposición.`);
  } else {
    console.log("Resumen: todo el inventario está en buen estado.");
    alert("✅ Todo el inventario está en buen estado.");
  }
};

for (let i = 1; i <= cantidadProductos; i++) {
  const datosProducto = pedirDatosProducto(i);
  const estado = evaluarEstadoStock(datosProducto.stock, MINIMO_STOCK);
  mostrarResultadoProducto(datosProducto.nombre, estado, datosProducto.stock);

  if (estado === "bajo") {
    productosBajos++;
  }
}

mostrarResumenFinal(productosBajos);
