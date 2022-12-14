import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/Home">King Restaurant</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/Refeicoes">Refeições</Nav.Link>
            <Nav.Link href="/Login">Login</Nav.Link>
            <Nav.Link href="/Cadastro">Cadastro</Nav.Link>
            <Nav.Link href="/QuemSomos">Quem Somos</Nav.Link>
            <Nav.Link href="/AddConteudo">AddConteudo</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    
    </>
  );
}

export default ColorSchemesExample;