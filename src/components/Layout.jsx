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
    <div className="flex-1 flex flex-col min-h-full font-bundessans text-black">
      <header>
        <Seo />
        <Sidebar className={`hidden sm:flex z-10`} hideLogo={false} />
        {/* Top Right items Desktop only */}
        <div
          className={`z-10 hidden sm:flex justify-end my-9 sm:mr-12 font-ocra text-black`}
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
      </header>
      {/* SecurityStrip*/}
      <div
        className={`mx-auto -z-10 hidden ${
          showEthDiamond ? "lg:block" : "hidden"
        }`}
      >
        <SecurityStrip className="fixed -top-24 left-2/3 transform -translate-x-1/3 -translate-y-1/2" />
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

      {/* Main content */}

      <div className="flex flex-row flex-1 ml-4 mr-4 sm:ml-72 sm:mr-8">
        {children && (
          <div className="mt-16 sm:mt-24 mb-16 w-full sm:mr-8">{children}</div>
        )}
      </div>

      {/* Footer */}
      <footer
        className={`flex flex-wrap justify-evenly items-center text-center sm:justify-end my-4 sm:mr-12 z-20 text-sm font-ocra`}
      >
        <a className="mx-4 my-2 sm:ml-8 text-black" href="/decentralization">
          department of &lt;&lt;d&lt;ecentralization
        </a>
        <a className="mx-4 my-2 sm:ml-8 text-black" href="/contact">
          contact & &lt;&lt;i&lt;mpressum
        </a>
        <a className="mx-4 my-2 sm:ml-8 text-black" href="/code-of-conduct">
          code &lt;&lt;o&lt;f conduct
        </a>
        <a
          className="mx-4 my-2 sm:ml-8 text-black"
          href="https://github.com/ethb3rlin/4"
          target="_blank"
          rel="noreferrer"
        >
          source
        </a>
      </footer>
    </div>
  );
};

Layout.defaultProps = {
  showEthDiamond: true,
};
export default Layout;
