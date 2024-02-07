import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const UserPhoto = () => (
  <Col xs={3}>
    <div className="position-relative">
      <img
        src="http://placekitten.com/200/300"
        alt="user-avatar"
        width={"100%"}
        height={"150px"}
        className="rounded"
      />
      <span className="bg-css text-white rounded-circle border border-white py-0 px-1 position-absolute pos">
        <i className="bi bi-pencil-fill"></i>
      </span>
    </div>
  </Col>
);

export default UserPhoto;
