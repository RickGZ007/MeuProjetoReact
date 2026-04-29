import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { auth, db } from "../services/firebase";

import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged, signOut } from "firebase/auth";

function Principal() {
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const uid = user.uid;

        const ref = doc(db, "usuarios", uid);
        const snap = await getDoc(ref);

        if (snap.exists()) {
          setUsuario(snap.data());
        }

      } else {
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  async function sair() {
    await signOut(auth);

    navigate("/");
  }

  if (!usuario) {
    return (
      <div className="container">
        <div className="card">
          <h1>Carregando...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="card">
        <h1>Bem-vindo</h1>

        <p><strong>Nome:</strong> {usuario.nome}</p>

        <p><strong>Sobrenome:</strong> {usuario.sobrenome}</p>

        <p>
          <strong>Nascimento:</strong>{" "}
          {usuario.dataNascimento &&
            usuario.dataNascimento.split("-").reverse().join("/")}
        </p>

        <p><strong>Email:</strong> {usuario.email}</p>

        <button className="btn-sair" onClick={sair}>
          Sair
        </button>
      </div>
    </div>
  );
}

export default Principal;