import React, { useState } from "react";
import EthBerlinLogo from "./EthBerlinLogo";
import EthDiamond from "./EthDiamond";
import Seo from "./seo";
import Sidebar from "./Sidebar";
import SvgBackground from "./SvgBackground";
import SecurityStrip from "./SecurityStrip";

const Layout = ({ children, showEthDiamond }) => {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="flex-1 flex flex-col min-h-full font-bundessans">
      {/* SecurityStrip*/}
      <div
        className={`mx-auto -z-10 hidden ${showEthDiamond ? "lg:block" : "hidden"}`}
      >
        <SecurityStrip className="fixed -top-24 left-2/3 transform -translate-x-1/3 -translate-y-1/2" />
      </div>

      <Seo />

      <Sidebar className={`hidden sm:flex z-10`} hideLogo={false} />
      {/* Top Right items Desktop only */}
      <div
        className={`z-10 hidden sm:flex justify-end my-6 sm:mr-12 font-ocra text-black`}
      >
        <div>May 24-26, 2024</div>
        <div className="sm:ml-8">
          <a
            style={{ textDecoration: "none" }}
            href="https://factoryberlin.com/"
            target="_blank"
            rel="noreferrer"
          >
            Factory Görlitzer Park
          </a>
        </div>
      </div>
      {/* Non-moving logo navbar for mobile */}
      <div className="sm:hidden text-black my-8 mx-4">
        {/* Header */}
        <div className="flex justify-between">
          <a style={{ textDecoration: "none" }} href="/">
            <EthBerlinLogo
              className=""
              titleClassName="text-4xl"
              subtitleClassName={`text-lg `}
            />
          </a>
          <div className=" flex flex-col flex-grow-0 font-bundessans  text-black text-2xl leading-3 justify-center">
            <button
              className="p-2"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.45)" }}
              onClick={() => setShowNav((prev) => !prev)}
            >
              <div>---</div>
              <div>---</div>
              <div>---</div>
            </button>
          </div>
        </div>
      </div>
      {/* Open/close nav menu */}
      {/* <nav
        className={`flex ${
          showNav ? "visible opacity-95" : "invisible opacity-0"
        } flex-col items-center transition-all duration-200 ease-in-out text-xl fixed z-50 bg-black top-0 left-0 w-screen h-screen justify-center text-black`}
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
        <a className="my-2" href="/gallery">
          {" "}
          (g)allery
        </a>
        <a className="my-2" href="/hacker-manual">
          {" "}
          (h)acker manual
        </a>
        <a className="my-2" href="/program">
          {" "}
          (p)rogram
        </a>
        <a className="my-2" href="/venue">
          {" "}
          (v)enue
        </a>
        <a className="my-2" href="/contributors">
          {" "}
          (c)ontributors
        </a>
        <a className="my-2" href="/sponsor">
          {" "}
          (s)ponsors
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
              href="mailto:goerli@ethberlin.org"
              target="_blank"
              rel="noreferrer"
            >
              e-mail us
            </a>
          </div>
        </div>
      </nav> */}

      {/* Main content */}

      <div className="flex flex-row flex-1 ml-4 mr-4 sm:ml-64 sm:mr-8">
        {children && (
          <div
            className="mt-16 sm:mt-32 mb-16 w-full sm:mr-8 p-6 text-black self-start"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.45)" }}
          >
            {children}
          </div>
        )}
      </div>

      {/* Large screen fixed ETH */}
      <div className="hidden lg:block fixed right-0 top-0 bottom-0 overflow-none w-full">
        <EthDiamond
          className="sticky top-16 mx-4 -z-10 flex justify-end -translate-y-1/2"
          isPrimaryColor={true}
        />
      </div>
      {/* Mobile ETH */}
      <div className="flex justify-center sm:hidden sm:ml-60 text-black">
        <EthDiamond
          className="flex justify-end"
          smallScreen={true}
          isPrimaryColor={true}
        />
      </div>
      {/* Top right items mobile only, on bottom */}
      <div
        className={`sm:hidden z-10 flex justify-evenly my-6 sm:mr-12 font-ocra text-black `}
      >
        <div>September 16-18, 2022</div>
        <div className="sm:ml-8">
          <a
            style={{ textDecoration: "none" }}
            href="https://factoryberlin.com/"
            target="_blank"
            rel="noreferrer"
          >
            Factory Görlitzer Park
          </a>
        </div>
      </div>
      {/* Bottom Right fixed items */}
      <div
        className={`sm:fixed sm:bottom-0 sm:right-0 flex flex-wrap justify-evenly items-center text-center sm:justify-end my-4 sm:mr-12 z-20 text-sm font-ocra`}
      >
        <a
          className="mx-4 my-2 sm:ml-8 text-black"
          href="https://blog.ethberlin.ooo"
        >
          (b)log
        </a>
        <a className="mx-4 my-2 sm:ml-8 text-black" href="/decentralization">
          department of (d)ecentralization
        </a>
        <a className="mx-4 my-2 sm:ml-8 text-black" href="/contact">
          contact & (i)mpressum
        </a>
        <a className="mx-4 my-2 sm:ml-8 text-black" href="/code-of-conduct">
          code (o)f conduct
        </a>
        <a
          className="mx-4 my-2 sm:ml-8 text-black"
          href="https://github.com/ethb3rlin/4"
          target="_blank"
          rel="noreferrer"
        >
          source
        </a>
      </div>
    </div>
  );
};

Layout.defaultProps = {
  showEthDiamond: true,
};
export default Layout;
