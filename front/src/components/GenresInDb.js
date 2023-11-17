import React, { useState, useEffect } from "react";

function GenresInDb() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3003/api/products");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        const { countByCategory } = result;

        if (countByCategory) {
          const categoriesList = Object.keys(countByCategory); // Obtiene todas las claves (categorías) del objeto countByCategory
          setCategories(categoriesList);
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
          <h5 className="m-0 font-weight-bold text-gray-800">Categorias</h5>
        </div>
        <div className="card-body">
          <div className="row">
            {loading ? (
              <p>Loading...</p>
            ) : (
              categories.map((category, index) => (
                <div className="col-lg-6 mb-4" key={index}>
                  <div className="card bg-dark text-white shadow">
                    <div className="card-body">{category}</div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GenresInDb;
