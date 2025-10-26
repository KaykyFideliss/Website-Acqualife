import React, { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  // Se já estiver logado, redireciona automaticamente
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      navigate("/MeuUno");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost/site-acqualife/Acqualife-web/Api/login.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha: password }),
      });

      const data = await response.json();

      if (data.success) {
        alert("Login realizado com sucesso!");
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/MeuUno");
      } else {
        alert(data.message || "Erro no login");
      }
    } catch (error) {
      console.error("Erro:", error);
      alert("Falha na comunicação com o servidor");
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col md:flex-row items-center justify-center">
      {/* --- LADO ESQUERDO --- */}
      <div className="hidden md:flex md:w-1/2 ml-14 h-[800px] md:h-[500px] bg-gradient-to-tr rounded-xl bg-azul-style items-center justify-center p-6 relative">
        <img src="null" alt="" className="absolute inset-0 w-full h-full object-cover opacity-20 rounded-xl" />
        <div className="relative z-10 text-center px-4"></div>
      </div>

      {/* --- LADO DIREITO (formulário) --- */}
      <div className="flex w-full md:w-1/2 items-center justify-center p-6">
        <div className="w-full max-w-sm">
          <img className="w-60 h-30 mx-auto mb-4" src="img/logo.png" alt="Logo" />
          <h2 className="text-3xl text-azul-style font-zalando font-semibold mb-6 text-center">Login</h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* EMAIL */}
            <div className="relative">
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder=" "
                className="w-full border text-azul-style font-zalando border-gray-300 rounded-lg px-3 py-3 focus:outline-none focus:ring-2 focus:ring-azul-style peer"
              />
              <label className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm transition-all duration-200 cursor-text
                peer-focus:-top-2 peer-focus:bg-white peer-focus:px-1 peer-focus:text-azul-style peer-focus:text-xs
                peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1 peer-[:not(:placeholder-shown)]:text-azul-style peer-[:not(:placeholder-shown)]:text-xs">
                EMAIL
              </label>
              <MdEmail className="absolute text-lg right-3 top-1/2 -translate-y-1/2 text-azul-style cursor-default" />
            </div>

            {/* SENHA */}
            <div className="relative">
              <input
                required
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder=" "
                className="w-full border text-azul-style font-zalando border-gray-300 rounded-lg px-3 py-3 focus:outline-none focus:ring-2 focus:ring-azul-style peer"
              />
              <label className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm transition-all duration-200 cursor-text
                peer-focus:-top-2 peer-focus:bg-white peer-focus:px-1 peer-focus:text-azul-style peer-focus:text-xs
                peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1 peer-[:not(:placeholder-shown)]:text-azul-style peer-[:not(:placeholder-shown)]:text-xs">
                SENHA
              </label>
              {showPassword ? (
                <FaEyeSlash
                  className="absolute text-lg right-3 top-1/2 -translate-y-1/2 text-azul-style cursor-pointer"
                  onClick={togglePasswordVisibility}
                />
              ) : (
                <FaEye
                  className="absolute text-lg right-3 top-1/2 -translate-y-1/2 text-azul-style cursor-pointer"
                  onClick={togglePasswordVisibility}
                />
              )}
            </div>

            <button type="submit" className="w-full bg-azul-style hover:bg-blue-600 font-zalando text-white py-2 rounded-lg transition-colors">
              Entrar
            </button>

            <div className="text-center font-zalando text-gray-600 text-sm mt-2">
              Não tem conta?{" "}
              <a href="/cadastro" className="text-azul-style font-medium hover:underline">
                Cadastre-se
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
