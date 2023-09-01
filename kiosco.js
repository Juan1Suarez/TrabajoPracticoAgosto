var productoenventa = /** @class */ (function () {
    function productoenventa(nombre, cantidad, precio, cantidadVendida) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;
        this.cantidadVendida = cantidadVendida;
    }
    productoenventa.prototype.venderunidades = function (unidades) {
        if (unidades <= this.cantidad) {
            this.cantidad -= unidades;
            this.cantidadVendida += unidades;
        }
        else {
            console.log("No hay suficiente unidades de", this.nombre, "en stock como para hacer esta compra");
        }
    };
    productoenventa.prototype.obtenernombre = function () {
        return this.nombre;
    };
    productoenventa.prototype.obtenercantidadvendida = function () {
        return this.cantidadVendida;
    };
    return productoenventa;
}());
var chicle = new productoenventa("Chicles", 7, 150, 0);
var alfajor = new productoenventa("Alfajor", 77, 200, 0);
var caramelo = new productoenventa("Caramelo", 500, 10, 0);
var chupetin = new productoenventa("Chupetin", 170, 70, 0);
var chocolate = new productoenventa("Chocolate", 64, 280, 0);
var galletitas = new productoenventa("Galletitas", 100, 300, 0);
var productos = [chicle, alfajor, caramelo, chupetin, chocolate, galletitas];
console.log("¡Estos son los productos que me quedan joven!", productos);
chicle.venderunidades(8);
console.log("Despues de la transacción", chicle);
alfajor.venderunidades(15);
console.log("Despues de la transacción", alfajor);
caramelo.venderunidades(200);
console.log("Despues de la transacción", caramelo);
chupetin.venderunidades(500);
console.log("Despues de la transacción", chupetin);
galletitas.venderunidades(100);
console.log("Despues de la transacción", galletitas);
console.log("Cantidades vendidas:");
for (var i = 0; i < productos.length; i++) {
    var productovendido = productos[i];
    console.log(productovendido.obtenernombre(), productovendido.obtenercantidadvendida());
}
