import Layout from "../components/Layout";
import React from "react";
import ReactModal from "react-modal";
import groundFloor from "../images/groundFloor.png";
import firstFloor from "../images/firstFloor.png";
import secondFloor from "../images/secondFloor.png";
import secondFloorSunday from "../images/secondFloor-sunday.png";
// import thirdFloor from "../images/thirdFloor.png";
// import fourthFloor from "../images/fourthFloor.png";
import fifthFloor from "../images/fifthFloor.png";
import "../styles/modal.css";

const currentDate = new Date();

const ProgramItem = ({
  title,
  location,
  date,
  startTime,
  endTime,
  setIsModalOpen,
}) => {
  // ISO Format: 2022-09-16T00:09:00+02:00
  const startDate = new Date(date + "T" + startTime + ":00+02:00");
  const endDate = endTime
    ? new Date(date + "T" + endTime + ":00+02:00")
    : startDate;

  return (
    <li className={`${currentDate > endDate ? "text-gray-500" : ""}`}>
      <span className="fake-bold">
        {startTime + (endTime ? "- " + endTime : "")}
      </span>{" "}
      {title}{" "}
      <button
        className="text-berlin-yellow"
        onClick={() => setIsModalOpen(true)}
      >
        <span className="align-middle">
          <span class="material-symbols-outlined text-sm mr-1 ml-2">
            my_location
          </span>
        </span>
        <span className="underline">{location}</span>
      </button>
    </li>
  );
};
const Program = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(true);

  const handleCloseModal = (e) => {
    e.stopPropagation();
    setIsModalOpen(false);
  };

  return (
    <Layout>
      <h1 className="my-4 underline text-secondary">(p)rogram</h1>
      <div className="text-gray-50 text-justify">
        <h2 className="text-xl font-bold">Friday, September 16</h2>
        <p className="mt-4">
          Welcome to ETHBerlin³! If you have the chance, please claim your badge
          early during the day outside the venue to avoid long queues in the
          evening.
        </p>
        <p className="mt-4">
          <ul>
            <ProgramItem
              date="2022-09-16"
              startTime="12:00"
              title="Pre-registration opens"
              location="Creator's Lab, Courtyard 3"
              setIsModalOpen={setIsModalOpen}
            />
            <ProgramItem
              date="2022-09-16"
              startTime="16:00"
              title="Registration and doors open"
              location="Main entrance, Courtyard 1"
              setIsModalOpen={setIsModalOpen}
            />
            <li>
              <span className="fake-bold">17:00</span> Keynote 1 (Lexis, Ground
              Floor)
            </li>
            <li>
              <span className="fake-bold">17:30</span> Keynote 2 (Lexis, Ground
              Floor)
            </li>
            <li>
              <span className="fake-bold">18:00</span> Opening Ceremony (Lexis,
              Ground Floor)
            </li>
            <li>
              <span className="fake-bold">19:00</span> Team Matching (Lexis,
              Ground Floor)
            </li>
            <li>
              <span className="fake-bold">19:00</span> Hacking Starts (Community
              Spaces, Meeting Rooms)
            </li>
            <li>
              <span className="fake-bold">19:00</span> Dinner (Restaurant,
              Ground Floor)
            </li>
            <li>
              <span className="fake-bold">20:00</span> DJ/Music (Courtyard 1,
              Ground Floor)
            </li>
            <li>
              <span className="fake-bold">20:00</span> Technical Workshop 1
              (Lexis, Ground Floor)
            </li>
            <li>
              <span className="fake-bold">20:00</span> Technical Workshop 2
              (Creator's Lab, Ground Floor)
            </li>
            <li>
              <span className="fake-bold">20:45</span> Technical Workshop 3
              (Lexis, Ground Floor)
            </li>
            <li>
              <span className="fake-bold">20:45</span> Technical Workshop 4
              (Creator's Lab, Ground Floor)
            </li>
            <li>
              <span className="fake-bold">21:30</span> Technical Workshop 5
              (Lexis, Ground Floor)
            </li>
            <li>
              <span className="fake-bold">21:30</span> Technical Workshop 6
              (Creator's Lab, Ground Floor)
            </li>
            <li>
              <span className="fake-bold">22:15</span> Technical Workshop 7
              (Lexis, Ground Floor)
            </li>
            <li>
              <span className="fake-bold">22:15</span> Technical Workshop 8
              (Creator's Lab, Ground Floor)
            </li>
            <li>
              <span className="fake-bold">24:00</span> Midnight Snack (Community
              Spaces)
            </li>
          </ul>
        </p>
        <h2 className="text-xl font-bold">Saturday, September 17</h2>
        <p className="mt-4">Happy hacking, no distraction!</p>
        <p className="mt-4">
          <li>
            <span className="fake-bold">09:00</span> Breakfast (Restaurant,
            Ground Floor)
          </li>
          <li>
            <span className="fake-bold">13:00</span> Lunch (Restaurant, Ground
            Floor)
          </li>
          <li>
            <span className="fake-bold">18:00</span> Documentary 1 (Cinema, Top
            Floor)
          </li>
          <li>
            <span className="fake-bold">19:00</span> Dinner (Restaurant, Ground
            Floor)
          </li>
          <li>
            <span className="fake-bold">20:00</span> Documentary 2 (Cinema, Top
            Floor)
          </li>
          <li>
            <span className="fake-bold">20:00</span> DJ/Music (Courtyard 1,
            Ground Floor)
          </li>
          <li>
            <span className="fake-bold">20:00</span> Documentary 3 (Cinema, Top
            Floor)
          </li>
          <li>
            <span className="fake-bold">22:00</span> DJ/Music (Creator's Lab,
            Ground Floor)
          </li>
          <li>
            <span className="fake-bold">24:00</span> Midnight Snack (Community
            Spaces)
          </li>
        </p>
        <h2 className="text-xl font-bold">Sunday, September 18</h2>
        <p className="mt-4">
          Don't forget to submit your projects by 11:00 am Berlin time!
        </p>
        <p className="mt-4">
          <ul>
            <li>
              <span className="fake-bold">09:00</span> Breakfast (Restaurant,
              Ground Floor)
            </li>
            <li>
              <span className="fake-bold">11:00</span> Hacker Submission
              Deadline (Internet)
            </li>
            <li>
              <span className="fake-bold">12:00</span> Judging starts (Community
              Spaces, Meeting Rooms)
            </li>
            <li>
              <span className="fake-bold">13:00</span> Lunch (Restaurant, Ground
              Floor)
            </li>
            <li>
              <span className="fake-bold">14:30</span> Keynote 3 (Lexis, Ground
              Floor)
            </li>
            <li>
              <span className="fake-bold">15:00</span> Keynote 4 (Lexis, Ground
              Floor)
            </li>
            <li>
              <span className="fake-bold">15:30</span> Keynote 5 (Lexis, Ground
              Floor)
            </li>
            <li>
              <span className="fake-bold">16:00</span> Closing Ceremony (Lexis,
              Ground Floor)
            </li>
            <li>
              <span className="fake-bold">17:00</span> Closing Drinks (Courtyard
              1, Ground Floor)
            </li>
            <li>
              <span className="fake-bold">18:00</span> Doors close (Main
              entrance, Courtyard 1)
            </li>
            <li>
              <span className="fake-bold">21:00</span> Afterparty (To be
              announced...)
            </li>
          </ul>
        </p>
      </div>

      {/* Venue Map Modal */}
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
        <div className=" p-8 ">
          <h2 className="text-3xl underline mb-4 text-berlin-yellow text-center font-w95">
            Ground Floor / Floor 0
          </h2>
          <div className="relative mb-16 lg:px-32 py-2 bg-white">
            <img src={groundFloor} alt="ground floor"></img>
          </div>
        </div>
      </ReactModal>
    </Layout>
  );
};
export default Program;
