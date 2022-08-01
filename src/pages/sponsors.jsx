import Layout from "../components/Layout";
import React from "react";
import dune from "../assets/sponsors/dune.svg";
import manta from "../assets/sponsors/manta.png";
import walletconnect from "../assets/sponsors/walletconnect.svg";
import pengo from "../assets/sponsors/pengo.png";
import dinar from "../assets/sponsors/dinar.png";
import drachma from "../assets/sponsors/drachma.png";
import papiermark from "../assets/sponsors/papiermark.png";
import zimbabwe from "../assets/sponsors/zimbabwe.png";
import bolivar from "../assets/sponsors/bolivar.png";
const SponsorContainer = ({ children, tier, tierName, description, image }) => {
  return (
    <div
      className="my-8 px-16 py-16  overflow-clip"
      style={{ backgroundColor: "rgba(255,255,255, 0.05)" }}
    >
      <div className="flex flex-col ">
        <div className="flex flex-row">
          <div className="flex-1 ">
            <div className="text-[32pt]">{tier}</div>
            <div className="text-berlin-yellow text-2xl">{tierName}</div>
            <div className="mt-4">{description}</div>
          </div>
          <div className="">
            <img
              src={image}
              className="rotate-12 translate-x-32 translate-y-8 h-48"
            />
          </div>
        </div>
        <div className="flex justify-center items-center mt-24">{children}</div>
      </div>
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
        image={pengo}
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
      <SponsorContainer
        tierName="Zimbabwe Dollar"
        tier="TIER 1"
        image={zimbabwe}
      >
        TBD
      </SponsorContainer>
      <SponsorContainer tierName="Yugoslav Dinar" tier="TIER 2" image={dinar}>
        TBD
      </SponsorContainer>
      <SponsorContainer
        tierName="Venezuelan Bolívar"
        tier="TIER 3"
        image={bolivar}
      >
        TBD
      </SponsorContainer>
      <SponsorContainer
        tierName="German Papiermark"
        tier="Community TIER"
        image={papiermark}
      >
        TBD
      </SponsorContainer>
      <SponsorContainer
        tierName="Greek Drachma"
        tier="CineBar TIER"
        image={drachma}
      >
        TBD
      </SponsorContainer>
    </div>
  </Layout>
);

export default Sponsors;
