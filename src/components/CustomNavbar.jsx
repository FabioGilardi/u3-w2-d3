import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import logo from "../logo.png";
import { Link, useLocation } from "react-router-dom";

const CustomNavbar = () => {
  const location = useLocation().pathname;
  console.log(location);

  return (
    <Navbar expand="lg" className="bg-css" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img src={logo} alt="netflix" width={"100px"} height={"55px"}></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto fw-bold">
            <Link
              className={location === "/" ? "nav-link active" : "nav-link"}
              to="/"
            >
              Home
            </Link>
            <Link
              className={
                location === "tv-shows" ? "nav-link active" : "nav-link"
              }
              to="/tv-shows"
            >
              TV Shows
            </Link>
            <Nav.Link href="#link">Movies</Nav.Link>
            <Nav.Link href="#link">Recently Added</Nav.Link>
            <Nav.Link href="#link">My List</Nav.Link>
          </Nav>
          <div className="d-flex align-items-center text-white justify-content-end">
            <i className="bi bi-search icons mx-0"></i>
            <div id="kids" className="fw-bold ms-3">
              KIDS
            </div>
            <i className="bi bi-bell icons mx-3"></i>
            <i className="bi bi-person-circle icons mx-3"></i>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
