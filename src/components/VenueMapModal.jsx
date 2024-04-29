import ReactModal from "react-modal";
import React from "react";

const VenueMapModal = ({
  isOpen,
  handleCloseModal,
  activeMapName,
  activeMap,
  activeRoomClass,
}) => {
  return (
    <ReactModal
      isOpen={isOpen}
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
        content: { zIndex: 40, backgroundColor: "rgba(255, 255, 255, 0.9)" },
      }}
      overlayClassName="flex items-center z-40 px-4 md:px-16 lg:px-32 xl:px-48 transition-all duration-200 ease-in-out"
      className="flex flex-col items-center justify-center"
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      onRequestClose={handleCloseModal}
      closeTimeoutMS={500}
    >
      <div className=" p-8 ">
        <h2 className="text-xl lg:text-3xl mb-4 text-berlin-red text-center font-w95">
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
  );
};

export default VenueMapModal;
