import ColorSchemesExample from './componentes/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import QuemSomos from './pages/QuemSomos/QuemSomos';
import Loggin from './pages/Loggin/Loggin';
import Cadastro from './pages/Cadastro/Cadastro';
import NoPage from './pages/NoPage/NoPage';
import Footer from './componentes/Footer';
import Editar from './pages/Editar/Editar';
import AddConteudo from './pages/AddConteudo/Index';
import ConteudoRecebido from './pages/ConteudoRecebido/Index';
import Refeicoes from './pages/Refeições/Refeicoes';

function App() {
  return (
    <div className="App">
      <ColorSchemesExample/>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Contato" element={<QuemSomos />} />
          <Route path="/Refeicoes" element={<Refeicoes />} />
          <Route path="/Loggin" element={<Loggin />} />
          <Route path="/Cadastro" element={<Cadastro />} />
          <Route path="/Edicao/:id" element={<Editar />} />
          <Route path="/AddConteudo" element={<AddConteudo />} />
          <Route path="/ConteudoRecebido" element={<ConteudoRecebido />} />

          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
     <Footer />
    </div>

  );
}

export default App;
