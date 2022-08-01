import React, { useState } from "react";
import EthBerlinLogo from "./EthBerlinLogo";
import { RandomReveal } from "react-random-reveal";

const Sidebar = ({ className, hideLogo }) => {
  return (
    <div
      className={`h-screen flex flex-col py-8 px-6 font-w95 fixed w-60 left-0 top-0 text-berlin-yellow ${className}`}
    >
      <a
        style={{ textDecoration: "none" }}
        href="/"
        className={`${hideLogo && "invisible"}`}
      >
        <EthBerlinLogo titleClassName="text-5xl" subtitleClassName="" />
      </a>
      <nav className="flex flex-col mt-16 text-xl">
        <a className="my-2" href="/about">
          (a)bout
        </a>
        <a className="my-2" href="/hack">
          {" "}
          (h)ack
        </a>
        <a className="my-2" href="/contribute">
          (c)ontribute
        </a>
        <a className="my-2" href="/program">
          {" "}
          (p)rogram
        </a>
        <a className="my-2" href="/sponsors">
          {" "}
          (s)ponsors
        </a>
        <a className="my-2" href="/manifesto">
          (m)anifesto
        </a>
      </nav>
      <div className="mt-auto">
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
