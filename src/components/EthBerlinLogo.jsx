import React from "react";

const EthBerlinLogo = React.forwardRef((props, ref) => {
  return (
    <a
      ref={ref}
      className={`font-ocra text-black hover:no-underline ${props.className} text-right `}
      href="/"
    >
      <div className={`${props.titleClassName}`}>ETHBerlin04</div>
      <div className={`${props.subtitleClassName}`}>
      <span className={`font-ocra`}>  &lt;&lt;&lt;&lt;identity&lt;&lt;crisis&lt;&lt; </span>
      </div>
    </a>
  );
});

export default EthBerlinLogo;
