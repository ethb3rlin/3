import React from "react";
import Typewriter from "typewriter-effect";

const EthBerlinLogo = React.forwardRef((props, ref) => {
  return (
    <a
      ref={ref}
      className={`text-black hover:no-underline ${props.className}`}
      href="/"
    >
      <div className="font-dotpassport text-3xl tracking-widest">
        {/* <Typewriter
          options={{
            cursor: null,
            strings: ["ETHBerlin04"],
            autoStart: true,
            loop: true,
            delay: 30,
          }}
        /> */}
        ETHBerlin04
      </div>
      <div className="font-ocra text-[.63rem] uppercase">
        {
          <Typewriter
            options={{
              cursor: null,
              strings: ["<<<<<<<<<<<<<identity<<crisis<<<"],
              autoStart: true,
              loop: true,
              delay: 30,
              deleteSpeed: 30,
              pauseFor: 10000,
            }}
          />
        }
        {/* {"<<<<<<<<<<<<<identity<<crisis<<<"} */}
      </div>
    </a>
  );
});

export default EthBerlinLogo;
