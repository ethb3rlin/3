import React from "react";
import PropTypes from "prop-types";

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            document.onkeydown = checkKey;

            function checkKey(e) {
                e = e || window.event;
                if (e.key == 'a' || e.key == 'A') {
                    window.location.href= "/about";
                }
                else if (e.key == 'h' || e.key == 'H') {
                  window.location.href= "/hacker-manual";
                }
                else if (e.key == 'p' || e.key == 'P') {
                  window.location.href= "/program";
                }
                else if (e.key == 'c' || e.key == 'C') {
                   window.location.href= "/contributors";
                }
                else if (e.key == 's' || e.key == 'S') {
                  window.location.href= "/sponsor";
                }
                else if (e.key == 'm' || e.key == 'M') {
                  window.location.href= "/manifesto";
                }
                else if (e.key == 'i' || e.key == 'I') {
                  window.location.href= "/contact";
                }
                else if (e.key == 'd' || e.key == 'D') {
                  window.location.href= "/decentralization";
                }
                else if (e.key == 'o' || e.key == 'O') {
                  window.location.href= "/code-of-conduct";
                }
                else if (e.key == 'b' || e.key == 'B') {
                  window.location.href= "https://blog.ethberlin.ooo";
                }
            }
            `,
          }}
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
