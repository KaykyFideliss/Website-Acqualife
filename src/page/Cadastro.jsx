import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdEmail, MdPhone, MdPerson } from "react-icons/md";

const Cadastro = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    password: "",
    confirmPassword: ""
  });

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "telefone") {
      const numericValue = value.replace(/\D/g, "");
      let formattedValue = numericValue;

      if (numericValue.length <= 11) {
        if (numericValue.length <= 2) {
          formattedValue = numericValue;
        } else if (numericValue.length <= 6) {
          formattedValue = `(${numericValue.slice(0, 2)}) ${numericValue.slice(2)}`;
        } else if (numericValue.length <= 10) {
          formattedValue = `(${numericValue.slice(0, 2)}) ${numericValue.slice(2, 6)}-${numericValue.slice(6)}`;
        } else {
          formattedValue = `(${numericValue.slice(0, 2)}) ${numericValue.slice(2, 7)}-${numericValue.slice(7, 11)}`;
        }
      }

      setFormData(prev => ({ ...prev, [name]: formattedValue }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }
    console.log("Dados do cadastro:", formData);
  };

  return (
    <div className="h-screen w-screen flex flex-col md:flex-row items-center justify-center">

      {/* --- LADO ESQUERDO (card azul) --- */}
   <div className="mt-44 hidden md:flex md:w-1/2 ml-14 h-[800px] md:h-[700px] bg-gradient-to-tr rounded-xl bg-azul-style items-center justify-center p-6 relative">
        <img
          src=""
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-20 rounded-xl"
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl font-bold text-white mb-4"></h1>
          <p className="text-gray-100 text-lg"></p>
        </div>
      </div>

      {/* --- LADO DIREITO (formulário) --- */}
      <div className="flex w-full mt-44 md:w-1/2 items-center justify-center p-6">
        <div className="w-full max-w-sm">
          <img className="w-60 h-30 mx-auto " src="img/logo.png" alt="Logo" />
          <h2 className="text-3xl text-azul-style font-zalando font-semibold mb-6 text-center">Cadastro</h2>
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* NOME */}
            <div className="relative">
              <input
                required
                name="nome"
                type="text"
                value={formData.nome}
                onChange={handleInputChange}
                placeholder=" "
                className="w-full border text-azul-style font-zalando border-gray-300 rounded-lg px-3 py-3 focus:outline-none focus:ring-2 focus:ring-azul-style peer"
              />
              <label className="absolute left-3 top-1/2 -translate-y-1/3 text-gray-400 font-zalando text-sm transition-all duration-200 cursor-text
                peer-focus:-top-2 peer-focus:bg-white peer-focus:px-1 peer-focus:text-azul-style peer-focus:text-xs
                peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1 peer-[:not(:placeholder-shown)]:text-azul-style peer-[:not(:placeholder-shown)]:text-xs"
              >
                NOME COMPLETO
              </label>
              <MdPerson className="absolute text-lg right-3 top-1/2 -translate-y-1/3 text-azul-style cursor-default" />
            </div>

            {/* EMAIL */}
            <div className="relative">
              <input
                required
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder=" "
                className="w-full border text-azul-style font-zalando border-gray-300 rounded-lg px-3 py-3 focus:outline-none focus:ring-2 focus:ring-azul-style peer"
              />
              <label className="absolute left-3 top-1/2 -translate-y-1/3 text-gray-400 font-zalando text-sm transition-all duration-200 cursor-text
                peer-focus:-top-2 peer-focus:bg-white peer-focus:px-1 peer-focus:text-azul-style peer-focus:text-xs
                peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1 peer-[:not(:placeholder-shown)]:text-azul-style peer-[:not(:placeholder-shown)]:text-xs"
              >
                EMAIL
              </label>
              <MdEmail className="absolute text-lg right-3 top-1/2 -translate-y-1/3 text-azul-style cursor-default" />
            </div>

            {/* TELEFONE */}
            <div className="relative">
              <input
                required
                name="telefone"
                type="text"
                value={formData.telefone}
                onChange={handleInputChange}
                placeholder=" "
                maxLength={15}
                className="w-full border text-azul-style font-zalando border-gray-300 rounded-lg px-3 py-3 focus:outline-none focus:ring-2 focus:ring-azul-style peer"
              />
              <label className="absolute left-3 top-1/2 -translate-y-1/3 text-gray-400 font-zalando text-sm transition-all duration-200 cursor-text
                peer-focus:-top-2 peer-focus:bg-white peer-focus:px-1 peer-focus:text-azul-style peer-focus:text-xs
                peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1 peer-[:not(:placeholder-shown)]:text-azul-style peer-[:not(:placeholder-shown)]:text-xs"
              >
                TELEFONE
              </label>
              <MdPhone className="absolute text-lg right-3 top-1/2 -translate-y-1/3 text-azul-style cursor-default" />
            </div>

            {/* SENHA */}
            <div className="relative">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleInputChange}
                placeholder=" "
                className="w-full border font-zalando text-azul-style border-gray-300 rounded-lg px-3 py-3 focus:outline-none focus:ring-2 focus:ring-azul-style peer"
              />
              <label className="absolute left-3 top-1/2 -translate-y-1/3 text-gray-400 font-zalando text-sm transition-all duration-200 cursor-text
                peer-focus:-top-2 peer-focus:bg-white peer-focus:px-1 peer-focus:text-azul-style peer-focus:text-xs
                peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1 peer-[:not(:placeholder-shown)]:text-azul-style peer-[:not(:placeholder-shown)]:text-xs"
              >
                SENHA
              </label>
              {showPassword ? (
                <FaEyeSlash
                  className="absolute text-lg right-3 top-1/2 -translate-y-1/3 text-azul-style cursor-pointer"
                  onClick={togglePasswordVisibility}
                />
              ) : (
                <FaEye
                  className="absolute text-lg right-3 top-1/2 -translate-y-1/3 text-azul-style cursor-pointer"
                  onClick={togglePasswordVisibility}
                />
              )}
            </div>

            {/* CONFIRMAR SENHA */}
            <div className="relative">
              <input
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder=" "
                className="w-full border font-zalando text-azul-style border-gray-300 rounded-lg px-3 py-3 focus:outline-none focus:ring-2 focus:ring-azul-style peer"
              />
              <label className="absolute left-3 top-1/2 -translate-y-1/3 text-gray-400 font-zalando text-sm transition-all duration-200 cursor-text
                peer-focus:-top-2 peer-focus:bg-white peer-focus:px-1 peer-focus:text-azul-style peer-focus:text-xs
                peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1 peer-[:not(:placeholder-shown)]:text-azul-style peer-[:not(:placeholder-shown)]:text-xs"
              >
                CONFIRMAR SENHA
              </label>
              {showConfirmPassword ? (
                <FaEyeSlash
                  className="absolute text-lg right-3 top-1/2 -translate-y-1/3 text-azul-style cursor-pointer"
                  onClick={toggleConfirmPasswordVisibility}
                />
              ) : (
                <FaEye
                  className="absolute text-lg right-3 top-1/2 -translate-y-1/3 text-azul-style cursor-pointer"
                  onClick={toggleConfirmPasswordVisibility}
                />
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-azul-style hover:bg-blue-600 font-zalando text-white py-2 rounded-lg transition-colors"
            >
              Cadastrar
            </button>

            <div className="text-center font-zalando text-gray-600 text-sm mt-2">
              Já tem conta?{" "}
              <a href="/login" className="text-azul-style font-medium hover:underline">
                Fazer Login
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
