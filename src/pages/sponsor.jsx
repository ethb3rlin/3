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
import obol from "../assets/sponsors/obol.svg";
import zksync from "../assets/sponsors/zksync.svg";
import swype from "../assets/sponsors/swype.png";
import nomad from "../assets/sponsors/nomad.png";
import neonlabs from "../assets/sponsors/neonlabs.png";
import polygon from "../assets/sponsors/polygon.svg";
import optimism from "../assets/sponsors/optimism.png";
import galaxis from "../assets/sponsors/galaxis.png";
import poap from "../assets/sponsors/poap.png";
import sismo from "../assets/sponsors/sismo.png";
import nftfi from "../assets/sponsors/nftfi.png";
import celestia from "../assets/sponsors/celestia.png";
import ethereum from "../assets/sponsors/ethereum.png";
import entropy from "../assets/sponsors/entropy.png";
import livepeer from "../assets/sponsors/livepeer.png";
import delta from "../assets/sponsors/delta.png";
import missinglink from "../assets/sponsors/missinglink.png";
import gitpoap from "../assets/sponsors/gitpoap.png";
import chainsafe from "../assets/sponsors/chainsafe.png";
import orchid from "../assets/sponsors/orchid.png";
import altlayer from "../assets/sponsors/altlayer.png";
import abacus from "../assets/sponsors/hyperlane.png";
import jpg from "../assets/sponsors/jpg.png";
import dappnode from "../assets/sponsors/dappnode.png";
import molecule from "../assets/sponsors/molecule.png";
import squid from "../assets/sponsors/squid.png";
import attestant from "../assets/sponsors/attestant.png";
import goerli from "../assets/sponsors/goerli.png";
import fault from "../assets/sponsors/fault.png";
import just from "../assets/sponsors/just.png";
import ethindia from "../assets/sponsors/ethindia.png";
import devfolio from "../assets/sponsors/devfolio.png";
import nftberlin from "../assets/sponsors/nftberlin.png";
import onekx from "../assets/sponsors/1kx.png";
import pengo from "../assets/sponsors/pengo.jpeg";
import dinar from "../assets/sponsors/dinar.jpeg";
import drachma from "../assets/sponsors/drachma.jpeg";
import papiermark from "../assets/sponsors/papiermark.jpeg";
import zimbabwe from "../assets/sponsors/zimbabwe.jpeg";
import bolivar from "../assets/sponsors/bolivar.jpeg";
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
    <h1 className="my-4 underline text-secondary">(s)ponsors</h1>
    <div className="mt-8">
      <div className="text-xl decorate-links">
        <p>Please, give a warm welcome to all of our 2022 sponsors!</p>
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
            className="h-12 md:h-20 px-8 sm:grayscale hover:grayscale-0 my-4"
          />
        </a>

        <a href="https://www.manta.network/" target="_blank">
          <img
            src={manta}
            className="h-12 md:h-16 px-8 sm:grayscale hover:grayscale-0 my-4"
          />
        </a>

        <a href="https://walletconnect.com/" target="_blank">
          <img
            src={walletconnect}
            className="h-12 md:h-16 px-8 sm:grayscale hover:grayscale-0 my-4 py-2"
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
            className="h-16 md:h-20 sm:mx-8 sm:grayscale hover:grayscale-0 my-4"
          />
        </a>
        <a href="https://fuel.network/" target="_blank">
          <img
            src={fuel}
            className="h-12 md:h-16 sm:mx-8 sm:grayscale hover:grayscale-0 my-4"
          />
        </a>
        <a href="https://lens.xyz/" target="_blank">
          <img
            src={lens}
            className="h-16 md:h-20 sm:mx-8 sm:grayscale hover:grayscale-0 my-4"
          />
        </a>
        <a href="https://obol.tech/" target="_blank">
          <img
            src={obol}
            className="h-8 md:h-12 sm:mx-8 sm:grayscale hover:grayscale-0 my-4"
          />
        </a>
        <a href="https://zksync.io/" target="_blank">
          <img
            src={zksync}
            className="h-9 md:h-11 sm:mx-8 sm:grayscale hover:grayscale-0 my-4"
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
        <a href="https://swype.com/" target="_blank">
          <img
            src={swype}
            className="h-12 md:h-14 sm:mx-8 sm:grayscale hover:grayscale-0 my-4"
          />
        </a>
        <a href="https://optimism.io/" target="_blank">
          <img
            src={optimism}
            className="h-24 md:h-32 sm:mx-8 sm:grayscale hover:grayscale-0 my-4"
          />
        </a>
        <a href="https://galaxis.xyz/" target="_blank">
          <img
            src={galaxis}
            className="h-14 md:h-16 sm:mx-8 sm:grayscale hover:grayscale-0 my-4"
          />
        </a>
        <a href="https://sismo.io/" target="_blank">
          <img
            src={sismo}
            className="h-12 md:h-16 sm:mx-8 sm:grayscale hover:grayscale-0 my-4"
          />
        </a>
        <a href="https://polygon.technology/" target="_blank">
          <img
            src={polygon}
            className="h-16 md:h-20 sm:mx-8 sm:grayscale hover:grayscale-0 my-4"
          />
        </a>
        <a href="https://nomad.xyz/" target="_blank">
          <img
            src={nomad}
            className="h-16 md:h-20 sm:mx-8 sm:grayscale hover:grayscale-0 my-4"
          />
        </a>
        <a href="https://neonlabs.org/" target="_blank">
          <img
            src={neonlabs}
            className="h-16 md:h-20 sm:mx-8 sm:grayscale hover:grayscale-0 my-4"
          />
        </a>
      </SponsorContainer>
      <SponsorContainer
        tierName="Venezuelan Bolívar"
        tier="TIER 3"
        image={bolivar}
        description="The value of the hard Venezuelan Bolívar pegged to the US dollar did not stay stable for long. The central bank stuck to the subsidised exchange rate which was so overpriced that people began using parallel rates (ongoing)."
      >
        <a href="https://nftfi.com/" target="_blank" rel="noreferrer">
          <img
            src={nftfi}
            className="h-20 md:h-24 sm:mx-8 sm:grayscale hover:grayscale-0 my-4 "
          />
        </a>
        <a href="https://celestia.org/" target="_blank" rel="noreferrer">
          <img
            src={celestia}
            className="h-20 md:h-24 sm:mx-8 sm:bright-gray hover:bright-non-gray my-4 "
          />
        </a>
        <a href="https://ethereum.org/" target="_blank" rel="noreferrer">
          <img
            src={ethereum}
            className="h-14 md:h-20 sm:mx-8 sm:grayscale hover:grayscale-0 my-4 "
          />
        </a>
        <a href="https://missing-link.io/" target="_blank" rel="noreferrer">
          <img
            src={missinglink}
            className="h-16 md:h-20 sm:mx-8 sm:grayscale hover:grayscale-0 my-4 "
          />
        </a>
        <a href="https://gitpoap.io/" target="_blank" rel="noreferrer">
          <img
            src={gitpoap}
            className="h-20 md:h-24 sm:mx-8 sm:bright-gray hover:bright-non-gray my-4"
          />
        </a>
        <a href="https://chainsafe.io/" target="_blank" rel="noreferrer">
          <img
            src={chainsafe}
            className="h-14 md:h-20 sm:mx-8 sm:grayscale hover:grayscale-0 my-4 "
          />
        </a>
        <a href="https://orchid.com/" target="_blank" rel="noreferrer">
          <img
            src={orchid}
            className="h-10 md:h-14 sm:mx-8 sm:bright-gray hover:bright-non-gray my-4 "
          />
        </a>
        <a href="https://altresear.ch/" target="_blank" rel="noreferrer">
          <img
            src={altlayer}
            className="h-10 md:h-12 sm:mx-8 sm:bright-gray hover:bright-non-gray my-4 "
          />
        </a>
        <a href="https://poap.xyz/" target="_blank" rel="noreferrer">
          <img
            src={poap}
            className="h-24 md:h-28 sm:mx-8 sm:grayscale hover:grayscale-0 my-4 "
          />
        </a>
        <a href="https://entropy.xyz/" target="_blank" rel="noreferrer">
          <img
            src={entropy}
            className="h-12 md:h-16 sm:mx-8 sm:grayscale hover:grayscale-0 my-4 "
          />
        </a>
        <a href="https://livepeer.org/" target="_blank" rel="noreferrer">
          <img
            src={livepeer}
            className="h-10 md:h-12 sm:mx-8 sm:grayscale hover:grayscale-0 my-4 "
          />
        </a>
        <a href="https://deltafund.io/" target="_blank" rel="noreferrer">
          <img
            src={delta}
            className="h-24 md:h-32 sm:mx-8 sm:grayscale hover:grayscale-0 my-4 "
          />
        </a>
        <a href="https://www.useabacus.network/" target="_blank" rel="noreferrer">
          <img
            src={abacus}
            className="h-24 md:h-32 sm:mx-8 sm:grayscale hover:grayscale-0 my-4 "
          />
        </a>
      </SponsorContainer>
      <SponsorContainer
        tierName="German Papiermark"
        tier="Community and Frens"
        image={papiermark}
        description="The German Papiermark was issued during the hyperinflation in 1922-23 when a peg to gold was no longer possible. Due to the fast devaluation, there was no option to mint coins and only the paper mark was issued."
      >
        <a href="https://jpg.space/" target="_blank" rel="noreferrer">
          <img
            src={jpg}
            className="h-10 md:h-12 sm:mx-8 sm:grayscale hover:grayscale-0 my-4"
          />
        </a>
        <a href="https://dappnode.io/" target="_blank" rel="noreferrer">
          <img
            src={dappnode}
            className="h-16 md:h-20 sm:mx-8 sm:bright-gray hover:bright-non-gray my-4"
          />
        </a>
        <a href="https://molecule.to/" target="_blank" rel="noreferrer">
          <img
            src={molecule}
            className="h-14 md:h-16 sm:mx-8 sm:grayscale hover:grayscale-0 my-4"
          />
        </a>
        <a href="https://0xsquid.com/" target="_blank" rel="noreferrer">
          <img
            src={squid}
            className="h-16 md:h-16 sm:mx-8 sm:grayscale hover:grayscale-0 my-4"
          />
        </a>
        <a href="https://attestant.io/" target="_blank" rel="noreferrer">
          <img
            src={attestant}
            className="h-12 md:h-14 sm:mx-8 sm:grayscale hover:grayscale-0 my-4"
          />
        </a>
        <a href="https://goerli.net/" target="_blank" rel="noreferrer">
          <img
            src={goerli}
            className="h-24 md:h-28 sm:mx-8 sm:grayscale hover:grayscale-0 my-4"
          />
        </a>
        <a href="https://fault.dev/" target="_blank" rel="noreferrer">
          <img
            src={fault}
            className="h-24 md:h-28 sm:mx-8 sm:grayscale hover:grayscale-0 my-4"
          />
        </a>
        <a href="https://justopensource.io/" target="_blank" rel="noreferrer">
          <img
            src={just}
            className="h-28 md:h-32 sm:mx-8 sm:grayscale hover:grayscale-0 my-4"
          />
        </a>
        <a href="https://ethindia.co/" target="_blank" rel="noreferrer">
          <img
            src={ethindia}
            className="h-10 md:h-12 sm:mx-8 sm:grayscale hover:grayscale-0 my-4"
          />
        </a>
        <a href="https://devfolio.co/" target="_blank" rel="noreferrer">
          <img
            src={devfolio}
            className="h-10 md:h-12 sm:mx-8 sm:grayscale hover:grayscale-0 my-4"
          />
        </a>
        <a href="https://nftberlin.org/" target="_blank" rel="noreferrer">
          <img
            src={nftberlin}
            className="h-10 md:h-12 sm:mx-8 sm:grayscale hover:grayscale-0 my-4"
          />
        </a>
        <a href="http://1kx.capital/" target="_blank" rel="noreferrer">
          <img
            src={onekx}
            className="h-10 md:h-12 sm:mx-8 sm:grayscale hover:grayscale-0 my-4"
          />
        </a>
      </SponsorContainer>
    </div>
  </Layout>
);

export default Sponsor;
