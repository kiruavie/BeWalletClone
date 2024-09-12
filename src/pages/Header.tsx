import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
const img = "section-home.png";

export const Header = () => {
  return (
    <>
      <Container style={{ minHeight: "80vh" }}>
        <Row>
          <Col sm={5} className="mt-5 p-3">
            <h1
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: "68px",
                fontWeight: "300",
              }}
            >
              Un porte <br />
              <b>monaie</b>
              <br />
              vraiment utile
            </h1>
            <div>
              <Nav.Link href="#link" className="ms-5">
                Créer un compte
              </Nav.Link>
              <Nav.Link href="#link" className="ms-5">
                Se connecter
              </Nav.Link>
            </div>
          </Col>
          <Col sm={7} className="p-4">
            <Image src={img} width={620} />
          </Col>
        </Row>
      </Container>
    </>
  );
};
