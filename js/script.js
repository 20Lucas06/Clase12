function saludo(){
var nombre = prompt("Ingresar Nombre: ")
while (nombre === null, nombre === "") {
  alert("Ingrese su Nombre: ");
  var nombre = prompt("Ingresar Nombre: ");
}
  alert("Bienvenido a la mejor pagina " + nombre + "!");
}
window.onload = function() {
  saludo();
}