window.addEventListener("load", () => {
  const username = document.querySelector("#username");
  const email = document.querySelector("#email");
  const password = document.querySelector("#password");
  const imagen = document.querySelector("#image");
  const rpassword = document.querySelector("#rpassword");

  let hayError = true;

  /*   email.addEventListener('change', e => {
        console.log(El nuevo valor del input es: ${e.target.value});
    }); */

  email.addEventListener("input", (e) => {
    console.log(e);
  });

  /*     password.addEventListener('input', e => {
        const longitud = e.target.value.length;

        hayError = false;

        if(longitud < 7){
            password.innerHTML = 'La contraseña es: débil';
        } else if(longitud < 8){
            password.innerHTML = 'La contraseña es: aceptable';
        } else {
            password.innerHTML = 'La contraseña es: segura';
        }
    }); */

  /* const password = document.getElementById('#password'); */
  /* const mensaje = document.getElementById('#mensaje');
password.addEventListener('input', e => {
    const contraseña = e.target.value;

    const longitud = contraseña.length;
    let seguridad = 'débil';

    if (longitud >= 8) {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
        if (regex.test(contraseña)) {
            seguridad = 'segura';
        } else if (longitud < 5 ){
            seguridad = "debil";
            password.innerHTML = 'La contraseña es:' + `${seguridad}`; {
        }
        else {
            seguridad = "aceptable";
            password.innerHTML = 'La contraseña es:' + `${seguridad}`; 
        }
    }

    mensaje.innerHTML = `La contraseña es: ${seguridad}`;
}); */
  password.addEventListener("input", (e) => {
    const contraseña = e.target.value;

    const longitud = contraseña.length;
    let seguridad = "débil";

    if (longitud < 5) {
      seguridad = "debil";
      password.innerHTML = "La contraseña es:" + `${seguridad}`;
    } else if (longitud < 7) {
      seguridad = "aceptable";
      password.innerHTML = "La contraseña es:" + `${seguridad}`;
    } else if (longitud >= 8) {
      const regex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
      if (regex.test(contraseña)) {
        seguridad = "segura";
      }
      password.innerHTML = "La contraseña es:" + `${seguridad}`;
    }
  });

  const checkbox = document.querySelector("#see-password");

  let clickeado = false;

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
