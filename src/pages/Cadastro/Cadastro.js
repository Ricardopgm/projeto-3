import { useState } from "react";
import ReactDOM from "react-dom/client";

function Cadastro() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const Submit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  return (
    <form onSubmit={Submit}>
      <label>Nome:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>

      <label>Email:
      <input 
        type="email" 
        name="email" 
        value={inputs.email || ""} 
        onChange={handleChange}
      />
      </label>

      <label> Senha:
      <input 
        type="text" 
        name="Senha" 
        value={inputs.Senha || ""} 
        onChange={handleChange}
      />
      </label>


      <label> Confirmação de Senha:
      <input 
        type="text" 
        name="ConfirSenha" 
        value={inputs.ConfirSenha || ""} 
        onChange={handleChange}
      />
      </label>

      <label> Cidade:
      <input 
        type="text" 
        name="Cidade" 
        value={inputs.Cidade || ""} 
        onChange={handleChange}
      />
      </label>
  
      <label> Estado:
      <input 
        type="text" 
        name="Estado" 
        value={inputs.Estado || ""} 
        onChange={handleChange}
      />
      </label>
      <div className="Submit" >
    <button type="Submit" >Enviar</button>
                            </div>
    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Cadastro />);
export default Cadastro