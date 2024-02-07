import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const PlanDetails = () => (
  <Row>
    <Col xs={12} className="border-bottom border-secondary mb-2">
      <Row>
        <Col xs={12} md={4} className="mt-3 mt-md-0">
          <h6 className="text-secondary">PLAN DETAILS</h6>
        </Col>
        <Col xs={12} md={8} className="d-flex justify-content-between">
          <div>
            <p className="fw-bold mb-1">
              Premium <i className="bi bi-badge-hd"></i>
            </p>
          </div>
          <div className="text-end">
            <p className="mb-1">
              <a href="#" className="text-decoration-none text-info">
                Change Plan
              </a>
            </p>
          </div>
        </Col>
      </Row>
    </Col>
  </Row>
);

export default PlanDetails;
