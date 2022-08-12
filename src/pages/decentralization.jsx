import Layout from "../components/Layout";
import React from "react";

const decentralization = () => (
  <Layout>
    <h1 className="my-4 underline text-secondary">
      department of (d)ecentralization
    </h1>
    <div className="text-gray-50 text-justify decorate-links">
      <p>
        ETHBerlin³ is organized by the Department of Decentralization, a
        collective of people from various crypto- and blockchain communities in
        and around Berlin. The group first assembled in 2018 to organize
        ETHBerlin and has been active since.
      </p>
      <p>
        Our aim is to be an agnostic vehicle to drive adoption, educate
        newcomers, and raise awareness on the challenges and benefits of
        decentralization and open source software.
      </p>
      <p>Our projects to date:</p>
      <ul>
        <li>
          <span className="fake-bold">ETHBerlin (2018):</span> Hackathon,
          conference and the first event ran almost entirely using decentralized
          applications:{" "}
          <a href="https://ethberlin.com/about" target="_blank">
            ethberlin.com/about
          </a>
        </li>
        <li>
          <span className="fake-bold">G&ouml;rliCon (2019): </span>The Ethereum
          testnet and infrastructure conference where the Goerli Testnet was
          launched live on stage: <a href="https://goerli.net/" target="_blank">
            goerli.net
          </a>
        </li>
        <li>
          <span className="fake-bold">Goerli Testnet (2019): </span>Born at
          ETHBerlin and launched at G&ouml;rliCon, the Goerli Testnet is now one of
          the most important public-facing Ethereum testnets after the Merge.
        </li>
        <li>
          <span className="fake-bold">
            Blockstars Education Program (2019):
          </span>{" "}
          A partnership with <a href="https://b9lab.com/" target="_blank">B9lab</a>
          {" "}to onboard new hackers to web3.
        </li>
        <li>
          <span className="fake-bold">
            There is no such thing as Blockchain Art (2019):{" "}
          </span>
          a study to explore the art world and the intersection with our
          systems.
        </li>
        <li>
          <span className="fake-bold">ETHBerlin ZWEI (2019): </span>hackathon,
          conference and cultural festival, second edition:{" "}
          <a href="https://ethberlinzwei.com/about.html" target="_blank">
            ethberlinzwei.com/about.html
          </a>
        </li>
        <li>
          <span className="fake-bold">Ecosystem Job-Openings (2019): </span>
          connecting talents with web3-companies during the bear market.
        </li>
        <li>
          <span className="fake-bold">
            TwoPointFive (2020) - The Talk Show:{" "}
          </span>
          TwoPointFive was a white-label virtual conference. No shill, no
          sponsors, from the community for the community and truly in it for the
          tech: <a href="https://twopointfive.online" target="_blank">twopointfive.online</a>
        </li>
        <li>
          <span className="fake-bold">StrikeDAO (2022): </span>The Ethereum
          domain of Bundeskunsthalle was squatted by artist Hito Steyerl and the
          DoD. The StrikeDAO voted on three models of future governance of this
          squatted domain, quadratically:{" "}
          <a href="https://strikedao.com" target="_blank">strikedao.com</a>
        </li>
      </ul>

      <p className="mt-8">
        Currently, the Department is primarily run from Berlin. We are around a
        dozen members and currently take collective decisions using rough
        consensus.
      </p>
    </div>
  </Layout>
);

export default decentralization;
