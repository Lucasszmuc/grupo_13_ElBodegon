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

    let formIsValid = true;
    const usernameValue = username.value;
    const longitud = usernameValue.length;
    const mensaje = "El Username ";

    if (usernameValue.trim() === "") {
      alert(mensaje + "no puede estar vacio.");
      formIsValid = false;
     return;
    } else if (longitud < 2) {
      alert(mensaje + "tiene que tener al menos 2 caracteres.");
      formIsValid = false;
      return;
    }

    const emailValue = email.value;
    const mensajeEmail = "El Email ";

    const emailFormat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;

    if (emailValue.trim() === "") {
      alert(mensajeEmail + "no puede estar vacio.");
      formIsValid = false;
      return;
    } else if (!emailFormat.test(emailValue)) {
      alert(mensajeEmail + "tiene que ser valido.");
      formIsValid = false;
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
      formIsValid = false;
      alert(
        mensajePassword +
          "deberá tener letras mayúsculas, minúsculas, un número y un carácter especial."
      );
    }

    if (formIsValid) {
      registerForm.submit();
    }
    
  });

  checkbox.addEventListener("click", () => {
    password.type = checkbox.checked ? "text" : "password";
  });

  });
