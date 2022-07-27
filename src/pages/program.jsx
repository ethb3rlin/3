import Layout from "../components/Layout";
import React from "react";

const Program = () => (
  <Layout>
    <h1 className="my-4 underline text-berlin-yellow">(h)ack</h1>
    <div className="text-gray-50 text-justify decorate-links">
      <p>
        ETHBerlin³ is and has always been a hackathon first. By giving attendees
        the space and time to unleash their entire creativity for 48 hours, we
        encourage everyone to iterate fast on their ideas without the need to
        worry about anything. It's both an educational event for people that
        want to learn more about new technologies and a birthplace for new
        projects, collectives, and organizations. We try to bring together
        people that won't meet elsewhere to work on ideas they don't have time
        for otherwise. This year, we explicetly not only to invite developers,
        but every profession that's involved to build incredible projects.
      </p>

      <p>
        That said, ETHBerlin³ is not a conference. There are no general
        attendence tickets. All participants have an active role, such as
        hacker, mentor, volunteer, or judge. If you want to hack, apply for
        a hacker ticket by filling out the{" "}
        <a href="https://office.ethberl.in/form/#/2/form/view/Eb09ZMX-zPLH4GFYn8vM3yoNbZoGPxrVW1dPxUy37sg/embed/">
          hacker application
        </a>
        .
      </p>

      <p>
        Note: With the term "hacker" we include all people that make up an
        amazing hackathon team: the coders, the strategists, the creatives, the
        visionaries, and many more.
      </p>

      <p>
        To ease travel planning, we will send out confirmations every other week
        to approved hackers. The hacker applications close on August 7, 2022.
        After that date, it will not possible to apply for any further tickets.
      </p>
    </div>
  </Layout>
);

export default Program;
