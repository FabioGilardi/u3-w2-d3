import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const MembershipBilling = () => (
  <Row>
    <Col xs={12} className="border-bottom border-secondary mb-2">
      <Row>
        <Col xs={12} md={4} className="mt-3 mt-md-0">
          <h6 className="text-secondary">MEMBERSHIP & BILLING</h6>
          <Button
            variant="secondary"
            className="rounded-0 border-bottom shadow text-black"
          >
            Cancel Membership
          </Button>
        </Col>
        <Col
          xs={12}
          md={8}
          className="d-flex justify-content-between border-bottom border-secondary mt-3 mt-md-0"
        >
          <div>
            <p className="fw-bold mb-1">Student@strive.school</p>
            <p className="text-secondary mb-1">Password: ********</p>
            <p className="text-secondary mb-1">Phone: 123-456</p>
          </div>
          <div className="text-end">
            <p className="mb-1">
              <a href="#" className="text-decoration-none text-info">
                Change account email
              </a>
            </p>
            <p className="mb-1">
              <a href="#" className="text-decoration-none text-info">
                Change Password
              </a>
            </p>
            <p className="mb-1">
              <a href="#" className="text-decoration-none text-info">
                Change phone number
              </a>
            </p>
          </div>
        </Col>
        <Col xs={12} md={4} className="d-none d-md-block"></Col>
        <Col
          xs={12}
          md={8}
          className="d-flex justify-content-between border-bottom border-secondary mt-3 mt-md-0 "
        >
          <div>
            <p className="fw-bold mb-1">
              <i className="bi bi-paypal"></i>admin@strive.school
            </p>
          </div>
          <div className="text-end">
            <p className="mb-1">
              <a href="#" className="text-decoration-none text-info">
                Update payment info
              </a>
            </p>
            <p className="mb-1">
              <a href="#" className="text-decoration-none text-info">
                Billing Details
              </a>
            </p>
          </div>
        </Col>
        <Col xs={12} md={4} className="d-none d-md-block"></Col>
        <Col
          xs={12}
          md={8}
          className="d-flex justify-content-between mt-3 mt-md-0 "
        >
          <div></div>
          <div className="text-end">
            <p className="mb-1">
              <a href="#" className="text-decoration-none text-info">
                Redeem gift card or promo code
              </a>
            </p>
            <p className="mb-1">
              <a href="#" className="text-decoration-none text-info">
                Where to buy gift cards
              </a>
            </p>
          </div>
        </Col>
      </Row>
    </Col>
  </Row>
);

export default MembershipBilling;
