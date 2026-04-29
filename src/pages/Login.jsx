import { useState } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../assets/logo1.jpeg";

import { auth } from "../services/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  async function entrar() {
    try {
      await signInWithEmailAndPassword(auth, email, senha);

      navigate("/principal");

    } catch (error) {
      setMensagem("Email ou senha inválidos.");
    }
  }

  return (
    <div className="container">
      <div className="card">

        <img
          src={logo}
          alt="Logo"
          className="logo-login"
        />

        <h1>Login</h1>

        <input
          type="email"
          placeholder="Digite seu e-mail"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Digite sua senha"
          onChange={(e) => setSenha(e.target.value)}
        />

        {mensagem && (
          <p className="msg-erro">{mensagem}</p>
        )}

        <button onClick={entrar}>
          Entrar
        </button>

        <p
          className="link"
          onClick={() => navigate("/cadastro")}
        >
          Criar conta
        </p>

      </div>
    </div>
  );
}

export default Login;