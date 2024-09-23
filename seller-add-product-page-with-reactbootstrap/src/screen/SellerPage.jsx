// App.js
import { Container, Row, Col, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import ImageCarousel from "../components/seller-add-page-component/ImageCarousel";
import GeneralInformation from "../components/seller-add-page-component/GeneralInformation";
import TimeAndSubscription from "../components/seller-add-page-component/TimeAndSubscription";
import Navbar from "../components/seller-add-page-component/Navbar";
import Pricing from "../components/seller-add-page-component/Pricing";
import AdditionalInformation from "../components/seller-add-page-component/AdditionalInformation";

function SellerPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [currency, setCurrency] = useState("INR");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("");
  const [isSubscribable, setIsSubscribable] = useState(false);
  const [isReturnable, setIsReturnable] = useState(false);
  const [images, setImages] = useState([]);

  const [times, setTimes] = useState([]);
  const [subscriptionMode, setSubscriptionMode] = useState("");

  const addTime = (newTime) => {
    if (!times.includes(newTime)) {
      setTimes([...times, newTime]);
    } else {
      console.log("Time already exists in the list");
    }
  };

  const removeTime = (index) => {
    // Create a copy of the times array
    const newTimes = [...times];

    // Remove the item at the specified index
    newTimes.splice(index, 1);

    // Update the state with the new array
    setTimes(newTimes);
  };

  const handleSaveProduct = () => {
    const productData = {
      name,
      description,
      price,
      currency,
      stock,
      category,
      isSubscribable,
      isReturnable,
      images,
    };

    // Send productData to your API here
    console.log("Submitting Product Data: ", productData);
    // Example: fetch('/api/products', { method: 'POST', body: JSON.stringify(productData) });

    setName("");
    setDescription("");
    setPrice("");
    setCurrency("INR");
    setStock("");
    setCategory("");
    setIsSubscribable(false);
    setIsReturnable(false);
    setImages([]);
  };

  return (
    <Container className="app-container">
      <Navbar onSave={handleSaveProduct} />
      <Form>
        <Row>
          <Col md={6}>
            <div className="mb-4">
              <GeneralInformation
                name={name}
                setName={setName}
                description={description}
                setDescription={setDescription}
              />
            </div>
            <div className="mb-4">
              <Pricing
                price={price}
                setPrice={setPrice}
                currency={currency}
                setCurrency={setCurrency}
                stock={stock}
                setStock={setStock}
              />
            </div>
          </Col>
          <Col md={6}>
            <div className="mb-4 justify-center">
              <ImageCarousel images={images} setImages={setImages} />
            </div>
            <div className="mb-4">
              <AdditionalInformation
                category={category}
                setCategory={setCategory}
                isSubscribable={isSubscribable}
                setIsSubscribable={setIsSubscribable}
                isReturnable={isReturnable}
                setIsReturnable={setIsReturnable}
              />
              {isSubscribable && (
                <div className="mb-4">
                  <TimeAndSubscription
                    times={times}
                    addTime={addTime}
                    removeTime={removeTime}
                    subscriptionMode={subscriptionMode}
                    setSubscriptionMode={setSubscriptionMode}
                  />
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
export default SellerPage;
