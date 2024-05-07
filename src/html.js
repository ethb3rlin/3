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

                // Check if any modifier keys are pressed
                if (e.ctrlKey || e.shiftKey || e.altKey || e.metaKey) {
                  // Exit the function if any modifier keys are pressed
                  return;
                }

                switch (e.key.toLowerCase()) {
                    case 'a':
                        window.location.href= "/about";
                        break;
                    case 'm':
                        window.location.href= "/manifesto";
                        break;
                    case 'h':
                        window.location.href= "/hacker-manual";
                        break;
                    case 'i':
                        window.location.href= "/contact";
                        break;
                    case 'd':
                        window.location.href= "/decentralization";
                        break;
                    case 'o':
                        window.location.href= "/code-of-conduct";
                        break;
                    case 'c':
                        window.location.href= "/contributors";
                        break;
                    case 'p':
                        window.location.href= "/privacy-policy";
                        break;

                    case 'f':
                        window.location.href= "/face-idont";
                        break;
                    case 's':
                        window.location.href= "/schedule";
                        break;
                    case 'b':
                        window.location.href= "https://blog.dod.ngo/";
                        break;
                    default:
                        // If key doesn't match any case, do nothing
                        break;
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
