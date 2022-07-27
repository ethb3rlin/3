import React, { useState } from "react";
import EthBerlinLogo from "./EthBerlinLogo";
import { RandomReveal } from "react-random-reveal";

const Sidebar = ({ className }) => {
  // const [aboutText, setAboutText] = useState();
  // const letterDomain = "abcdefghijklmnopqrstuvwxyz#%&^+=-"; //You can customize what letters it will cycle through
  // var title = "(a)bout"; // Your text goes here
  // var speed = 1000; // ms per frame
  // const frames = 2; // frames per step. Must be >2

  // var titleLength = title.length;
  // let completedLength = 0;
  // var fixed = "";
  // const totalFrames = titleLength * frames + 1;

  // let currFrame = 0;

  // function generateFrame() {
  //   setTimeout(() => {
  //     const randPart = generateRandPart(titleLength - completedLength);
  //     if (currFrame % frames === 0) {
  //       completedLength++;
  //       fixed = fixed + title.charAt(completedLength - 1);
  //     }
  //     const result = fixed + randPart;
  //     return result;
  //   }, speed)

  // }

  // function generateRandPart(length) {
  //   let randTextBlock = "";
  //   for (let i = 0; i < length; i++) {
  //     const rand = Math.floor(letterDomain.length * Math.random());
  //     const randLetter = letterDomain.charAt(rand);
  //     randTextBlock = randTextBlock + randLetter;
  //   }
  //   return randTextBlock;
  // }

  return (
    <div
      className={`h-screen flex flex-col py-8 px-6 font-w95 fixed w-60 left-0 text-berlin-yellow ${className}`}
    >
      <EthBerlinLogo titleClassName="text-5xl" subtitleClassName="mt-1" />
      <nav className="flex flex-col mt-16 text-xl">
        <a className="my-2" href="/about">
          (a)bout
        </a>
        <a className="my-2" href="/schedule">
          {" "}
          (s)chedule
        </a>
        <a className="my-2"> (p)hotos</a>
        <a className="my-2"> ($)ponsor</a>
        <a className="my-2"> (b)log</a>
      </nav>
      <div className="mt-auto">
        <div className="my-2">
          read our{" "}
          <a className="underline" href="/manifesto">
            hacker manifesto
          </a>
        </div>
        <div className="my-2">
          apply to{" "}
          <a
            className="underline"
            href="https://office.ethberl.in/form/#/2/form/view/Eb09ZMX-zPLH4GFYn8vM3yoNbZoGPxrVW1dPxUy37sg/embed/"
            target="_blank"
            rel="noopener"
          >
            hack
          </a>
          ,{" "}
          <a
            className="underline"
            target="_blank"
            rel="noopener"
            href="https://office.ethberl.in/form/#/2/form/view/mX4c4Fi7V4wNHZX32D20RUiXTRfWV+ogehxpQkcxxH8/embed/"
          >
            volunteer
          </a>
          ,{" "}
          <a
            className="underline"
            target="_blank"
            rel="noopener"
            href="https://office.ethberl.in/form/#/2/form/view/YcBSf40HIEMYb04C4-LpA2kh2+NzeXj0EBppBYwYVmo/embed/"
          >
            mentor
          </a>
        </div>
        <div className="my-2">
          join our{" "}
          <a
            className="underline"
            href="https://matrix.to/#/%23ethberlin:matrix.org"
            target="_blank"
            rel="noopener"
          >
            matrix space
          </a>{" "}
          or{" "}
          <a
            className="underline"
            href="mailto:henlo@ethberlin.ooo"
            target="_blank"
            rel="noopener"
          >
            e-mail us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
