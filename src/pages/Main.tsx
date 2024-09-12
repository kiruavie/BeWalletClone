import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Main = () => {
  return (
    <>
      <Container style={{ minHeight: "80vh" }}>
        <Row>
          <Col>
            <h1>Un porte monaie vraiment utile</h1>
          </Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
        </Row>
      </Container>
    </>
  );
};
