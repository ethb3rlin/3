import Layout from "../components/Layout";
import React from "react";
import dune from "../assets/sponsors/dune.svg";
import manta from "../assets/sponsors/manta.png";
import walletconnect from "../assets/sponsors/walletconnect.svg";
import factory from "../assets/sponsors/factory.png";
import infura from "../assets/sponsors/infura.png";
import pinata from "../assets/sponsors/pinata.png";
import fuel from "../assets/sponsors/fuel.svg";
import lens from "../assets/sponsors/lens.svg";
import obol from "../assets/sponsors/obol.png";
import zksync from "../assets/sponsors/zksync.svg";
import pengo from "../assets/sponsors/pengo.png";
import dinar from "../assets/sponsors/dinar.png";
import drachma from "../assets/sponsors/drachma.png";
import papiermark from "../assets/sponsors/papiermark.png";
import zimbabwe from "../assets/sponsors/zimbabwe.png";
import bolivar from "../assets/sponsors/bolivar.png";
const SponsorContainer = ({ children, tier, tierName, description, image }) => {
  return (
    <div
      className="my-8 px-8 py-8 md:px-16 md:py-16  overflow-clip"
      style={{ backgroundColor: "rgba(255,255,255, 0.05)" }}
    >
      <div className="flex flex-col ">
        <div className="flex flex-row">
          <div className="flex-1 ">
            <div className="text-[32pt]">{tier}</div>
            <div className="text-berlin-yellow text-2xl">{tierName}</div>
            <div className="mt-4">{description}</div>
          </div>
          <div className="hidden relative md:grid grid-rows-1 grid-cols-1">
            <img
              src={image}
              className=" rotate-12 translate-x-28 lg:translate-x-32 translate-y-12 lg:translate-y-24 h-20 lg:h-48"
            />
            <img
              src={image}
              className=" rotate-6 translate-x-28 lg:translate-x-32 -translate-y-12 lg:-translate-y-24 h-20 lg:h-48"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center mt-8 flex-wrap">
          {children}
        </div>
      </div>
    </div>
  );
};

const Sponsor = () => (
  <Layout showEthDiamond={false}>
    <h1 className="my-4 underline text-secondary">(s)ponsor</h1>
    <div className="mt-8">
      <div className="text-xl decorate-links">
        <p>It's not too late to support us!</p>{" "}
        <p>
          {" "}
          Check out the <a href="/sponsor.pdf">sponsorship deck</a> and reach
          out to{" "}
          <a href="mailto:sponsors@ethberlin.ooo">sponsors@ethberlin.ooo</a> to
          get in touch.
        </p>
      </div>
      <SponsorContainer
        tierName="Hungarian Pengő"
        tier="TIER 0"
        description="The Hungarian Pengő lost value dramatically by 40 quadrillion percent after the Second World War (1946), suffering the highest rate of hyperinflation ever recorded."
        image={pengo}
      >
        <a href="https://dune.com" target="_blank">
          <img
            src={dune}
            className="max-h-12 md:max-h-16 px-8 sm:grayscale hover:grayscale-0 my-4"
          />
        </a>
        <div className="hidden lg:block h-16 border-l border-solid border-berlin-yellow" />
        <a href="https://www.manta.network/" target="_blank">
          <img
            src={manta}
            className="max-h-12 md:max-h-16 px-8 sm:grayscale hover:grayscale-0 my-4"
          />
        </a>
        <div className="hidden lg:block h-16 border-l border-solid border-berlin-yellow" />
        <a href="https://walletconnect.com/" target="_blank">
          <img
            src={walletconnect}
            className="max-h-12 md:max-h-16 px-8 sm:grayscale hover:grayscale-0 my-4 py-2"
          />
        </a>
      </SponsorContainer>
      <SponsorContainer
        tierName="Zimbabwe Dollar"
        tier="TIER 1"
        image={zimbabwe}
        description="The devaluation of the Zimbabwe Dollar was difficult to measure because the government stopped filling the statistics post 2008; the peak was estimated at 80 billion percent month-on-month."
      >
      <a href="https://www.pinata.cloud/" target="_blank">
        <img
          src={pinata}
          className="h-12 md:h-16 mx-8 sm:grayscale hover:grayscale-0 my-4"
        />
      </a>
      <div className="hidden lg:block h-16 border-l border-solid border-berlin-yellow" />
      <a href="https://fuel.network/" target="_blank">
        <img
          src={fuel}
          className="h-12 md:h-16 mx-8 sm:grayscale hover:grayscale-0 my-4"
        />
      </a>
      <div className="hidden lg:block h-16 border-l border-solid border-berlin-yellow" />
      <a href="https://lens.xyz/" target="_blank">
        <img
          src={lens}
          className="h-12 md:h-16 mx-8 sm:grayscale hover:grayscale-0 my-4"
        />
      </a>
      <div className="hidden lg:block h-16 border-l border-solid border-berlin-yellow" />
      <a href="https://obol.tech/" target="_blank">
        <img
          src={obol}
          className="h-12 md:h-16 mx-8 sm:grayscale hover:grayscale-0 my-4"
        />
      </a>
      <div className="hidden lg:block h-16 border-l border-solid border-berlin-yellow" />
      <a href="https://zksync.io/" target="_blank">
        <img
          src={zksync}
          className="h-12 md:h-16 mx-8 sm:grayscale hover:grayscale-0 my-4"
        />
      </a>
      </SponsorContainer>
      <SponsorContainer
        tierName="Greek Drachma"
        tier="Special TIERS"
        image={drachma}
        description="The Greek Drachma hyperinflation started during the Axis occupation and was a result of an excessive reliance by the government on the inflation tax. The inflation reached a peak in 1944 after liberation."
      >
        <a href="https://www.infura.io/" target="_blank">
          <div className="text-center text-lg">Cinebar Sponsor</div>
          <img
            src={infura}
            className="max-h-12 md:max-h-16 px-8 sm:grayscale hover:grayscale-0 my-4"
          />
        </a>
        <div className="hidden lg:block h-16 border-l border-solid border-berlin-yellow" />
        <a href="https://www.factoryberlin.com/" target="_blank">
          <div className="text-center text-lg mt-6 sm:mt-0">Venue Sponsor</div>
          <img
            src={factory}
            className="max-h-12 md:max-h-16 px-8 sm:grayscale hover:grayscale-0 my-4"
          />
        </a>
      </SponsorContainer>
      <SponsorContainer
        tierName="Yugoslav Dinar"
        tier="TIER 2"
        image={dinar}
        description="Yugoslavia re-denominated the Yugoslav Dinar in 1994 at a ratio of 1 billion to 1. Wages became worthless. If paid in cash, workers had to rush out and spend their wages before they lost their value overnight."
      >
        To be announced soon...
      </SponsorContainer>
      <SponsorContainer
        tierName="Venezuelan Bolívar"
        tier="TIER 3"
        image={bolivar}
        description="The value of the hard Venezuelan Bolívar pegged to the US dollar did not stay stable for long. The central bank stuck to the subsidised exchange rate which was so overpriced that people began using parallel rates (ongoing)."
      >
        To be announced soon...
      </SponsorContainer>
      <SponsorContainer
        tierName="German Papiermark"
        tier="Community TIERS"
        image={papiermark}
        description="The German Papiermark was issued during the hyperinflation in 1922-23 when a peg to gold was no longer possible. Due to the fast devaluation, there was no option to mint coins and only the paper mark was issued."
      >
        To be announced soon...
      </SponsorContainer>
    </div>
  </Layout>
);

export default Sponsor;
