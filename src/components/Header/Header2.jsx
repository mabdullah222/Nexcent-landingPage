import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../../assets/svgs/logo.svg";
import "./header.css";

function Header2() {
  return (
    <>
      {["lg"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          style={{ backgroundColor: "silver" }}
          className="bg-body-tertiary px-4"
        >
          <Container fluid>
            <div className="sect-1">
              <img src={logo} alt="logo" />
              <span className="heading">Nexcent</span>
            </div>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-2 nav-center">
                  <Nav.Link href="#home" className="nav-links">Home</Nav.Link>
                  <Nav.Link href="#features" className="nav-links">Service</Nav.Link>
                  <Nav.Link href="#pricing" className="nav-links">Product</Nav.Link>
                  <Nav.Link href="#pricing" className="nav-links">Feature</Nav.Link>
                  <Nav.Link href="#pricing" className="nav-links">Testimonial</Nav.Link>
                  <Nav.Link href="#pricing" className="nav-links">FAQ</Nav.Link>
                </Nav>
                <div className="sect-3">
                  <a href="#login">Login</a>
                  <Button variant="success">Sign Up</Button>
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header2;