import Layout from "../components/Layout";
import React from "react";

const Contribute = () => (
  <Layout>
    <h1 className="my-4 underline text-secondary">(c)ontribute</h1>
    <div className="text-justify decorate-links">
      <p>
        ETHBerlin³ is a hackathon and cultural festival that is entirely
        organized by the Berlin Ethereum, Cosmos, and Polkadot community. We are
        neither seeking profits nor are a professional event-production company.
        Everything we create during the event is entirely ideated by our friends
        and contributors, and the whole event is only made possible by the
        countless volunteers that make it happen.
      </p>
      <p>Do you want to contribute to ETHBerlin³, too? Here are the options.</p>
      <h2 className="text-2xl font-bold mt-8">Volunteer</h2>
      <p>
        Our volunteers are the super-glue that hold all the pieces of the event
        together. You will assist with setup of the venue space, handling
        registrations, organizing swag, and answering all the questions that
        hackers may have.
      </p>
      <p className="text-center">
        <span className="fake-delete text-gray-400">APPLY AS A VOLUNTEER</span> CLOSED.
      </p>

      <h2 className="text-2xl font-bold mt-8">Mentor</h2>
      <p>
        Many hackers at ETHBerlin³ are newcomers to the space. As a mentor, you
        share your extensive knowledge about infrastructure, protocols,
        decentralized applications, smart contracts, crypto-economics, security,
        privacy, product design, strategy or other magic skills with the
        participants of the hackathon.
      </p>
      <p>
        Mentors can be reached through an internal ticketing system and will be
        easy to identify by their special swag.
      </p>
      <p className="text-center">
        <span className="fake-delete text-gray-400">APPLY AS A MENTOR</span> CLOSED.
      </p>

      <h2 className="text-2xl font-bold mt-8">Sponsor</h2>
      <p>
        ETHBerlin³ is and has always been a non-profit event without any venture
        capital or company backing. If you want to financially support the event
        through sponsorships or donations, please message us at{" "}
        <a href="mailto:sponsors@ethberlin.org" target="_blank">sponsors@ethberlin.org</a>.
      </p>
      <p>
        The sponsorship deck is available{" "}
        <a href="https://ethberlin.ooo/sponsor.pdf" target="_blank">here.</a>
      </p>
      <p>
        As an acknowledged German non-profit entity we are entitled to issue
        donation receipts.
      </p>

      <h2 className="text-2xl font-bold mt-8">Other Opportunities</h2>
      <p>
        There are many more opportunities to contribute. We encourage everyone
        to be creative and create experiences that we can host during the event.
        Do you have an idea? Propose it directly to our experiences team by
        emailing them to{" "}
        <a href="mailto:experiences@ethberlin.org" target="_blank">experiences@ethberlin.org</a>
        .
      </p>
      <p>
        Note that this year ETHBerlin will have no conference track and we will
        only have a selected amount of speakers and workshops on an invite-only
        basis. If you are looking for speaking opportunities, there will be
        plenty available during{" "}
        <a href="https://blockchainweek.berlin" target="_blank">Berlin Blockchain Week</a>, e.g.,
        at the <a href="https://github.com/ChainAgnostic/Gatherings/tree/main/2022-09-15-BLN-blockchainweek.berlin" target="_blank">CASA gathering</a>,
        DAppCon, DuneCon,
        <a href="https://ethereum-magicians.org/t/eth-station-upcoming-event-in-berlin-call-for-action/10415" target="_blank">ETH Station (Ethereum Magicians)</a>
        or the EVM Summit.
      </p>
    </div>
  </Layout>
);

export default Contribute;
