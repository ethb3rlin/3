import React from "react";
import EthDiamond from "./EthDiamond";
import Sidebar from "./Sidebar";

const Layout = ({ children, showEthDiamond }) => {
  return (
    <div className="flex-1 flex min-h-full font-w95">
      <Sidebar />
      {/* Top Right Fixed items */}
      <div className="fixed top-0 right-0 flex justify-end my-6 mr-12">
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

      {/* Bottom Right fixed items */}
      <div className="fixed bottom-0 right-0 flex justify-end my-6 mr-12 z-20 text-sm">
        <div>department of decentralization</div>
        <a className="ml-8 text-berlin-yellow" href="/impressum">
          impressum
        </a>
        <a className="ml-8 text-berlin-yellow" href="/code-of-conduct">
          code of conduct
        </a>
      </div>

      {/* Main content */}
      <div className="flex flex-col flex-1 ml-64 mr-8">
        {children && (
          <div
            className="mt-64 mb-16 w-full mr-8 p-6 text-gray-50"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.45)" }}
          >
            {children}
          </div>
        )}
      </div>
      <div className={`mx-4 ${showEthDiamond ? "block" : "hidden"}`}>
        <EthDiamond />
      </div>
    </div>
  );
};

Layout.defaultProps = {
  showEthDiamond: true,
};
export default Layout;
