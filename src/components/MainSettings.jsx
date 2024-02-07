import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MembershipBilling from "./MembershipBilling";
import PlanDetails from "./PlanDetails";
import Settings from "./Settings";
import SettingsProfile from "./SettingsProfile";

const MainSettings = () => (
  <Container className="py-3">
    <Row className="justify-content-center">
      <Col xs={12} md={10} lg={8}>
        <h1 className="border-bottom border-secondary">Account</h1>
        <MembershipBilling />
        <PlanDetails />
        <Settings />
        <SettingsProfile />
      </Col>
    </Row>
  </Container>
);

export default MainSettings;
