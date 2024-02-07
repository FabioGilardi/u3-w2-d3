import { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import ErrorMessage from "./ErrorMessage";
import { Link } from "react-router-dom";

class FilmsRow extends Component {
  state = {
    movies: [],
    isLoading: true,
    isError: false,
  };

  filmFetch = () => {
    fetch("http://www.omdbapi.com/?apikey=9963c3a5&s=" + this.props.saga)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error();
        }
      })
      .then((data) => {
        this.setState({
          movies: data.Search,
          isLoading: false,
        });
      })
      .catch((err) => {
        this.setState({
          isError: true,
          isLoading: false,
        });
      });
  };

  componentDidMount() {
    return this.filmFetch();
  }

  // Volevo fare in modo che all'errore di caricamento si mostrasse un solo ErrorMessage ma mi serviva un modo per passare l'informazione
  // dello stato al padre (app.js) in modo da applicare un d-none qualora fosse true. Purtroppo non ho trovato il modo.

  render() {
    return (
      <Container fluid className="pb-3 px-4">
        {this.state.isError ? (
          <ErrorMessage />
        ) : (
          <>
            <h4 className="text-white">{this.props.saga}</h4>
            <Row xs={1} sm={2} md={4} lg={6} className="justify-content-center">
              {this.state.isLoading && <Spinner variant="primary"></Spinner>}
              {this.state.movies.slice(0, 6).map((movie) => {
                return (
                  <Col
                    className="mb-2 text-center px-2 py-2 py-md-1"
                    key={movie.imdbID}
                  >
                    <Link
                      className="nav-link"
                      to={"/movie-details/" + movie.imdbID}
                    >
                      <img
                        src={movie.Poster}
                        alt={movie.Title}
                        className="w-100"
                        height={"300px"}
                      ></img>
                    </Link>
                  </Col>
                );
              })}
            </Row>
          </>
        )}
      </Container>
    );
  }
}

export default FilmsRow;
