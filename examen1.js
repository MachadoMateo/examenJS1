//punto 1
/*var frutas = ["manzana","mango","fresa","kiwi","banano"];


var frutasPares = [];
var frutasImpares = [];

for (var i = 0; i < frutas.length; i++){
    if (i % 3 === 0){
        frutasImpares.push(frutas[i]);
    } else {
        frutasPares.push(frutas[i]);
    }
}

document.write("<h2> frutas en posicion Par: </h2>");
for (var l = 0; l < frutasPares.length; l++){
    document.write(frutasPares[l] + "<br>");
}


document.write("<h2> frutas en posicion Impar: </h2>");
for (var k = 0; k < frutasPares.length; k++){
    document.write(frutasImpares[k] + "<br>");
}¨
*/

//punto 2
/*function infoNum() {
    var numerosIngresados = [];
    var cantidadNumeros = 5;
  
    for (var i = 0; i < cantidadNumeros; i++) {
      var numero = parseInt(prompt("Ingresa el número " + (i + 1) + ":"));
      numerosIngresados.push(numero);
    }
  
    var mayor = Math.max(...numerosIngresados);
    var menor = Math.min(...numerosIngresados);
  
    
    var suma = 0;
    for (var i = 0; i < numerosIngresados.length; i++) {
      suma += numerosIngresados[i];
    }
    var promedio = suma / numerosIngresados.length;
  
    
    document.write("<h3>Informacion de los numeros ingresados:</h3>");
    document.write("Mayor: " + mayor + "<br>");
    document.write("Menor: " + menor + "<br>");
    document.write("Promedio: " + promedio + "<br>");
  }

  infoNum();
  */

  //punto 3 
 
 /* var arreglo = ["Zanahoria","banano","manzana","pera","Cebolla","Papa","fresas","Ajo","sandia"];
  var frutas = [];

  for (var i = 0; i < arreglo.length; i++) {
    var elemento = arreglo[i];
    if(elemento[0] === elemento[0].toLowerCase()){
        frutas.push(elemento);
    }
  }
  document.write("<h2> Las frutas son : </h2>");
  for (var i= 0; i < frutas.length; i++){
    document.write(frutas[i] + "<br>");
  }
  */

  //punto 4 
  /*var empleados = [
    { nombre: "pedro", salario: 5000000, profesion: "Abogado" },
    { nombre: "Angie", salario: 3900000, profesion: "Odontóloga" },
    { nombre: "Luis", salario: 2500000, profesion: "Asesor Bancario" },
    { nombre: "Lina", salario: 4500000, profesion: "Psicóloga" }
  ];
  
  // Suma total de los salarios
  var sumaSalarios = 0;
  for (var i = 0; i < empleados.length; i++) {
    sumaSalarios += empleados[i].salario;
  }
  
  // Corregir el nombre de la profesión de Lina
  empleados[3].profesion = "Trabajadora sexual";
  
  // agregar los apellidos
  empleados[0].apellido = "Vidal";
  empleados[1].apellido = "Rojas";
  empleados[2].apellido = "Machado";
  empleados[3].apellido = "Acevedo";
  
  // suma de los salarios
  document.write("<h3>Suma total de los salarios:</h3>");
  document.write("Suma total: " + sumaSalarios + "<br>");
  
  //profesion de lina
  document.write("<h3>Corrección de la profesión de Lina:</h3>");
  document.write("Nombre: " + empleados[3].nombre + "<br>");
  document.write("Profesión: " + empleados[3].profesion + "<br>");
  
  // apellidos de empleados
  document.write("<h3>Empleados con apellidos:</h3>");
  for (var j = 0; j < empleados.length; j++) {
    document.write("Nombre: " + empleados[j].nombre + " " + empleados[j].apellido + "<br>");
    document.write("Profesión: " + empleados[j].profesion + "<br><br>");
  }
  */

  //punto 5 
  /*var empleados = [
    { nombre: "pedro", salario: 5000000, profesion: "Abogado" },
    { nombre: "Angie", salario: 3900000, profesion: "Odontóloga" },
    { nombre: "Luis", salario: 2500000, profesion: "Asesor Bancario" },
    { nombre: "Lina", salario: 4500000, profesion: "Psicóloga" }
  ];
  
  // Función de comparación para ordenar los empleados por salario de mayor a menor
  function compararSalario(a, b) {
    return b.salario - a.salario;
  }
  
  // Ordenar los empleados por salario de mayor a menor
  empleados.sort(compararSalario);
  
  // Mostrar los empleados ordenados por salario
  document.write("<h3>Empleados ordenados por salario de mayor a menor:</h3>");
  for (var i = 0; i < empleados.length; i++) {
    document.write("Nombre: " + empleados[i].nombre + "<br>");
    document.write("Salario: " + empleados[i].salario + "<br>");
    document.write("Profesión: " + empleados[i].profesion + "<br><br>");
  }
  */

  // ejercicio objetos

  //punto 1
  // Array para almacenar los productos
