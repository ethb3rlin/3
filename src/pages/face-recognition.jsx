import Layout from "../components/Layout";
import React, { useState, useRef } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { LuScanFace } from "react-icons/lu";
import "../styles/sliders.css";

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
  const [lineThickness, setLineThickness] = useState(2);
  const [pointSize, setPointSize] = useState(3);
  const [errorMessage, setErrorMessage] = useState(""); // New state variable for error messages

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
    console.log(image);
    const scaleX = image.naturalWidth / image.width;
    console.log("scaleX", scaleX);
    const scaleY = image.naturalHeight / image.height;
    console.log("scaleY", scaleY);
    canvas.width = crop.width * scaleX;
    canvas.height = crop.height * scaleY;
    const ctx = canvas.getContext("2d");

    console.log("crop", crop);
    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width * scaleX,
      crop.height * scaleY
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

  const handleReset = () => {
    setSrc(null);
    setPreviewImage(null);
    setResultImage(null);
    setCrop({
      aspect: 1,
      unit: "px",
      width: 50,
      height: 50,
    });
    setLineThickness(2);
    setPointSize(3);
    setErrorMessage("");
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!crop.width || !crop.height) return; // Ensure crop dimensions are valid

    setErrorMessage(""); // Clear any existing error messages

    const blob = await getCroppedImg(imageRef, crop);
    const formData = new FormData();
    formData.append("file", blob, "croppedImage.jpeg");

    const params = new URLSearchParams({
      line_thickness: lineThickness,
      point_size: pointSize,
    });
    const baseUrl = "http://localhost:8080";
    // const baseUrl =
    //   "https://europe-west4-ethberlin-dystopian-faces.cloudfunctions.net/dystopian-faces-test";
    const endpoint = `${baseUrl}/?${params.toString()}`;

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
      });

      // Check if the response is not OK (non-2xx HTTP status code)
      if (!response.ok) {
        // Try to parse the response as JSON to get the error message
        let errorMessage = "Error processing the request";
        try {
          const errorResponse = await response.json();
          errorMessage = errorResponse.error || "Unknown error occurred";
          setErrorMessage(errorMessage);
        } catch (jsonError) {
          console.error("Error parsing the error response as JSON:", jsonError);
        }
        return;
      }

      const resultBlob = await response.blob();
      const resultImageUrl = URL.createObjectURL(resultBlob);
      setResultImage(resultImageUrl);
      setErrorMessage(""); // Clear any existing error messages
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage(error.message); // Update the state with the error message
    }
  };

  return (
    <Layout>
      <div className="decorate-links textbox">
        <h1 className="my-4 underline font-ocra text-berlin-yellow">
          &lt;&lt;f&lt;ace recognition
        </h1>
        {/* Display error message if present */}
        {errorMessage && (
          <div className="text-rose-700 text-xl font-bold" role="alert">
            {errorMessage}
          </div>
        )}
        <div className="grid grid-cols-2 gap-12">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center"
          >
            <div className="flex justify-center my-4">
              <button
                type="button"
                onClick={handleReset}
                className="borde text-berlin-yellow brightness-75 hover:brightness-90  font-bold py-2 px-4 rounded cursor-pointer"
              >
                Reset
              </button>
              <button
                className="bg-berlin-yellow font-bold py-2 px-4 rounded hover:brightness-105"
                type="submit"
              >
                Submit
              </button>
            </div>
            <div>
              {/* Sliders for lineThickness and pointSize */}
              <div className="my-4">
                <label>
                  Line Thickness: {lineThickness}
                  <input
                    type="range"
                    min="1"
                    max="20"
                    value={lineThickness}
                    onChange={(e) =>
                      setLineThickness(parseInt(e.target.value, 10))
                    }
                    className="slider"
                  />
                </label>
              </div>
              <div className="my-4">
                <label>
                  Point Size: {pointSize}
                  <input
                    type="range"
                    min="1"
                    max="20"
                    value={pointSize}
                    onChange={(e) => setPointSize(parseInt(e.target.value, 10))}
                    className="slider"
                  />
                </label>
              </div>
            </div>

            {/* Hidden file input */}
            <input
              type="file"
              id="fileInput"
              className="hidden"
              name="file"
              accept="image/*"
              onChange={handleFileChange}
              required
            />
            {/* Styled label as a button */}
            {/* Show crop tool if image is selected */}
            {!src ? (
              <label
                htmlFor="fileInput"
                className="flex items-center justify-center text-center w-full h-full border-dashed border-2 rounded-md border-berlin-yellow bg-gray-200 bg-opacity-30 hover:bg-opacity-70 cursor-pointer"
                style={{
                  paddingTop: "100%", // This will make the height equal to 100% of the width
                  position: "relative", // Position relative to enable absolute positioning of the content inside
                }}
              >
                <span
                  className="flex flex-col items-center justify-center text-center w-full h-full text-berlin-yellow"
                  style={{
                    position: "absolute", // Absolutely position the content to be centered
                    top: 0,
                    left: 0,
                  }}
                >
                  <LuScanFace className="text-6xl " />
                  Upload face
                </span>
              </label>
            ) : (
              <div className="overflow-hidden relative">
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
              </div>
            )}
          </form>
          <div>
            <div className="h-full">
              <h2 className="text-center">Result</h2>
              <div className="flex items-center justify-center h-full">
                {resultImage ? (
                  <img
                    src={resultImage}
                    alt="Processed result"
                    className="my-4"
                  />
                ) : (
                  <div> The result will appear here </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {previewImage && (
          <div>
            <h2>Preview:</h2>
            <img src={previewImage} alt="Preview" className="my-4" />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default FaceRecognition;
