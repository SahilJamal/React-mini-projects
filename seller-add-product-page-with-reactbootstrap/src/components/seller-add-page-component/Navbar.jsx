// Navbar.js
import { Container, Row, Col, Button } from "react-bootstrap";

const Navbar = ({ onSave }) => {
  return (
    <div className="navbar-container mb-4">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} className="text-center mb-2 p-3">
            <h2>Add New Product</h2>
          </Col>
          <Col xs={12} md={6} className="text-center">
            <div className="d-flex flex-column flex-md-row justify-content-md-end">
              <Button
                variant="secondary"
                className="w-100 mb-2 mb-md-0 me-md-2"
              >
                Save Draft
              </Button>
              <Button variant="primary" className="w-100" onClick={onSave}>
                Save Product
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Navbar;
