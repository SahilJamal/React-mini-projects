import { useState } from "react";
import {
  Button,
  Col,
  Container,
  Row,
  Card,
  Spinner,
  Alert,
} from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";

const Bookmarks = () => {
  const [bookmarks, setBookmarks] = useState([
    { id: 1, title: "Bookmark 1", description: "Lorem ipsum dolor sit" },
    { id: 2, title: "Bookmark 2", description: "Lorem ipsum dolor sit" },
    { id: 3, title: "Bookmark 3", description: "Lorem ipsum dolor sit" },
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //   // Function to handle delete
  //   const handleDelete = async (id) => {
  //     try {
  //       await axios.delete(`/api/bookmarks/${id}`); // Replace with your API endpoint
  //       setBookmarks(bookmarks.filter((bookmark) => bookmark.id !== id));
  //     } catch (err) {
  //       setError("Failed to delete bookmark");
  //     }
  //   };

  // Function to handle delete
  const handleDelete = (id) => {
    setLoading(true);
    setBookmarks(bookmarks.filter((bookmark) => bookmark.id !== id));
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-5">
        <Alert variant="danger">{error}</Alert>
      </div>
    );
  }

  return (
    <Container fluid style={{ padding: "20px" }}>
      <Row>
        {bookmarks.map((bookmark) => (
          <Col xs={12} md={4} lg={4} className="mb-4" key={bookmark.id}>
            <Card className="border rounded">
              <Card.Body>
                <Row>
                  <Col className="d-flex justify-content-center align-items-center">
                    <img
                      src="https://via.placeholder.com/100"
                      alt="Bookmark"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </Col>
                  <Col>
                    <h4>Data</h4>
                    <p>Lorem ipsum dolor sit</p>
                    <div className="d-flex justify-content-end">
                      <Button
                        variant="danger"
                        onClick={() => handleDelete(bookmark.id)}
                      >
                        <FaTrashAlt />
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Bookmarks;
