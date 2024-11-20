export default class Cl_Tienda {
    constructor(montocaja, porcincremento) {
        this.ventas = [];
        this.montocaja = montocaja;
        this.porcincremento = porcincremento;
    }

    agregarVenta(venta) {
        this.ventas.push(venta)
    }

    eliminarVenta(factura) {
        factura = +factura;
        let indexFactura = -1;
        for (let i = 0; i < this.ventas.length; i++) {
            if (this.ventas[i].factura == factura) {
                indexFactura = i;
            }
        }
        if (indexFactura !== -1) {
            this.ventas.splice(indexFactura, 1);
            return indexFactura !==-1;
        }

    }

    modificarVenta(factura) {
        factura = +factura;
        let indexFactura = -1;
        for (let i = 0; i < this.ventas.length; i++) {
            if (this.ventas[i].factura == factura) {
                indexFactura = i;
            }
        }
        if (indexFactura !== -1) {
            let cliente = prompt("Ingrese el nombre del cliente");
            let factura = prompt("Ingrese el número de la factura");
            let costo = prompt("Ingrese el costo");
            let cnArticulos = prompt("Ingrese la cantidad de artículos");
            this.ventas.splice(indexFactura, 1, new Cl_Venta(cliente, factura, costo, cnArticulos));
            return indexFactura !==-1;
        }
    }

    montoapagar(venta) {
        return venta.montototal() + (venta.montototal() * (this.porcincremento / 100)); ;
    }
    montofinalcaja() {
        let acumcaja = this.montocaja; 
        this.ventas.forEach(venta => acumcaja += this.montoapagar(venta));
        return acumcaja
    }

    clientequepagomas() {
        let pagomas = this.ventas[0].montototal();
        let nombre = this.ventas[0].cliente;
        for (let i = 0; i < this.ventas.length; i++) {
            if (this.ventas[i].montototal() > pagomas) {
                nombre = this.ventas[i].cliente;
            } 
        } return nombre
  }  
    clientequepagounarticulo() {
        let pagounarticulo = 1;
        for (let i = 0; i < this.ventas.length; i++) {
            if (this.ventas[i].cnArticulos == pagounarticulo) {
                pagounarticulo = this.ventas[i].cliente;
                return pagounarticulo;
            }
            } return "ningun cliente lleva 1 articulo";
 }


}
