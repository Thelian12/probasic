const password = document.getElementById("password1");
const toggle_password = document.getElementById("toggle_password1");
// Lógica  para ver y ocultar contraseña
toggle_password.addEventListener("click", () => {
    const type = password.type === "password" ? "text" : "password";
    password.type =  type;
    toggle_password.classList.toggle("fa-eye");
    toggle_password.classList.toggle("fa-eye-slash");
});
// Logica para ver y ocultar confirmar contraseña
const password2 = document.getElementById("password2");
const toggle_password2 = document.getElementById("toggle_password2");

toggle_password2.addEventListener("click", () => {
const type = password2.type === "password" ? "text" : "password";
password2.type = type;
toggle_password2.classList.toggle("fa-eye");
toggle_password2.classList.toggle("fa-eye-slash");
});


// Funcion validacion de igualdad
function confirmarcontraseña() {
    if (password1.value && password2.value) {
        if (password1.value === password2.value) {
            password1.style.border = "2px solid green";
            password2.style.border = "2px solid green";
            btn_validar.disabled = false;
        } else {
            password1.style.border = "2px solid red";
            password2.style.border = "2px solid red";
            btn_validar.disabled = true;
        }
    } else {
        // Si falta alguno, desactivar botón y quitar colores
        password1.style.border = "1px solid  #ccc";
        password2.style.border = "1px solid  #ccc";
        btn_validar.disabled = true;
    }
}

//Escuchar cambios en ambos inputs (tiempo real

password1.addEventListener("input", confirmarcontraseña);
password2.addEventListener("input", confirmarcontraseña);

// Validación completa
function validar() {
    // Reconfirmar que sean iguales
    if (password1.value !== password2.value) {
        Swal.fire("Error", "Las contraseñas no coinciden.", "error");
        return;
    }

    let pwd = password.value;
    let lowercase = /[a-z]/.test(pwd);
    let uppercase = /[A-Z]/.test(pwd);
    let number = /\d/.test(pwd);
    let specialchar = /[\W_]/.test(pwd);

    if (pwd.length < 8) {
        Swal.fire("Error", "La contraseña debe tener al menos 8 caracteres.", "error");
        return;
    }

    if (specialchar && lowercase && uppercase && number) {
        Swal.fire("Correcto", "La contraseña cumple con las condiciones.", "success");
    } else {
        Swal.fire({
            icon: "error",
            title: "Contraseña Inválida",
            html: `
                <ul style="text-align:left; margin-left:20px;">
                    <li>${number ? "✅" : "❌"} Al menos un número</li>
                    <li>${lowercase ? "✅" : "❌"} Al menos una minúscula</li>
                    <li>${uppercase ? "✅" : "❌"} Al menos una mayúscula</li>
                    <li>${specialchar ? "✅" : "❌"} Al menos un caracter especial</li>
                </ul>
            `
        });
    }
}


