// ImageCarousel.js
import React, { useState, useRef } from "react";
import { Button, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ImageCarousel.css";

const ImageCarousel = ({ images, setImages }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageInput = useRef(null);

  const handleImageAdd = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    if (images.length >= 4) {
      alert("You can only upload up to 4 images.");
      return;
    }

    const newImage = URL.createObjectURL(file);
    setImages((prevImages) => [...prevImages, newImage]);
    setCurrentIndex(images.length); // Set the new image as current
    event.target.value = ""; // Clear the file input
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  const handleAddImageClick = () => {
    imageInput.current.click();
  };

  const handleImageRemove = () => {
    setImages((prevImages) => {
      const updatedImages = prevImages.filter(
        (_, index) => index !== currentIndex
      );
      const nextIndex =
        currentIndex >= updatedImages.length
          ? updatedImages.length - 1
          : currentIndex;
      setCurrentIndex(nextIndex >= 0 ? nextIndex : 0);
      return updatedImages;
    });
  };

  return (
    <div className="image-carousel">
      <div className="large-image-container">
        {images.length > 0 ? (
          <Carousel activeIndex={currentIndex} onSelect={setCurrentIndex}>
            {images.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  src={image}
                  alt={`Slide ${index}`}
                  className="d-block w-100"
                  style={{ maxHeight: "300px", objectFit: "contain" }}
                />
                <Carousel.Caption>
                  <Button variant="danger" onClick={handleImageRemove}>
                    Remove
                  </Button>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <div className="placeholder-container">
            <Button
              onClick={handleAddImageClick}
              className="add-image-button"
              variant="primary"
            >
              Add Image
            </Button>
          </div>
        )}
      </div>
      <div className="thumbnail-container">
        {images.map((image, index) => (
          <div key={index} className="thumbnail-wrapper">
            <img
              src={image}
              alt={`Thumbnail ${index}`}
              className="thumbnail"
              onClick={() => handleThumbnailClick(index)}
            />
          </div>
        ))}
      </div>
      {images.length > 0 && (
        <Button onClick={handleAddImageClick} className="add-image-button">
          Add Image
        </Button>
      )}
      <input
        type="file"
        accept="image/*"
        onChange={handleImageAdd}
        style={{ display: "none" }}
        ref={imageInput}
      />
    </div>
  );
};

export default ImageCarousel;
