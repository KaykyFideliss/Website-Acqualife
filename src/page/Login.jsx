import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isEmailFocused, setIsEmailFocused] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
      <div className="flex flex-col w-full md:w-1/2 items-center justify-center py-10 md:py-0">
        <img className="w-60 h-60 md:w-60 h-60 md:h-30 mb-4 md:mb-0" src="img/logo.png" alt="" />
        <h2 className="text-2xl md:text-3xl text-azul-style font-zalando font-semibold mb-6 mt-4 md:mt-0">
          Login
        </h2>

        <form className="w-full max-w-sm px-4">
          {/* EMAIL COM FLOATING LABEL */}
          <div className="mb-6">
            <div className="relative">
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setIsEmailFocused(true)}
                onBlur={() => setIsEmailFocused(email.length > 0)}
                placeholder=" "
                className="w-full border text-azul-style font-zalando border-gray-300 rounded-lg px-3 py-3 focus:outline-none focus:ring-2 focus:ring-azul-style peer"
              />
              <label
                className={`absolute left-3 transition-all duration-200 font-zalando text-sm cursor-text
                  ${
                    isEmailFocused || email.length > 0
                      ? "-top-2 bg-white px-1 text-azul-style text-xs"
                      : "top-1/2 transform -translate-y-1/2 text-gray-400"
                  } peer-focus:-top-2 peer-focus:bg-white peer-focus:px-1 peer-focus:text-azul-style peer-focus:text-xs`}
              >
                EMAIL
              </label>
              <MdEmail className="absolute text-lg right-3 top-1/2 transform -translate-y-1/2 text-azul-style cursor-default" />
            </div>
          </div>

          {/* SENHA COM FLOATING LABEL */}
          <div className="mb-6">
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder=" "
                className="w-full border font-zalando text-azul-style border-gray-300 rounded-lg px-3 py-3 focus:outline-none focus:ring-2 focus:ring-azul-style peer"
              />
              <label
                className="absolute left-3 top-1/2 transform -translate-y-1/3 text-gray-400 font-zalando text-sm transition-all duration-200 cursor-text mb-2
                  peer-focus:-top-2 peer-focus:bg-white peer-focus:px-1 peer-focus:text-azul-style peer-focus:text-xs
                  peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1 peer-[:not(:placeholder-shown)]:text-azul-style peer-[:not(:placeholder-shown)]:text-xs"
              >
                SENHA
              </label>
              {showPassword ? (
                <FaEyeSlash
                  className="absolute text-lg right-3 top-1/2 transform -translate-y-1/2 text-azul-style cursor-pointer"
                  onClick={togglePasswordVisibility}
                  title="Ocultar senha"
                />
              ) : (
                <FaEye
                  className="absolute text-lg right-3 top-1/2 transform -translate-y-1/2 text-azul-style cursor-pointer"
                  onClick={togglePasswordVisibility}
                  title="Mostrar senha"
                />
              )}
            </div>
          </div>

          <div className="flex justify-between items-center mb-6">
            <a
              href="#"
              className="text-[14px] pl-1 text-azul-style font-zalando hover:underline"
            >
              Esqueceu a senha?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-azul-style hover:bg-blue-600 font-zalando text-white py-2 rounded-lg transition-colors"
          >
            Entrar
          </button>

          <div className="mt-6 text-center font-zalando text-gray-600 text-sm">
            Não tem conta?{" "}
            <a
              href="/cadastro"
              className="text-azul-style font-medium hover:underline"
            >
              Cadastre-se
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
