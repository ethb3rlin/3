import React from "react";
import Layout from "../components/Layout";
import ETHBerlin from "../components/ETHBerlin";

const Hack = () => {
  return (
    <Layout>
      <div className="textbox text-base decorate-links">
        <h1 className="mb-4 font-ocra underline text-berlin-yellow">
          &lt;&lt;H&lt;ACK
        </h1>
        <div>
          <p>
            Hacking at <ETHBerlin /> will be subject to strict access control. To
            enter the event premises, a valid hacker visa is required.
          </p>
          <p>
            To start the application process for a hacker visa, press{" "}
            <span className="font-ocra text-sm">&lt;&lt;V&lt;</span>.
          </p>
          <div className="text-center">
            <a
            href="https://visas.ethberlin.org/ethberlin/4/"
            target="_blank"
            rel="noreferrer">
              visas.ethberlin.org/ethberlin/4
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Hack;
