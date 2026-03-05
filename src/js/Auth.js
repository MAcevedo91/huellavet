// importar la clase veterinario desde Clases.js
import { veterinarios } from './Clases.js';

// Crear una función flecha validateLogin
export const validateLogin = (email, password) => {
    // 1. Validar que ambos campos (email y password) tengan datos, si falta alguno retornar null
    if (!email || !password) {
        return null;
    } else {
        const encontrado = veterinarios.find(vet => vet.emailUser === email && vet.passUser === password);       
        return encontrado;
    }
}

