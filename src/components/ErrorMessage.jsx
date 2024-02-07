import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";

const ErrorMessage = () => (
  <Row className="justify-content-center">
    <Col xs={12} sm={10} md={8} lg={6}>
      <Alert
        variant="danger"
        className="text-center border border-danger border-2"
      >
        <i className="bi bi-exclamation-triangle-fill fs-1"></i>
        <p className="text-danger">
          Something went wrong... check if your network connection is working
          properly.
        </p>
      </Alert>
    </Col>
  </Row>
);

export default ErrorMessage;
