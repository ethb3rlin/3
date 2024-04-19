import React from "react";

const EthBerlinLogo = React.forwardRef((props, ref) => {
  return (
    <a
      ref={ref}
      className={`text-black hover:no-underline ${props.className}`}
      href="/"
    >
      <div className="font-dotpassport text-3xl tracking-widest">
        ETHBerlin04
      </div>
      <div className="font-ocra text-[.63rem] uppercase">
        {"<<<<<<<<<<<<<identity<<crisis<<<"}
      </div>
    </a>
  );
});

export default EthBerlinLogo;
