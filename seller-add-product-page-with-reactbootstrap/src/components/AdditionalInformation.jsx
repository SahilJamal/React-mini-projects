// AdditionalInformation.js
import { Form } from "react-bootstrap";

const AdditionalInformation = ({
  category,
  setCategory,
  isSubscribable,
  setIsSubscribable,
  isReturnable,
  setIsReturnable,
}) => {
  return (
    <div className="category">
      <h2>Additional Information</h2>
      <Form.Group className="mb-2">
        <Form.Label>Category</Form.Label>
        <Form.Control
          type="text"
          id="category-type"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="d-flex">
        <Form.Check
          type="checkbox"
          id="is-subscribable"
          label="Subscribable"
          checked={isSubscribable}
          onChange={(e) => setIsSubscribable(e.target.checked)}
          className="me-3"
        />
        <Form.Check
          type="checkbox"
          id="is-returnable"
          label="Returnable"
          checked={isReturnable}
          onChange={(e) => setIsReturnable(e.target.checked)}
        />
      </Form.Group>
    </div>
  );
};

export default AdditionalInformation;
