import Layout from "../components/Layout";
import React from "react";
import ReactModal from "react-modal";
import "../styles/modal.css";
import "../styles/rooms/groundFloor.css";
import "../styles/rooms/firstFloor.css";
import "../styles/rooms/secondFloor.css";
import "../styles/rooms/fifthFloor.css";
import groundFloor from "../images/groundFloor.png";
import firstFloor from "../images/firstFloor.png";
import secondFloor from "../images/secondFloor.png";
import thirdFloor from "../images/thirdFloor.png";
import fourthFloor from "../images/fourthFloor.png";
import fifthFloor from "../images/fifthFloor.png";
import ETHBerlin from "../components/ETHBerlin";
import VenueMapModal from "../components/VenueMapModal";
import austin from "../assets/people/workshops/austin.jpeg";
import sergei from "../assets/people/workshops/sergei.jpeg";
import tino from "../assets/people/workshops/tino.jpeg";
import odysseas from "../assets/people/workshops/odysseas.jpeg";
import greg from "../assets/people/workshops/greg.jpeg";
import pedro from "../assets/people/workshops/pedro.jpeg";
import richard from "../assets/people/workshops/richard.jpeg";
import ivan from "../assets/people/workshops/ivan.jpeg";
import ameen from "../assets/people/speakers/ameen.jpeg";
import edmundedgar from "../assets/people/speakers/edmundedgar.jpeg";
import fat from "../assets/people/speakers/fat.jpeg";
import josh from "../assets/people/speakers/josh.jpeg";
import kat from "../assets/people/speakers/kat.jpeg";
import matthew from "../assets/people/speakers/matthew.jpeg";
import mikhail from "../assets/people/speakers/mikhail.jpeg";
import nick from "../assets/people/speakers/nick.jpeg";
import peter from "../assets/people/speakers/peter.jpeg";
import puja from "../assets/people/speakers/puja.jpeg";

import { FaTwitter } from "react-icons/fa";
import { ImSoundcloud } from "react-icons/im";

const currentDate = new Date();
// const currentDate = new Date("2024-05-25T00:20:00+02:00");

