window.addEventListener("load", () => {
  const password = document.querySelector("#password");
  const registerForm = document.querySelector("#form_register");
  const username = document.querySelector("#username");
  const email = document.querySelector("#email");
  const image = document.querySelector("#image");
  let clickeado = false;
  const checkbox = document.querySelector("#see-password");

  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const usernameValue = username.value;
    const longitud = usernameValue.length;
    const mensaje = "El Username ";

    if (usernameValue.trim() === "") {
      alert(mensaje + "no puede estar vacio.");
     return;
    } else if (longitud < 2) {
      alert(mensaje + "tiene que tener al menos 2 caracteres.");
      return;
    }

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

    const formatosValidos = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    const imageValue = image.value;

    if (imageValue && !formatosValidos.test(imageValue)) {
      alert(
        "El archivo de imagen debe tener una extensión válida (JPG, JPEG, PNG o GIF)."
      );
      return;
    }

    const passwordValue = password.value;
    const longitudPassword = passwordValue.length;
    const mensajePassword = "La Contraseña ";
    const regexPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;

    if (passwordValue.trim() === "") {
      alert(mensajePassword + "no puede estar vacia.");
    } else if (longitudPassword < 8) {
      alert(mensajePassword + "tiene que tener al menos 8 caracteres.");
    } else if (!regexPassword.test(passwordValue)) {
      alert(
        mensajePassword +
          "deberá tener letras mayúsculas, minúsculas, un número y un carácter especial."
      );
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

    registerForm.submit();
  });

  /*password.addEventListener("input", (e) => {
    let seguridad = "débil";
    const passwordValue = e.target.value;
    const longitudPassword = passwordValue.length;

    if (longitudPassword < 4) {
      seguridad = "débil";
    } else if (longitudPassword <= 7) {
      if (
        regexMayuscula.test(passwordValue) &&
        regexMinuscula.test(passwordValue)
      ) {
        seguridad = "aceptable";
      }
    } else if (longitudPassword >= 8) {
      if (
        regexMayuscula.test(passwordValue) &&
        regexMinuscula.test(passwordValue) &&
        regexCaracterEspecial.test(passwordValue) &&
        regexNumero.test(passwordValue)
      ) {
        seguridad = "segura";
      }
    }

    messageElement.innerHTML = "La contraseña es: " + seguridad;
  });

  password.parentNode.appendChild(messageElement);

  registerForm.addEventListener("submit", (e) => {
    // si el valor del input del mail es menor a 10
    // O si el valor del input de la pw es menor a 8
    if (email.value.length < 10 || password.value.length < 8) {
      // Se previene el comportamiento por defecto del form
      // (ejecutar el post a /users/register)
      e.preventDefault();
    }
  }); */
});
