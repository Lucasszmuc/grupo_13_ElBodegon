import React, { useEffect, useState } from "react";
import SmallCard from "./SmallCard";

/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */

let productsInDB = {
  title: "Productos en la base de datos",
  color: "primary",
  cuantity: 5,
  icon: "fa-clipboard-list",
};

/* <!-- Total awards --> */

let totalUsers = {
  title: " Usuarios totales",
  color: "success",
  cuantity: "79",
  icon: "fa-award",
};

/* <!-- Actors quantity --> */

let totalsUsers = {
  title: "Total de categorias",
  color: "warning",
  cuantity: "49",
  icon: "fa-user-check",
};

let cartProps = [productsInDB, totalUsers, totalsUsers];

function ContentRowMovies() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://localhost3003/api/products");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="row">
      {cartProps.map((movie, i) => {
        return <SmallCard {...movie} key={i} />;
      })}
    </div>
  );
}

export default ContentRowMovies;
