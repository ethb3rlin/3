import Layout from "../components/Layout";
import React, { useState, useRef, useEffect } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import "../styles/sliders.css";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { CiFaceMeh } from "react-icons/ci";
import { FiRefreshCcw } from "react-icons/fi";
import { FaDownload, FaUpload } from "react-icons/fa";

const FaceRecognition = () => {
  const imgRef = useRef(null);
  const [crop, setCrop] = useState({
    x: 0,
    y: 0,
    unit: "px",
    width: 50,
    height: 50,
  });
  const [image, setImage] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [resultImage, setResultImage] = useState(null);

  const [lineThickness, setLineThickness] = useState(2);
  const [pointSize, setPointSize] = useState(3);
  const [selectedColor, setSelectedColor] = useState("#FFD200"); // New state variable for selected color

  const [errorMessage, setErrorMessage] = useState(""); // New state variable for error messages
  const [isLoading, setIsLoading] = useState(false);
  const [isFaceLoading, setIsFaceLoading] = useState(false);

  // Set imageSrc always when image changes
  useEffect(() => {
    if (!image) {
      setImageSrc(null);
    } else {
      const imageUrl = URL.createObjectURL(image);
      setImageSrc(imageUrl);
    }
  }, [image]);

  // set crop to full image when img loads
  const onImgLoad = ({ target: img }) => {
    const { width, height } = img;
    setCrop((prev) => ({ ...prev, width, height }));
  };

  const handleFileChange = (e) => {
    if (e.target.files) {
      if (e.target.files.length > 1) return alert("Only select 1 file");
      setImage(e.target.files[0]);
    } else {
      alert("No file selected");
    }
  };

  const getCroppedImg = () => {
    const htmlImg = imgRef.current;
    const canvas = document.createElement("canvas");
    const scaleX = htmlImg.naturalWidth / htmlImg.width;
    const scaleY = htmlImg.naturalHeight / htmlImg.height;
    canvas.width = crop.width * scaleX;
    canvas.height = crop.height * scaleY;
    const ctx = canvas.getContext("2d");

    if (!ctx) {
      throw new Error("No 2d context");
    }

    ctx.drawImage(
      htmlImg,
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
        resolve(blob);
      }, "image/jpeg");
    });
  };

  const handleReset = () => {
    setImage(null);
    setResultImage(null);
    setCrop({
      x: 0,
      y: 0,
      unit: "px",
      width: 50,
      height: 50,
    });
    setLineThickness(2);
    setPointSize(3);
    setSelectedColor("#FFD200"); // Reset the color to default
    setErrorMessage("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!crop.width || !crop.height) return; // Ensure crop dimensions are valid

    setErrorMessage(""); // Clear any existing error messages

    const croppedImage = await getCroppedImg();
    const formData = new FormData();
    formData.append("file", croppedImage, "croppedImage.jpeg");

    const params = new URLSearchParams({
      line_thickness: lineThickness,
      point_size: pointSize,
      color: selectedColor, // Add the selected color here
    });
    // const baseUrl = "http://localhost:8080";
    const baseUrl =
      "https://europe-west4-ethberlin-dystopian-faces.cloudfunctions.net/dystopian-faces-test";
    const endpoint = `${baseUrl}/?${params.toString()}`;

    try {
      setIsLoading(true); // Start loading
      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
      });
      setIsLoading(false); // Stop loading

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

  const handleRandomFace = async () => {
    setIsFaceLoading(true); // Start loading indicator
    try {
      const response = await fetch(
        "https://europe-west4-ethberlin-dystopian-faces.cloudfunctions.net/random-faces"
      );
      if (!response.ok) throw new Error("Failed to fetch a random face");
      const blob = await response.blob();
      setImage(blob);
      setErrorMessage("");
    } catch (error) {
      console.error("Error fetching a random face:", error);
      setErrorMessage(error.message);
    } finally {
      setIsFaceLoading(false);
    }
  };

  return (
    <Layout>
      <div className="decorate-links textbox font-ocra">
        <h1 className="my-4 underline font-ocra text-berlin-yellow">
          &lt;&lt;f&lt;ace IDon't
        </h1>
        <div>Generate your ETHBerlin04 profile picture</div>
        {/* Display error message if present */}
        {errorMessage && (
          <div className="text-rose-700 text-xl font-bold" role="alert">
            {errorMessage}
          </div>
        )}
        <div className="md:grid grid-cols-2 gap-12">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center"
          >
            <div className="flex flex-col justify-center items-center my-4 w-full">
              <button
                type="button"
                onClick={handleReset}
                className="flex flex-col items-center text-berlin-yellow brightness-90 hover:brightness-110 font-bold py-2 px-4 rounded cursor-pointer"
              >
                <FiRefreshCcw />
                Reset
              </button>
              <div className="flex flex-row flex-wrap items-center justify-center mb-3">
                <div className="flex flex-col justify-center items-center">
                  <button
                    type="button"
                    className="flex flex-col items-center text-berlin-yellow brightness-90 hover:brightness-110 font-bold pt-2 px-4 rounded cursor-pointer"
                    onClick={handleRandomFace}
                  >
                    {isFaceLoading ? (
                      <AiOutlineLoading3Quarters className="animate-spin h-5 w-5" />
                    ) : (
                      <>
                        <CiFaceMeh />
                        <span>Random Face</span>
                      </>
                    )}
                  </button>
                  <a
                    href="https://thispersondoesnotexist.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[0.5rem] text-gray-400"
                  >
                    thispersondoesnotexist.com
                  </a>
                </div>
                <label
                  htmlFor="fileInput"
                  className=" flex flex-col items-center text-berlin-yellow brightness-90 hover:brightness-110 font-bold pt-2 px-4 rounded cursor-pointer mb-3"
                >
                  <FaUpload className="text-base" />
                  Upload Face
                </label>
              </div>

              <div className="w-20">
                <button
                  className="bg-berlin-yellow font-bold py-2 px-4 rounded hover:brightness-105 flex items-center justify-center disabled:opacity-50 w-full"
                  type="submit"
                  disabled={isLoading || !image} // Disable the button while loading
                >
                  {isLoading ? (
                    <AiOutlineLoading3Quarters className="animate-spin h-5 w-5" />
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>
            </div>
            <div className="w-full">
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
              {/* color selection  */}
              <div className="flex flex-row items-center">
                <span>Line Color:</span>
                <div className="inline">
                  {["#FFD200", "#394DFF", "#23CD76", "#E65B54"].map((color) => (
                    <button
                      key={color}
                      onClick={(e) => {
                        e.preventDefault(); // Don't submit the form
                        setSelectedColor(color);
                      }}
                      className={`inline-block w-8 h-8 rounded-full cursor-pointer mx-2 my-1 transition-opacity duration-200 hover:scale-110 ${
                        selectedColor === color ? "opacity-100" : "opacity-20"
                      }`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
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
            />
            {/* Styled label as a button */}
            {/* Show crop tool if image is selected */}
            {!imageSrc ? (
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
                  <FaUpload className="text-3xl mb-2" />
                  Upload face
                </span>
              </label>
            ) : (
              <div className="overflow-hidden relative">
                <ReactCrop crop={crop} onChange={(newCrop) => setCrop(newCrop)}>
                  <img
                    src={imageSrc}
                    ref={imgRef}
                    onLoad={onImgLoad}
                    alt="Source Image"
                    style={{ maxWidth: "100%" }}
                  />
                </ReactCrop>
              </div>
            )}
          </form>

          <div className="my-12">
            <div className="h-full">
              <h2 className="text-center">Result</h2>
              <div className="flex flex-col items-center justify-center h-full">
                {resultImage ? (
                  <>
                    <img
                      src={resultImage}
                      alt="Processed result"
                      className="my-4"
                    />
                    <a href={resultImage} download="resultImage.jpeg">
                      <button className="my-4 text-berlin-yellow font-semibold inline-flex items-center">
                        <FaDownload className="mr-2" />
                        Download
                      </button>
                    </a>
                  </>
                ) : (
                  <div> The result will appear here </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FaceRecognition;
