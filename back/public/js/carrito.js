
async function agregarAlCarrito(productId, productName, productPrice, productImage) {
    try {
      const requestBody = {
        productId: productId,
        productName: productName,
        productPrice: productPrice,
        productImage: productImage
      };
  
      const response = await fetch('/product/carrito', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody)
      });

  
      if (!response.ok) {
        throw new Error('La respuesta del servidor no fue OK');
      }
  
      const data = await response.json();

     
      Swal.fire({
        position: "top-end",
        title: 'Producto Añadido',
        text: 'El producto ha sido añadido al carrito.',
        icon: 'success',
        showConfirmButton: false,
        timer: 1500,
        width: '300px', 
        customClass: {
          popup: 'mi-alerta-texto'
        }
      });
      



    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: 'No se pudo añadir el producto al carrito. ' + error.message,
        icon: 'error'
      });
    }
  }
  