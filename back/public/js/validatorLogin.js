window.addEventListener("load", () => {
  const password = document.querySelector("#password");
  const loginForm = document.querySelector("#form_login");
  const checkbox = document.querySelector("#see-password");
  const email = document.querySelector("#email");
  let clickeado = false;

  loginForm.addEventListener("submit", (e) => {
    /* e.preventDefault(); */

    const emailValue = email.value;
    const mensajeEmail = "El Email ";

    const emailFormat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;

    if (emailValue.trim() === "") {
      alert(mensajeEmail + "no puede estar vacio.");
      return;
    } else if (!emailFormat.test(emailValue)) {
      alert(mensajeEmail + "tiene que ser valido.");
      return;
    }

    const passwordValue = password.value;
    const mensajePassword = "La Contraseña ";

    if (passwordValue.trim() === "") {
      alert(mensajePassword + "es obligatoria.");
    }
  });

  checkbox.addEventListener("click", (e) => {
    if (checkbox.checked) {
      password.setAttribute("type", "text");
    } else {
      password.setAttribute("type", "password");
    }
    clickeado = !clickeado;

    if (clickeado) {
      password.type = "text";
    } else {
      password.type = "password";
    }
  });
  /*  loginForm.addEventListener("submit", (e) => {
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
  }); */
});
