import React from "react";
import EthDiamond from "./EthDiamond";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex-1 flex min-h-full font-w95">
      <Sidebar />
      <div className="fixed top-0 right-0 flex justify-end my-6 mr-12">
        <div>September 16-18, 2022</div>
        <div className="ml-8">Factory Görlitzer Park</div>
      </div>
      <div className="fixed bottom-0 right-0 flex justify-end my-6 mr-12 z-20 text-sm">
        <div>department of decentralization</div>
        <a className="ml-8 text-berlin-yellow" href="/impressum">
          impressum
        </a>
        <a className="ml-8 text-berlin-yellow" href="/code-of-conduct">
          code of conduct
        </a>
      </div>
      <div className="flex flex-col flex-1 ml-64">
        {children && (
          <div
            className="mt-64 w-full mr-8 p-6 text-gray-50"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.45)" }}
          >
            {children}
          </div>
        )}
      </div>
      <div className="mx-4">
        <EthDiamond />
      </div>
    </div>
  );
};

export default Layout;
