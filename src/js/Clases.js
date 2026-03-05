// Clase Veterinario
class Veterinario {
    constructor(emailUser, passUser) {
        this.emailUser = emailUser;
        this.passUser = passUser;
        this.listMascotas = [];
    };

    // Metodo para agregar Mascota a la lsta 
    agregarMascota(mascota) {
        this.listMascotas.push(mascota);
    }

    // Obtener pacientes
    obtenerPacientes() {
        return this.listMascotas;
    }
}

// Clase Mascota
class Mascota {
    constructor(nombre, tutor, condicionMedica) {
        this.nombre = nombre;
        this.tutor = tutor;
        this.condicionMedica = condicionMedica;
    }
}

// Instanciar arreglo de veterinarios
export const veterinarios = [
    new Veterinario('marcelo@gmail.com', '123456789'),
    new Veterinario('admin@gmail.com', 'admin')
];