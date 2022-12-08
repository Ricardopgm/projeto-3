
import React from 'react';
import ReactDOM from 'react-dom';

import { useState } from 'react';
import './styles.css';

function Loggin() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">

            <span className="login-form-title"> Bem-vindo!</span>

            <div className="wrap-input">
              <input className={email !== "" ? 'has-val input' : 'input'}
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)} />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input">
              <input className={password !== "" ? 'has-val input' : 'input'}
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)} />
              <span className="focus-input" data-placeholder="Senha"></span>
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn">Login</button>
            </div>

            <div className="text-center">
              <span className="txt1">Não Possui Conta?</span>
              <a className="txt2" href="#">Criar conta</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Loggin;


