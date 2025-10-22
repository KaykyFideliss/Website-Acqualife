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
 <div className="h-screen w-screen overflow-hidden flex flex-col md:flex-row items-center justify-center ml-10">

  {/* --- LADO ESQUERDO (imagem/bg/texto) --- */}
  <div className="hidden md:flex w-1/2 h-[calc(100vh-120px)] mt-24 mb-16 relative bg-gradient-to-tr rounded-xl bg-azul-style items-center justify-between flex-col p-4">
        <img
          src=""
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative z-10 text-center px-8">
          <h1 className="text-4xl font-bold text-white mb-4"></h1>
          <p className="text-gray-700 text-lg"></p>
        </div>
      </div>

      {/* --- LADO DIREITO (formulário) --- */}
      <div className="flex flex-col w-full md:w-1/2 items-center justify-center">
        <img className="w-60 h-30" src="img/logo.png" alt="Logo" />
        <h2 className="text-3xl -m-12 text-azul-style font-zalando font-semibold mb-6">Cadastro</h2>
        <form className="w-full max-w-sm" onSubmit={handleSubmit}>

          {/* NOME */}
          <div className="mb-6">
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
              <label className="absolute left-3 top-1/2 transform -translate-y-1/3 text-gray-400 font-zalando text-sm transition-all duration-200 cursor-text
                peer-focus:-top-2 peer-focus:bg-white peer-focus:px-1 peer-focus:text-azul-style peer-focus:text-xs
                peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1 peer-[:not(:placeholder-shown)]:text-azul-style peer-[:not(:placeholder-shown)]:text-xs"
              >
                NOME COMPLETO
              </label>
              <MdPerson className="absolute text-lg right-3 top-1/2 transform -translate-y-1/3 text-azul-style cursor-default" />
            </div>
          </div>

          {/* EMAIL */}
          <div className="mb-6">
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
              <label className="absolute left-3 top-1/2 transform -translate-y-1/3 text-gray-400 font-zalando text-sm transition-all duration-200 cursor-text
                peer-focus:-top-2 peer-focus:bg-white peer-focus:px-1 peer-focus:text-azul-style peer-focus:text-xs
                peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1 peer-[:not(:placeholder-shown)]:text-azul-style peer-[:not(:placeholder-shown)]:text-xs"
              >
                EMAIL
              </label>
              <MdEmail className="absolute text-lg right-3 top-1/2 transform -translate-y-1/3 text-azul-style cursor-default" />
            </div>
          </div>

          {/* TELEFONE */}
          <div className="mb-6">
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
              <label className="absolute left-3 top-1/2 transform -translate-y-1/3 text-gray-400 font-zalando text-sm transition-all duration-200 cursor-text
                peer-focus:-top-2 peer-focus:bg-white peer-focus:px-1 peer-focus:text-azul-style peer-focus:text-xs
                peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1 peer-[:not(:placeholder-shown)]:text-azul-style peer-[:not(:placeholder-shown)]:text-xs"
              >
                TELEFONE
              </label>
              <MdPhone className="absolute text-lg right-3 top-1/2 transform -translate-y-1/3 text-azul-style cursor-default" />
            </div>
          </div>

          {/* SENHA */}
          <div className="mb-6">
            <div className="relative">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleInputChange}
                placeholder=" "
                className="w-full border font-zalando text-azul-style border-gray-300 rounded-lg px-3 py-3 focus:outline-none focus:ring-2 focus:ring-azul-style peer"
              />
              <label className="absolute left-3 top-1/2 transform -translate-y-1/3 text-gray-400 font-zalando text-sm transition-all duration-200 cursor-text
                peer-focus:-top-2 peer-focus:bg-white peer-focus:px-1 peer-focus:text-azul-style peer-focus:text-xs
                peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1 peer-[:not(:placeholder-shown)]:text-azul-style peer-[:not(:placeholder-shown)]:text-xs"
              >
                SENHA
              </label>
              {showPassword ? (
                <FaEyeSlash
                  className="absolute text-lg right-3 top-1/2 transform -translate-y-1/3 text-azul-style cursor-pointer"
                  onClick={togglePasswordVisibility}
                />
              ) : (
                <FaEye
                  className="absolute text-lg right-3 top-1/2 transform -translate-y-1/3 text-azul-style cursor-pointer"
                  onClick={togglePasswordVisibility}
                />
              )}
            </div>
          </div>

          {/* CONFIRMAR SENHA */}
          <div className="mb-6">
            <div className="relative">
              <input
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder=" "
                className="w-full border font-zalando text-azul-style border-gray-300 rounded-lg px-3 py-3 focus:outline-none focus:ring-2 focus:ring-azul-style peer"
              />
              <label className="absolute left-3 top-1/2 transform -translate-y-1/3 text-gray-400 font-zalando text-sm transition-all duration-200 cursor-text
                peer-focus:-top-2 peer-focus:bg-white peer-focus:px-1 peer-focus:text-azul-style peer-focus:text-xs
                peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1 peer-[:not(:placeholder-shown)]:text-azul-style peer-[:not(:placeholder-shown)]:text-xs"
              >
                CONFIRMAR SENHA
              </label>
              {showConfirmPassword ? (
                <FaEyeSlash
                  className="absolute text-lg right-3 top-1/2 transform -translate-y-1/3 text-azul-style cursor-pointer"
                  onClick={toggleConfirmPasswordVisibility}
                />
              ) : (
                <FaEye
                  className="absolute text-lg right-3 top-1/2 transform -translate-y-1/3 text-azul-style cursor-pointer"
                  onClick={toggleConfirmPasswordVisibility}
                />
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-azul-style hover:bg-blue-600 font-zalando text-white py-2 rounded-lg transition-colors mb-4"
          >
            Cadastrar
          </button>

          <div className="text-center font-zalando text-gray-600 text-sm">
            Já tem conta?{" "}
            <a href="/login" className="text-azul-style font-medium hover:underline">
              Fazer Login
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Cadastro;
