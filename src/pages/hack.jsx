import Layout from "../components/Layout";
import React from "react";

const Hack = () => (
  <Layout>
    <h1 className="my-4 underline text-secondary">(h)ack</h1>
    <div className="text-gray-50 text-justify decorate-links">
      <p>
        ETHBerlin³ is and has always been a hackathon first. By giving attendees
        the space and time to unleash their entire creativity for 48 hours, we
        encourage everyone to iterate fast on their ideas without the need to
        worry about anything. It's both an educational event for people that
        want to learn more about new technologies and a sprouting place for new
        projects, collectives, and organizations. We try to bring together
        people that won't meet elsewhere to work on ideas they don't have time
        for otherwise. We explicitly not only invite developers, but every
        profession that's involved in building incredible projects.
      </p>
      <p>
        That said, ETHBerlin³ is not a conference. There are no general
        attendance tickets. All participants have an active role, such as
        hacker, mentor, volunteer, or judge.
      </p>
      <p className="text-center">
        <a href="https://office.ethberl.in/form/#/2/form/view/Eb09ZMX-zPLH4GFYn8vM3yoNbZoGPxrVW1dPxUy37sg/embed/" target="_blank">
          APPLY AS A HACKER
        </a>
        {" "}
        BEFORE AUG/16
      </p>
      <p>
        To ease travel planning, we will send out confirmations every other week
        to approved hackers. Already received your hacker voucher? Make sure to
        {" "}
        <a href="https://ticketh.xyz/ethberlin/3/" target="_blank">
          redeem it before it expires
        </a>! Once, you redeemed your ticket,
        {" "}
        <a href="https://matrix.to/#/%23ethberlin:matrix.org" target="_blank">
          join the official matrix space
        </a>, and read on!
      </p>
      <p className="text-center">
        <a href="https://github.com/ethb3rlin/find-a-team" target="_blank">
          FIND A TEAM
        </a>,
        {" "}
        <a href="https://office.ethberl.in/sheet/#/2/sheet/edit/QwTrwOKdKS3FBRLPQp3BWNBM/" target="_blank">
          COUCH SURFING
        </a>,
        {" "}
        <a href="https://github.com/ethb3rlin/sponsor-bounties" target="_blank">
          SPONSOR BOUNTIES
        </a>
      </p>
      <p>
        Note: With the term "hacker" we include all people that make up an
        amazing hackathon team: the coders, the strategists, the creatives, the
        visionaries, and many more. Give it a try!
      </p>
    </div>
  </Layout>
);

export default Hack;
