import { useState } from "react";
import ReactDOM from "react-dom/client";
import './Cadastro.css';

function Cadastro() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
  function Botao() {
   alert ("Seu cadastro foi concluído com sucesso!");
  }
  const Submit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  return (
    <div className="FormCadastro">
    <form onSubmit={Submit}>
      <label>Nome: </label>
      <input className="Cad"
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />


      <label>Email:  </label>
      <input className="Cad"
        type="email" 
        name="email" 
        value={inputs.email || ""} 
        onChange={handleChange}
      />
    

      <label> Senha:  </label>
      <input className="Cad" 
        type="password" 
        name="Senha" 
        value={inputs.Senha || ""} 
        onChange={handleChange}
      />


      <label> Confirmação de Senha:  </label>
      <input className="Cad"
        type="password" 
        name="ConfirSenha" 
        value={inputs.ConfirSenha || ""} 
        onChange={handleChange}
      />

      <label> Cidade:  </label>
      <input className="Cad"
        type="text" 
        name="Cidade" 
        value={inputs.Cidade || ""} 
        onChange={handleChange}
      />
   
  
      <label> Estado:  </label>
      <input className="Cad" 
        type="text" 
        name="Estado" 
        value={inputs.Estado || ""} 
        onChange={handleChange}
      />
   
      <div className="Envio" >
      <button onClick={Botao}>
  Enviar
</button>
                            </div>
    </form>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Cadastro />);
export default Cadastro