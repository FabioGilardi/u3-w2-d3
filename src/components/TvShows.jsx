import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const TvShows = () => (
  <Container className="h-100">
    <Row className="h-100 justify-content-center align-items-center">
      <Col md={8} lg={6} className="text-white">
        <h4>Page is not working...</h4>
        <p>
          We apologyse but this page is under manteinance, it will be up again
          as soon as we fix the issues.
        </p>
      </Col>
    </Row>
  </Container>
);

export default TvShows;
