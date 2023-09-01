var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var gestionlegajos = /** @class */ (function () {
    function gestionlegajos(nombre, apellido, dni, nacimiento, direccion, localidad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.nacimiento = nacimiento;
        this.direccion = direccion;
        this.localidad = localidad;
    }
    return gestionlegajos;
}());
var alumno = /** @class */ (function (_super) {
    __extends(alumno, _super);
    function alumno(nombre, apellido, dni, nacimiento, direccion, localidad, promedio) {
        var _this = _super.call(this, nombre, apellido, dni, nacimiento, direccion, localidad) || this;
        _this.promedio = _this.hacerpromedio(promedio) / promedio.length;
        return _this;
    }
    alumno.prototype.hacerpromedio = function (examenes) {
        var total = 0;
        for (var i = 0; i < examenes.length; i++) {
            total += examenes[i];
        }
        return total;
    };
    alumno.prototype.obtenerpromedio = function () {
        return this.promedio;
    };
    return alumno;
}(gestionlegajos));
var juan = new alumno("Juan", "Suarez", 45620616, 2004, "9 de julio 2534", "Olavarria", [9, 5, 3, 8, 3, 8, 5, 8, 3, 5]);
console.log("Los datos personales de Juan son:", juan);
var joaquin = new alumno("Joaquin", "Lapaz", 13231, 2005, "Savedra 2212", "Olavarria", [9, 8, 7, 8, 9, 6, 9, 7, 3, 5]);
console.log("Los datos personales de Joaquin son:", joaquin);
var edwin = new alumno("Edwin", "Tajon", 64363, 2003, "Rawson 939", "Ottawa", [7, 7, 7, 7, 8, 7, 8, 7, 8, 6]);
console.log("Los datos personales de Edwin son:", edwin);
var celeste = new alumno("Celeste", "Maclaren", 3252355, 2001, "Rio bamba 1345", "Byrgenwerth", [7, 7, 7, 7, 7, 7, 7, 7, 7, 7]);
console.log("Los datos personales de Celeste son:", celeste);
var estudiantes = [juan, joaquin, edwin, celeste];
var totalpromedios = 0;
for (var i = 0; i < estudiantes.length; i++) {
    totalpromedios += estudiantes[i].obtenerpromedio();
}
var promediogeneral = totalpromedios / estudiantes.length;
console.log("El promedio general de los alumnos es de:", promediogeneral);
