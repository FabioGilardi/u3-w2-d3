import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CommentArea from "./CommentArea";

const MovieDetails = () => {
  const params = useParams();
  console.log(params.movieId);

  const [filmObject, setFilmObject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://www.omdbapi.com/?apikey=9963c3a5&i=" + params.movieId)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error();
        }
      })
      .then((data) => {
        setFilmObject(data);
        setIsLoading(false);
      })
      .catch((err) => {
        alert("Ops... Something went wrong");
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(filmObject);

  return (
    <>
      {!isLoading && (
        <Container className="py-4">
          <Row className="justify-content-center">
            <Col md={6}>
              <Card className="border-0 shadow-lg rounded">
                <Card.Img
                  variant="top"
                  src={filmObject.Poster}
                  className="w-100"
                  height={"500px"}
                />
                <Card.Body>
                  <Card.Title className="mb-3">
                    {filmObject.Title.toUpperCase()}
                  </Card.Title>
                  <Card.Text>
                    <span className="fw-bold">Plot:</span> {filmObject.Plot}
                  </Card.Text>
                  <Card.Text>
                    <span className="fw-bold">Genre:</span> {filmObject.Genre}
                  </Card.Text>
                  <Card.Text>
                    <span className="fw-bold">Director:</span>{" "}
                    {filmObject.Director}
                  </Card.Text>
                  <Card.Text className="d-flex justify-content-between">
                    <span>
                      <span className="fw-bold">Year:</span> {filmObject.Year}
                    </span>
                    <span>
                      <span className="fw-bold">Runtime:</span>{" "}
                      {filmObject.Runtime}
                    </span>
                    <span>
                      <span className="fw-bold">Ratings:</span>{" "}
                      {filmObject.imdbRating}
                    </span>
                  </Card.Text>
                  <Button
                    variant="dark"
                    className="w-100 d-flex align-items-center justify-content-center btn-sm"
                  >
                    Watch Now{" "}
                    <i className="bi bi-play-circle-fill fs-2 ms-2"></i>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <CommentArea movieId={params.movieId} />
          </Row>
        </Container>
      )}
      {isLoading && (
        <div className="h-100 d-flex align-items-center justify-content-center">
          <Spinner animation="border" variant="primary"></Spinner>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
