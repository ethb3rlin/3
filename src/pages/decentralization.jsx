import ETHBerlin from "../components/ETHBerlin";
import Layout from "../components/Layout";
import React from "react";

const decentralization = () => (
  <Layout>
    <div className="textbox">
      <h1 className="my-4 underline text-secondary font-ocra">
        department of &lt;&lt;d&lt;ecentralization
      </h1>
      <div className="text-justify decorate-links">
        <p>
          <ETHBerlin /> is organized by the Department of Decentralization, a
          collective of people from various crypto- and blockchain communities
          in and around Berlin. The group first assembled in 2018 to organize
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
            <ETHBerlin className="font-fake" />{" "}
            <span className="font-bold">
              (2024) the hackathon returns in May 2024:
            </span>{" "}
            <a href="https://ethberlin.org" target="_blank" rel="noreferrer">
              ethberlin.org
            </a>
          </li>
          <li>
            <span className="font-bold">
              Criticial Decentralization Cluster (2023):
            </span>{" "}
            the <span className="font-mono">#37c3</span> assembly in
            collaboration with the Social Distortion Protocol, the RIAT
            Institute, and Swiss Cryptoeconomics:{" "}
            <a
              href="https://decentral.community"
              target="_blank"
              rel="noreferrer"
            >
              decentral.community
            </a>
          </li>
          <li>
            <span className="font-bold">Protocol Berg (2023):</span> the
            decentralized protocol and infrastructure conference:{" "}
            <a href="https://protocol.berlin" target="_blank" rel="noreferrer">
              protocol.berlin
            </a>
          </li>
          <li>
            <span className="font-bold">ETHBerlin³ (2022): </span>hackathon,
            conference, and cultural festival, third edition:{" "}
            <a href="https://ethberlin.org" target="_blank" rel="noreferrer">
              ethberlin.org
            </a>
          </li>
          <li>
            <span className="font-bold">StrikeDAO (2022): </span>The Ethereum
            domain of Bundeskunsthalle was squatted by artist Hito Steyerl and
            the DoD. The StrikeDAO voted on three models of future governance of
            this squatted domain, quadratically:{" "}
            <a href="https://strikedao.com" target="_blank" rel="noreferrer">
              strikedao.com
            </a>
          </li>
          <li>
            <span className="font-bold">
              TwoPointFive (2020) - The Talk Show:{" "}
            </span>
            TwoPointFive was a white-label virtual conference. No shill, no
            sponsors, from the community for the community and truly in it for
            the tech:{" "}
            <a
              href="https://web.archive.org/web/20220426113132/https://twopointfive.online/"
              target="_blank"
              rel="noreferrer"
            >
              twopointfive.online
            </a>
          </li>
          <li>
            <span className="font-bold">
              ETHParis 2 (2020) - The Un-Hackathon:{" "}
            </span>
            ETHParis 2 was hosted by the Department of Decentralization and
            Ethereum France as an unconference-style hackathon in the
            engineering school l'ESGI:{" "}
            <a
              href="https://web.archive.org/web/20200318163540/https://www.hackparis.io/"
              target="_blank"
              rel="noreferrer"
            >
              hackparis.com
            </a>
          </li>
          <li>
            <span className="font-bold">Ecosystem Job-Openings (2019): </span>
            connecting talents with web3-companies during the bear market.
          </li>
          <li>
            <span className="font-bold">ETHBerlin ZWEI (2019): </span>hackathon,
            conference, and cultural festival, second edition:{" "}
            <a
              href="https://ethberlinzwei.com"
              target="_blank"
              rel="noreferrer"
            >
              ethberlinzwei.com
            </a>
          </li>
          <li>
            <span className="font-bold">
              There is no such thing as Blockchain Art (2019):{" "}
            </span>
            a study to explore the art world and the intersection with our
            systems.
          </li>
          <li>
            <span className="font-bold">
              Blockstars Education Program (2019):
            </span>{" "}
            A partnership with{" "}
            <a href="https://b9lab.com/" target="_blank" rel="noreferrer">
              B9lab
            </a>{" "}
            to onboard new hackers to web3.
          </li>
          <li>
            <span className="font-bold">Goerli Testnet (2019): </span>Born at
            ETHBerlin and launched at GoerliCon, the Goerli Testnet was one of
            the most important public-facing Ethereum testnets after the Merge.
          </li>
          <li>
            <span className="font-bold">GoerliCon 0 (2019): </span>The Ethereum
            testnet and infrastructure conference where the Goerli Testnet was
            launched live on stage:{" "}
            <a href="https://goerli.net/" target="_blank" rel="noreferrer">
              goerli.net
            </a>
          </li>
          <li>
            <span className="font-bold">ETHBerlin (2018):</span> Hackathon,
            conference, and the first event that ran almost entirely using
            decentralized applications:{" "}
            <a href="https://ethberlin.com" target="_blank" rel="noreferrer">
              ethberlin.com
            </a>
          </li>
        </ul>

        <p className="mt-8">
          The Department is primarily run from Berlin. We are around a dozen
          members and currently take collective decisions using rough consensus.
        </p>
      </div>
    </div>
  </Layout>
);

export default decentralization;
