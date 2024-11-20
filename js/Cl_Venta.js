export default class Cl_Venta {
    constructor (cliente, factura, costo, cnArticulos) {
        this.cliente = cliente;
        this.factura = factura;
        this.costo = costo;
        this.cnArticulos = cnArticulos;

    }

    montototal() {
        return this.costo * this.cnArticulos;
    }

    


}