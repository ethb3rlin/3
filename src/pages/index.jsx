import postcss from "postcss";
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
    const MIN_SCALE = 1;
    const MAX_SCALE = 2.5;
    const SCALE_DOMAIN = MAX_SCALE - MIN_SCALE;
    let scale = MAX_SCALE;

    const elementWidth = ethBerlinTextRef.current.offsetWidth - 10; // Why there's a 11px difference? This is a workaround.
    const elementHeight = ethBerlinTextRef.current.offsetHeight;

    const MAX_TRANSLATE_X = (window.innerWidth - elementWidth * scale) / 2;
    const MAX_TRANSLATE_Y = (window.innerHeight - elementHeight * scale) / 2;
    // Translate away from the screen at most half of the screen width or height. (half to the edge + half away)
    const MIN_TRANSLATE_X = 0;
    const MIN_TRANSLATE_Y = 0;
    const TRANSLATE_DOMAIN_Y = MAX_TRANSLATE_Y - MIN_TRANSLATE_Y;
    const TRANSLATE_DOMAIN_X = MAX_TRANSLATE_X - MIN_TRANSLATE_X;

    let translateX = MAX_TRANSLATE_X;
    let translateY = MAX_TRANSLATE_Y;

    // Set initial position and scale
    ethBerlinTextRef.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) scale(${scale})`;

    function onTouchStart(e) {
      console.log(e);
      const position = e.touches[0].clientY;
      console.log("Start:" + position);
    }

    function onTouchEnd(e) {
      console.log(e);
      const position = e.changedTouches[0].clientY;
      console.log("Finish: " + position);
    }

    function onMouseWheel(e) {
      e.preventDefault();
      console.log("e.deltaY: ", -e.deltaY);
      const scaleDelta = (-e.deltaY * SCALE_DOMAIN) / TRANSLATE_DOMAIN_X;
      console.log("Scale delta: " + scaleDelta);
      const elementHeight = ethBerlinTextRef.current.offsetHeight;
      const elementWidth = ethBerlinTextRef.current.offsetWidth;
      console.log("Height: ", elementHeight);
      console.log("Width: ", elementWidth);
      const rect = ethBerlinTextRef.current.getBoundingClientRect();
      console.log(rect);
      // Normalize X and Y scroll to window width and height to send the element directly to the corner.
      // Otherwise it hits the shorter axis first.
      const translateXDelta = -e.deltaY;
      const translateYDelta =
        (-e.deltaY / TRANSLATE_DOMAIN_X) * TRANSLATE_DOMAIN_Y;

      // scroll upwards
      if (scaleDelta > 0) {
        scale = Math.min(MAX_SCALE, scale + scaleDelta);
        // Don't translate past the original position towards right and right.
        translateX = Math.min(translateX + translateXDelta, MAX_TRANSLATE_X);
        translateY = Math.min(translateY + translateYDelta, MAX_TRANSLATE_Y);
      } else {
        // scroll downwards
        scale = Math.max(MIN_SCALE, scale + scaleDelta);
        translateX = Math.max(translateX + translateXDelta, MIN_TRANSLATE_X);
        translateY = Math.max(translateY + translateYDelta, MIN_TRANSLATE_Y);
      }
      console.log("Scale:" + scale);
      console.log("TranslateX: ", translateX);
      console.log("TranslateY: ", translateY);
      const style = `translateX(${translateX}px) translateY(${translateY}px) scale(${scale})`;

      ethBerlinTextRef.current.style.transform = style;

      // Show sidebar when logo is in place
      if (translateX === 0) {
        setShowSidebar(true);
      } else {
        setShowSidebar(false);
      }
    }

    window.addEventListener("wheel", onMouseWheel);
    window.addEventListener("touchstart", onTouchStart);
    window.addEventListener("touchend", onTouchEnd);

    return () => {
      window.removeEventListener("wheel");
      window.removeEventListener("touchstart");
      window.removeEventListener("touchend");
    };
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen font-w95">
      <Sidebar
        className={`z-10 ${showSidebar ? "fade-in-left" : "fade-out-left"}`}
        hideLogo={true}
      />
      <div
        className={`fixed max-w-xl flex flex-col left-0 top-0 mt-64 flex-1 ml-64 mr-8 z-10 ${
          showSidebar ? "fade-in-left " : "fade-out-left"
        }
        `}
      >
        <div
          className="w-full mr-8 p-6 text-gray-50 decorate-links"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.45)" }}
        >
          <p className="mt-4">
            ETHBerlin³ is a hackathon, a cultural festival, an educational
            event, a platform for hacktivism, and a community initiative to push
            the decentralized ecosystem forward.
          </p>
          <p className="mt-4">
            Over the last two years, the global crackdown on privacy, freedom of
            movement, and the right to transact by governments worldwide put us
            on the edge of a new dark age of regression.
          </p>
          <p className="mt-4">
            We invite you to hack the system, now, more than ever.
          </p>
          <p className="mt-4">
            To learn more about our vision & mission for ETHBerlin³, read our{" "}
            <a href="/manifesto">hacker manifesto</a>.
          </p>
        </div>
      </div>
      <div
        className={`z-10 ${
          showSidebar ? "fade-in-right" : "fade-out-right"
        } fixed top-0 right-0 flex justify-end my-6 mr-12 font-w95`}
      >
        <div>
          <a
            style={{ textDecoration: "none" }}
            href="https://calendar.google.com/calendar/u/0/r/eventedit?text=ETHBerlin%C2%B3&location=Lohm%C3%BChlenstra%C3%9Fe+65,+12435+Berlin&dates=20220916T080000+02:00/20220918T200000+02:00"
            target="_blank"
            rel="noopener"
          >
            September 16-18, 2022
          </a>
        </div>
        <div className="ml-8">
          <a
            style={{ textDecoration: "none" }}
            href="https://factoryberlin.com/"
            target="_blank"
            rel="noopener"
          >
            Factory Görlitzer Park
          </a>
        </div>
      </div>
      <div
        className={`fixed bottom-0 right-0 flex justify-end my-6 mr-12 z-20 text-sm font-w95 ${
          showSidebar ? "fade-in-right" : "fade-out-right"
        } `}
      >
        <a className="ml-8 text-berlin-yellow" href="/DoD">
          department of decentralization
        </a>
        <a className="ml-8 text-berlin-yellow" href="/contact">
          contact & impressum
        </a>
        <a className="ml-8 text-berlin-yellow" href="/code-of-conduct">
          code of conduct
        </a>
      </div>
      <EthBerlinLogo
        ref={ethBerlinTextRef}
        className="top-0 left-0 px-6 py-8 fixed w-auto flex flex-col justify-center origin-top-left"
        titleClassName="text-5xl"
        subtitleClassName={`${!showSidebar && "text-center text-xs"}`}
      />
      <div className="fixed right-0 top-0 bottom-0 overflow-y-scroll w-full">
        <EthDiamond className="flex justify-end" isPrimaryColor={true} />
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