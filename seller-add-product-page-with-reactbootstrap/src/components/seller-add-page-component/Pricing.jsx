// Pricing.js
import { Form, Row, Col } from "react-bootstrap";

const Pricing = ({
  price,
  setPrice,
  currency,
  setCurrency,
  stock,
  setStock,
}) => {
  return (
    <div className="pricing">
      <h2>Pricing</h2>
      <Row>
        <Col xs={12} md={4} className="mb-3">
          <Form.Group>
            <Form.Label>Name Pricing</Form.Label>
            <Form.Control
              type="text"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col xs={12} md={4} className="mb-3">
          <Form.Group>
            <Form.Label>Currency Type</Form.Label>
            <Form.Control
              as="select"
              id="currency-type"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <option value="INR">INR</option>
              <option value="USD">USD</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col xs={12} md={4} className="mb-3">
          <Form.Group>
            <Form.Label>Stock</Form.Label>
            <Form.Control
              type="text"
              id="stock"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
    </div>
  );
};

export default Pricing;
