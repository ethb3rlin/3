import Layout from "../components/Layout";
import React from "react";
import ReactModal from "react-modal";
import groundFloor from "../images/groundFloor.png";
import thirdFloor from "../images/thirdFloor.png";
import firstFloor from "../images/firstFloor.png";
import secondFloor from "../images/secondFloor.png";
import secondFloorSunday from "../images/secondFloor-sunday.png";
import fifthFloor from "../images/fifthFloor.png";
import "../styles/modal.css";
import "../styles/rooms/groundFloor.css";
import "../styles/rooms/firstFloor.css";
import "../styles/rooms/secondFloor.css";
import "../styles/rooms/fifthFloor.css";
import alexHansen from "../assets/people/workshops/Fuel_Alex-Hansen.jpeg";
import jennyPollack from "../assets/people/workshops/Lens_JennyPollack_Head-of-Product.jpg";
import zannisKalampoukis from "../assets/people/workshops/Lens_Zannis-Kalampoukis_Sr-Software-Eng.jpeg";
import oisinKyne from "../assets/people/workshops/Obol_Oisin-Kyne_CTO.jpeg";
import chrisBattenfield from "../assets/people/workshops/Obol_Chris-Battenfield_Product-Lead.jpg";
import markNadal from "../assets/people/keynotes/MarkNadal_GUN.jpg";
import vladyslavBochok from "../assets/people/workshops/zkSync_VladyslavBochok_vladbochok1.jpg";

const currentDate = new Date();
// const currentDate = new Date("2022-09-17T21:20:00+02:00");

const ProgramItem = ({
  title,
  eventLocations,
  dayStr,
  endDayStr,
  startTime,
  endTime,
}) => {
  // ISO Format: 2022-09-16T00:09:00+02:00
  const startDate = new Date(dayStr + "T" + startTime + ":00+02:00");
  const endDate = endTime
    ? new Date(endDayStr || dayStr + "T" + endTime + ":00+02:00")
    : startDate;

  return (
    <li
      className={`${
        currentDate > endDate
          ? "text-gray-700"
          : currentDate > startDate
          ? "font-bold animate-pulse"
          : ""
      } list-none text-lg`}
    >
      <span className="fake-bold">
        {"> " + startTime + (endTime ? "-" + endTime : "") + " -"}
      </span>{" "}
      {title}{" "}
      {eventLocations.map((loc) => (
        <button
          className={`${
            currentDate > endDate
              ? "text-gray-700"
              : currentDate > startDate
              ? "font-bold animate-pulse"
              : "text-berlin-yellow"
          }`}
          onClick={() => {
            loc.handler();
          }}
        >
          <span className="align-middle">
            <span class="material-symbols-outlined text-sm mr-1 ml-2">
              my_location
            </span>
          </span>
          <span className="underline">{loc.name}</span>
        </button>
      ))}
    </li>
  );
};

const SpeechItem = ({
  title,
  eventLocations,
  dayStr,
  endDayStr,
  startTime,
  endTime,
  description,
  speakerName,
  photo,
  photo2,
}) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const handleCloseModal = (e) => {
    e.stopPropagation();
    setIsModalOpen(false);
  };
  // ISO Format: 2022-09-16T00:09:00+02:00
  const startDate = new Date(dayStr + "T" + startTime + ":00+02:00");
  const endDate = endTime
    ? new Date(endDayStr || dayStr + "T" + endTime + ":00+02:00")
    : startDate;

  return (
    <div>
      <ProgramItem
        title={title}
        eventLocations={eventLocations}
        dayStr={dayStr}
        endDayStr={endDayStr}
        startTime={startTime}
        endTime={endTime}
      />
      <div
        className={`ml-8 -mt-2 mb-4 ${
          currentDate > endDate
            ? "text-gray-700"
            : currentDate > startDate
            ? "font-bold animate-pulse"
            : ""
        }`}
      >
        <span>{speakerName}</span>
        <button
          onClick={() => setIsModalOpen(true)}
          className={`underline ${
            currentDate > endDate ? "text-gray-700" : "text-gray-500"
          } mx-2`}
        >
          More Info
        </button>
      </div>
      <ReactModal
        isOpen={isModalOpen}
        style={{
          overlay: {
            // Default styles
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0.5)",
          },
          content: { zIndex: 40, backgroundColor: "rgba(0, 0, 0, 0.9)" },
        }}
        overlayClassName="flex items-center z-40 px-4 md:px-16 lg:px-32 xl:px-48 transition-all duration-200 ease-in-out"
        className="flex flex-col items-center justify-center"
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        onRequestClose={handleCloseModal}
        closeTimeoutMS={500}
      >
        <div className="p-8 font-w95 text-center">
          <div className="flex flex-row justify-center p-4 flex-wrap">
            {photo && (
              <img src={photo} className="h-32 md:h-64 self-center mx-4 my-4" />
            )}
            {photo2 && (
              <img
                src={photo2}
                className="h-32 md:h-64 self-center mx-4 my-4"
              />
            )}
          </div>
          <div className="text-xl md:text-3xl font-bold my-4">{title}</div>
          <div className="text-lg md:text-2xl">{speakerName}</div>
          <div className="mt-8">{description}</div>
        </div>
      </ReactModal>
    </div>
  );
};

