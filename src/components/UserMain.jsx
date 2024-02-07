import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import UserPhoto from "./UserPhoto";
import RightSection from "./RightSection";
import ButtonSection from "./ButtonSection";

const UserMain = () => (
  <Container className="py-4">
    <Row className="justify-content-center">
      <Col md={8} lg={6}>
        <h1 className="text-white pb-2 border-bottom border-white">
          Edit Profile
        </h1>
        <Row>
          <UserPhoto />

          <RightSection />

          <ButtonSection />
        </Row>
      </Col>
    </Row>
  </Container>
);

export default UserMain;
