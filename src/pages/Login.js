import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css'
const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    // Lógica para autenticar o usuário
    console.log('Email:', email);
    console.log('Senha:', senha);
  };

  return (
    <div className='form-container'>
      <h2 style={{ textAlign: 'center' }}>Login</h2>

      <input type="email" placeholder="Digite seu email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ marginBottom: '10px' }} />

      <input type="password" placeholder="Digite sua senha" value={senha} onChange={(e) => setSenha(e.target.value)}style={{ marginBottom: '10px' }}/>

      <button onClick={handleLogin} style={{ marginBottom: '10px' }}>
        Entrar
      </button>
      <p>
        Ainda não tem uma conta? <Link to="/">Cadastre-se</Link>
      </p>
    </div>
  );
};

export default Login;
