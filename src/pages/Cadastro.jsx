import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { auth, db } from "../services/firebase";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

function Cadastro() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");

  const [mensagem, setMensagem] = useState("");
  const [tipo, setTipo] = useState("");

  async function cadastrar() {
    try {
      const userCredential =
        await createUserWithEmailAndPassword(auth, email, senha);

      const uid = userCredential.user.uid;

      await setDoc(doc(db, "usuarios", uid), {
        uid,
        nome,
        sobrenome,
        dataNascimento,
        email
      });

      setMensagem("Usuário cadastrado com sucesso!");
      setTipo("sucesso");

      setTimeout(() => {
        navigate("/");
      }, 2000);

    } catch (error) {
      setMensagem("Erro ao cadastrar usuário.");
      setTipo("erro");
    }
  }

  return (
    <div className="container">
      <div className="card">
        <h1>Cadastro</h1>

        <input
          type="email"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Digite sua senha"
          onChange={(e) => setSenha(e.target.value)}
        />

        <input
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setNome(e.target.value)}
        />

        <input
          type="text"
          placeholder="Digite seu sobrenome"
          onChange={(e) => setSobrenome(e.target.value)}
        />

        <input
          type="date"
          onChange={(e) => setDataNascimento(e.target.value)}
        />

        {mensagem && (
          <p className={tipo === "sucesso" ? "msg-sucesso" : "msg-erro"}>
            {mensagem}
          </p>
        )}

        <button onClick={cadastrar}>
          Cadastrar
        </button>

        <p className="link" onClick={() => navigate("/")}>
          Voltar para Login
        </p>
      </div>
    </div>
  );
}

export default Cadastro;