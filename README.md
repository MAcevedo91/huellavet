# 🐾 HuellaVet

Sistema de gestión de pacientes para veterinarios, desarrollado como evaluación modular de JavaScript.

---

## 🧩 Elementos utilizados

### Clases (`Clases.js`)

Se definieron dos clases con el paradigma de **Programación Orientada a Objetos (POO)**:

- **`Veterinario`**: representa a un usuario del sistema. Contiene email, contraseña y un arreglo de mascotas. Expone los métodos `agregarMascota()` y `obtenerPacientes()`.
- **`Mascota`**: representa a un paciente. Almacena nombre, tutor y condición médica.

### Módulos ES6

El proyecto utiliza `import` / `export` para separar la lógica en archivos independientes:

- `Clases.js` → exporta `Mascota` y el arreglo `veterinarios`
- `Auth.js` → exporta `validateLogin`, función que verifica las credenciales
- `Main.js` → importa todo lo anterior y maneja la lógica de la interfaz

### Manejo del DOM (`Main.js`)

- `document.getElementById()` para referenciar elementos del HTML
- `addEventListener('submit')` para capturar el envío de formularios
- `classList.add() / remove()` para mostrar u ocultar secciones (`d-none` de Bootstrap)
- `innerHTML` para renderizar dinámicamente las filas de la tabla de mascotas
- `element.reset()` para limpiar formularios tras el registro

### Bootstrap 5

- Sistema de grilla y utilidades de espaciado
- Componente **Modal** para el formulario de nueva mascota
- Clases `d-none`, `d-flex`, `navbar`, `table`, `card`, `btn`, entre otras
- Instancia programática del modal con `bootstrap.Modal.getInstance()`

---

## 🔗 Links

- 🌐 **Live page:** [https://macevedo91.github.io/huellavet/](https://macevedo91.github.io/huellavet/)
- 📁 **Repositorio:** [https://github.com/MAcevedo91/huellavet](https://github.com/MAcevedo91/huellavet.git)
