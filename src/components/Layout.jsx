import React from "react";
import EthDiamond from "./EthDiamond";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex-1 flex min-h-full font-w95">
      <Sidebar />
      <div className="flex flex-col flex-1 ml-64 text-sm">
        {children && (
          <div className="mt-64 bg-black w-full mr-8 p-4">{children}</div>
        )}
      </div>
      <div className="mr-4">
        <EthDiamond />
      </div>
    </div>
  );
};

export default Layout;
