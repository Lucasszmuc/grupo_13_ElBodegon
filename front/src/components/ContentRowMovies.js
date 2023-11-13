import React, { useEffect, useState } from "react";
import SmallCard from "./SmallCard";

function ContentRowMovies() {
  const [data, setData] = useState(null);
  const [users, setUsers] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
     
        const response = await fetch("http://localhost:3003/api/products");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);

  
        const usersResponse = await fetch("http://localhost:3003/api/users");
        if (!usersResponse.ok) {
          throw new Error(`HTTP error! status: ${usersResponse.status}`);
        }
        const usersResult = await usersResponse.json();
        
        setUsers(usersResult);
      } catch (error) {
        console.error("Error al realizar la solicitud:", error);
      }
    };

    fetchData();
  }, []);

  console.log(data)

  let productsInDB = {
    title: "Productos en la base de datos",
    color: "primary",
    quantity: data ? data.products.length : 0,
    icon: "fa-clipboard-list",
  };

  let totalUsers = {
    title: "Usuarios totales",
    color: "success",
    quantity: users.meta ? users.meta.count : 0, 
    icon: "fa-award",
  };
   

  let totalCategories = {
    title: "Total de categorías",
    color: "warning",
    quantity: data ? Object.keys(data.countByCategory).length : 0,
    icon: "fa-user-check",
  };
  

  let cartProps = [productsInDB, totalUsers, totalCategories];

  return (
    <div className="row">
      {cartProps.map((movie, i) => {
        return <SmallCard {...movie} key={i} />;
      })}
    </div>
  );
}

export default ContentRowMovies;
