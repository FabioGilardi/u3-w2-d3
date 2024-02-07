import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SettingsProfile = () => (
  <Row>
    <Col className="border-bottom border-secondary mb-2">
      <Row>
        <Col xs={12} md={4} className="mt-3 mt-md-0">
          <h6 className="text-secondary">MY PROFILE</h6>
        </Col>
        <Col xs={12} md={8} className="d-md-flex justify-content-between">
          <div>
            <p className="fw-bold mb-1">
              <i class="bi bi-person-circle me-2"></i>Strive Student
            </p>
            <p className="mb-1">
              <a href="#" className="text-decoration-none text-info">
                Language
              </a>
            </p>
            <p className="mb-1">
              <a href="#" className="text-decoration-none text-info">
                Playback settings
              </a>
            </p>
            <p className="mb-1">
              <a href="#" className="text-decoration-none text-info">
                Subtitle appearance
              </a>
            </p>
          </div>
          <div className="d-md-flex flex-column justify-content-center">
            <p className="mb-1">
              <a href="#" className="text-decoration-none text-info">
                Viewing activity
              </a>
            </p>
            <p className="mb-1">
              <a href="#" className="text-decoration-none text-info">
                Ratings
              </a>
            </p>
          </div>
          <div className="text-md-end">
            <p className="mb-1">
              <a href="#" className="text-decoration-none text-info">
                Manage profiles
              </a>
            </p>
            <p className="mb-1">
              <a href="#" className="text-decoration-none text-info">
                Add profile email
              </a>
            </p>
          </div>
        </Col>
      </Row>
    </Col>
  </Row>
);

export default SettingsProfile;
