import React, { useState } from "react";
import EthBerlinLogo from "./EthBerlinLogo";
import EthDiamond from "./EthDiamond";
import Seo from "./seo";
import Sidebar from "./Sidebar";

const Layout = ({ children, showEthDiamond }) => {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="flex-1 flex flex-col  min-h-full font-w95">
      <Seo />
      <Sidebar className={`hidden sm:flex z-10`} hideLogo={false} />
      {/* Top Right items Desktop only */}
      <div className={`z-10 hidden sm:flex justify-end my-6 sm:mr-12 font-w95`}>
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
      {/* Non-moving logo navbar for mobile */}
      <div className="sm:hidden text-berlin-yellow my-8 mx-4">
        {/* Header */}
        <div className="flex justify-between">
          <a style={{ textDecoration: "none" }} href="/">
            <EthBerlinLogo
              className=""
              titleClassName="text-4xl"
              subtitleClassName={`text-lg `}
            />
          </a>
          <div className=" flex flex-col flex-grow-0 font-w95  text-berlin-yellow text-2xl leading-3 justify-center">
            <button
              className="p-2 blur-text-smaller"
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
      <nav
        className={`flex ${
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
              href="mailto:henlo@ethberlin.ooo"
              target="_blank"
              rel="noreferrer"
            >
              e-mail us
            </a>
          </div>
        </div>
      </nav>
      {/* Main content */}
      <div className="flex flex-row flex-1 ml-4 mr-4 sm:ml-64 sm:mr-8">
        {children && (
          <div
            className="mt-16 sm:mt-32 mb-16 w-full sm:mr-8 p-6 text-gray-50 self-start"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.45)" }}
          >
            {children}
          </div>
        )}
        {/* Large screen ETH */}
        <div
          className={`mx-4 hidden ${showEthDiamond ? "lg:block" : "hidden"}`}
        >
          <EthDiamond className="sticky top-16 mx-4  flex justify-end" />
        </div>
      </div>
      {/* Mobile ETH */}
      <div className="flex justify-center sm:hidden sm:ml-60">
        <EthDiamond
          className="flex justify-end"
          smallScreen={true}
          isPrimaryColor={true}
        />
      </div>
      {/* Top right items mobile only, on bottom */}
      <div
        className={`sm:hidden z-10 flex justify-evenly my-6 sm:mr-12 font-w95`}
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
        className={`flex flex-wrap justify-evenly items-center text-center sm:justify-end my-4 sm:mr-12 z-20 text-sm font-w95`}
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

Layout.defaultProps = {
  showEthDiamond: true,
};
export default Layout;
