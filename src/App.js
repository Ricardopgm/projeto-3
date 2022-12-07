import ColorSchemesExample from './componentes/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import QuemSomos from './pages/QuemSomos/QuemSomos';
import Pratos from './pages/Pratos/Pratos';
import Loggin from './pages/Loggin/Loggin';
import Cadastro from './pages/Cadastro/Cadastro';
import Formulario from './pages/Formulario/Formulario';
import NoPage from './pages/NoPage/NoPage';
import Footer from './componentes/Footer';

function App() {
  return (
    <div className="App">
      <ColorSchemesExample/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contato" element={< QuemSomos />} />
          <Route path="/Pratos" element={<Pratos />} />
          <Route path="/Loggin" element={<Loggin />} />
          <Route path="/Cadastro" element={<Cadastro />} />
          <Route path="/Formulario" element={<Formulario />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
     <Footer></Footer >
    </div>

  );
}

export default App;
