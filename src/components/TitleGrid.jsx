import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";

const TitleGrid = () => {
  return (
    <Container fluid className="text-white bg-css pt-2 pb-4 px-4">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <h2 className="mb-0">TV Shows</h2>
          <div className="btn-group" role="group">
            <Dropdown className="ms-4" data-bs-theme="dark">
              <Dropdown.Toggle
                variant="black"
                id="dropdown-basic"
                className="text-white border rounded-0 py-1 px-2"
              >
                Genres
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Comedy</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Drama</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Thriller</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div>
          <i className="bi bi-grid icons mx-4"></i>
          <i className="bi bi-grid-3x3 icons me-3"></i>
        </div>
      </div>
    </Container>
  );
};

export default TitleGrid;
