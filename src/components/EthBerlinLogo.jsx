import React from "react";
import logo from "../images/ethberlin4-logo.png";

const EthBerlinLogo = React.forwardRef((props, ref) => {
  return (
    <a ref={ref} className={`${props.className}`} href="/">
      <img src={logo} alt="EthBerlin" />
    </a>
  );
});

export default EthBerlinLogo;
