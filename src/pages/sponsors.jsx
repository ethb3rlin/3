import Layout from "../components/Layout";
import React from "react";
import dune from "../assets/sponsors/dune.svg";
import manta from "../assets/sponsors/manta.png";
import walletconnect from "../assets/sponsors/walletconnect.svg";

const SponsorContainer = ({ children, tier, tierName, description }) => {
  return (
    <div
      className="my-8 px-16 py-16"
      style={{ backgroundColor: "rgba(255,255,255, 0.05)" }}
    >
      <div className="flex flex-col">
        <div className="">
          <div className="text-[32pt]">{tier}</div>
          <div className="text-berlin-yellow text-2xl">{tierName}</div>
        </div>
        <div className="mt-4">{description}</div>
      </div>
      <div className="flex justify-center items-center mt-16">{children}</div>
    </div>
  );
};

const Sponsors = () => (
  <Layout showEthDiamond={false}>
    <h1 className="my-4 underline text-secondary">sponsors</h1>
    <div className="mt-8">
      <div className="text-xl decorate-links">
        <p>It's not too late to support us as a sponsor!</p>{" "}
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
        description="The Hungarian Pengő lost value dramitcally by 40 quadrillion percent after the Second World War (1946), suffering the highest rate of hyperinflation ever recorded."
      >
        <a href="example.com">
          <img src={dune} className="h-16 mx-8 grayscale hover:grayscale-0" />
        </a>
        <div className="h-16 border-l border-solid border-berlin-yellow" />
        <a href="example.com">
          <img src={manta} className="h-16 mx-8 grayscale hover:grayscale-0" />
        </a>
        <div className="h-16 border-l border-solid border-berlin-yellow" />
        <a href="example.com">
          <img
            src={walletconnect}
            className="h-16 mx-8 grayscale hover:grayscale-0 py-2"
          />
        </a>
      </SponsorContainer>
      <SponsorContainer tierName="Zimbabwe Dollar" tier="TIER 1">
        TBD
      </SponsorContainer>
      <SponsorContainer tierName="Yugoslav Dinar" tier="TIER 2">
        TBD
      </SponsorContainer>
      <SponsorContainer tierName="Venezuelan Bolívar" tier="TIER 3">
        TBD
      </SponsorContainer>
      <SponsorContainer tierName="Venezuelan Bolívar" tier="Community TIER">
        TBD
      </SponsorContainer>
      <SponsorContainer tierName="Greek Drachma" tier="CineBar TIER">
        TBD
      </SponsorContainer>
    </div>
  </Layout>
);

export default Sponsors;
