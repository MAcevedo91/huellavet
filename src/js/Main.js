import { validateLogin } from "./Auth.js";

let vetActive = null;

// Referencias a los elementos del DOM
const loginForm    = document.getElementById('loginForm');
const loginSection = document.getElementById('loginSection');
const dashboard    = document.getElementById('dashboard');
const loginError   = document.getElementById('loginError');
const emailUser    = document.getElementById('email');

// Maneja el submit del formulario de login
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputEmail    = document.getElementById('email').value;
    const inputPassword = document.getElementById('password').value;
    const userLabel     = document.getElementById('userLabel');

    // Busca al veterinario cuyas credenciales coincidan
    const veterinarioEncontrado = validateLogin(inputEmail, inputPassword);

    if (veterinarioEncontrado) {
        // Credenciales válidas → muestra el dashboard
        loginSection.classList.add('d-none');
        dashboard.classList.remove('d-none');
        userLabel.textContent = emailUser.value;
        loginError.classList.add('d-none');
        let vetActive = veterinarioEncontrado;
    } else {
        // Credenciales inválidas → muestra mensaje de error
        loginError.classList.remove('d-none');
    }
});


// --- LÓGICA DE REGISTRO DE MASCOTAS ---

//    - El formulario (id: 'petForm')
const petForm = document.getElementById('petForm');
//    - Los inputs (ids: 'petName', 'petSpecies', 'petBreed', 'petAge', 'petOwner')
const petName = document.getElementById('petName');
const petOwner = document.getElementById('petOwner');
const petEvolution = document.getElementById('petEvolution');

//    - El cuerpo de la tabla donde mostraremos las mascotas (id: 'petTableBody')


// 3. Agregar un escuchador de evento (addEventListener) tipo 'submit' al 'petForm'
//    (OJO: Recuerda el e.preventDefault() para que no recargue la página)

    // --- DENTRO DEL EVENTO DEL FORMULARIO ---
    
    // 4. Extraer los valores (.value) de todos los inputs de la mascota.
    
    // 5. Instanciar un nuevo objeto de la clase Mascota con esos valores:
    //    const nuevaMascota = new Mascota(valorNombre, valorEspecie, ...etc);
    
    // 6. Usar el método 'agregarMascota' del 'veterinarioActivo' para guardar la nueva mascota.
    //    veterinarioActivo.agregarMascota(nuevaMascota);
    
    // 7. Llamar a una función (que crearemos después) llamada 'actualizarTabla()'.
    
    // 8. Limpiar el formulario usando: petForm.reset();
    
    // 9. (Opcional - Bootstrap) Cerrar el modal programáticamente o dejar que el usuario lo cierre.

