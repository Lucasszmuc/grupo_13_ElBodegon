import React, { useState, useEffect } from "react";

function ProductList() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3003/api/products");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setProducts(result.products);
        setLoading(false);
      } catch (error) {
        console.error("Error al realizar la solicitud:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        products.map((product, index) => (
          <div key={index} style={{ flexBasis: "30%", margin: "10px", border: "1px solid #ccc", padding: "10px", display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-between' }}>
            {product.image && (
              <img
                className="img-fluid"
                src={`http://localhost:3003${product.image}`}
                alt=""
                style={{ width: "250px" }}
              />
            )}
            <h5><b>{product.name || "N/A"}</b></h5>
            <p>Descripción: {product.description || "N/A"}</p>
            <p>
              Categoría:{" "}
              {product.categories && product.categories.length > 0
                ? product.categories[0].name
                : "N/A"}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default ProductList;

