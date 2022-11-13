import Layout from "../components/Layout";
import React, { useEffect, useState } from "react";
import images from "../assets/images.json";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

///////////////////////
//// MAIN COMPONENT ///
///////////////////////

const Photos = () => {
  const [index, setIndex] = useState(-1);

  const handleClick = (index, item) => setIndex(index);

  const thumbswithSrc = images.map((image) => {
    return {
      ...image,
      src: `https://raw.githubusercontent.com/Department-of-Decentralization/3-photos/main/thumbnails/${image.name}`,
    };
  });

  const imagesWithSrc = images.map((image) => {
    return {
      src: `https://raw.githubusercontent.com/Department-of-Decentralization/3-photos/main/${image.name}`,
    };
  });

  return (
    <Layout showEthDiamond={false}>
      <h1 className="my-4 underline text-secondary">(g)allery</h1>

      <div>
        <Gallery
          images={thumbswithSrc}
          onClick={handleClick}
          enableImageSelection={false}
          rowHeight={240}
          margin={4}
        />
      </div>
      <Lightbox
        slides={imagesWithSrc}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        animation={{ fade: 330, swipe: 250 }}
        carousel={{
          finite: false,
          preload: 1,
          padding: "16px",
          spacing: "30%",
          imageFit: "contain",
        }}
        plugins={[Zoom]}
        zoom={{
          maxZoomPixelRatio: 1,
          zoomInMultiplier: 2,
          doubleTapDelay: 300,
          doubleClickDelay: 500,
          doubleClickMaxStops: 2,
          keyboardMoveDistance: 50,
          wheelZoomDistanceFactor: 150,
          pinchZoomDistanceFactor: 150,
          scrollToZoom: false,
        }}
      />
    </Layout>
  );
};

export default Photos;