const ProgramItem = ({
  title,
  eventLocations,
  dayStr,
  endDayStr,
  startTime,
  endTime,
  className,
}) => {
  // ISO Format: 2024-05-24T00:09:00+02:00
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
          : className
      } list-none text-lg`}
    >
      <span className="fake-bold">
        <span className="text-berlin-red opacity-50">{"> "}</span>
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
              : "text-berlin-red"
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
  className,
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
  photo3,
}) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const handleCloseModal = (e) => {
    e.stopPropagation();
    setIsModalOpen(false);
  };
  // ISO Format: 2024-05-24T00:09:00+02:00
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
        className={className}
      />
      <div
        className={`ml-8 -mt-2 mb-4 text-sm ${
          currentDate > endDate
            ? "text-gray-700"
            : currentDate > startDate
            ? "font-bold animate-pulse-faster"
            : ""
        } ${className}`}
      >
        <span>
          <span className="text-xs text-berlin-red opacity-50 mr-0.5">
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
              className="text-4xl text-berlin-red"
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
            {photo3 && (
              <img
                src={photo3}
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
  const [activeMapName, setActiveMapName] = React.useState("Ground Floor (#0)");
  const [isExtravaganza, setIsExtravaganza] = React.useState(false);
  const [isSticky, setIsSticky] = React.useState(false);

  let toggleRef = React.useRef(null);

  const handleCloseModal = (e) => {
    e.stopPropagation();
    setIsMapModalOpen(false);
  };

  const handleGroundFloor = () => {
    setActiveMap(groundFloor);
    setActiveMapName("Ground Floor (#0)");
  };

  const handleFirstFloor = () => {
    setActiveMap(firstFloor);
    setActiveMapName("First Floor (#1)");
  };

  const handleSecondFloor = () => {
    setActiveMap(secondFloor);
    setActiveMapName("Second Floor (#2)");
  };

  const handleThirdFloor = () => {
    setActiveMap(thirdFloor);
    setActiveMapName("Third Floor (#3)");
  };

  const handleFourthFloor = () => {
    setActiveMap(fourthFloor);
    setActiveMapName("Fourth Floor (#4)");
  };

  const handleFifthFloor = () => {
    setActiveMap(fifthFloor);
    setActiveMapName("Fifth Floor (#5)");
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
    nodeCafe: {
      name: "Node Cafe",
      handler: () => {
        handleGroundFloor();
        setActiveRoomClass("nodeCafe");
        setIsMapModalOpen(true);
      },
    },
    yard0: {
      name: "Yard 0",
      handler: () => {
        handleGroundFloor();
        setActiveRoomClass("yard0");
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
    artExhibition: {
      name: "Art Exhibition",
      handler: () => {
        handleFifthFloor();
        setActiveRoomClass("artExhibition");
        setIsMapModalOpen(true);
      },
    },
    xrRoom: {
      name: "XR Room",
      handler: () => {
        handleGroundFloor();
        setActiveRoomClass("xrRoom");
        setIsMapModalOpen(true);
      },
    },
    alice: {
      name: "Alice",
      handler: () => {
        handleSecondFloor();
        setActiveRoomClass("alice");
        setIsMapModalOpen(true);
      },
    },
    persius: {
      name: "Persius",
      handler: () => {
        handleFifthFloor();
        setActiveRoomClass("persius");
        setIsMapModalOpen(true);
      },
    },
    cinema: {
      name: "Cinema",
      handler: () => {
        handleFifthFloor();
        setActiveRoomClass("cinema");
        setIsMapModalOpen(true);
      },
    },
  };

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) =>
        e.intersectionRatio < 1 ? setIsSticky(true) : setIsSticky(false),
      { threshold: [1] }
    );
    if (toggleRef.current) observer.observe(toggleRef.current);
    return () => {
      if (toggleRef.current) observer.unobserve(toggleRef.current);
    };
  }, [toggleRef]);

  return (
    <Layout>
      <div className="textbox max-w-xl">
        <h1 className="my-4 underline text-secondary font-ocra">
          &lt;&lt;S&lt;CHEDULE
        </h1>
        <div className="">
          <p className="mt-4">
            Welcome to <ETHBerlin />! If you have the chance, please claim your
            badge early during the day outside the venue to avoid long queues in
            the evening.
          </p>
          <p>
            This is a just an OVERVIEW of the schedule. Full schedule will be
            released.{" "}
          </p>
          {/* Use top: -1px to detect stickyness https://davidwalsh.name/detect-sticky */}

          {/* Hacker Essentials vs Extravaganza */}

          <div
            className={`flex items-center justify-center w-full sticky -top-1 py-4 text-center  ${
              isSticky ? "bg-white" : ""
            }`}
            ref={toggleRef}
          >
            <label for="toogleA" className="flex items-center cursor-pointer">
              <div className="mr-3 ">Hacker Essentials</div>
              <div className="relative">
                <input
                  id="toogleA"
                  type="checkbox"
                  className="sr-only"
                  onChange={() => setIsExtravaganza((prev) => !prev)}
                />
                <div
                  className={`w-10 h-4 ${
                    isExtravaganza ? "bg-red-500" : "bg-gray-400"
                  } rounded-full shadow-inner`}
                ></div>
                <div
                  className={`absolute w-6 h-6 rounded-full shadow -left-1 -top-1 transition ${
                    isExtravaganza
                      ? "translate-x-full bg-red-300"
                      : "bg-gray-200"
                  }`}
                ></div>
              </div>
              <div className="ml-3 text-red-300">Hacker Extravaganza</div>
            </label>
          </div>
          <h2 className="text-xl font-bold font-ocra mt-4">Friday, May 24</h2>
          <p className="mt-4">
            <ul>
              <ProgramItem
                dayStr="2024-05-24"
                startTime="12:00"
                endTime="16:00"
                title="Pre-registration"
                eventLocations={[]}
              />
              <ProgramItem
                dayStr="2024-05-24"
                startTime="16:00"
                title="Registration"
                eventLocations={[]}
              />
              <ProgramItem
                dayStr="2024-05-24"
                startTime="16:00"
                title="Doors open"
                eventLocations={[]}
              />
              <SpeechItem
                dayStr="2024-05-24"
                startTime="16:30"
                endTime="17:00"
                title="Talk: Title TBA"
                speakerName="Fatemeh Fannizadeh (Swarm)"
                photo={fat}
                eventLocations={[locations.lexis]}
              />
              <SpeechItem
                dayStr="2024-05-24"
                startTime="17:00"
                endTime="17:30"
                title="Talk: Building for Big V Value"
                speakerName="Nick Almond (FactoryDAO)"
                description={
                  "Crypto was meant to be different. This was the technological frontier for a new world, away from the banks, centralised rent seeking and maximally extractive business models. So what happened? This talk lays out some home truths, discusses where we've gone wrong and what we can do to steer the industry into a better direction."
                }
                photo={nick}
                eventLocations={[locations.lexis]}
              />
              <SpeechItem
                dayStr="2024-05-24"
                startTime="17:30"
                endTime="18:00"
                title="Talk: Are there limits to the reach of US Sanctions laws?"
                description="The US Treasury's decision to sanction Tornado Cash, including the immutable pool contracts, has set off a wave of criminal and civil litigation. Do these sanctions go too far, can similar sanctions be used to effectively outlaw crypto all together, and how can we fight back?"
                speakerName="Peter van Valkenburg (Coin Center)"
                photo={peter}
                eventLocations={[locations.lexis]}
              />{" "}
              <SpeechItem
                dayStr="2024-05-24"
                startTime="18:00"
                endTime="19:00"
                title="Opening Ceremony"
                speakerName="TBA"
                // photo={gillordPisas}
                eventLocations={[locations.lexis]}
              />
              <ProgramItem
                dayStr="2024-05-24"
                startTime="19:00"
                endTime="23:59"
                title="Hacking begins"
                className={"font-bold italic"}
                eventLocations={[]} // Location = everywhere
              />
              <ProgramItem
                dayStr="2024-05-24"
                startTime="19:00"
                endTime="19:30"
                title="Hacker Team Finding Session"
                eventLocations={[locations.lexis]}
              />
              <ProgramItem
                dayStr="2024-05-24"
                startTime="19:00"
                endTime="21:00"
                title="Dinner"
                eventLocations={[locations.lexis]}
              />
              {isExtravaganza && (
                <ProgramItem
                  dayStr="2024-05-24"
                  className={"text-berlin-red"}
                  startTime="19:00"
                  endTime="23:59"
                  title="Art Exhibition: Co-Create"
                  eventLocations={[locations.artExhibition]}
                />
              )}
              <SpeechItem
                dayStr="2024-05-24"
                startTime="19:30"
                endTime="20:15"
                title="Technical Workshop: Build an Ethereum dApp in 40 mins"
                speakerName="Austin Griffith (Ethereum Foundation)"
                photo={austin}
                eventLocations={[locations.lexis]}
              />
              <SpeechItem
                dayStr="2024-05-24"
                startTime="20:15"
                endTime="21:00"
                title="Technical Workshop: Re-inventing login with Sign-in-with-Ethereum"
                speakerName="Pedro Gomes (WalletConnect)"
                description={
                  <>
                    <div>
                      We will learn how powerful SIWE can be used as a tool for
                      building different use-cases such as identity,
                      attestations, permissions and messaging. For example
                      WalletConnect built this app called Web3Inbox to aggregate
                      notifications for multiple dapps and it’s based on SIWE.
                      Additionally there are other systems where you can use
                      attestations to build roots of trust with SIWE that
                      generate CACAOs (CAIP-74) to build dapps offchain. Finally
                      we are working on Session Keys which also uses SIWE to
                      empower key delegation for transaction signing for Smart
                      Accounts
                    </div>
                  </>
                }
                photo={pedro}
                eventLocations={[locations.lexis]}
              />
              <SpeechItem
                dayStr="2024-05-24"
                startTime="21:00"
                endTime="21:45"
                title="Technical Workshop: Integrating RPCh in your Dapp to privately connect to RPC endpoints
"
                speakerName="Tino Breddin (HOPR)"
                description="TBA"
                photo={tino}
                eventLocations={[locations.lexis]}
              />
              <SpeechItem
                dayStr="2024-05-24"
                startTime="21:45"
                endTime="22:30"
                title="Technical Workshop: Secure communications with Waku"
                speakerName="Sergei Tikhomirov (Waku)"
                description="TBA"
                photo={sergei}
                eventLocations={[locations.lexis]}
              />
              <SpeechItem
                dayStr="2024-05-24"
                startTime="22:30"
                endTime="23:15"
                title="Technical Workshop: ZK vs TEE: Wat do (as a product builder)?"
                speakerName="Odysseas (Phylax Systems), GregTheGreek (ChainSafe)"
                photo={odysseas}
                photo2={greg}
                description={
                  <>
                    <div>
                      This session delves into Trusted Execution Environments
                      (TEEs) and Zero-Knowledge (ZK) for Ethereum product
                      builders with limited technical depth in these areas. We
                      will examine key considerations such as performance, trust
                      assumptions, cost efficiency, and the complexity of
                      integration to determine their suitability for privacy and
                      verifiable computation in applications.
                    </div>{" "}
                    <br />
                    <div>
                      Participants will learn about the security
                      vulnerabilities, scalability potential, and regulatory
                      compliance aspects of each technology. The talk will also
                      highlight the support available through developer
                      ecosystems and the maturity of existing libraries and
                      tools. By the end, attendees will be equipped to make
                      informed decisions on which technology best meets their
                      project's needs and understand the resources available for
                      implementation.
                    </div>
                  </>
                }
                // photo={shumoChu}
                eventLocations={[locations.lexis]}
              />
              <SpeechItem
                dayStr="2024-05-24"
                startTime="23:15"
                endTime="23:59"
                title="Technical Workshop: How to add ZKPs to your app (with Zupass)?"
                speakerName="Richard Liu (0xPARC), Ivan Chub (0xPARC)"
                photo={richard}
                photo2={ivan}
                description={
                  <>
                    <div>
                      No prior circom or ZK experience needed for this workshop,
                      where we'll run through a simple example of a
                      sybil-resistant app that requests a "proof of ETHBerlin
                      hacker visa". Hackers may receive a *cryptographic
                      surprise* during this workshop.
                    </div>
                  </>
                }
                // photo={shumoChu}
                eventLocations={[locations.lexis]}
              />
              <ProgramItem
                dayStr="2024-05-24"
                startTime="23:59"
                endDayStr="2024-05-25"
                endTime="01:00"
                title="Midnight Snack"
                eventLocations={[locations.restaurant]}
              />
            </ul>
          </p>
          <div className="flex justify-center">
            <div className="border-b-[1px] mb-8 mt-4 border-berlin-red opacity-40 w-full"></div>
          </div>
          <h2 className="text-xl font-bold font-ocra">Saturday, May 25th</h2>
          <p className="mt-4">Happy hacking, no distractions!</p>
          <p className="mt-4">
            <ProgramItem
              dayStr="2024-05-25"
              startTime="00:00"
              endTime="23:59"
              title="Hacking"
              className={"font-bold italic"}
              eventLocations={[]}
            />
            <ProgramItem
              dayStr="2024-05-25"
              startTime="09:00"
              endTime="11:00"
              title="Breakfast"
              eventLocations={[locations.restaurant]}
            />
            <SpeechItem
              dayStr="2024-05-25"
              startTime="11:00"
              endTime="13:00"
              title="Project Pitches / Feedback Sessions"
              description="Are you stuck, looking for another team member or want feedback on your idea? Join this session to pitch your project on stage or learn more about the projects others are working on!"
              eventLocations={[locations.lexis]}
            />
            {isExtravaganza && (
              <ProgramItem
                dayStr="2024-05-25"
                startTime="11:00"
                endTime="23:59"
                className={"text-berlin-red"}
                title="Art Exhibition: Co-Create"
                eventLocations={[locations.artExhibition]}
              />
            )}
            {isExtravaganza && (
              <SpeechItem
                dayStr="2024-05-25"
                startTime="12:00"
                endTime="13:20"
                className={"text-berlin-red"}
                title="Panel - Decentralized Art Organisation"
                speakerName="Vincent Trasov, Benny Giang"
                // photo={richard}
                // photo2={ivan}
                description={
                  <>
                    <div>
                      Panel - Decentralized Art Organisation: With Vincent
                      Trasov and Benny Giang; Moderated by Stina Gustafsson.
                    </div>
                  </>
                }
                // photo={shumoChu}
                eventLocations={[locations.artExhibition]}
              />
            )}
            {isExtravaganza && (
              <SpeechItem
                dayStr="2024-05-25"
                startTime="13:30"
                endTime="14:50"
                className={"text-berlin-red"}
                title="Panel - Art after NFTs"
                speakerName="Joan Heemskerk, Billy Rennekamp"
                // photo={richard}
                // photo2={ivan}
                description={
                  <>
                    <div>
                      Panel - Art after NFTs: With Joan Heemskerk and Billy
                      Rennekamp; Moderated by María Paula Fernández.
                    </div>
                  </>
                }
                // photo={shumoChu}
                eventLocations={[locations.artExhibition]}
              />
            )}
            <ProgramItem
              dayStr="2024-05-25"
              startTime="13:00"
              endTime="15:00"
              title="Lunch"
              eventLocations={[locations.restaurant]}
            />
            <ProgramItem
              dayStr="2024-05-25"
              startTime="14:00"
              endTime="17:00"
              title="Mentoring Expert Office Hours"
              description="Check mentor area for detailed schedule!"
              eventLocations={[locations.nodeCafe]} //TODO: node cafe
            />
            <ProgramItem
              dayStr="2024-05-25"
              startTime="17:00"
              endDayStr="2024-05-26"
              endTime="01:00"
              title="DJs in Courtyard 1"
              eventLocations={[locations.yard0]}
            />
            <ProgramItem
              dayStr="2024-05-25"
              startTime="17:00"
              endTime="19:00"
              title={
                <span className="inline-flex items-center">
                  Jommi{" "}
                  <a
                    href="https://twitter.com/joakimhi"
                    className="ml-2 inline-block opacity-70 hover:opacity-100 text-berlin-red hover:text-berlin-red"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter />
                  </a>
                </span>
              }
              eventLocations={[locations.yard0]}
              className="ml-12"
            />
            <ProgramItem
              dayStr="2024-05-25"
              startTime="19:00"
              endTime="21:00"
              title={
                <span className="inline-flex items-center">
                  Anna{" "}
                  <a
                    href="https://soundcloud.com/innermost3000"
                    className="ml-2 inline-block opacity-70 hover:opacity-100 text-berlin-red hover:text-berlin-red"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ImSoundcloud />
                  </a>
                  <a
                    href="https://twitter.com/annmehr"
                    className="ml-2 inline-block opacity-70 hover:opacity-100 text-berlin-red hover:text-berlin-red"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter />
                  </a>
                </span>
              }
              eventLocations={[locations.yard0]}
              className="ml-12"
            />
            <ProgramItem
              dayStr="2024-05-25"
              startTime="21:00"
              endTime="23:00"
              title={
                <span className="inline-flex items-center">
                  Manu +{" "}
                  <a
                    href="https://twitter.com/blockravers"
                    className="ml-2 inline-flex items-center opacity-70 hover:opacity-100 text-berlin-red hover:text-berlin-red"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @blockravers <FaTwitter className="ml-2" />
                  </a>
                </span>
              }
              eventLocations={[locations.yard0]}
              className="ml-12"
            />
            <ProgramItem
              dayStr="2024-05-25"
              endDayStr="2024-05-26"
              startTime="23:00"
              endTime="01:00"
              title={
                <span className="inline-flex items-center">
                  Manuel{" "}
                  <a
                    href="https://soundcloud.com/umcharra"
                    className="ml-2 inline-block opacity-70 hover:opacity-100 text-berlin-red hover:text-berlin-red"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ImSoundcloud />
                  </a>
                </span>
              }
              eventLocations={[locations.yard0]}
              className="ml-12"
            />
            <ProgramItem
              dayStr="2024-05-25"
              startTime="19:00"
              endTime="21:00"
              title="Dinner"
              eventLocations={[locations.restaurant]}
            />
            <ProgramItem
              dayStr="2024-05-25"
              startTime="23:59"
              endDayStr="2024-05-26"
              endTime="01:00"
              title="Midnight Snack"
              eventLocations={[locations.restaurant]}
            />
          </p>
          <div className="flex justify-center">
            <div className="border-b-[1px] mb-8 mt-4 border-berlin-red opacity-40 w-full"></div>
          </div>
          <h2 className="text-xl font-bold font-ocra">Sunday, May 26th</h2>
          <p className="mt-4">
            Don't forget to submit your projects by 11:30 am Berlin time!
          </p>
          <p className="mt-4">
            <ul>
              <ProgramItem
                dayStr="2024-05-26"
                startTime="00:00"
                endTime="11:00"
                title="Hacking (Submission deadline at 11:30 am)"
                className={"font-bold italic"}
                eventLocations={[]}
              />
              <ProgramItem
                dayStr="2024-05-26"
                startTime="09:00"
                endTime="11:00"
                title="Breakfast"
                eventLocations={[locations.restaurant]}
              />
              <ProgramItem
                dayStr="2024-05-26"
                startTime="11:30"
                title="PROJECT SUBMISSION DEADLINE"
                className={"font-bold italic"}
                eventLocations={[]}
              />
              <ProgramItem
                dayStr="2024-05-26"
                startTime="12:00"
                endTime="16:30"
                title="Hackathon Project Judging"
                eventLocations={[]} // TODO McKinsey Space (1st floor to the left)
              />
              <ProgramItem
                dayStr="2024-05-26"
                startTime="13:00"
                endTime="15:00"
                title="Lunch"
                eventLocations={[locations.restaurant]}
              />
              <ProgramItem
                dayStr="2024-05-26"
                startTime="14:00"
                title="Stage opening"
                eventLocations={[locations.lexis]}
              />
              <SpeechItem
                dayStr="2024-05-26"
                startTime="14:05"
                endTime="14:35"
                title="Talk: Ethevacuations: Crypto in a humanitarian crisis"
                speakerName={
                  "Kat (EthEvacuations), Joshua Dávila (The Blockchain Socialist)"
                }
                description="Kat recently left her crypto job to start Ethevacuations when the ongoing conflict in Gaza began as she learned that crypto was a useful tool to help those suffering under the bombardment. Kat will be interviewed by Joshua Dávila to talk about her experience and the reality of using crypto to help those evacuate from Gaza during one of the most difficult humanitarian crises imaginable. Crypto was made for this and there are important lessons to be had."
                photo={kat}
                photo2={josh}
                eventLocations={[locations.lexis]}
              />
              <SpeechItem
                dayStr="2024-05-26"
                startTime="14:40"
                endTime="15:10"
                title="Talk: Information flow control a.k.a. privacy is not the concept your are looking for"
                speakerName={"Christopher Goes (Anoma)"}
                eventLocations={[locations.lexis]}
              />
              <SpeechItem
                dayStr="2024-05-26"
                startTime="15:15"
                endTime="15:45"
                title="Talk: Anarchy, Truth and Justice"
                description={`We are building systems that resist coercion and promote freedom. We are not the first people in history to try that, so what happened before?
