import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Custom-CSS/Navbar.css';

function RenderNavbar() {
  return (
    <Navbar expand="lg" className="bg-dark">
      <Container  >
        <Navbar.Brand className="text-white" href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle id= "navbar-toggler" aria-controls="basic-navbar-nav" className="navbar-toggler-white"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="text-white" href="#home">Home</Nav.Link>
            <Nav.Link className="text-white" href="#link">Link</Nav.Link>
            <NavDropdown className="custom-dropdown" title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item  href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default RenderNavbar;