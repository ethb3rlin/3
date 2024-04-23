import React, { useEffect, useRef, useState } from "react";
import passface from "../assets/passface/passface.gif";
import dod from "../assets/passface/dod.png";
import Layout from "../components/Layout";
import ETHBerlin from "../components/ETHBerlin";
import { useBreakpoint } from "../components/useBreakpoint";
import EthBerlinLogo from "../components/EthBerlinLogo";

const Home = () => {
  // mouseover image passport
  const [imageSrcPass, setImageSrcPass] = useState(dod);
  const [showSidebar, setShowSidebar] = useState(false);
  const ethBerlinTextRef = useRef();
  const { isSm } = useBreakpoint("sm");
  const [showNav, setShowNav] = useState(false);

  // https://medium.com/autodesk-tlv/smooth-text-scaling-in-javascript-css-a817ae8cc4c9
  useEffect(() => {
    // Don't run on mobile
    if (!isSm) {
      setShowSidebar(true);
      return;
    }
    const MIN_SCALE = 1;
    const MAX_SCALE = 3;
    const SCALE_DOMAIN = MAX_SCALE - MIN_SCALE;
    let scale = MAX_SCALE;

    // Use size ref not the main element
    const elementWidth = ethBerlinTextRef.current.offsetWidth;
    const elementHeight = ethBerlinTextRef.current.offsetHeight;

    const MAX_TRANSLATE_X = window.innerWidth / 2 - elementWidth / 2; //32px = 2rem
    const MAX_TRANSLATE_Y = window.innerHeight / 2 - elementHeight / 2; // idk why + 1.5rem not needed here
    const MIN_TRANSLATE_X = 0;
    const MIN_TRANSLATE_Y = 0;
    const TRANSLATE_DOMAIN_Y = MAX_TRANSLATE_Y - MIN_TRANSLATE_Y;
    const TRANSLATE_DOMAIN_X = MAX_TRANSLATE_X - MIN_TRANSLATE_X;

    let translateX = MAX_TRANSLATE_X;
    let translateY = MAX_TRANSLATE_Y;

    if (!showSidebar) {
      // Only set up on first load
      ethBerlinTextRef.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) scale(${scale})`;
    }

    function onMouseWheel(e) {
      if (!showSidebar) {
        e.preventDefault();
      }
      moveElementOnDelta(-e.deltaY);
    }

    // Takes either the mousewheel or touch scroll as Y axis delta
    function moveElementOnDelta(delta) {
      const scaleDelta = (delta * SCALE_DOMAIN) / TRANSLATE_DOMAIN_X;

      // Normalize X and Y scroll to window width and height to send the element directly to the corner.
      // Otherwise it hits the shorter axis first.
      const translateXDelta = delta;
      const translateYDelta = (delta / TRANSLATE_DOMAIN_X) * TRANSLATE_DOMAIN_Y;

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

      const style = `translateX(${translateX}px) translateY(${translateY}px) scale(${scale})`;
      ethBerlinTextRef.current.style.transform = style;
      // Show sidebar when logo is in place
      if (translateX === 0) setShowSidebar(true);
    }

    window.addEventListener("wheel", onMouseWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", onMouseWheel);
    };
  }, [isSm, showSidebar]);

  function sendToTopLeft() {
    const style = `translateX(0) translateY(0) scale(1)`;
    ethBerlinTextRef.current.style.transform = style;
    setShowSidebar(true);
  }

  useEffect(() => {
    const MAX_TIME = 2000; // Maximum interval between image changes
    const changeImage = () => {
      setImageSrcPass((current) => (current === dod ? passface : dod));
      setTimeout(changeImage, Math.random() * MAX_TIME); // Reschedule with a new random interval
    };

    const timeoutId = setTimeout(changeImage, Math.random() * MAX_TIME); // Initial scheduling

    return () => clearTimeout(timeoutId); // Clear timeout on component unmount
  }, []);

  return (
    <>
      <EthBerlinLogo
        ref={ethBerlinTextRef}
        className={`${
          showSidebar ? "hidden" : "sm:flex"
        } flex-col top-0 left-0 px-6 py-8 fixed w-auto  justify-center origin-center`}
      />
      {/* Scroll indicator */}
      <button
        className={`hidden ${
          showSidebar ? "hidden" : "sm:flex"
        } text-black  fixed left-1/2 bottom-0 font-light flex-col -translate-x-1/2 z-20`}
        onClick={sendToTopLeft}
      >
        <span className="material-symbols-outlined text-6xl -mb-4 light-up">
          expand_more
        </span>
        <span className="material-symbols-outlined text-6xl -mt-5 light-up-delayed">
          expand_more
        </span>
      </button>
      <Layout
        className={` ${
          !showSidebar
            ? "invisible opacity-0"
            : "fade-in-left visible opacity-100"
        } transition-opacity duration-2000 ease-in-out`}
      >
        {/* Page content */}
        <div className={`flex flex-col xl:flex-row-reverse`}>
          {/* Right side Wolpy and faces */}
          <div className="textbox my-8 xl:ml-8 text-black decorate-links flex justify-center items-center">
            <p className="mt-4 text-center">
              <div className="flex flex-col items-center justify-center mb-4">
                <img
                  src={imageSrcPass}
                  className="w-48 h-48 object-cover"
                  alt="Fake passport image"
                />
              </div>
              <p className="font-ocra my-0"> Event: ETHBerlin04</p>
              <p className="font-ocra my-0"> Theme: Identity Crisis</p>
              <p className="font-ocra my-0"> Dates: May 24-26, 2024</p>
            </p>
          </div>
          {/* Left side text box */}
          <div className="textbox xl:w-2/3">
            <p>
              ETHBerlin is a hackathon, a cultural festival, an educational
              event, a platform for hacktivism, and a community initiative to
              push the decentralized ecosystem forward.
            </p>

            <p>
              Loading <ETHBerlin />: May 24-26, 2024, Berlin, Germany.
            </p>

            <p>
              The situation is dire. We have been operating in crisis mode for
              years now. Established systems are failing, new and old
              imperialist powers are throwing continents into wars of attrition,
              global supply chains are collapsing, financial markets are
              tumbling, healthcare systems are falling apart, education is on a
              consistent downward spiral — the list goes on.
            </p>

            <p>
              But there is hope: The soils to grow new ideas have never been
              more nutritious. It has never been more urgent to double down on
              new revolutionary concepts and ideas. It is high time to change
              the world.
            </p>

            <p>
              For this year's ETHBerlin hackathon, we invite you to join the
              discourse and hack on anti-identity features instead of identity
              anti-features that boost the individual's privacy.
            </p>

            <p>
              To learn more about our vision & mission, press{" "}
              <span className="font-ocra text-sm">&lt;&lt;M&lt;</span>, to apply
              for a hacker visa, press{" "}
              <span className="font-ocra text-sm">&lt;&lt;H&lt;</span>.
            </p>

            <p>Volunteer and mentor applications are closed</p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
