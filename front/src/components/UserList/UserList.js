import React, { useState, useEffect } from "react";
import './UserList.css'

function UserList() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [selectedType, setSelectedType] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3003/api/users");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        
        console.log(result);
        setUsers(result.users);
        // Inicializa el tipo seleccionado para cada usuario
        let initialTypes = {};
        result.users.forEach(user => {
          initialTypes[user.id] = user.type;
        });
        setSelectedType(initialTypes);
        setLoading(false);
      } catch (error) {
        console.error("Error al realizar la solicitud:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleRoleChange = (userId, newType) => {
    setSelectedType(prevTypes => ({ ...prevTypes, [userId]: newType }));
  };

  const updateUserRole = async (userId) => {
    const updatedUser = { type: selectedType[userId] };

    try {
      const response = await fetch(`http://localhost:3003/api/user/${userId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedUser)
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      
      setUsers(users.map(user => user.id === userId ? { ...user, type: result.type } : user));
    } catch (error) {
      console.error('Error al actualizar el rol del usuario:', error);
    }
  };

  const deleteUser = async (userId) => {
    try {
      const response = await fetch(`http://localhost:3003/api/user/${userId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setUsers(users.filter(user => user.id !== userId));
    } catch (error) {
      console.error('Error al eliminar el usuario:', error);
    }
  };


  if (loading) return <p>Cargando usuarios...</p>;

  return (
    <div className="envolt">
      <h2 className="user-title">Lista de Usuarios</h2>
      {users.map(user => (
        <div key={user.id} className="user-item">
          <span className="user-name">{user.name}</span>
          <span className="user-name">{user.email}</span>
          <select className="user-role-select" value={selectedType[user.id]} onChange={(e) => handleRoleChange(user.id, e.target.value)}>
            <option value="Customer">Customer</option>
            <option value="Admin">Admin</option>
          </select>
          <button className="edit-user-button" onClick={() => updateUserRole(user.id)}>Editar</button>
          <button className="delete-user-button" onClick={() => deleteUser(user.id)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
}

export default UserList;
