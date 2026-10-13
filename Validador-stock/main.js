const MINIMO_STOCK = 5;

const cantidadProductosTexto = prompt(
  "¿Cuántos productos del local querés validar?",
);
const cantidadProductos = parseInt(cantidadProductosTexto);

let productosBajos = 0;

for (let i = 1; i <= cantidadProductos; i++) {
  const nombreProducto = prompt(`Producto ${i}: ingresá el nombre`);
  const stockTexto = prompt(`¿Cuántas unidades de "${nombreProducto}" hay en stock?`);
  const stock = parseInt(stockTexto);

  if (stock < MINIMO_STOCK) {
    console.log(`⚠️ ${nombreProducto}: stock bajo (${stock} unidades). Necesita reposición.`);
    productosBajos++;
  } else if (stock === MINIMO_STOCK) {
    console.log(`🔶 ${nombreProducto}: stock justo en el mínimo (${stock} unidades).`);
  } else {
    console.log(`✅ ${nombreProducto}: stock OK (${stock} unidades).`);
  }
}

if (productosBajos > 0) {
  console.log(`Resumen: ${productosBajos} producto(s) necesitan reposición.`);
  alert(`⚠️ Atención: ${productosBajos} producto(s) necesitan reposición.`);
} else {
  console.log("Resumen: todo el inventario está en buen estado.");
  alert("✅ Todo el inventario está en buen estado.");
}