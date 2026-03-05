import { validateLogin } from "./Auth.js";
import { Mascota } from "./Clases.js";

let vetActivo = null;

// Referencias al DOM
const formularioLogin = document.getElementById('loginForm');
const seccionLogin    = document.getElementById('loginSection');
const panel           = document.getElementById('dashboard');
const errorLogin      = document.getElementById('loginError');
const emailUsuario    = document.getElementById('email');

// Submit del login
formularioLogin.addEventListener('submit', (e) => {
    e.preventDefault();

    const correoIngresado    = document.getElementById('email').value;
    const contrasenaIngresada = document.getElementById('password').value;
    const etiquetaUsuario     = document.getElementById('userLabel');

    const veterinarioEncontrado = validateLogin(correoIngresado, contrasenaIngresada);

    if (veterinarioEncontrado) {
        seccionLogin.classList.add('d-none');
        panel.classList.remove('d-none');
        etiquetaUsuario.textContent = "Bienvenido " + emailUsuario.value;
        errorLogin.classList.add('d-none');
        vetActivo = veterinarioEncontrado;
    } else {
        errorLogin.classList.remove('d-none');
    }
});


// Referencias del formulario de mascotas
const formularioMascota = document.getElementById('petForm');
const nombreMascota     = document.getElementById('petName');
const tutorMascota      = document.getElementById('petOwner');
const evolucionMascota  = document.getElementById('petEvolution');
const cuerpoTabla       = document.getElementById('petTableBody');

// Renderiza la lista de mascotas del veterinario activo
const actualizarTabla = () => {
    cuerpoTabla.innerHTML = '';

    vetActivo.obtenerPacientes().forEach((mascota, indice) => {
        cuerpoTabla.innerHTML += `<tr>
            <td>${indice + 1}</td>
            <td>${mascota.nombre}</td>
            <td>${mascota.tutor}</td>
            <td>${mascota.condicionMedica}</td>
        </tr>`;
    });
}

// Submit del formulario de nueva mascota
formularioMascota.addEventListener('submit', (e) => {
    e.preventDefault();

    const nuevaMascota = new Mascota(nombreMascota.value, tutorMascota.value, evolucionMascota.value);
    vetActivo.agregarMascota(nuevaMascota);
    actualizarTabla();
    formularioMascota.reset();

    const modal = bootstrap.Modal.getInstance(document.getElementById('petModal'));
    modal.hide();
});

// Cerrar sesión
const btnCerrarSesion = document.getElementById('logoutBtn');

btnCerrarSesion.addEventListener('click', () => {
    panel.classList.add('d-none');
    seccionLogin.classList.remove('d-none');
});