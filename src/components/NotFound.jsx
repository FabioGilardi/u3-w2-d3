import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const NotFound = () => (
  <Container className="h-100">
    <Row className="h-100 justify-content-center align-items-center">
      <Col md={8} lg={6} className="text-white">
        <h1>Error 404</h1>
        <p>
          The page you are lookin for doesn't exist, check if the address is
          right.
        </p>
      </Col>
    </Row>
  </Container>
);

export default NotFound;
