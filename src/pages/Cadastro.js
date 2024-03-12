import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './cadastro.css'
import styled from 'styled-components';


const Cadastro = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleCadastro = () => {
    console.log('Email:', email);
    console.log('Senha:', senha);
  };

  return (
    <div className='form-container'>
      <h2>Cadastro</h2>
      
      <button>cadastrar</button>
      <p>
        Já tem uma conta? <Link to="/login">Faça login</Link>
      </p>
    </div>

  );
};





export default Cadastro;
