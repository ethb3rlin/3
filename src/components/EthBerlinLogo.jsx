import React, { useEffect, useState } from "react";
import { useRandomReveal } from "react-random-reveal";

const EthBerlinLogo = React.forwardRef((props, ref) => {
  const [letter, setLetter] = useState("3");
  const [animate, setAnimate] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [invisibleLetter, setInvisibleLetter] = useState(false);
  // Change letter regularly
  const toggleLetter = () => {
    setLetter((prev) => {
      if (prev === "3") return "E";
      else return "3";
    });
  };

  useEffect(() => {
    const setCustomInterval = () => {
      setAnimate(true);
      // animate for 3 secs
      setTimeout(() => {
        setAnimate(false);
        setInvisibleLetter(true);
        toggleLetter();
        setTimeout(() => {
          setInvisibleLetter(false);
          setTimeout(() => {
            setCustomInterval();
          }, 7500);
        }, 50);
      }, 2000);
    };

    // run once
    setCustomInterval();
  }, []);

  const revealCharacters = useRandomReveal({
    isPlaying: true,
    duration: 2,
    characters: "ETHB3RLIN",
    onComplete: () => setRevealed(true),
  });

  return (
    <div
      ref={ref}
      className={`font-digi text-berlin-yellow ${props.className}`}
    >
      <div className={`flex m-0 ${props.titleClassName}`}>
        <div
          className={`${
            animate && "glitch layers"
          } blur-text-smaller sm:blur-text-small`}
          data-text={`ETHB${letter}rlin`}
        >
          {revealed || props.noReveal ? (
            <span>
              ETHB
              {
                <span className={`${invisibleLetter ? "invisible" : ""}`}>
                  {letter}
                </span>
              }
              rlin
            </span>
          ) : (
            revealCharacters
          )}
        </div>
      </div>
      <div
        className={`${animate && "glitch"} font-w95 blur-text-smaller ${
          props.subtitleClassName
        }`}
        data-text="to the power of 3"
      >
        to the power of 3
      </div>
    </div>
  );
});

export default EthBerlinLogo;
