import React from "react";
import Layout from "../components/Layout";

const Manifesto = () => {
  return (
    <Layout>
      <div className="text-base decorate-links">
        <h1 className="font-bold mb-4 text-secondary underline">
          ETHBerlin³ - Expect us
        </h1>
        <div>
          <p>Hey friend! Remember us? We know it has been a while.</p>

          <p>
            In fact, the world seems to have changed drastically since we last
            met in Berlin in{" "}
            <a href="https://ethberlin.com/about/">2018 for ETHBerlin</a> and in{" "}
            <a href="https://ethberlinzwei.com/about.html">
              2019 for ETHBerlin ZWEI
            </a>
            .
          </p>

          <p>
            Central-bank-issued fiat currencies devalue faster every year, with
            annual inflation rates of supposedly stable currencies like EUR or
            USD hitting new highs each month. Over the last two years, the
            global crackdown on privacy, freedom of movement, and the right to
            transact by governments worldwide put us on the edge of a new dark
            age of regression.
          </p>

          <quote>
            <p>
              "Without the freedom to transact, you have no other constitutional
              rights."
            </p>
            <p>
              {" "}
              Punk6529:{" "}
              <a href="https://twitter.com/punk6529/status/1494444624630403083">
                On the freedom to transact
              </a>
              .
            </p>
          </quote>

          <p>
            We are seriously concerned about the state of the world, but equally
            so about the state of the blockchain space. While we are absolutely
            over the moon for the ever-growing mainstream adoption of
            cryptocurrencies and blockchain technology, certain developments
            leave a bitter aftertaste, and we fear that the most essential
            values are about to get lost along the way. We take this as a call
            to action and want to do our part
          </p>
          <p>Please welcome ETHBerlin's official third edition:</p>

          <div className="my-8 text-center">
            <span className=" bg-white text-black font-bold text-xl">
              ETHBerlin³ - ETHBerlin, to the power of 3.
            </span>
          </div>

          <p>
            With ETHBerlin³, we aim to go back to the roots and remind our
            community what it's all about: We want to invite you to Berlin to
            hack the system, now more than ever. We want to emphasize the
            original cypherpunk vision and build on it. In addition, we aim to
            teach and educate a new generation of hackers about what you can
            achieve with cryptography, blockchain, and peer-to-peer network
            technologies.
          </p>

          <quote>
            <p>
              "We must defend our own privacy if we expect to have any. We must
              come together and create systems which allow anonymous
              transactions to take place. People have been defending their own
              privacy for centuries with whispers, darkness, envelopes, closed
              doors, secret handshakes, and couriers. The technologies of the
              past did not allow for strong privacy, but electronic technologies
              do."
            </p>
            <p>
              {" "}
              Eric Hughes:{" "}
              <a href="https://nakamotoinstitute.org/cypherpunk-manifesto/">
                A Cypherpunk's Manifesto
              </a>
              .
            </p>
          </quote>

          <p>
            Our big question for you is: How do we get from yield farming fruit
            tokens, VC chains, making the rich richer and a never-ending race to
            the top to an open and an inclusive system that makes a difference
            in people's lives? Which anarchist and privacy-preserving tools can
            we build that enable independence from governments and mega corps?
          </p>

          <p>
            We will encourage hackathon tracks, workshops, and supporters at
            ETHBerlin³ to focus on the following key aspects:
          </p>

          <ul className="ml-8 my-4">
            <li>Private: there is no need for your name, data, or ID.</li>
            <li>Usable: it has to be accessible and user-friendly.</li>
            <li>Direct: it does not ask for permission.</li>
            <li>
              Subversive: it transforms established orders and structures of
              power.
            </li>
            <li>
              Social: it empowers people and makes a difference in somebody's
              life.
            </li>
            <li>Clandestine: it will not comply.</li>
            <li>Independent: it will not rely on governments or corporates.</li>
            <li>Impactful: it intends to make a difference.</li>
            <li>Secure: it does not put anyone at risk.</li>
            <li>
              Libre: it will be free both as in free speech and free beer.
            </li>
          </ul>

          <p>
            Berlin has a dark history of financial scandals, hyperinflation, and
            bank runs. Since inflation is again about to eat the world, we'd
            like to use this as a reminder that the system we live in is not
            infallible, and it's up to us to progress towards change. The fiat
            currencies we use every day are hardly backed by anything at this
            point (money printer goes brrr); we just choose to believe in one
            thing over another. We can choose to build the (financial) future we
            want to live in; nothing really hinders us!
          </p>
          <p>
            In the previous years, ETHBerlin always tried to make a difference
            by pioneering the use of decentralized technologies and nurturing
            the ecosystem. Significant projects emerged from our hackathons,
            such as <a href="https://www.pinata.cloud/">IPFS Pinata</a> or the{" "}
            <a href="https://goerli.net/">Goerli Testnet</a>. And legend has it
            that even the Dune Analytics founders{" "}
            <a href="https://dune.com/blog/money-aint-a-thang">
              started their career
            </a>{" "}
            at ETHBerlin.
          </p>
          <p>Are you committed to making a difference? Expect us.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Manifesto;
