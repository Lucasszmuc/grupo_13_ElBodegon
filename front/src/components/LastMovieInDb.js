import React, { useState, useEffect } from "react";

function LastMovieInDb() {
  const [lastProduct, setLastProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3003/api/products");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        const { products } = result;

        if (products && products.length > 0) {
          setLastProduct(products[0]);
        }

        setLoading(false);
      } catch (error) {
        console.error("Error al realizar la solicitud:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Último producto cargado
          </h5>
        </div>
        <div className="card-body">
          {loading ? (
            <p>Cargando...</p>
          ) : (
            <>
              <div>
                <p>Nombre del producto: {lastProduct.name || 'N/A'}</p>
                <p>Descripción: {lastProduct.description || 'N/A'}</p>
                <p>Categoría: {lastProduct.category?.name || 'N/A'}</p>
                {/* Agrega un elemento de imagen si tienes la URL de la imagen */}
                {lastProduct.imageUrl && (
                  <img
                    className="img-fluid"
                    src={lastProduct.imageUrl}
                    alt={lastProduct.name}
                  />
                )}
                <p>
                  Detalle:{" "}
                  <a href={lastProduct.detail} target="_blank" rel="nofollow">
                    Ver detalle del producto
                  </a>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default LastMovieInDb;