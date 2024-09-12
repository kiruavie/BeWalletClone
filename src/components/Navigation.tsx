import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const Navigation = () => {
  const logo = "img/logo.svg";

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container className="d-flex justify-content-between">
          <Navbar.Brand href="#home">
            <img
              alt="logo-img"
              src={logo}
              width="180"
              height="60"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ms-5">
              <Nav.Link href="#home" className="ms-5">
                Accueil
              </Nav.Link>
              <Nav.Link href="#link" className="ms-5">
                Services
              </Nav.Link>
              <Nav.Link href="#link" className="ms-5">
                Offres d'entreprises
              </Nav.Link>
              <Nav.Link href="#link" className="ms-5">
                Contact
              </Nav.Link>
              <Nav.Link href="#link" className="ms-5">
                Commencer
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
