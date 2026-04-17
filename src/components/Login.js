import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  // ARRAY de usuários
  const usuarios = [
    { email: "eduardo.lino@pucpr.br", senha: "123456" },
    { email: "ricardo.cedeno@pucpr.br", senha: "123456" }
  ];

  const handleLogin = () => {
    const usuarioValido = usuarios.find(
      (user) => user.email === email && user.senha === senha
    );

    if (usuarioValido) {
      setMensagem("Acessado com sucesso!");
    } else {
      setMensagem("Usuário ou senha incorretos!");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>

      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />

      <button onClick={handleLogin}>Acessar</button>

      <p>{mensagem}</p>
    </div>
  );
}

export default Login;