const Program = () => {
  const [isMapModalOpen, setIsMapModalOpen] = React.useState(false);
  const [activeMap, setActiveMap] = React.useState(groundFloor);
  const [activeRoomClass, setActiveRoomClass] = React.useState("lexis");
  const [activeMapName, setActiveMapName] = React.useState(
    "Ground Floor / Floor 0"
  );

  const handleCloseModal = (e) => {
    e.stopPropagation();
    setIsMapModalOpen(false);
  };

  const handleGroundFloor = () => {
    setActiveMap(groundFloor);
    setActiveMapName("Ground Floor / Floor 0");
  };

  const handleFirstFloor = () => {
    setActiveMap(firstFloor);
    setActiveMapName("First Floor / Floor 1");
  };

  const handleSecondFloor = () => {
    setActiveMap(secondFloor);
    setActiveMapName("Second Floor / Floor 2");
  };

  const locations = {
    lexis: {
      name: "Lexis",
      handler: () => {
        handleGroundFloor();
        setActiveRoomClass("lexis");
        setIsMapModalOpen(true);
      },
    },
    creatorsLab: {
      name: "Creator's Lab",
      handler: () => {
        handleGroundFloor();
        setActiveRoomClass("creators-lab");
        setIsMapModalOpen(true);
      },
    },
    yard1: {
      name: "Yard 1",
      handler: () => {
        handleGroundFloor();
        setActiveRoomClass("yard1");
        setIsMapModalOpen(true);
      },
    },
    yard2: {
      name: "Yard 2",
      handler: () => {
        handleGroundFloor();
        setActiveRoomClass("yard2");
        setIsMapModalOpen(true);
      },
    },
    yard3: {
      name: "Yard 3",
      handler: () => {
        handleGroundFloor();
        setActiveRoomClass("yard3");
        setIsMapModalOpen(true);
      },
    },
    mainEnterence: {
      name: "Main Enterence",
      handler: () => {
        handleGroundFloor();
        setActiveRoomClass("main-enterence");
        setIsMapModalOpen(true);
      },
    },
    restaurant: {
      name: "Restaurant",
      handler: () => {
        handleGroundFloor();
        setActiveRoomClass("restaurant");
        setIsMapModalOpen(true);
      },
    },
    communitySpace1: {
      name: "First Floor Community Space",
      handler: () => {
        handleFirstFloor();
        setActiveRoomClass("community-space-first-floor");
        setIsMapModalOpen(true);
      },
    },
    communitySpace2: {
      name: "Second Floor Community Space",
      handler: () => {
        handleSecondFloor();
        setActiveRoomClass("community-space-second-floor");
        setIsMapModalOpen(true);
      },
    },
    aeve: {
      name: "ÆVE",
      handler: () => {
        window.open("https://goo.gl/maps/gRLnWHZapuLgQyQV9", "_blank").focus();
      },
    },
  };

  return (
    <Layout>
      <h1 className="my-4 underline text-secondary">(p)rogram</h1>
      <div className="text-gray-50">
        <h2 className="text-xl font-bold">Friday, September 16</h2>
        <p className="mt-4">
          Welcome to ETHBerlin³! If you have the chance, please claim your badge
          early during the day outside the venue to avoid long queues in the
          evening.
        </p>
        <p className="mt-4">
          <ul>
            <ProgramItem
              dayStr="2022-09-16"
              startTime="10:00"
              title="Volunteer Briefing"
              eventLocations={[locations.lexis]}
            />
            <ProgramItem
              dayStr="2022-09-16"
              startTime="12:00"
              title="Pre-registration"
              eventLocations={[locations.creatorsLab, locations.yard3]}
            />
            <ProgramItem
              dayStr="2022-09-16"
              startTime="16:00"
              endTime="23:00"
              title="Registration and doors open"
              eventLocations={[locations.mainEnterence, locations.yard2]}
            />
            <SpeechItem
              dayStr="2022-09-16"
              startTime="17:00"
              endTime="17:30"
              title="Keynote:"
              speakerName="E.G. Galano, Infura, Co-founder"
              eventLocations={[locations.lexis]}
            />
            <SpeechItem
              dayStr="2022-09-16"
              startTime="17:30"
              endTime="18:00"
              title="Keynote: Humanity 3.0: Beyond Blockchains, Planetary Systems, & Infinite Games"
              speakerName="Mark Nadal, Lead Open Source Engineer at GUN"
              photo={markNadal}
              eventLocations={[locations.lexis]}
            />
            <ProgramItem
              dayStr="2022-09-16"
              startTime="18:00"
              endTime="19:00"
              title="Opening Ceremony"
              eventLocations={[locations.lexis]}
            />
            <ProgramItem
              dayStr="2022-09-16"
              startTime="19:00"
              endTime="20:00"
              title="Team Speed Dating"
              eventLocations={[locations.yard1]}
            />
            <ProgramItem
              dayStr="2022-09-16"
              startTime="19:00"
              endTime="21:00"
              title="Dinner"
              eventLocations={[locations.restaurant]}
            />
            <ProgramItem
              dayStr="2022-09-16"
              startTime="19:00"
              endTime="23:59"
              title="HACKING STARTS"
              eventLocations={[]} // Location = everywhere
            />
            <ProgramItem
              dayStr="2022-09-16"
              startTime="20:00"
              endTime="22:00"
              title="DJ"
              eventLocations={[locations.yard1]}
            />
            <SpeechItem
              dayStr="2022-09-16"
              startTime="20:00"
              endTime="20:45"
              title="Technical Workshop: Abracadabra with Open Data"
              eventLocations={[locations.lexis]}
            />
            <SpeechItem
              dayStr="2022-09-16"
              startTime="20:00"
              endTime="20:45"
              title="Technical Workshop: Manta"
              eventLocations={[locations.creatorsLab]}
            />
            <SpeechItem
              dayStr="2022-09-16"
              startTime="20:45"
              endTime="21:30"
              title="Technical Workshop: How to connect your app with WalletConnect"
              eventLocations={[locations.lexis]}
              description={
                "Improve your dapp by integrating WalletConnect with Web3Modal and allow your users to connect to Metamask, Rainbow, Trust Wallet and many more wallets. Including a short introduction to Ethereum libraries such as web3.js and ethers.js followed by a code walkthrough integrating a dapp with Web3Modal supporting WalletConnect. Finally we will cover best practices and UX improvements to really polish your dapp."
              }
            />
            <SpeechItem
              dayStr="2022-09-16"
              startTime="20:45"
              endTime="21:30"
              title="Technical Workshop: Create a Distributed Validator with your friends and fellow EthBerlin hackers (real time DV creation workshop & ceremony)"
              eventLocations={[locations.creatorsLab]}
              speakerName="Chris Battenfield - Product Lead at Obol, Oisin Kyne - CTO at Obol"
              photo={chrisBattenfield}
              photo2={oisinKyne}
              description="Learn how to create a Distributed Validator Cluster with fellow EthBerlin hackers! Learn about Distributed Validator Technology (DVT) by creating a validator with a group of peers to mitigate the problem of single-point of failure in Ethereum Staking.
Technical requirements: Users should feel comfortable using a terminal & Docker locally on their Macbook or Linux machine. If on Windows, the ability to spin up a linux VM will be needed."
            />
            <SpeechItem
              dayStr="2022-09-16"
              startTime="21:30"
              endTime="22:15"
              title="Technical Workshop: Lets be frens through Lens"
              eventLocations={[locations.lexis]}
              speakerName="Jenny Pollack, Zannis Kalampoukis - Lens"
              photo={jennyPollack}
              photo2={zannisKalampoukis}
              description="Join the Lens team for a hands on session all about how to set up and integrate the Lens API on any app, creating an API key on Devportal, and choosing a Lens starter boiler plate. We'll walk you through how to hook everything together and demonstrate with a few interesting use cases."
            />
            <SpeechItem
              dayStr="2022-09-16"
              startTime="21:30"
              endTime="22:15"
              title="Technical Workshop: Developing a DAO Contract in Sway, a next-Gen Smart Contract Language"
              eventLocations={[locations.creatorsLab]}
              speakerName="Alex Hansen"
              photo={alexHansen}
              description="Learn how to develop a performant and safe DAO contract in Sway, the next-generation smart contract language from Fuel Labs. Feel free to bring a laptop, this will be interactive! Install dependencies using this tool: https://github.com/FuelLabs/fuelup"
            />
            <SpeechItem
              dayStr="2022-09-16"
              startTime="22:15"
              endTime="22:45"
              title="Technical Workshop: Pinata Workshop"
              eventLocations={[locations.lexis]}
              speakerName=""
            />
            <SpeechItem
              dayStr="2022-09-16"
              startTime="22:15"
              endTime="22:45"
              title="Technical Workshop: Building on zkSync 2.0"
              eventLocations={[locations.creatorsLab]}
              photo={vladyslavBochok}
              description="Are you a builder interested in learning more about zkSync 2.0? Join us for this workshop where we will discuss zkSync's user and developer UX, detail what migration from existing protocols generally looks like, what can be implemented on zkSync that can't be on Ethereum, and answer any questions you may have! Dev Docs: https://v2-docs.zksync.io/dev/"
              speakerName="Vladyslav Bochok"
            />
            <SpeechItem
              dayStr="2022-09-16"
              startTime="22:45"
              endTime="23:30"
              title="Technical Workshop: Solidity for Beginners"
              eventLocations={[locations.lexis]}
              speakerName="Patrick McCorry"
            />
            <SpeechItem
              dayStr="2022-09-16"
              startTime="22:45"
              endTime="23:30"
              title="Technical Workshop: Infura Workshop"
              eventLocations={[locations.creatorsLab]}
              speakerName=""
            />
            <ProgramItem
              dayStr="2022-09-16"
              startTime="23:59"
              title="Midnight Snack"
              eventLocations={[
                locations.restaurant,
                locations.communitySpace1,
                locations.communitySpace2,
              ]}
            />
          </ul>
        </p>
        <h2 className="text-xl font-bold">Saturday, September 17</h2>
        <p className="mt-4">Happy hacking, no distractions!</p>
        <p className="mt-4">
          <ProgramItem
            dayStr="2022-09-17"
            startTime="00:00"
            endTime="23:59"
            title="HACKING"
            eventLocations={[]}
          />
          <ProgramItem
            dayStr="2022-09-17"
            startTime="09:00"
            endTime="11:00"
            title="Breakfast"
            eventLocations={[locations.restaurant]}
          />
          <ProgramItem
            dayStr="2022-09-17"
            startTime="11:00"
            endTime="17:00"
            title="Art Exhibition"
            eventLocations={[]}
          />
          <ProgramItem
            dayStr="2022-09-17"
            startTime="13:00"
            endTime="15:00"
            title="Lunch"
            eventLocations={[locations.restaurant]}
          />
          <ProgramItem
            dayStr="2022-09-17"
            startTime="19:00"
            endTime="21:00"
            title="Dinner"
            eventLocations={[locations.restaurant]}
          />
          <ProgramItem
            dayStr="2022-09-17"
            startTime="20:00"
            endTime="22:00"
            title="DJ"
            eventLocations={[locations.yard1]}
          />
          <ProgramItem
            dayStr="2022-09-17"
            startTime="22:00"
            endDayStr="2022-09-18"
            endTime="01:00"
            title="DJ"
            eventLocations={[locations.creatorsLab]}
          />
          <ProgramItem
            dayStr="2022-09-18"
            startTime="00:00"
            endDayStr="2022-09-18"
            endTime="01:00"
            title="Midnight Snack"
            eventLocations={[
              locations.restaurant,
              locations.communitySpace1,
              locations.communitySpace2,
            ]}
          />
        </p>
        <h2 className="text-xl font-bold">Sunday, September 18</h2>
        <p className="mt-4">
          Don't forget to submit your projects by 11:00 am Berlin time!
        </p>
        <p className="mt-4">
          <ul>
            <ProgramItem
              dayStr="2022-09-18"
              startTime="00:00"
              endTime="11:00"
              title="HACKING (Submission deadline at 11:00 am)"
              eventLocations={[]}
            />
            <ProgramItem
              dayStr="2022-09-18"
              startTime="09:00"
              endTime="11:00"
              title="Breakfast"
              eventLocations={[locations.restaurant]}
            />
            <ProgramItem
              dayStr="2022-09-18"
              startTime="13:00"
              endTime="15:00"
              title="Lunch"
              eventLocations={[locations.restaurant]}
            />
            <SpeechItem
              dayStr="2022-09-18"
              startTime="14:00"
              endTime="15:00"
              title="Keynote:"
              eventLocations={[locations.lexis]}
              speakerName="Jarrad Hope - Founder at Status"
            />
            <SpeechItem
              dayStr="2022-09-18"
              startTime="15:00"
              endTime="15:30"
              title="Keynote: The Sovereign Creator"
              eventLocations={[locations.lexis]}
              speakerName="Alec Empire - Atari Teenage Riot"
              description="Alec Empire’s talk about being an artist in web3, how to understand music and hacker culture in cyberspace and why Ethereum will give rise to the Sovereign Creator."
            />
            <SpeechItem
              dayStr="2022-09-18"
              startTime="15:30"
              endTime="16:00"
              title="Keynote:"
              eventLocations={[locations.lexis]}
              speakerName="Jaya and Chelsea Manning - Nym"
            />
            <ProgramItem
              dayStr="2022-09-18"
              startTime="16:00"
              endTime="17:30"
              title="Closing Ceremony"
              eventLocations={[locations.lexis]}
            />
            <ProgramItem
              dayStr="2022-09-18"
              startTime="17:00"
              endTime="18:00"
              title="Drinks & Closing"
              eventLocations={[locations.creatorsLab]}
            />
            <ProgramItem
              dayStr="2022-09-18"
              startTime="18:00"
              title="Doors Close"
              eventLocations={[]}
            />
            <ProgramItem
              dayStr="2022-09-18"
              startTime="19:00"
              endTime="03:00"
              title="Afterparty"
              eventLocations={[locations.aeve]}
            />
          </ul>
        </p>
      </div>

      {/* Venue Map Modal */}
      <ReactModal
        isOpen={isMapModalOpen}
        style={{
          overlay: {
            // Default styles
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0.5)",
          },
          content: { zIndex: 40, backgroundColor: "rgba(0, 0, 0, 0.9)" },
        }}
        overlayClassName="flex items-center z-40 px-4 md:px-16 lg:px-32 xl:px-48 transition-all duration-200 ease-in-out"
        className="flex flex-col items-center justify-center"
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        onRequestClose={handleCloseModal}
        closeTimeoutMS={500}
      >
        <div className=" p-8 ">
          <h2 className="text-xl lg:text-3xl mb-4 text-berlin-yellow text-center font-w95">
            {activeMapName}
          </h2>
          <div className="mb-16 lg:px-32 py-2 ">
            <div className="relative">
              <img src={activeMap} alt={activeMapName} />
              <div className={`${activeRoomClass}`} />
            </div>
          </div>
        </div>
      </ReactModal>
    </Layout>
  );
};
export default Program;
