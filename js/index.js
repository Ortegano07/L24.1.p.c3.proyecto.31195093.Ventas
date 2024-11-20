/**2. VENTAS 
Se desea llevar un control de las ventas que realiza 
una tienda. Se tiene por cada venta: nombre del cliente, 
número de factura, costo y cantidad de artículos. Se 
requiere de un programa que permita el registro de esta 
información, conociendo al principio de la ejecución el 
monto inicial en caja y el porcentaje de incremento para 
el costo de cada venta. 

Estructuras de datos recomendadas 
 Cl_tienda: montoCaja, porcIncremento 
 Cl_venta: cliente, factura, costo, cnArticulos 

Primeros requerimientos 
 Los datos entrada vienen en un archivo (con 
import... ver anexo) 
 Monto final en caja 
 Clientes que pagaron el monto mayor 
 Clientes que sólo llevaron 1 artículo*/ 

import Cl_Tienda from "./Cl_Tienda.js";
import Cl_Venta from "./Cl_Venta.js";
import Dt_Tienda from "./Dt_Tienda.js";
import Dt_Venta from "./Dt_Venta.js";

let agregarVenta = (tienda) => {
    let cliente = prompt("Ingrese el nombre del cliente");
    let factura = prompt("Ingrese el número de la factura");
    let costo = prompt("Ingrese el costo");
    let cnArticulos = prompt("Ingrese la cantidad de artículos");
    tienda.agregarVenta(new Cl_Venta(cliente, factura, costo, cnArticulos));
    
}

let eliminarVenta = (tienda) => {
    let factura = prompt("Ingrese el número de la factura");
    if (tienda.eliminarVenta(factura)){
        window.alert(`Se elimino la venta ${factura}`);}
    else alert(`No existe la venta ${factura}`);
    
}

let modificarVenta = (tienda) => {
    let factura = prompt("Ingrese el número de la factura");
    if (tienda.modificarVenta(factura)){
        window.alert(`Se modifico la venta ${factura}`);}
        else
        window.alert(`No existe la venta ${factura}`);
 }

let listaVentas = (tienda) => {
    salida.innerHTML = "";
    tienda.ventas.forEach(venta => {
        salida.innerHTML += `${venta.cliente} - ${venta.factura} - ${venta.costo} - ${venta.cnArticulos} <br>`
    })}


        const tienda = new Cl_Tienda(Dt_Tienda.montocaja, Dt_Tienda.porcincremento);
Dt_Venta.forEach(venta => tienda.agregarVenta(new Cl_Venta(venta.cliente, venta.factura, venta.costo, venta.cnArticulos)));
let salida = document.getElementById("salida");

opcion.onclick = () => {
let opcion = prompt("Ingrese una opcion:");
        switch (opcion) {
            case "1":
                agregarVenta(tienda);
                break;
            case "2":
                eliminarVenta(tienda);
                break;
            case "3":
                modificarVenta(tienda);
                break;
            case "4":
                salida.innerHTML = `Monto final en caja: ${tienda.montofinalcaja()}`;
                break;
            case "5":
                salida.innerHTML = `Clientes que pagaron el monto mayor: ${tienda.clientequepagomas()}`;
                break;
            case "6":
                salida.innerHTML = `Clientes que solo llevaron 1 articulo: ${tienda.clientequepagounarticulo()}`;
                break;
            case "7":
                listaVentas(tienda);
                break;
            default:
                window.alert("Opcion incorrecta");
                break;
        }

    }
