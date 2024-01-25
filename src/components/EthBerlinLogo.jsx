import React from "react";

const EthBerlinLogo = React.forwardRef((props, ref) => {
  return (
    <a
      ref={ref}
      className={`font-dotpassport tracking-widest	 text-black hover:no-underline ${props.className} text-right `}
      href="/"
    >
      <div className={`${props.titleClassName}`}>ETHBerlin4</div>
      <div className={`${props.subtitleClassName}`}>
      <span className={`font-ocra`}>  &lt;&lt;&lt;&lt;IDENTITY&lt;&lt;CRISIS&lt;&lt; </span>
      </div>
    </a>
  );
});

export default EthBerlinLogo;
