import { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import AddComment from "./AddComment";

const CommentArea = ({ movieId }) => {
  const [comments, setComments] = useState([]);
  const [isCommentLoading, setIsCommentLoading] = useState(true);
  const [addAComment, setAddAComment] = useState(false);

  const loadComments = () => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/" + movieId, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWJiOWJiOTViMjYxNTAwMTk4YTY5NDAiLCJpYXQiOjE3MDY3OTM5MTMsImV4cCI6MTcwODAwMzUxM30.9ZnvDpFfAY5vfBfeY9LSbAV59AGzLVXbfZQcRg3go8k",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error();
        }
      })
      .then((data) => {
        setComments(data);
        setIsCommentLoading(false);
        console.log(data);
      })
      .catch();
  };

  useEffect(() => {
    loadComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [comments.length]);

  return (
    <>
      {!isCommentLoading && (
        <Col md={6} className="text-white scrollable-div">
          <h2 className="text-center">Community Comments Area</h2>
          <div className="d-flex align-items-center justify-content-center my-3">
            <p className="me-2 mb-0">Want to add a comment?</p>
            <Button
              variant="primary"
              onClick={() => {
                setAddAComment(!addAComment);
              }}
            >
              {!addAComment ? "Click here" : "Close"}
            </Button>
          </div>
          {addAComment && (
            <AddComment movieId={movieId} loadComments={loadComments} />
          )}
          {comments.length > 0 &&
            comments.map((comment) => {
              return (
                <div className="text-black my-3 bg-white px-5 py-2 rounded d-flex justify-content-between align-items-center">
                  <div key={comment._id}>
                    <p className="mb-0">{comment.author}</p>
                    <p className="mb-0">{comment.comment}</p>
                    <p className="mb-0">Voto: {comment.rate}</p>
                  </div>
                  <div>
                    <Button
                      variant="danger"
                      onClick={() => {
                        fetch(
                          "https://striveschool-api.herokuapp.com/api/comments/" +
                            comment._id,
                          {
                            method: "DELETE",
                            headers: {
                              Authorization:
                                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWJiOWJiOTViMjYxNTAwMTk4YTY5NDAiLCJpYXQiOjE3MDY3OTM5MTMsImV4cCI6MTcwODAwMzUxM30.9ZnvDpFfAY5vfBfeY9LSbAV59AGzLVXbfZQcRg3go8k",
                            },
                          }
                        )
                          .then((response) => {
                            if (response.ok) {
                              loadComments();
                              return alert("Commento eliminato correttamente");
                            } else throw new Error();
                          })
                          .catch((err) => {
                            alert("Something went wrong...", err);
                          });
                      }}
                    >
                      <i className="bi bi-trash"></i>
                    </Button>
                  </div>
                </div>
              );
            })}
          {comments.length === 0 && (
            <div>
              <p className="text-center mt-4">
                Non ci sono ancora commenti per questo film
              </p>
            </div>
          )}
        </Col>
      )}
      {isCommentLoading && (
        <div className="h-100 d-flex align-items-center justify-content-center">
          <Spinner animation="border" variant="primary"></Spinner>
        </div>
      )}
    </>
  );
};

export default CommentArea;
