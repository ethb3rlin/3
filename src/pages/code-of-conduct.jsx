import Layout from "../components/Layout";
import React from "react";

const About = () => (
  <Layout>
    <h1 className="my-4 underline text-berlin-yellow">code of conduct</h1>
    <div className="text-gray-50 text-justify decorate-links">
      <p>
        ETHBerlin³ is organized by the Department of Decentralization, a lose
        collective of people from the various crypto- and blockchain communities
        in and around Berlin working on open source and decenentralization. The
        groub first assembled in 2018 to organize the first ETHBerlin and has
        been active since. We don't have any leaders and everyone is free to
        join of leave anytime.
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
          <a href="https://ethberlin.com/about/">ethberlin.com/about</a>
        </li>
        <li>
          <span className="fake-bold">GörliCon (2019): </span>The Ethereum
          testnet and infrastructure conference where the Goerli Testnet was
          launched live on stage: 
          <a href="https://goerli.net/">goerli.net</a>
        </li>
        <li>
          <span className="fake-bold">Goerli Testnet (2019): </span>Born at
          ETHBerlin and launched at GörliCon, the Goerli Testnet is now one of
          the most important public-facing Ethereum testnets after the merge.
        </li>
        <li>
          <span className="fake-bold">
            Blockstars Education Program (2019):
          </span>{" "}
          A partnership with B9labs to onboard new hackers to web3.
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
          <a href="https://ethberlinzwei.com/about.html/">
            ethberlinzwei.com/about.html
          </a>
        </li>
        <li>
          <span className="fake-bold">Ecosystem Job-Openings (2019): </span>
          connecting talents with web3-companies during the bear market.
        </li>
        <li>
          <span className="fake-bold">TwoPointFive (2020): </span>the talk show.
          TwoPointFive was a white-label virtual conference. No shill, no
          sponsors, from the community for the community and truly in it for the
          tech: <a href="https://twopointfive.online/">twopointfive.online</a>
        </li>
        <li>
          <span className="fake-bold">Bundeskunsthalle (2022): </span>who owns
          it? Blockchain vs. the state: an evening about the future of the
          public sphere, culture, and its institutions.
        </li>
      </ul>

      <p>
        Currently, the Department is primarily run from Berlin but we encourage
        everyone to connect and run their local chapter. We are around a dozen
        members and work by making decisions on proposals that collective
        members build, and decide on them by rough consensus.
      </p>
    </div>
  </Layout>
);

export default About;