/*var productos = [];

// Solicitar al usuario ingresar los productos
var cantidadProductos = 3; // Cantidad mínima de productos a ingresar

for (var i = 0; i < cantidadProductos; i++) {
  var producto = {};

  // Solicitar al usuario los datos del producto
  producto.nombre = prompt("Ingrese el nombre del producto " + (i + 1) + ":");
  producto.precio = parseFloat(prompt("Ingrese el precio del producto " + (i + 1) + ":"));
  producto.cantidad = parseInt(prompt("Ingrese la cantidad del producto " + (i + 1) + ":"));

  // Agregar el producto al array de productos
  productos.push(producto);
}

// Mostrar los datos de los productos en el navegador
document.write("<h3>Datos de los productos:</h3>");

for (var j = 0; j < productos.length; j++) {
  document.write("<p><strong>Producto " + (j + 1) + ":</strong></p>");
  document.write("<p>Nombre: " + productos[j].nombre + "</p>");
  document.write("<p>Precio: " + productos[j].precio + "</p>");
  document.write("<p>Cantidad: " + productos[j].cantidad + "</p>");
  document.write("<br>");
}
*/

//punto 2

// Array para almacenar los productos
/*var productos = [];

// Solicitar al usuario ingresar los productos
var cantidadProductos = 3; // Cantidad mínima de productos a ingresar
var totalAPagar = 0;

for (var i = 0; i < cantidadProductos; i++) {
  var producto = {};

  // Solicitar al usuario los datos del producto
  producto.nombre = prompt("Ingrese el nombre del producto " + (i + 1) + ":");
  producto.precio = parseFloat(prompt("Ingrese el precio del producto " + (i + 1) + ":"));
  producto.cantidad = parseInt(prompt("Ingrese la cantidad del producto " + (i + 1) + ":"));

  // Agregar el producto al array de productos
  productos.push(producto);

  // Calcular el subtotal del producto y sumarlo al total a pagar
  var subtotal = producto.precio * producto.cantidad;
  totalAPagar += subtotal;
}

// Mostrar los datos de los productos en el navegador
document.write("<h3>Datos de los productos:</h3>");

for (var j = 0; j < productos.length; j++) {
  document.write("<p><strong>Producto " + (j + 1) + ":</strong></p>");
  document.write("<p>Nombre: " + productos[j].nombre + "</p>");
  document.write("<p>Precio: " + productos[j].precio + "</p>");
  document.write("<p>Cantidad: " + productos[j].cantidad + "</p>");
  document.write("<br>");
}

// Mostrar el total a pagar
document.write("<h3>Total a pagar:</h3>");
document.write("<p>Total: " + totalAPagar + "</p>");

*/

//punto 3 
// Array para almacenar los productos
/*var productos = [];

// Solicitar al usuario ingresar los productos
var cantidadProductos = 3; // Cantidad mínima de productos a ingresar
var totalAPagar = 0;
var subtotaliva = 0;

for (var i = 0; i < cantidadProductos; i++) {
  var producto = {};

  // Solicitar al usuario los datos del producto
  producto.nombre = prompt("Ingrese el nombre del producto " + (i + 1) + ":");
  producto.precio = parseFloat(prompt("Ingrese el precio del producto " + (i + 1) + ":"));
  producto.cantidad = parseInt(prompt("Ingrese la cantidad del producto " + (i + 1) + ":"));

  // Agregar el producto al array de productos
  productos.push(producto);

  // Calcular el subtotal del producto y sumarlo al total a pagar
  var subtotal = producto.precio * producto.cantidad;
  totalAPagar += subtotal;
    subtotaliva = totalAPagar *0.19;
    var pagoiva = totalAPagar + subtotaliva

  
}

// Mostrar los datos de los productos en el navegador
document.write("<h3>Datos de los productos:</h3>");

for (var j = 0; j < productos.length; j++) {
  document.write("<p><strong>Producto " + (j + 1) + ":</strong></p>");
  document.write("<p>Nombre: " + productos[j].nombre + "</p>");
  document.write("<p>Precio: " + productos[j].precio + "</p>");
  document.write("<p>Cantidad: " + productos[j].cantidad + "</p>");
  document.write("<br>");
}

// Mostrar el total a pagar
document.write("<h3>Total a pagar:</h3>");
document.write("<p>Total: " + totalAPagar + "</p>");
document.write("<p>Total iva: " + subtotaliva + "</p>");
document.write("<p>Total a pagar con iva: " + pagoiva + "</p>");
*/