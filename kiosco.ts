interface registroventas {
    venderunidades(unidades:number):void;
}

class productoenventa implements registroventas {
    protected nombre: string;
    protected cantidad: number;
    protected precio: number;
    protected cantidadVendida: number;

    constructor(nombre: string, cantidad: number, precio: number, cantidadVendida:number) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;
        this.cantidadVendida = cantidadVendida;
    }

    venderunidades(unidades: number): void {
        if (unidades <= this.cantidad) {
            this.cantidad -= unidades;
            this.cantidadVendida += unidades;
        } else {
            console.log("No hay suficiente unidades de", this.nombre, "en stock como para hacer esta compra")
        }
    }

    obtenernombre(): string {
        return this.nombre;
    }

    obtenercantidadvendida(): number {
        return this.cantidadVendida;
    }
    
}

let chicle = new productoenventa("Chicles", 7, 150, 0);
let alfajor = new productoenventa("Alfajor", 77, 200, 0);
let caramelo = new productoenventa("Caramelo", 500, 10, 0);
let chupetin = new productoenventa("Chupetin", 170, 70, 0);
let chocolate = new productoenventa("Chocolate", 64, 280, 0);
let galletitas = new productoenventa("Galletitas", 100, 300, 0);

let productos: productoenventa[] = [chicle, alfajor, caramelo, chupetin, chocolate, galletitas]

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
for (let i =0 ; i< productos.length ; i++) {
    let productovendido = productos[i];
    console.log(productovendido.obtenernombre(), productovendido.obtenercantidadvendida());
}