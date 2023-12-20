import React, { useEffect } from 'react';

const SvgBackground = (children) => {
    useEffect(() => {
        function createSinusLine(yOffset) {
            var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
            path.setAttribute("d", `M 0 ${100 + yOffset} Q 50 ${50 + yOffset}, 100 ${100 + yOffset} T 200 ${100 + yOffset} T 300 ${100 + yOffset} T 400 ${100 + yOffset}`);
            path.setAttribute("stroke", "url(#pinkToBlueGradient)");
            path.setAttribute("fill", "none");
            path.setAttribute("stroke-width", "2");
            return path;
        }

        function createSVG() {
            var svgNS = "http://www.w3.org/2000/svg";
            var svg = document.createElementNS(svgNS, "svg");
            svg.setAttribute("width", "400");
            svg.setAttribute("height", "10000");

            var defs = document.createElementNS(svgNS, "defs");
            var gradient = document.createElementNS(svgNS, "linearGradient");
            gradient.setAttribute("id", "pinkToBlueGradient");
            gradient.innerHTML = `
                <stop offset="0%" style="stop-color:rgb(255,182,193);stop-opacity:1" />
                <stop offset="100%" style="stop-color:rgb(173,216,230);stop-opacity:1" />
            `;
            defs.appendChild(gradient);
            svg.appendChild(defs);

            for (var i = 0; i < 100; i++) {
                svg.appendChild(createSinusLine(i * 10));
            }

            document.getElementById("svgContainer").appendChild(svg);
        }

        createSVG();
    }, []);

    return <div id="svgContainer">{children}</div>;
};

export default SvgBackground;
