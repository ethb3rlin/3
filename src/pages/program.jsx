import Layout from "../components/Layout";
import React from "react";
import ReactModal from "react-modal";
import groundFloor from "../images/groundFloor.png";
import thirdFloor from "../images/thirdFloor.png";
import firstFloor from "../images/firstFloor.png";
import secondFloor from "../images/secondFloor.png";
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
import jackieZhang from "../assets/people/workshops/Dune_JackieZhang.jpeg";
import pedroGomes from "../assets/people/workshops/WalletConnect_PedroGomes.jpeg";
import steveSimkins from "../assets/people/workshops/Pinata_SteveSimkins.jpg";
import markNadal from "../assets/people/keynotes/MarkNadal_GUN.jpg";
import vladyslavBochok from "../assets/people/workshops/zkSync_VladyslavBochok_vladbochok1.jpg";
import alecEmpire from "../assets/people/keynotes/AlecEmpire_AtariTeenageRiot.jpg";
import chelseaManning from "../assets/people/keynotes/ChelseaManning.jpg";
import jayaKlaraBrekke from "../assets/people/keynotes/JayaBrekke.jpg";
import fredHaga from "../assets/people/keynotes/Fredrik_Haga_Dune.png";
import eGalano from "../assets/people/keynotes/EG_Galano_Infura.jpeg";
import jarradHope from "../assets/people/keynotes/JarradHope_Status.jpg";
import gillordPisas from "../assets/people/mc/gillord.jpg";
import nickAlmond from "../assets/people/keynotes/nickAlmond.jpg";
const currentDate = new Date();
// const currentDate = new Date("2022-09-17T00:20:00+02:00");

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
          ? "font-bold animate-pulse-faster"
          : ""
      } list-none text-lg`}
    >
      <span className="fake-bold">
        <span className="text-berlin-yellow opacity-50">{"> "}</span>
        {startTime + (endTime ? "-" + endTime : "") + " -"}
      </span>{" "}
      {title}{" "}
      {eventLocations.map((loc) => (
        <button
          className={`${
            currentDate > endDate
              ? "text-gray-700"
              : currentDate > startDate
              ? "font-bold animate-pulse-faster"
              : "text-berlin-yellow"
          } text-sm`}
          onClick={() => {
            loc.handler();
          }}
        >
          <span className="align-middle">
            <span class="material-symbols-outlined text-sm mr-0.5 ml-1">
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
        className={`ml-8 -mt-2 mb-4 text-sm ${
          currentDate > endDate
            ? "text-gray-700"
            : currentDate > startDate
            ? "font-bold animate-pulse-faster"
            : ""
        }`}
      >
        <span>
          <span className="text-xs text-berlin-yellow opacity-50 mr-0.5">
            {"> "}
          </span>
          {speakerName}
        </span>
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
          content: {
            zIndex: 40,
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            margin: "auto",
          },
        }}
        overlayClassName="flex items-center z-40 px-4 md:px-16 lg:px-32 xl:px-48 transition-all duration-200 ease-in-out py-8 max-h-screen"
        className="flex flex-col items-center justify-center max-h-full"
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        onRequestClose={handleCloseModal}
        closeTimeoutMS={500}
      >
        <div className="p-8 font-w95 text-center overflow-y-auto max-w-4xl">
          <div className="flex justify-end">
            <button
              className="text-4xl text-berlin-yellow"
              onClick={() => setIsModalOpen(false)}
            >
              X
            </button>
          </div>
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
      name: "Main Enterance",
      handler: () => {
        handleGroundFloor();
        setActiveRoomClass("main-enterence");
        setIsMapModalOpen(true);
      },
    },
    registration: {
      name: "Registration",
      handler: () => {
        handleGroundFloor();
        setActiveRoomClass("registration");
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
    watergate: {
      name: "Watergate",
      handler: () => {
        window
          .open("http://water-gate.de/de/contact/contact.html", "_blank")
          .focus();
      },
    },
  };

  return (
    <Layout>
      <h1 className="my-4 underline text-secondary">(p)rogram</h1>
      <div className="text-gray-50">
        <h2 className="text-3xl font-bold">Friday, September 16</h2>
        <p className="mt-4">
          Welcome to ETHBerlin³! If you have the chance, please claim your badge
          early during the day outside the venue to avoid long queues in the
          evening.
        </p>
        <p className="mt-4">
          <ul>
            <ProgramItem
              dayStr="2022-09-16"
              startTime="12:00"
              endTime="16:00"
              title="Pre-registration"
              eventLocations={[locations.creatorsLab]}
            />
            <ProgramItem
              dayStr="2022-09-16"
              startTime="16:00"
              title="Registration"
              eventLocations={[locations.registration]}
            />
            <ProgramItem
              dayStr="2022-09-16"
              startTime="16:00"
              title="Doors open"
              eventLocations={[locations.mainEnterence]}
            />
            <SpeechItem
              dayStr="2022-09-16"
              startTime="16:30"
              endTime="17:00"
              title="Prequel: Stories from ETHBerlin - How it has shaped our journey"
              speakerName="Fredrik Haga, Dune Analytics, Co-Founder &amp; CEO"
              photo={fredHaga}
              eventLocations={[locations.lexis]}
            />
            <SpeechItem
              dayStr="2022-09-16"
              startTime="17:00"
              endTime="17:30"
              title="Keynote: Points of Centralization and Paths to Decentralization"
              speakerName="E.G. Galano, Infura, Co-founder"
              description="In his talk, EG will be going over various points of centralization that exist in Web3 and the trade offs we make as an ecosystem on the decentralization spectrum."
              photo={eGalano}
              eventLocations={[locations.lexis]}
            />
            <SpeechItem
              dayStr="2022-09-16"
              startTime="17:30"
              endTime="18:00"
              title="Keynote: Humanity 3.0: Beyond Blockchains, Planetary Systems, &amp; Infinite Games"
              speakerName="Mark Nadal, GUN, Lead Open Source Engineer"
              photo={markNadal}
              eventLocations={[locations.lexis]}
            />
            <SpeechItem
              dayStr="2022-09-16"
              startTime="18:00"
              endTime="19:00"
              title="Opening Ceremony"
              speakerName="MC: Gillord Pisas"
              photo={gillordPisas}
              eventLocations={[locations.lexis]}
            />
            <ProgramItem
              dayStr="2022-09-16"
              startTime="19:00"
              endTime="23:59"
              title="HACKING"
              eventLocations={[]} // Location = everywhere
            />
            <ProgramItem
              dayStr="2022-09-16"
              startTime="19:00"
              endTime="20:00"
              title="Hacker Team Finding Session"
              eventLocations={[locations.lexis]}
            />
            <ProgramItem
              dayStr="2022-09-16"
              startTime="19:00"
              endTime="21:00"
              title="Dinner"
              eventLocations={[locations.restaurant]}
            />
            <SpeechItem
              dayStr="2022-09-16"
              startTime="20:00"
              endTime="20:45"
              title="Technical Workshop - Dune: Abracadabra with Open Data"
              eventLocations={[locations.lexis]}
              speakerName="Jackie Zhang, Wizard Relations at Dune Analytics"
              photo={jackieZhang}
              description="🪄 Would you like to wave your wand and speak order into the data chaos as a Dune Wizard?
🤝 Dune is a crypto data analytics platform, where we are on a mission to make crypto data accessible for all.
📊 In this workshop, we will walk through how to do crypto data analysis on Dune in an open-source style!
🧙 Come join us and start your Dune Wizard journey!"
            />
            <SpeechItem
              dayStr="2022-09-16"
              startTime="20:00"
              endTime="20:45"
              title="Technical Workshop - Manta: Bringing programmable privacy to Web3"
              eventLocations={[locations.creatorsLab]}
            />
            <SpeechItem
              dayStr="2022-09-16"
              startTime="20:45"
              endTime="21:30"
              title="Technical Workshop - WalletConnect: How to connect your app with WalletConnect"
              eventLocations={[locations.lexis]}
              speakerName="Pedro Gomes, Co-Founder of WalletConnect"
              photo={pedroGomes}
              description={
                "Improve your dapp by integrating WalletConnect with Web3Modal and allow your users to connect to Metamask, Rainbow, Trust Wallet and many more wallets. Including a short introduction to Ethereum libraries such as web3.js and ethers.js followed by a code walkthrough integrating a dapp with Web3Modal supporting WalletConnect. Finally we will cover best practices and UX improvements to really polish your dapp."
              }
            />
            <SpeechItem
              dayStr="2022-09-16"
              startTime="20:45"
              endTime="21:30"
              title="Technical Workshop - Obol: Create a Distributed Validator with your friends and fellow EthBerlin hackers (real time DV creation workshop & ceremony)"
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
              title="Technical Workshop - Lens: Lets be frens through Lens"
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
              title="Technical Workshop - Fuel: Developing a DAO Contract in Sway, a next-Gen Smart Contract Language"
              eventLocations={[locations.creatorsLab]}
              speakerName="Alex Hansen - Fuel"
              photo={alexHansen}
              description="Learn how to develop a performant and safe DAO contract in Sway, the next-generation smart contract language from Fuel Labs. Feel free to bring a laptop, this will be interactive! Install dependencies using this tool: https://github.com/FuelLabs/fuelup"
            />
            <SpeechItem
              dayStr="2022-09-16"
              startTime="22:15"
              endTime="22:45"
              title="Technical Workshop - Pinata: How To Use Pinata Submarine To Provide Real Utility To Communities"
              eventLocations={[locations.lexis]}
              speakerName="Steve Simkins"
              photo={steveSimkins}
              description="In this workshop, you will learn how to use Submarining and create token gated experiences for your community!"
            />
            <SpeechItem
              dayStr="2022-09-16"
              startTime="22:15"
              endTime="22:45"
              title="Technical Workshop - zkSync: Building on zkSync 2.0"
              eventLocations={[locations.creatorsLab]}
              photo={vladyslavBochok}
              description="Are you a builder interested in learning more about zkSync 2.0? Join us for this workshop where we will discuss zkSync's user and developer UX, detail what migration from existing protocols generally looks like, what can be implemented on zkSync that can't be on Ethereum, and answer any questions you may have! Dev Docs: https://v2-docs.zksync.io/dev/"
              speakerName="Vladyslav Bochok - zkSync"
            />
            <SpeechItem
              dayStr="2022-09-16"
              startTime="22:45"
              endTime="23:30"
              title="Technical Workshop: Solidity for Beginners"
              eventLocations={[locations.lexis]}
              speakerName="Patrick McCorry - Infura"
            />
            <ProgramItem
              dayStr="2022-09-16"
              startTime="23:59"
              endDayStr="2022-09-17"
              endTime="01:00"
              title="Midnight Snack"
              eventLocations={[locations.restaurant]}
            />
          </ul>
        </p>
        <div className="flex justify-center">
          <div className="border-b-[1px] mb-8 mt-4 border-berlin-yellow opacity-40 w-full"></div>
        </div>
        <h2 className="text-3xl font-bold">Saturday, September 17</h2>
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
            startTime="23:59"
            endDayStr="2022-09-18"
            endTime="01:00"
            title="Midnight Snack"
            eventLocations={[locations.restaurant]}
          />
        </p>
        <div className="flex justify-center">
          <div className="border-b-[1px] mb-8 mt-4 border-berlin-yellow opacity-40 w-full"></div>
        </div>
        <h2 className="text-3xl font-bold">Sunday, September 18</h2>
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
              startTime="12:00"
              endTime="15:00"
              title="JUDGING"
              eventLocations={[]}
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
              startTime="13:00"
              endTime="13:30"
              title="Introduction to Quadratic Voting"
              eventLocations={[locations.lexis]}
              speakerName="Nick Almond - Factory DAO"
              photo={nickAlmond}
            />
            <SpeechItem
              dayStr="2022-09-18"
              startTime="13:45"
              endTime="14:15"
              title="Keynote: Cypherpunk Suprajurisdictions against the Nation-State"
              eventLocations={[locations.lexis]}
              speakerName="Jarrad Hope - Founder at Status"
              photo={jarradHope}
            />
            <SpeechItem
              dayStr="2022-09-18"
              startTime="14:30"
              endTime="15:00"
              title="Keynote: The Sovereign Creator"
              eventLocations={[locations.lexis]}
              speakerName="Alec Empire - Atari Teenage Riot"
              photo={alecEmpire}
              description="Alec Empire's talk about being an artist in web3, how to understand music and hacker culture in cyberspace and why Ethereum will give rise to the Sovereign Creator."
            />
            <SpeechItem
              dayStr="2022-09-18"
              startTime="15:15"
              endTime="16:00"
              title="Fireside Chat"
              eventLocations={[locations.lexis]}
              speakerName="Chelsea Manning & Jaya Klara Brekke - Nym"
              photo2={jayaKlaraBrekke}
              photo={chelseaManning}
            />
            <SpeechItem
              dayStr="2022-09-18"
              startTime="16:00"
              endTime="17:30"
              title="Closing Ceremony"
              speakerName="MC: Gillord Pisas"
              photo={gillordPisas}
              eventLocations={[locations.lexis]}
            />
            <ProgramItem
              dayStr="2022-09-18"
              startTime="18:00"
              title="End of Hackathon, see you at the afterparty!"
              eventLocations={[]}
            />
            <ProgramItem
              dayStr="2022-09-18"
              startTime="21:00"
              endTime="06:00"
              title="Afterparty"
              eventLocations={[locations.watergate]}
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
