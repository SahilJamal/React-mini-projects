import { useState } from "react";
import "./App.css";

function App() {
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState(null);
  const [imageInput, setImageInput] = useState(null);

  const handleImageAdd = (event) => {
    const file = event.target.files[0];
    if (!file) return; // If no file is selected, exit

    // Limit to 4 images and avoid duplicates
    if (images.length >= 4) {
      alert("You can only upload up to 4 images.");
      return;
    }

    const newImage = URL.createObjectURL(file);
    setImages((prevImages) => [...prevImages, newImage]);
    setCurrentImage(newImage); // Set the newly added image as current
    event.target.value = ""; // Clear the file input
  };

  const handleThumbnailClick = (image) => {
    setCurrentImage(image);
  };

  const handleAddImageClick = (e) => {
    e.preventDefault();
    imageInput.click(); // Programmatically click the hidden file input
  };

  const handleImageRemove = (e) => {
    e.preventDefault();
    // Find the index of the current image
    const currentIndex = images.indexOf(currentImage);
    // Remove the current image from the array
    setImages((prevImages) => {
      const updatedImages = prevImages.filter(
        (image) => image !== currentImage
      );
      // Set the next image as the current image if available
      const nextImage =
        updatedImages[
          currentIndex < updatedImages.length ? currentIndex : currentIndex - 1
        ] || null;
      setCurrentImage(nextImage);
      return updatedImages;
    });
  };

  return (
    <form>
      <div className="app-container">
        <div className="navbar-container">
          <h2>Add New Product</h2>
          <div className="custom-button">
            <button className="save-draft" type="button">
              Save Draft
            </button>
            <button className="add-product" type="submit">
              Save Product
            </button>
          </div>
        </div>
        <div className="content-container">
          <div className="left-container">
            <div className="general-information">
              <h2>General Information</h2>
              <div className="general-information-content">
                <label htmlFor="name-product">Name Product</label>
                <input type="text" id="name-product" />
                <label htmlFor="description-product">Description Product</label>
                <textarea
                  id="description-product"
                  cols="75"
                  rows="10"
                ></textarea>
              </div>
            </div>
            <div className="pricing">
              <h2>Pricing</h2>
              <div className="pricing-content">
                <div className="pricing-item">
                  <label htmlFor="price">Name Pricing</label>
                  <input type="text" id="price" />
                </div>
                <div className="pricing-item">
                  <label htmlFor="currency-type">Currency Type</label>
                  <select id="currency-type">
                    <option value="INR">INR</option>
                    <option value="USD">USD</option>
                  </select>
                </div>
                <div className="pricing-item">
                  <label htmlFor="stock">Stock</label>
                  <input type="text" id="stock" />
                </div>
              </div>
            </div>
          </div>
          <div className="right-container">
            <div className="image-carousel">
              <div className="large-image-container">
                {currentImage ? (
                  <>
                    <img
                      src={currentImage}
                      alt="Current"
                      className="large-image"
                    />
                    <button
                      className="remove-image-button"
                      onClick={handleImageRemove}
                    >
                      Remove
                    </button>
                  </>
                ) : (
                  <div className="placeholder-container">
                    {images.length === 0 && (
                      <button
                        onClick={handleAddImageClick}
                        className="add-image-button"
                      >
                        Add Image
                      </button>
                    )}
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
                      onClick={() => handleThumbnailClick(image)}
                    />
                  </div>
                ))}
              </div>
            </div>
            {images.length > 0 && (
              <button
                onClick={handleAddImageClick}
                className="add-image-button"
              >
                Add Image
              </button>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageAdd}
              style={{ display: "none" }}
              ref={(input) => setImageInput(input)} // Assigning the ref to the input
            />
            <div className="category">
              <h2>Addtional Information</h2>
              <div className="category-type">
                <label htmlFor="category-type">Category </label>
                <input type="text" id="category-type" />
              </div>
              <div className="radio-type-buttons">
                <div className="category-radio-button">
                  <label htmlFor="is-subscribable">Susbcribable</label>
                  <input type="checkbox" id="is-subscribable" />
                </div>
                <div className="category-radio-button">
                  <label htmlFor="is-returnable">Returnable</label>
                  <input type="checkbox" id="is-returnable" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default App;
