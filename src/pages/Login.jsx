import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { auth } from "../services/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

import logo from "../assets/logo1.jpeg";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  async function entrar() {
    try {
      setMensagem("");

      await signInWithEmailAndPassword(auth, email, senha);

      navigate("/principal");

    } catch (error) {
      setMensagem("Email ou senha inválidos.");
      setSenha("");
    }
  }

  return (
    <div className="container">
      <div className="card">

        {/* LOGO */}
        <img
          src={logo}
          alt="Logo"
          className="logo-login"
        />

        <h1>Login</h1>

        <input
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setMensagem("");
          }}
        />

        <input
          type="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => {
            setSenha(e.target.value);
            setMensagem("");
          }}
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