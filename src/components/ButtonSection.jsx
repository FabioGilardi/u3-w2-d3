import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const ButtonSection = () => (
  <Col
    xs={12}
    className="mt-2 py-4 border-top border-secondary d-flex justify-content-center"
  >
    <Button className=" border border-black px-4 text-black letter-spaced fw-bolder rounded-0 bg-white">
      SAVE
    </Button>
    <Button className=" border border-secondary px-4 text-secondary letter-spaced mx-3 rounded-0 bg-css">
      CANCEL
    </Button>
    <Button className=" border border-secondary px-4 text-secondary letter-spaced rounded-0 bg-css">
      DELETE PROFILE
    </Button>
  </Col>
);

export default ButtonSection;
