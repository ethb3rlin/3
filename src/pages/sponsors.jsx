import Layout from "../components/Layout";
import React from "react";

const SponsorContainer = ({ children, tier, tierName }) => {
  return (
    <div className="my-8">
      <div
        className="flex px-16 h-64 justify-center items-center"
        style={{ backgroundColor: "rgba(255,255,255, 0.05)" }}
      >
        <div className="w-1/3">
          <div className="text-[32pt]">{tier}</div>
          <div className="text-berlin-yellow text-2xl">{tierName}</div>
        </div>
        <div className="w-2/3 flex justify-center items-center">{children}</div>
      </div>
    </div>
  );
};

const Sponsors = () => (
  <Layout showEthDiamond={false}>
    <h1 className="my-4 underline text-berlin-yellow">($)ponsors</h1>
    <div className="mt-8">
      <SponsorContainer tierName="Hungarian Pengő" tier="TIER 0">
        sponsors
      </SponsorContainer>
      <SponsorContainer tierName="Zimbabwe Dollar" tier="TIER 1">
        sponsors
      </SponsorContainer>
      <SponsorContainer tierName="Yugoslav Dinar" tier="TIER 2">
        sponsors
      </SponsorContainer>
      <SponsorContainer tierName="Venezuelan Bolívar" tier="TIER 3">
        sponsors
      </SponsorContainer>
      <SponsorContainer tierName="Venezuelan Bolívar" tier="Community TIER">
        sponsors
      </SponsorContainer>
      <SponsorContainer tierName="Greek Drachma" tier="CineBar TIER">
        sponsors
      </SponsorContainer>
    </div>
  </Layout>
);

export default Sponsors;
