import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">GRUPO 3</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/Pratos">Pratos</Nav.Link>
            <Nav.Link href="/Loggin">Loggin</Nav.Link>
            <Nav.Link href="/Cadastro">Cadastro</Nav.Link>
            <Nav.Link href="/Contato">Contato</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    
    </>
  );
}

export default ColorSchemesExample;