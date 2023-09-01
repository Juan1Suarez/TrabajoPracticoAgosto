interface promediador {
    hacerpromedio(examenes: number[]);
}
class gestionlegajos {
    protected nombre: string;
    protected apellido: string;
    protected dni: number;
    protected nacimiento: number;
    protected direccion: string;
    protected localidad: string;
    constructor(nombre: string, apellido: string, dni: number, nacimiento: number, direccion: string, localidad: string) {

        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.nacimiento = nacimiento;
        this.direccion = direccion;
        this.localidad = localidad;

    }
}

class alumno extends gestionlegajos implements promediador {

    protected promedio: number;

    constructor(nombre: string, apellido: string, dni: number, nacimiento: number, direccion: string, localidad: string, promedio: number[]) {
        super(nombre, apellido, dni, nacimiento, direccion, localidad);

        this.promedio = this.hacerpromedio(promedio) / promedio.length;
    }

    hacerpromedio(examenes: number[]) {
        let total = 0;
        for (let i = 0; i < examenes.length; i++) {
            total += examenes[i];
        }
        return total;
    }

    obtenerpromedio(): number {
        return this.promedio;
    }
}

let juan = new alumno("Juan", "Suarez", 45620616, 2004, "9 de julio 2534", "Olavarria", [9,5,3,8,3,8,5,8,3,5]);
console.log("Los datos personales de Juan son:", juan);
let joaquin = new alumno("Joaquin", "Lapaz", 13231, 2005, "Savedra 2212", "Olavarria", [9,8,7,8,9,6,9,7,3,5]);
console.log("Los datos personales de Joaquin son:", joaquin);
let edwin = new alumno("Edwin", "Tajon", 64363, 2003, "Rawson 939", "Ottawa", [7,7,7,7,8,7,8,7,8,6]);
console.log("Los datos personales de Edwin son:", edwin);
let celeste = new alumno("Celeste", "Maclaren", 3252355, 2001, "Rio bamba 1345", "Byrgenwerth", [7,7,7,7,7,7,7,7,7,7])
console.log("Los datos personales de Celeste son:", celeste);

let estudiantes: alumno[] = [juan, joaquin, edwin, celeste];
let totalpromedios = 0;

for (let i = 0; i < estudiantes.length; i++) {
    totalpromedios += estudiantes[i].obtenerpromedio();
}

let promediogeneral = totalpromedios / estudiantes.length;
console.log("El promedio general de los alumnos es de:", promediogeneral);

