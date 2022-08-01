import React, { useEffect, useState } from "react";
import { RandomReveal } from "react-random-reveal";

const EthBerlinLogo = React.forwardRef((props, ref) => {
  const [letter, setLetter] = useState("3");

  // Change letter regularly
  useEffect(() => {
    const toggleLetter = () => {
      if (letter === "3") setLetter("E");
      else setLetter("3");
    };

    setTimeout(() => {
      toggleLetter();
    }, 1500);
  }, [letter]);

  return (
    <div
      ref={ref}
      className={`font-digi text-berlin-yellow ${props.className}`}
    >
      <div className={`flex m-0 ${props.titleClassName}`}>
        <div
          className="glitch blur-text-small layers"
          data-text={`ETHB${letter}rlin`}
        >
          <RandomReveal isPlaying duration={2} characters="ETHB3rlin" />
        </div>
      </div>
      <div
        className={`glitch layers font-w95 ${props.subtitleClassName}`}
        data-text="to the power of 3"
      >
        to the power of 3
      </div>
    </div>
  );
});

export default EthBerlinLogo;
