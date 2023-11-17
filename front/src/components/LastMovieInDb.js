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
          const lastProductLoaded = products[products.length - 1];
          setLastProduct(lastProductLoaded);
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
                {lastProduct.image && (
                  <img
                    className="img-fluid"
                    src={`http://localhost:3003/public/img/products/${lastProduct.image}`}
                  />
                )}

                <p>Nombre del producto: {lastProduct.name || "N/A"}</p>
                <p>Descripción: {lastProduct.description || "N/A"}</p>
                <p>Categoría: {lastProduct.categories && lastProduct.categories.length > 0 ? lastProduct.categories[0].name : "N/A"}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default LastMovieInDb;
