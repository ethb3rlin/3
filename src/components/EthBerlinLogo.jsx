import React, { useEffect, useState } from "react";
import { useRandomReveal } from "react-random-reveal";

const EthBerlinLogo = React.forwardRef((props, ref) => {
  const [letter, setLetter] = useState("0004");
  const [animate, setAnimate] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [invisibleLetter, setInvisibleLetter] = useState(false);
  // Change letter regularly
  const toggleLetter = () => {
    setLetter((prev) => {
      if (prev === "<<<<") return "0004";
      else return "<<<<";
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
    characters: "EthBerlin<<<<",
    onComplete: () => setRevealed(true),
  });

  return (
    <div
      ref={ref}
      className={`font-ocra text-black ${props.className}`}
    >
      <div className={`flex m-0 ${props.titleClassName}`}>
        <div
          className={`${
            animate && "glitch layers"
          } `}
          data-text={`ETHBerlin${letter}`}
        >
          {revealed || props.noReveal ? (
            <span>
              EthBerlin
              {
                <span className={`${invisibleLetter ? "invisible" : ""}`}>
                  {letter}
                </span>
              }
              
            </span>
          ) : (
            revealCharacters
          )}
        </div>
      </div>
      <div
        className={`${animate && "glitch"} ${
          props.subtitleClassName
        }`}
        data-text="identity crisis"
      >
        &lt;&lt;&lt;&lt;identity&lt;&lt;crisis&lt;&lt;
      </div>
    </div>
  );
});

export default EthBerlinLogo;
