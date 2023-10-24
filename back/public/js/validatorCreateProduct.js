window.addEventListener("load", () => {
  const createForm = document.querySelector("#createForm");
  const name = document.querySelector("#productName");
  const description = document.querySelector("#productDescription");
  const image = document.querySelector("#imagen");

  createForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameValue = name.value;
    const longitudName = nameValue.length;
    const mensajeName = "El Nombre del producto ";

    if (nameValue.trim() === "") {
      alert(mensajeName + "es obligatorio.");
    } else if (longitudName < 5) {
      alert(mensajeName + "tiene que tener al menos 5 caracteres.");
    }

    const descriptionValue = description.value;
    const longitudDescription = descriptionValue.length;
    const mensajeDescription = "La descripcion del producto ";

    if (descriptionValue && longitudDescription < 20) {
      alert(mensajeDescription + "tiene que tener al menos 20 caracteres.");
    }

    const formatosValidos = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    const imageValue = image.value;

    if (imageValue && !formatosValidos.test(imageValue)) {
      alert(
        "El archivo de imagen debe tener una extensión válida (JPG, JPEG, PNG o GIF)."
      );
    }
  });
});
