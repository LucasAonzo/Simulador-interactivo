articulos = [{
    nombre: "Camisa",
    precio: 10,
}, {
    nombre: "Pantalon",
    precio: 20,
}, {
    nombre: "Zapatos",
    precio: 30,
},{
    nombre: "Reloj",
    precio: 40,
}];

let carrito = 0;

let seleccion = prompt(`¿Qué desea comprar?
camisa $10
pantalon $20
zapatos $30
reloj $40
pagar`);

function comprar() {
while (seleccion != "pagar") { 
    switch (seleccion) {
        case "camisa":
            let cantidad = Number(prompt("¿Cuántas camisas desea comprar?"));
            carrito += articulos[0].precio*cantidad;
            break;
        case "pantalon":
            let cantidad2 = Number(prompt("¿Cuántos pantalones desea comprar?"));
            carrito += articulos[1].precio*cantidad2;
            break;
        case "zapatos":
            let cantidad3 = Number(prompt("¿Cuántos zapatos desea comprar?"));
            carrito += articulos[2].precio*cantidad3;
            break;
        case "reloj":
            let cantidad4 = Number(prompt("¿Cuántos relojes desea comprar?"));
            carrito += articulos[3].precio*cantidad4;
            break;
        default:
            alert("No existe ese artículo");
            break;
    }
    seleccion = prompt(`¿Qué desea comprar?
camisa $10
pantalon $20
zapatos $30
reloj $40
pagar`);
}

pagar(carrito);
}

function pagar(carrito) {

    let variable = true;
    while (variable == true) {
let pago = Number(prompt("Su carrito tiene un valor de: $" + carrito + " ¿Con cuanto va a pagar?"));
let cambio = pago - carrito;
if (pago >= carrito) {
    alert(`Su cambio es de ${cambio}, Gracias por su compra`);
    variable = false;
} else {
    alert("No alcanza el monto, tiene que ser mayor a $" + carrito);
}
}
}

comprar();

