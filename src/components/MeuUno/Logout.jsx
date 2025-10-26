import React from 'react'
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login"); 
  };
  
    return (
    <div>
      {/* Botão de Logout */}
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
      >
        Logout
      </button>
    </div>
  )
}

export default Logout
