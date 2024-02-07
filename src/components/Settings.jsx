import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Settings = () => (
  <Row>
    <Col className="border-bottom border-secondary mb-2">
      <Row>
        <Col xs={12} md={4} className="mt-3 mt-md-0">
          <h6 className="text-secondary">SETTINGS</h6>
        </Col>
        <Col xs={12} md={8} className="d-flex justify-content-between">
          <div>
            <p className="mb-1">
              <a href="#" className="text-decoration-none text-info">
                Parental Controls
              </a>
            </p>
            <p className="mb-1">
              <a href="#" className="text-decoration-none text-info">
                Test participation
              </a>
            </p>
            <p className="mb-1">
              <a href="#" className="text-decoration-none text-info">
                Manage download devices
              </a>
            </p>
            <p className="mb-1">
              <a href="#" className="text-decoration-none text-info">
                Activate a device
              </a>
            </p>
            <p className="mb-1">
              <a href="#" className="text-decoration-none text-info">
                Recente device streaming activity
              </a>
            </p>
            <p className="mb-1">
              <a href="#" className="text-decoration-none text-info">
                Sign out of all devices
              </a>
            </p>
          </div>
          <div className="d-none d-md-block"></div>
        </Col>
      </Row>
    </Col>
  </Row>
);

export default Settings;
