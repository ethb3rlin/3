import Layout from "../components/Layout";
import React from "react";
import ReactModal from "react-modal";
import "../styles/modal.css";
import "../styles/rooms/groundFloor.css";
import "../styles/rooms/firstFloor.css";
import "../styles/rooms/secondFloor.css";
import "../styles/rooms/fifthFloor.css";
import groundFloor from "../images/groundFloor.png";
import thirdFloor from "../images/thirdFloor.png";
import firstFloor from "../images/firstFloor.png";
import secondFloor from "../images/secondFloor.png";
import fifthFloor from "../images/fifthFloor.png";
import ETHBerlin from "../components/ETHBerlin";
import VenueMapModal from "../components/VenueMapModal";
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
  const [activeMapName, setActiveMapName] = React.useState(
    "Ground Floor / Floor 0"
  );
  const [isExtravaganza, setIsExtravaganza] = React.useState(false);
  const [isSticky, setIsSticky] = React.useState(false);

  let toggleRef = React.useRef(null);

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
  const handleFifthFloor = () => {
    setActiveMap(fifthFloor);
    setActiveMapName("Fifth Floor / Floor 5");
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
    wildenbruch: {
      name: "Wildenbruch",
      handler: () => {
        handleFifthFloor();
        setActiveRoomClass("wildenbruch");
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
    yard1: {
      name: "Yard 1",
      handler: () => {
        handleGroundFloor();
        setActiveRoomClass("yard1");
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
          {/* Use top: -1px to detect stickyness https://davidwalsh.name/detect-sticky */}
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
                title="Talk"
                speakerName="TBA"
                // photo={frederikHaga}
                eventLocations={[]}
              />
              <SpeechItem
                dayStr="2024-05-24"
                startTime="17:00"
                endTime="17:30"
                title="Talk"
                speakerName="TBA"
                // photo={frederikHaga}
                eventLocations={[]}
              />
              <SpeechItem
                dayStr="2024-05-24"
                startTime="17:30"
                endTime="18:00"
                title="Talk"
                speakerName="TBA"
                // photo={frederikHaga}
                eventLocations={[]}
              />{" "}
              <SpeechItem
                dayStr="2024-05-24"
                startTime="18:00"
                endTime="19:00"
                title="Opening Ceremony"
                speakerName="TBA"
                // photo={gillordPisas}
                eventLocations={[]}
              />
              <ProgramItem
                dayStr="2024-05-24"
                startTime="19:00"
                endTime="23:59"
                title="HACKING"
                eventLocations={[]} // Location = everywhere
              />
              <ProgramItem
                dayStr="2024-05-24"
                startTime="19:00"
                endTime="19:30"
                title="Hacker Team Finding Session"
                eventLocations={[]}
              />
              <ProgramItem
                dayStr="2024-05-24"
                startTime="19:00"
                endTime="21:00"
                title="Dinner"
                eventLocations={[locations.restaurant]}
              />
              <SpeechItem
                dayStr="2024-05-24"
                startTime="20:00"
                endTime="20:45"
                title="Technical Workshop"
                speakerName="TBA"
                eventLocations={[]}

                // photo={jackieZhang}
                // description={
                //   <>
                //     🪄 Would you like to wave your wand and speak order into the
                //     data chaos as a Dune Wizard?
                //     <br />
                //     <br />
                //     🤝 Dune is a crypto data analytics platform, where we are on a
                //     mission to make crypto data accessible for all.
                //     <br />
                //     <br />
                //     📊 In this workshop, we will walk through how to do crypto
                //     data analysis on Dune in an open-source style!
                //     <br />
                //     <br />
                //     🧙 Come join us and start your Dune Wizard journey!"
                //   </>
                // }
              />
              <SpeechItem
                dayStr="2024-05-24"
                startTime="20:45"
                endTime="21:30"
                title="Technical Workshop"
                speakerName="TBA"
                description="TBA"
                // photo={shumoChu}
                eventLocations={[]}
              />
              <SpeechItem
                dayStr="2024-05-24"
                startTime="21:30"
                endTime="22:15"
                title="Technical Workshop"
                speakerName="TBA"
                description="TBA"
                // photo={shumoChu}
                eventLocations={[]}
              />
              <SpeechItem
                dayStr="2024-05-24"
                startTime="22:15"
                endTime="23:00"
                title="Technical Workshop"
                speakerName="TBA"
                description="TBA"
                // photo={shumoChu}
                eventLocations={[]}
              />
              <SpeechItem
                dayStr="2024-05-24"
                startTime="23:00"
                endTime="23:45"
                title="Technical Workshop"
                speakerName="TBA"
                description="TBA"
                // photo={shumoChu}
                eventLocations={[]}
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
          <h2 className="text-xl font-bold font-ocra">
            Saturday, September 17
          </h2>
          <p className="mt-4">Happy hacking, no distractions!</p>
          <p className="mt-4">
            <ProgramItem
              dayStr="2024-05-25"
              startTime="00:00"
              endTime="23:59"
              title="HACKING"
              eventLocations={[]}
            />
            <ProgramItem
              dayStr="2024-05-25"
              startTime="09:00"
              endTime="11:00"
              title="Breakfast"
              eventLocations={[locations.restaurant]}
            />
            <ProgramItem
              dayStr="2024-05-25"
              startTime="13:00"
              endTime="15:00"
              title="Lunch"
              eventLocations={[locations.restaurant]}
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
          <h2 className="text-xl font-bold font-ocra">Sunday, September 18</h2>
          <p className="mt-4">
            Don't forget to submit your projects by 11:00 am Berlin time!
          </p>
          <p className="mt-4">
            <ul>
              <ProgramItem
                dayStr="2024-05-26"
                startTime="00:00"
                endTime="11:00"
                title="HACKING (Submission deadline at 11:30 am)"
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
                eventLocations={[]}
              />
              <ProgramItem
                dayStr="2024-05-26"
                startTime="12:00"
                endTime="16:30"
                title="JUDGING"
                eventLocations={[]}
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
                startTime="13:00"
                endTime="17:30"
                title="Keynotes"
                eventLocations={[]}
              />
              <SpeechItem
                dayStr="2024-05-26"
                startTime="17:30"
                endTime="19:00"
                title="Closing Ceremony"
                eventLocations={[]}
              />
              <ProgramItem
                dayStr="2024-05-26"
                startTime="19:00"
                endTime="20:00"
                title="Closing aperitif, snacks & mingle with DJ"
                eventLocations={[]}
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
