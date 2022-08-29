import React, { useEffect, useRef, useState } from "react";
import EthBerlinLogo from "../components/EthBerlinLogo";
import EthDiamond from "../components/EthDiamond";
import Seo from "../components/seo";
import Sidebar from "../components/Sidebar";
import { useBreakpoint } from "../components/useBreakpoint";

const Home = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const ethBerlinTextRef = useRef();
  const ethBerlinTextSizeRef = useRef();
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
    const MAX_SCALE = 2.5;
    const SCALE_DOMAIN = MAX_SCALE - MIN_SCALE;
    let scale = MAX_SCALE;

    // Use size ref not the main element
    const elementWidth = ethBerlinTextSizeRef.current.offsetWidth;
    const elementHeight = ethBerlinTextSizeRef.current.offsetHeight;

    const MAX_TRANSLATE_X = window.innerWidth / 2 - elementWidth / 2; //32px = 2rem
    const MAX_TRANSLATE_Y = window.innerHeight / 2 - elementHeight / 2; // idk why + 1.5rem not needed here
    const MIN_TRANSLATE_X = 0;
    const MIN_TRANSLATE_Y = 0;
    const TRANSLATE_DOMAIN_Y = MAX_TRANSLATE_Y - MIN_TRANSLATE_Y;
    const TRANSLATE_DOMAIN_X = MAX_TRANSLATE_X - MIN_TRANSLATE_X;

    let translateX = MAX_TRANSLATE_X;
    let translateY = MAX_TRANSLATE_Y;

    // Set initial position and scale
    ethBerlinTextRef.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) scale(${scale})`;

    function onMouseWheel(e) {
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
      translateX === 0 ? setShowSidebar(true) : setShowSidebar(false);
    }

    window.addEventListener("wheel", onMouseWheel);

    return () => {
      window.removeEventListener("wheel", onMouseWheel);
    };
  }, [isSm]);

  function sendToTopLeft() {
    const style = `translateX(0) translateY(0) scale(1)`;
    ethBerlinTextRef.current.style.transform = style;
    setShowSidebar(true);
  }
  return (
    <div className="flex flex-col lg:flex-row sm:justify-center sm:items-center min-h-screen font-w95">
      <Seo />
      <Sidebar
        className={`hidden sm:flex z-10 ${
          showSidebar ? "fade-in-left" : "fade-out-left"
        }`}
        hideLogo={true}
      />
      {/* Non-moving logo navbar for mobile */}
      <div className="sm:hidden flex justify-between text-berlin-yellow my-8 mx-4">
        <EthBerlinLogo
          className=""
          titleClassName="text-4xl"
          subtitleClassName={`text-lg `}
        />
        <div className=" flex flex-col flex-grow-0 font-w95  text-2xl leading-3 justify-center z-30">
          <button
            className="p-2 blur-text-smaller"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.45)" }}
            onClick={() => setShowNav(true)}
          >
            <div>---</div>
            <div>---</div>
            <div>---</div>
          </button>
        </div>
      </div>
      {/* Open/close nav menu */}
      <nav
        className={`flex z-30 ${
          showNav ? "visible opacity-95" : "invisible opacity-0"
        } flex-col items-center transition-all duration-200 ease-in-out text-xl fixed bg-black top-0 left-0 w-screen h-screen justify-center text-berlin-yellow`}
      >
        <button
          className="fixed top-8 right-8 text-4xl p-8"
          onClick={() => setShowNav(false)}
        >
          X
        </button>
        <a className="my-2" href="/about">
          {" "}
          (a)bout
        </a>
        <a className="my-2" href="/manifesto">
          {" "}
          (m)anifesto
        </a>
        <a className="my-2" href="/hacker-manual">
          {" "}
          (h)acker manual
        </a>
        <a className="my-2" href="/program">
          {" "}
          (p)rogram
        </a>
        {/* <a className="my-2" href="/contribute">
          {" "}
          (c)ontribute
        </a> */}
        <a className="my-2" href="/sponsor">
          {" "}
          (s)ponsor
        </a>
        <div className="fixed bottom-0 mb-8 text-sm text-center">
          <div className="my-2">
            join our{" "}
            <a
              className="underline"
              href="https://matrix.to/#/%23ethberlin:matrix.org"
              target="_blank"
              rel="noreferrer"
            >
              matrix space
            </a>
            <br />
            or{" "}
            <a
              className="underline"
              href="mailto:henlo@ethberlin.ooo"
              target="_blank"
              rel="noreferrer"
            >
              e-mail us
            </a>
          </div>
        </div>
      </nav>
      <div
        className={`static lg:fixed max-w-xl flex flex-col left-0 top-0 mt-16 sm:mt-48 flex-1 ml-4 sm:ml-64 mr-4 z-10 ${
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
            on the edge of a new dark age of regression. We invite you to hack
            the system, now, more than ever.
          </p>
          <p className="mt-4 text-center">
            Press <a href="/about">(a)</a> to get started.
          </p>
          <p className="mt-4">
            To learn more about our vision &amp; mission, press{" "}
            <a href="/manifesto">(m)</a>.
          </p>
        </div>
      </div>

      {/* Moving logo not shown on mobile */}
      <EthBerlinLogo
        ref={ethBerlinTextRef}
        className="hidden sm:flex top-0 left-0 px-6 py-8 fixed w-auto flex-col justify-center origin-center"
        titleClassName="text-2xl sm:text-5xl"
        subtitleClassName={`${!showSidebar && "text-center text-xs"}`}
      />
      {/* Since the width of the logo changes because of text reveal, render but don't display the same element */}
      <EthBerlinLogo
        ref={ethBerlinTextSizeRef}
        className="invisible top-0 left-0 px-6 py-8 fixed w-auto flex-col justify-center origin-top-left"
        titleClassName="text-2xl sm:text-5xl"
        subtitleClassName={`${!showSidebar && "text-center text-xs"}`}
        noReveal
      />
      {/* Scroll indicator */}
      <button
        className={`hidden ${
          showSidebar ? "hidden" : "sm:flex"
        } text-berlin-yellow  fixed left-1/2 bottom-0 blur-text font-light flex-col -translate-x-1/2 z-20`}
        onClick={sendToTopLeft}
      >
        <span className="material-symbols-outlined text-6xl -mb-4 light-up">
          expand_more
        </span>
        <span className="material-symbols-outlined text-6xl -mt-5 light-up-delayed">
          expand_more
        </span>
      </button>
      {/* Mobile and small ETH on bottom*/}
      <div className="flex justify-center lg:hidden sm:ml-60">
        <EthDiamond
          className="flex justify-end"
          smallScreen={true}
          isPrimaryColor={true}
        />
      </div>
      {/* Large screen fixed ETH */}
      <div className="hidden lg:block fixed right-0 top-0 bottom-0 overflow-y-scroll w-full">
        <EthDiamond
          className="sticky top-16 mx-4  flex justify-end"
          isPrimaryColor={true}
        />
      </div>
      <div
        className={`z-10 ${
          showSidebar ? "fade-in-right" : "fade-out-right"
        } sm:fixed sm:top-0 sm:right-0 flex justify-evenly sm:justify-end my-6 sm:mr-12 font-w95`}
      >
        <div>September 16-18, 2022</div>
        <div className="sm:ml-8">
          <a
            style={{ textDecoration: "none" }}
            href="https://factoryberlin.com/"
            target="_blank"
            rel="noreferrer"
          >
            Factory G&ouml;rlitzer Park
          </a>
        </div>
      </div>
      <div
        className={`sm:fixed sm:bottom-0 sm:right-0 flex flex-wrap justify-evenly items-center text-center sm:justify-end my-4 sm:mr-12 z-20 text-sm font-w95 ${
          showSidebar ? "fade-in-right" : "fade-out-right"
        } `}
      >
        <a
          className="mx-4 my-2 sm:ml-8 text-berlin-yellow"
          href="/decentralization"
        >
          department of (d)ecentralization
        </a>
        <a className="mx-4 my-2 sm:ml-8 text-berlin-yellow" href="/contact">
          contact & (i)mpressum
        </a>
        <a
          className="mx-4 my-2 sm:ml-8 text-berlin-yellow"
          href="/code-of-conduct"
        >
          code (o)f conduct
        </a>
        <a
          className="mx-4 my-2 sm:ml-8 text-berlin-yellow"
          href="https://github.com/Department-of-Decentralization/3"
          target="_blank"
          rel="noreferrer"
        >
          source
        </a>
      </div>
    </div>
  );
};

export default Home;