This talk will look at some historical attempts to create systems and societies that do not depend on government or institutional power, from the Diggers to the Free Software movement.
Then we will look at tools and techniques we can use to govern and sustain crypto-economic systems and talk about how to increase their impact and protect them against bribery, cooption and destruction.`}
                speakerName={"Edmund Edgar (RealityETH)"}
                photo={edmundedgar}
                eventLocations={[locations.lexis]}
              />
              <SpeechItem
                dayStr="2024-05-26"
                startTime="15:50"
                endTime="16:20"
                title="Talk: The Silent Strings of Proof of Personhood"
                description={
                  <>
                    <p>
                      Experiments in Proof of Personhood—where each person has a
                      single, unique identity—have increasingly been touted as a
                      mechanism for tracing information provenance, distributing
                      Universal Basic Income, and facilitating democratic
                      governance over systems of artificial intelligence.
                    </p>
                    <p>
                      {" "}
                      This talk chronicles Idena’s experiment in Proof of
                      Personhood from launch in August 2019 to a crisis in May
                      2022. We show how despite verifying humans, hidden pools
                      rapidly emerged—some cooperative, but most controlled by
                      “puppeteers” who, at best, remunerated participants for
                      periodically proving their uniqueness in exchange for
                      access to their secret keys and controlling their
                      accounts. Instead of fostering an egalitarian network of
                      unique identities, the protocol fractured into hidden
                      subnetworks vying for control over an economic pie with
                      economies of scale trending towards oligopoly, undermining
                      the protocol’s security and ambitions for democratic
                      governance (one-person, one-vote) and UBI rewards
                      (one-person, one reward). By giving humans economic
                      incentives to periodically differentiate themselves from
                      bots, the protocol gave more informed, resourceful humans
                      financial incentives to puppeteer less informed humans
                      like bots.
                    </p>
                  </>
                }
                speakerName={
                  "Puja Ohlhaver (Lawyer & Researcher), Mikhail Nikulin (Idena)"
                }
                photo={puja}
                photo2={mikhail}
                eventLocations={[locations.lexis]}
              />
              <SpeechItem
                dayStr="2024-05-26"
                startTime="16:25"
                endTime="16:55"
                title="Talk: Title TBA"
                speakerName={"Ameen Soleimani (0xbow)"}
                photo={ameen}
                eventLocations={[locations.lexis]}
              />
              <SpeechItem
                dayStr="2024-05-26"
                startTime="17:00"
                endTime="17:30"
                title="Talk: The Challenge of Decentralised Communication"
                description={
                  <>
                    <p>
                      Decentralised communication tools are at least 10x harder
                      to build than their mainstream centralised equivalents,
                      and in a world where Discord, Slack, Telegram and WhatsApp
                      have billions of dollars of funding and have created
                      incredibly polished products, it can be hard for
                      decentralised alternatives to compete. However:
                      centralisation lasts until the next Elon, whereas
                      decentralisation can last forever.
                    </p>
                    <p>
                      In this talk, I'll explain the challenges we've hit in
                      building Matrix to compete with the mainstream
                      alternatives, how we're solving them, why it's taken so
                      long, and why it's more important than ever to keep the
                      ideal of decentralised communication alive.
                    </p>
                  </>
                }
                speakerName={"Matthew Hodgson (Matrix)"}
                photo={matthew}
                eventLocations={[locations.lexis]}
              />
              <ProgramItem
                dayStr="2024-05-26"
                startTime="17:30"
                endTime="19:00"
                title="Closing Ceremony"
                eventLocations={[locations.lexis]}
              />
              <ProgramItem
                dayStr="2024-05-26"
                startTime="19:00"
                endTime="20:00"
                title="Closing aperitif, snacks & mingle with DJ"
                eventLocations={[locations.yard0]}
              />
              <ProgramItem
                dayStr="2024-05-26"
                startTime="20:00"
                title="End of hackathon, doors close"
                eventLocations={[]}
              />
            </ul>
          </p>
        </div>
      </div>

      <VenueMapModal
        isOpen={isMapModalOpen}
        handleCloseModal={handleCloseModal}
        activeMapName={activeMapName}
        activeMap={activeMap}
        activeRoomClass={activeRoomClass}
      />
    </Layout>
  );
};
export default Program;
