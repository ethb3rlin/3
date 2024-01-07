import React from "react";

const SecurityStrip = ({ className, isPrimaryColor, smallScreen }) => {
  return (
    <div
      className={`whitespace-pre font-ocra font-bold text-[2rem] tracking-tighter leading-tight opacity-[0.15] ${className} bg-berlin-yellow text-white`}
      style={{
        marginTop: !smallScreen && "60vh",
      }}
    >
      {`DoD
DoD
DoD
DoD
DoD
DoD
DoD
DoD
DoD
DoD
DoD
DoD
DoD
DoD
DoD
DoD
DoD
DoD
DoD
DoD
DoD
DoD
DoD
DoD
DoD
DoD
DoD
DoD
DoD
DoD
DoD
DoD
DoD
DoD
DoD
DoD
DoD
DoD
DoD
DoD
DoD
DoD
DoD
DoD
DoD
DoD
DoD
DoD
DoD
DoD
DoD
DoD
DoD
DoD
DoD
DoD
DoD
`}
    </div>
  );
};

SecurityStrip.defaultProps = {
  isPrimaryColor: true,
};
export default SecurityStrip;
