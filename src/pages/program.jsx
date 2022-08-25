import Layout from "../components/Layout";
import React from "react";
import ReactModal from "react-modal";
import groundFloor from "../images/groundFloor-transparent.png";
import firstFloor from "../images/firstFloor-transparent.png";
import secondFloor from "../images/secondFloor-transparent.png";
import secondFloorSunday from "../images/secondFloor-sunday-transparent.png";
// import thirdFloor from "../images/thirdFloor-transparent.png";
// import fourthFloor from "../images/fourthFloor-transparent.png";
import fifthFloor from "../images/fifthFloor-transparent.png";
import "../styles/modal.css";
import "../styles/rooms/groundFloor.css";
import "../styles/rooms/firstFloor.css";
import "../styles/rooms/secondFloor.css";
import "../styles/rooms/fifthFloor.css";
// const currentDate = new Date();
const currentDate = new Date("2022-09-17T21:20:00+02:00");

const ProgramItem = ({
  title,
  location,
  dayStr,
  endDayStr,
  startTime,
  endTime,
  setIsModalOpen,
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
      } list-none`}
    >
      <span className="fake-bold">
        {"> " + startTime + (endTime ? "-" + endTime : "") + " -"}
      </span>{" "}
      {title}{" "}
      <button
        className={`${
          currentDate > endDate
            ? "text-gray-700"
            : currentDate > startDate
            ? "font-bold animate-pulse"
            : "text-berlin-yellow"
        }`}
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
  const [highlightedRoomClass, setHighlightedRoomClass] =
    React.useState("cinebar");
  const handleCloseModal = (e) => {
    e.stopPropagation();
    setIsModalOpen(false);
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
              startTime="12:00"
              title="Pre-registration opens"
              location="Creator's Lab, Courtyard 3"
              setIsModalOpen={setIsModalOpen}
            />
            <ProgramItem
              dayStr="2022-09-16"
              startTime="16:00"
              endTime="23:00"
              title="Registration and doors open"
              location="Main entrance, Courtyard 1"
              setIsModalOpen={setIsModalOpen}
            />
            <ProgramItem
              dayStr="2022-09-16"
              startTime="17:00"
              endTime="17:30"
              title="Keynote 1"
              location="Yard 1"
              setIsModalOpen={setIsModalOpen}
            />
            <ProgramItem
              dayStr="2022-09-16"
              startTime="17:30"
              endTime="18:00"
              title="Keynote 2"
              location="Yard 1"
              setIsModalOpen={setIsModalOpen}
            />
            <ProgramItem
              dayStr="2022-09-16"
              startTime="18:00"
              endTime="19:00"
              title="Opening Ceremony"
              location="Yard 1"
              setIsModalOpen={setIsModalOpen}
            />
            <ProgramItem
              dayStr="2022-09-16"
              startTime="19:00"
              endTime="20:00"
              title="Team Speed Dating"
              location="Yard 1"
              setIsModalOpen={setIsModalOpen}
            />
            <ProgramItem
              dayStr="2022-09-16"
              startTime="19:00"
              endTime="20:00"
              title="Dinner"
              location="Restaurant"
              setIsModalOpen={setIsModalOpen}
            />
            <ProgramItem
              dayStr="2022-09-16"
              startTime="19:00"
              endTime="23:59"
              title="Hacking Starts"
              location="Community Spaces, Meeting Rooms"
              setIsModalOpen={setIsModalOpen}
            />
            <ProgramItem
              dayStr="2022-09-16"
              startTime="20:00"
              endTime="23:00"
              title="DJ"
              location="Yard 1"
              setIsModalOpen={setIsModalOpen}
            />
            <ProgramItem
              dayStr="2022-09-16"
              startTime="20:00"
              endTime="23:59"
              title="Tech Workshop 1"
              location="Lexis"
              setIsModalOpen={setIsModalOpen}
            />
            <ProgramItem
              dayStr="2022-09-16"
              startTime="20:00"
              endTime="23:59"
              title="Tech Workshop 2"
              location="Creators Lab"
              setIsModalOpen={setIsModalOpen}
            />
            <ProgramItem
              dayStr="2022-09-16"
              startTime="23:59"
              title="Midnight Snack"
              location="Yard 2, First 1st Floor Community Space, 2nd Floor Community Space"
              setIsModalOpen={setIsModalOpen}
            />
            <ProgramItem
              dayStr="2022-09-16"
              startTime="23:59"
              title="DJ"
              location="Creator's Lab"
              setIsModalOpen={setIsModalOpen}
            />
          </ul>
        </p>
        <h2 className="text-xl font-bold">Saturday, September 17</h2>
        <p className="mt-4">Happy hacking, no distraction!</p>
        <p className="mt-4">
          <ProgramItem
            dayStr="2022-09-17"
            startTime="00:00"
            endTime="23:59"
            title="Hacking"
            location="Community Spaces, Meeting Rooms"
            setIsModalOpen={setIsModalOpen}
          />
          <ProgramItem
            dayStr="2022-09-17"
            startTime="09:00"
            endTime="11:00"
            title="Breakfast"
            location="Restaurant"
            setIsModalOpen={setIsModalOpen}
          />
          <ProgramItem
            dayStr="2022-09-17"
            startTime="13:00"
            endTime="15:00"
            title="Lunch"
            location="Restaurant"
            setIsModalOpen={setIsModalOpen}
          />
          <ProgramItem
            dayStr="2022-09-17"
            startTime="19:00"
            endTime="21:00"
            title="Dinner"
            location="Restaurant"
            setIsModalOpen={setIsModalOpen}
          />
          <ProgramItem
            dayStr="2022-09-17"
            startTime="20:00"
            endTime="23:00"
            title="DJ"
            location="Yard 1"
            setIsModalOpen={setIsModalOpen}
          />
          <ProgramItem
            dayStr="2022-09-17"
            startTime="23:00"
            endDayStr="2022-09-18"
            endTime="01:00"
            title="DJ"
            location="Creator's Lab"
            setIsModalOpen={setIsModalOpen}
          />
          <ProgramItem
            dayStr="2022-09-18"
            startTime="00:00"
            endDayStr="2022-09-18"
            endTime="01:00"
            title="Midnight Snack"
            location="Restaurant, 1st Floor Community Space, 2nd Floor Community Space"
            setIsModalOpen={setIsModalOpen}
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
              title="Hacking"
              location="Community Spaces, Meeting Rooms"
              setIsModalOpen={setIsModalOpen}
            />
            <ProgramItem
              dayStr="2022-09-18"
              startTime="09:00"
              endTime="11:00"
              title="Breakfast"
              location="Restaurant"
              setIsModalOpen={setIsModalOpen}
            />
            <ProgramItem
              dayStr="2022-09-18"
              startTime="13:00"
              endTime="15:00"
              title="Lunch"
              location="Restaurant"
              setIsModalOpen={setIsModalOpen}
            />
            <ProgramItem
              dayStr="2022-09-18"
              startTime="14:00"
              endTime="15:00"
              title="Keynote 1"
              location="Yard 1"
              setIsModalOpen={setIsModalOpen}
            />
            <ProgramItem
              dayStr="2022-09-18"
              startTime="15:00"
              endTime="16:00"
              title="Keynote 2"
              location="Yard 1"
              setIsModalOpen={setIsModalOpen}
            />
            <ProgramItem
              dayStr="2022-09-18"
              startTime="16:00"
              endTime="17:00"
              title="Closing Ceremony"
              location="Yard 1"
              setIsModalOpen={setIsModalOpen}
            />
            <ProgramItem
              dayStr="2022-09-18"
              startTime="17:00"
              endTime="18:00"
              title="Drinks & Closing"
              location="Creator's Lab"
              setIsModalOpen={setIsModalOpen}
            />
            <ProgramItem
              dayStr="2022-09-18"
              startTime="19:00"
              endTime="03:00"
              title="Afterparty"
              location="TBD"
              setIsModalOpen={setIsModalOpen}
            />
            <ProgramItem
              dayStr="2022-09-18"
              startTime="18:00"
              title="Doors Close"
              setIsModalOpen={setIsModalOpen}
            />
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
          <div className="mb-16 px-8 lg:px-32 py-2 ">
            <div className="relative">
              <img src={fifthFloor} alt="ground floor" />
              <div className={`${highlightedRoomClass}`} data-tip="Yard 1" />
            </div>
          </div>
        </div>
      </ReactModal>
    </Layout>
  );
};
export default Program;
