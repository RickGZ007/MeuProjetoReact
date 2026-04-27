import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  const usuarios = [
    { email: "eduardo.lino@pucpr.br", senha: "123456" },
    { email: "ricardo.cedeno@pucpr.br", senha: "123456" }
  ];

  const handleLogin = (e) => {
    e.preventDefault();

    const usuarioValido = usuarios.find(
      (user) => user.email === email && user.senha === senha
    );

    if (usuarioValido) {
      setMensagem("Login realizado com sucesso");
    } else {
      setMensagem("Erro: email ou senha inválidos");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Digite seu email"  
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Digite sua senha"  
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <button type="submit">Entrar</button> 
      </form>

      {mensagem && <p>{mensagem}</p>}
    </div>
  );
}

export default Login;