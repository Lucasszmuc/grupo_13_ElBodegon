import React, { useState, useEffect } from "react";
import imagenFondo from "../assets/images/mandalorian.jpg";

function LastMovieInDb() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3003/api/products");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setProduct(result);
      } catch (error) {
        console.error("Error al realizar la solicitud:", error);
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
          <div className="text-center">
            <img
              className="img-fluid px-3 px-sm-4 mt-3 mb-4"
              style={{ width: 40 + "rem" }}
              src={imagenFondo}
              alt="Star Wars - Mandalorian"
            />
          </div>
          
          <a
            className="btn btn-danger"
            target="_blank"
            rel="nofollow"
            href="/"
          >
            Ver detalle del producto
          </a>
        </div>
      </div>
    </div>
  );
}

export default LastMovieInDb;

