
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

const productosEnStock = ["Yerba", "Arroz", "Fideos", "Aceite", "Jabón"];

productosEnStock.push("Cafe");
productosEnStock.unshift("Agua mineral");

const eliminado = productosEnStock.pop();
console.log(`Se ha eliminado el elemento: ${eliminado}`);

const buscado = prompt("¿Qué producto querés buscar en el stock?");

if (productosEnStock.includes(buscado)) {
  const posicion = productosEnStock.indexOf(buscado);
  console.log(`✅ "${buscado}" está en stock, en la posición ${posicion}`);
} else {
  console.log(`❌ "${buscado}" no está en stock`);
}

productosEnStock.splice(2, 1, "Fideos integrales");
console.log(`El producto de la posición 2 ahora es: ${productosEnStock[2]}`);

function listarStock(lista) {
  console.log("--- Stock actual ---");
  for (const producto of lista) {
    console.log(`Producto: ${producto}`);
  }
  console.log(`Total: ${lista.length} productos`);
}

listarStock(productosEnStock);
