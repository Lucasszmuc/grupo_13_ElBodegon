window.addEventListener("load", () => {
  const editForm = document.querySelector("#editForm");
  const name = document.querySelector(".productName");
  const category = document.querySelector(".productCategory");
  const price = document.querySelector(".productPrice");
  const description = document.querySelector(".Descripcion");
  const image = document.querySelector(".image");

  editForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameValue = name.value;
    const longitudName = nameValue.length;
    const mensajeName = "El Nombre del producto ";

    if (nameValue.trim() === "") {
      alert(mensajeName + "es obligatorio.");
      return;
    } else if (longitudName < 5) {
      alert(mensajeName + "tiene que tener al menos 5 caracteres.");
      return;
    }
     
    const categoryValue = category.value;
    const mensajeCategory = "La categoria del producto ";

    if (categoryValue.trim() === "") {
      alert(mensajeCategory + "es obligatoria.");
      return;
    }

    const priceValue = price.value;
    const mensajePrice = "El precio del producto ";

    if (priceValue.trim() === "") {
      alert(mensajePrice + "es obligatorio.");
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

    const descriptionValue = description.value;
    const longitudDescription = descriptionValue.length;
    const mensajeDescription = "La descripcion del producto ";

    if (descriptionValue && longitudDescription < 20) {
      alert(mensajeDescription + "tiene que tener al menos 20 caracteres.");
      return;
    }
    editForm.submit();
  });
});
