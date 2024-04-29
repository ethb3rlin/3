import React, { useState } from "react";
import Seo from "./seo";
import Sidebar from "./Sidebar";
import wolpy from "../assets/wolpy_transparent_red.png";

const Layout = ({ children, showEthDiamond, className, hidden }) => {
  return (
    <div
      className={`${
        className ? className : ""
      } flex flex-col min-h-screen min-w-screen`}
    >
      <div className="flex-1 flex flex-col min-h-full font-bundessans text-black max-w-[100rem] min-w-full m-auto">
        <Sidebar />
        <Seo />
        {/* Top Right items Desktop only */}
        <div
          className={`z-10 hidden md:flex justify-end my-9 sm:mr-12 font-ocra text-black`}
        >
          <div>May 24-26, 2024</div>
          <div className="sm:ml-8">
            <a href="https://cic.com/berlin/" target="_blank">
              CIC Innovation Campus, Berlin
            </a>
          </div>
        </div>

        <div></div>

        <div className="hidden md:block fixed -bottom-10 -right-10 -z-50">
          <img
            src={wolpy}
            alt="Wolpy logo"
            className="w-56 h-56 opacity-25 xl:opacity-50 -rotate-12"
          />
        </div>
        {/* Main content */}

        <div className="flex flex-row flex-1 ml-4 mr-4 sm:mr-8  sm:ml-72">
          {children && (
            <div className="flex-grow sm:mt-16 mb-16 w-full sm:mr-8">
              {children}
            </div>
          )}
        </div>

        {/* Footer */}
        <footer
          className={`flex flex-col md:flex-row flex-wrap justify-evenly items-center text-center sm:justify-end my-4 z-20 sm:mr-6 text-xs font-ocra sm:ml-72 leading-3`}
        >
          <a className="mx-4 my-2 sm:ml-4 text-black" href="/code-of-conduct">
            CODE &lt;&lt;<span className="text-berlin-red">O</span>&lt;F CONDUCT
          </a>
          <a className="mx-4 my-2 sm:ml-4 text-black" href="/privacy-policy">
            PRIVACY &lt;&lt;<span className="text-berlin-red">P</span>&lt;OLICY
          </a>
          {/* <a className="mx-4 my-2 sm:ml-4 text-black" href="/decentralization">
            department of &lt;&lt;<span className="text-berlin-red">d</span>
            &lt;ecentralization
          </a>
          <a
            className="mx-4 my-2 sm:ml-4 text-black"
            href="https://blog.dod.ngo/"
            target="_blank"
            rel="noreferrer"
          >
            &lt;&lt;<span className="text-berlin-red">b</span>&lt;log[&#94;]
          </a> */}
          <a className="mx-4 my-2 sm:ml-4 text-black" href="/contact">
            CONTACT &amp; &lt;&lt;<span className="text-berlin-red">I</span>
            &lt;MPRESSUM
          </a>
          <a
            className="mx-4 my-2 sm:ml-4 text-black"
            href="https://github.com/ethb3rlin/4"
            target="_blank"
            rel="noreferrer"
          >
            SOURCE CODE (&#94;)
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
