import React, { useState } from "react";
import Seo from "./seo";
import Sidebar from "./Sidebar";
import SecurityStrip from "./SecurityStrip";
import ethLogo from "../assets/ethereum.png";

const Layout = ({ children, showEthDiamond }) => {
  return (
    <div className="flex flex-col min-h-screen min-w-screen">
      <div className="flex-1 flex flex-col min-h-full font-bundessans text-black max-w-[100rem] m-auto">
        <Sidebar />
        <Seo />
        {/* Top Right items Desktop only */}
        <div
          className={`z-10 hidden md:flex justify-end my-9 sm:mr-12 font-ocra text-black`}
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
        {/* SecurityStrip*/}
        <div
          className={`mx-auto -z-10 hidden ${
            showEthDiamond ? "lg:block" : "hidden"
          }`}
        >
          <SecurityStrip className="fixed -top-24 left-[66%] transform -translate-x-1/3 -translate-y-1/2" />
        </div>

        {/* ETH Logo */}
        <div>
          <img
            src={ethLogo}
            className="hidden sm:block fixed -bottom-36 left-2/3 -z-40 opacity-10"
            style={{
              filter:
                "invert(83%) sepia(47%) saturate(1247%) hue-rotate(353deg) brightness(97%) contrast(109%)",
            }}
            alt="Ethereum Logo"
          />
        </div>

        {/* Main content */}

        <div className="flex flex-row flex-1 ml-4 mr-4 sm:mr-8  sm:ml-72">
          {children && (
            <div className="flex-grow sm:mt-24 mb-16 w-full sm:mr-8">
              {children}
            </div>
          )}
        </div>

        {/* Footer */}
        <footer
          className={`flex flex-col md:flex-row flex-wrap justify-evenly items-center text-center sm:justify-end my-4 sm:mr-12 z-20 text-sm font-ocra  sm:ml-72`}
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
    </div>
  );
};

Layout.defaultProps = {
  showEthDiamond: true,
};
export default Layout;
