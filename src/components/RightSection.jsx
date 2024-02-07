import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

const RightSection = () => (
  <Col xs={9}>
    <h4 className="text-white bg-secondary fs-5 p-2">Strive Student</h4>
    <p className="text-secondary fw-bolder mt-4 mb-2">Language:</p>
    <Form.Select
      className="d-inline-block text-white rounded-0 dropdown-menu-dark w-50"
      id="form-select"
      aria-label="Default select example"
    >
      <option selected></option>
      <option value="1">English</option>
      <option value="2">Italiano</option>
      <option value="3">Deutsch</option>
      <option value="3">Espanol</option>
    </Form.Select>
    <p className="text-secondary fw-bolder mt-4 mb-2 pt-4 border-top border-secondary">
      Maturity Settings:
    </p>
    <p className="bg-dark text-white d-inline-block px-3 fw-bolder">
      ALL MATURITY RATINGS
    </p>
    <p className="text-white small-edit">
      Show title af all maturity ratings in this profile
    </p>
    <Button
      className="border border-secondary btn-sm px-4 letter-spaced rounded-0 text-white bg-css"
      type="button"
    >
      EDIT
    </Button>
    <p className="text-secondary fw-bolder mt-4 pt-4 border-top border-secondary">
      Autoplay controls:
    </p>
    <Form.Check
      block
      className="text-white small-edit"
      label="Autoplay next episodes in a series on all devices"
      name="group1"
      type="checkbox"
    />
    <Form.Check
      block
      className="text-white small-edit"
      label="Autoplay previous while browsing on all devices"
      name="group1"
      type="checkbox"
    />
    {/* </div> */}
  </Col>
);

export default RightSection;
