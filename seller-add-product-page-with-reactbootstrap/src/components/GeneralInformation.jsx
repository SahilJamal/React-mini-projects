// GeneralInformation.js
import { Form } from "react-bootstrap";

const GeneralInformation = ({ name, setName, description, setDescription }) => {
  return (
    <div className="general-information mb-4">
      <h2>General Information</h2>
      <Form.Group className="mb-4">
        <Form.Label>Name Product</Form.Label>
        <Form.Control
          type="text"
          id="name-product"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Description Product</Form.Label>
        <Form.Control
          as="textarea"
          id="description-product"
          rows={6}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>
    </div>
  );
};

export default GeneralInformation;
