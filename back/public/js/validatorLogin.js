window.addEventListener("load", () => {
  const password = document.querySelector("#password");
  const loginForm = document.querySelector("#form_login");
  const checkbox = document.querySelector("#see-password");
  const messageElement = document.querySelector("#messageElement");
  const email = document.querySelector("#email");

  let clickeado = false;

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
