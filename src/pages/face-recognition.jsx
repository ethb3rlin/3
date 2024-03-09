import Layout from "../components/Layout";
import React, { useState, useRef } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

const FaceRecognition = () => {
  const [src, setSrc] = useState(null);
  const [crop, setCrop] = useState({
    aspect: 1,
    unit: "px",
    width: 50,
    height: 50,
  });
  const [imageRef, setImageRef] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [resultImage, setResultImage] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () => setSrc(reader.result));
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  const handleOnCropComplete = async (crop) => {
    if (!crop.width || !crop.height) return; // Ensure crop dimensions are valid
    await getCroppedImg(imageRef, crop);
  };

  const onImageLoaded = (image) => {
    setImageRef(image);
  };

  const getCroppedImg = async (image, crop) => {
    const canvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    return new Promise((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (!blob) {
          console.error("Canvas is empty");
          return;
        }
        blob.name = "croppedImage.jpeg";
        window.URL.revokeObjectURL(croppedImageUrl);
        const croppedImageUrl = window.URL.createObjectURL(blob);
        setPreviewImage(croppedImageUrl); // Update the state to show the preview
        resolve(blob);
      }, "image/jpeg");
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!crop.width || !crop.height) return; // Ensure crop dimensions are valid

    const blob = await getCroppedImg(imageRef, crop);
    const formData = new FormData();
    formData.append("file", blob, "croppedImage.jpeg");

    const endpoint = "http://localhost:8080/";
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const resultBlob = await response.blob();
      const resultImageUrl = URL.createObjectURL(resultBlob);
      setResultImage(resultImageUrl);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <Layout>
      <div className="text-justify decorate-links textbox">
        <h1 className="my-4 underline font-ocra text-berlin-yellow">
          &lt;&lt;f&lt;ace recognition
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            type="file"
            name="file"
            accept="image/*"
            onChange={handleFileChange}
            required
          />
          <button type="submit">Submit</button>
        </form>
        {src && (
          <ReactCrop
            src={src}
            crop={crop}
            aspect={1}
            onImageLoaded={onImageLoaded}
            onComplete={handleOnCropComplete}
            onChange={(newCrop) => setCrop(newCrop)}
          >
            <img
              src={src}
              alt="Source Image"
              ref={setImageRef}
              style={{ maxWidth: "100%" }}
            />
          </ReactCrop>
        )}
        {previewImage && (
          <div>
            <h2>Preview:</h2>
            <img src={previewImage} alt="Preview" className="my-4" />
          </div>
        )}
        {resultImage && (
          <div>
            <h2>Result:</h2>
            <img src={resultImage} alt="Processed result" className="my-4" />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default FaceRecognition;
