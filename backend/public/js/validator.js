window.addEventListener('load', () => {
    const password = document.querySelector("#password");
    const registerForm = document.querySelector('#form');
    const checkbox = document.querySelector("#see-password");
    const rpasswor = document.querySelector('.rpassword')
    const messageElement = document.querySelector('#messageElement'); 

    let clickeado = false;



    password.addEventListener("input", (e) => {
        const contraseña = e.target.value;
        const longitud = contraseña.length;
        let seguridad = "débil";
        const regexMayuscula = /[A-Z]/;
        const regexMinuscula = /[a-z]/;
        const regexCaracterEspecial = /[@$!%*?&]/;
    
        if (longitud < 4) {
            seguridad = "débil";
        } else if (longitud <= 7) {
            if (regexMayuscula.test(contraseña) && regexMinuscula.test(contraseña)) {
                seguridad = "aceptable";
            }
        } else if (longitud >= 8) {
            if (regexMayuscula.test(contraseña) && regexMinuscula.test(contraseña) && regexCaracterEspecial.test(contraseña)) {
                seguridad = "segura";
            }
        }
    
        messageElement.innerHTML = "La contraseña es: " + seguridad;
    });
    
    password.parentNode.appendChild(messageElement);
    

    checkbox.addEventListener("click", (e) => {
        if (checkbox.checked) {
            password.setAttribute('type', 'text');
        } else {
            password.setAttribute('type', 'password');
        }
    });
    


    checkbox.addEventListener("click", (e) => {
        clickeado = !clickeado;

        if (clickeado) {
            password.type = "text";
        } else {
            password.type = "password";
        }
    });

    registerForm.addEventListener("submit", (e) => {
        // si el valor del input del mail es menor a 10
        // O si el valor del input de la pw es menor a 8
        if (
          e.target.email.value.length < 10 ||
          e.target.password.value.length < 8
        ) {
          // Se previene el comportamiento por defecto del form
          // (ejecutar el post a /users/register)
          e.preventDefault();
        }
      });


});