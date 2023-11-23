async function confirmarEliminar(productId) {
    try {
      const response = await fetch(`/product/carrito/${productId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        }
      });
  
      if (!response.ok) {
        throw new Error('Error en la respuesta del servidor');
      }
  
      const data = await response.json();
  
      Swal.fire({
        position: "top-end",
        title: 'Producto Eliminado',
        icon: 'success',
        showConfirmButton: false,
        timer: 1000,
        width: '200px', 
        customClass: {
          popup: 'mi-alerta-texto'
        }
      }).then(() => {
        location.reload();
      });
  
    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: 'No se pudo eliminar el producto. ' + error.message,
        icon: 'error'
      });
    }
  }
  
  
  function confirmarCompra() {
    Swal.fire({
        title: 'Confirmar Compra',
        text: '¿Quieres proceder con la compra?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, comprar'
      }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Compra Realizada",
                icon: "success"
              });
      }
    });
  }
  