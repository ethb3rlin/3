import React, { useEffect, useRef, useState } from "react";
import EthBerlinLogo from "../components/EthBerlinLogo";
import EthDiamond from "../components/EthDiamond";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const ethBerlinTextRef = useRef();

  // from https://medium.com/autodesk-tlv/smooth-text-scaling-in-javascript-css-a817ae8cc4c9
  useEffect(() => {
    const MIN_SCALE = 0.1;
    const MAX_SCALE = 1;
    const MAX_TRANSLATE_X = 0;
    const MAX_TRANSLATE_Y = 0;
    // Translate away from the screen at most half of the screen width or height. (half to the edge + half away)
    const MIN_TRANSLATE_X = -window.innerWidth;
    const MIN_TRANSLATE_Y = -window.innerHeight;
    let scale = 1;
    let translateX = 0;
    let translateY = 0;

    function onMouseWheel(e) {
      e.preventDefault();
      const scaldeDelta = -e.deltaY / 1000;
      // Normalize X and Y scroll to window width and height to send the element directly to the corner.
      // Otherwise it hits the shorter axis first.
      const translateXDelta = (-e.deltaY * window.innerWidth) / 1000;
      const translateYDelta = (-e.deltaY * window.innerHeight) / 1000;

      // Show sidebar when logo flies away the viewport
      if (!isInViewport(ethBerlinTextRef.current)) {
        setShowSidebar(true);
      } else {
        setShowSidebar(false);
      }
      // scroll upwards
      if (scaldeDelta > 0) {
        scale = Math.min(MAX_SCALE, scale + scaldeDelta);
        // Don't translate past the original position towards right and right.
        translateX = Math.min(translateX + translateXDelta, MAX_TRANSLATE_X);
        translateY = Math.min(translateY + translateYDelta, MAX_TRANSLATE_Y);
      } else {
        // scroll downwards
        scale = Math.max(MIN_SCALE, scale + scaldeDelta);
        translateX = Math.max(translateX + translateXDelta, MIN_TRANSLATE_X);
        translateY = Math.max(translateY + translateYDelta, MIN_TRANSLATE_Y);
      }
      console.log("Scale:" + scale);
      console.log("TranslateX: ", translateX);
      console.log("TranslateY: ", translateY);
      const style = `translateX(${translateX}px) translateY(${translateY}px) scale(${scale})`;

      ethBerlinTextRef.current.style.transform = style;
    }

    window.addEventListener("wheel", onMouseWheel);

    return () => {
      window.removeEventListener("wheel");
    };
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Sidebar
        className={`z-10 ${showSidebar ? "fade-in-left" : "fade-out-left"}`}
      />
      <EthBerlinLogo
        ref={ethBerlinTextRef}
        className="flex flex-col justify-center items-center"
        titleClassName="text-[96pt]"
      />
      <div className="fixed right-0 top-0 bottom-0 overflow-y-scroll w-full">
        <EthDiamond className="flex justify-end" />
      </div>
    </div>
  );
};

// https://www.javascripttutorial.net/dom/css/check-if-an-element-is-visible-in-the-viewport/
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  console.log(rect);
  return rect.bottom >= 0 && rect.right >= 0;
}

export default Home;
