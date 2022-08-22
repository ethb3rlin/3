import Layout from "../components/Layout";
import React from "react";

const About = () => (
  <Layout>
    <h1 className="my-4 underline text-secondary">(h)acker manual</h1>
    <div className="text-justify decorate-links">
      <p>This section aims to help you better prepare for the hackathon.</p>
      <div className="mb-16">
        <h3 className="text-xl">Before the Hackathon</h3>
        <ul>
          <li>
            <a href="#travel"> Travel and Accomodation</a>
          </li>
          <li>
            <a href="#find-a-team"> Find a Team/Hacker/Idea </a>
          </li>
          <li>
            <a href="#connect">Connect and Chat</a>
          </li>
          <li>
            <a href="#food">Food and Drinks</a>
          </li>
        </ul>
        <h3 className="text-xl">During the Hackathon</h3>
        <ul>
          <li>
            <a href="#hack">Hacking and Rules</a>
          </li>
          <li>
            <a href="#ethercards"> EtherCards with Görli ETH </a>
          </li>
          <li>
            <a href="#prizes-bounties"> Prizes and Bounties </a>
          </li>
          <li>
            <a href="sponsor-resources">Resources from Sponsors</a>
          </li>
          <li>
            <a href="#mentors">Getting Help from Mentors</a>
          </li>
          <li>
            <a href="#submissions">Submissions</a>
          </li>
          <li>
            <a href="#judging">Judging</a>
          </li>
          <li>
            <a href="#experiences">Experiences</a>
          </li>
        </ul>
        <h3 className="text-xl">After the Hackathon</h3>
        <ul>
          <li>
            <a href="#afterparty">Afterparty</a>
          </li>
        </ul>
      </div>
      <div id="travel">
        <h2 className="text-2xl font-bold font-bold">
          Travel and Accommodation
        </h2>
        <h3 className="text-xl">Travel to Berlin</h3>
        <p>
          Berlin has one airport called Berlin Brandenburg Airport and is well
          connected with railway. You can take a train from European cities such
          as Amsterdam and Paris to travel with the convenience of comfortable
          high-speed trains with internet access, avoid the long security lines,
          missing luggages, and decrease your CO2 footprint. Check the{" "}
          <a
            href="https://www.bahn.com/en"
            rel="noreferrer noopener"
            target="_blank"
          >
            Deutsche Bahn website
          </a>{" "}
          for routes.
        </p>
        <h3 className="text-xl">Urban Transport</h3>
        <p>
          Berlin is a bike friendly city. Most of the times the quickest and
          easiest way to getting from A to B is by bike. If you are staying
          longer than just a few days, you might want to consider renting a bike
          from <a href="https://swapfiets.de/en-DE/berlin">Swapfiets</a>. You
          will also find many scooters and bikes that you can grab around the
          city.
        </p>
        <p>
          On the <a href="https://www.jelbi.de/en/home/">Jelbi App</a> you can
          conveniently find the public transportation tickets and info as well
          as carsharing, scooters, bikes etc.
        </p>
        <h3 className="text-xl">Accomodation</h3>
        <p>
          The hackathon has a nap room where you can rest, but not make it your
          home. Beanbags are provided, but sleeping bags are not allowed. If you
          want a good sleep, then you need to find somewhere else.
        </p>
        <p>
          Join the couchsurfing chat if you are offering or looking for a couch:{" "}
          <a href="https://matrix.to/#/#couchsurfing:tchncs.de">
            #couchsurfing
          </a>
        </p>
        <p>
          Aside from hotels and AirBnbs, you can try to find someone in Berlin
          renting out temporarily for cheaper options. You can check{" "}
          <a href="https://www.wg-gesucht.de/en/">WG-Gesucht</a> and Facebook
          groups for offers and can place your own request post there. However,
          please be wary of the risks and potential scams.
        </p>
        <p>
          We recommend the districts Treptow, Kreuzberg, Neukölln, or
          Friedrichshain due to their proximity to the venue.
        </p>
      </div>
      <div id="find-a-team">
        <h2 className="text-2xl font-bold">Find a Team/Hacker/Idea</h2>
        <p>
          Are you missing a team, a hacker, an idea? Or you have an idea that
          can be implemented during the hackathon? Find a match on{" "}
          <a
            href="https://github.com/ethb3rlin/find-a-team"
            rel="noreferrer noopener"
            target="_blank"
          >
            Github
          </a>
          : and/or join the Hacker Matchmaking session on Friday during the
          event.
        </p>
      </div>
      <div id="connect">
        <h2 className="text-2xl font-bold">Connect and Chat</h2>
        <p>
          The only official communication channel is the ETHBerlin Matrix space.
          Use it to connect with hackers and mentors, and to get updates from
          the organizers throughout the hackathon:{" "}
          <a href="https://matrix.to/#/%23ethberlin:matrix.org">
            #ethberlin:matrix.org
          </a>
        </p>
        <p>
          Follow and tag us on Twitter{" "}
          <a href="https://twitter.com/ETHBerlin">@ETHBerlin</a>.
        </p>
      </div>
      <div id="food">
        <h2 className="text-2xl font-bold">Food and Drinks</h2>
        <p>
          ETHBerlin will cover all meals and drinks for the entire Hackathon,
          and conference coffee breaks. Just come with an open mind, a
          knowledge-thirsty brain and enthusiasm.
        </p>
      </div>
      <div id="hack" className="mt-16">
        <h2 className="text-2xl font-bold">Hacking and Rules</h2>
        <p>
          Hacker teams are made up of maximum of 5 people. You can find some
          rules and resources useful while you are hacking here. Sponsors are
          also advised to add their resources and APIs to this document with a{" "}
          <a href="https://github.com/Department-of-Decentralization/3/tree/main/src/pages/hacker-manual.jsx">
            Pull Request
          </a>
        </p>
        <h3 className="text-xl">Hacking Rules</h3>
        <ul>
          <li>You must be at ETHBerlin to work on a project for submission</li>
          <li>Your hack must be related to Ethereum</li>
          <li>
            You can plan ahead of time, but all code for your project has to be
            written during the event
          </li>
          <li>You cannot steal another team's source code</li>
          <li>
            The decision of judges is final for determining prizes and awards
          </li>
          <li>Please comply with all instructions from ETHBerlin organizers</li>
        </ul>
        <h3 className="text-xl">Minimum requirements to be judged</h3>
        <ul>
          <li>A link to the open-source code must be provided</li>
          <li>A short presentation file must describe your project</li>
          <li>
            The contract address(es) of your deployed demo must be provided,
            either on a testnet of your choice or mainnet of a platform of
            choice.
          </li>
        </ul>
      </div>
      <div id="ethercards">
        <h2 className="text-2xl font-bold">EtherCards with Görli ETH</h2>
        <p>
          All participants will receive ETHBerlin EtherCards for hacking. To
          encourage the usage of the cards and to simplify logistics, all cards
          come pre-charged with Görli Testnet Ether!
        </p>
        <p>
          Soon the public keys for the handed out EtherCards will be posted
          here. You can use it for your hacks, drop funny tokens to these
          accounts or use it for voting systems where only participants can
          vote. Be creative and let us know how you used this list!
        </p>
      </div>
      <div id="prizes-bounties">
        <h2 className="text-2xl font-bold">Prizes and Bounties</h2>
        <p>
          What a lame hackathon this could be without any prizes, bounties, and
          an incredible award ceremony. Fear no more, here's the prizes and
          bounties documentation.
        </p>
        <h3 className="text-xl">Prizes</h3>
        <p>There are three different prize categories available</p>
        <ul>
          <li>
            <b>Open Track Prize:</b> This is the main prize of ETHBerlin Zwei.
            There will be 10 winners. The grand bounty will be revealed soon!
          </li>
          <li>
            <b>Sponsor Prizes:</b> Some of ETHBerlin's sponsors have their own
            prize awards. Note that we have no influence on neither the
            challenge nor the judging, this is entirely up to the sponsors.
          </li>
          <li>
            <b>Community Improvement Awards:</b> These are small prizes endowed
            by ETHBerlin Zwei.
          </li>
        </ul>
        <p>
          You can submit your work to multiple prize awards, they are not
          exclusive! For example you can submit your work to the open track
          bounty and a sponsor specific prize, just make sure to submit it
          everywhere where you want to participate.
        </p>
        <h3 className="text-xl">Sponsor Bounties</h3>
        <p>
          You can find or add sponsor bounties{" "}
          <a href="https://github.com/ethb3rlin/sponsor-bounties">
            in this repository
          </a>
          .
        </p>
      </div>
      <div id="sponsor-resources">
        <h2 className="text-2xl font-bold">Resources from Sponsors</h2>
        <p>
          Resources will be gathered here. Please send a{" "}
          <a href="https://github.com/Department-of-Decentralization/3/tree/main/src/pages/hacker-manual.jsx">
            Pull Request
          </a>
          .
        </p>
      </div>
      <div id="mentors">
        <h2 className="text-2xl font-bold">Getting Help from Mentors</h2>
        <p>
          Ooops! You had an amazing idea, but now you are stuck? No worries, our
          experienced mentors will help you as best as they can. And here's how
          to get in touch:
          <ul>
            <li>
              Spot them at the venue! They are wearing yellow t-shirts and
              badges!
            </li>
            <li>
              Discuss your issues in the hackers channel the{" "}
              <a href="https://matrix.to/#/#mentors:tchncs.de">
                Ask-our-mentors
              </a>{" "}
              channel.
            </li>
            <li>
              Reach all of our mentors via the simple ticket system, HELPq.
            </li>
          </ul>
        </p>
      </div>
      <div id="submissions">
        <h2 className="text-2xl font-bold">Submissions</h2>
      </div>
      <div id="judging">
        <h2 className="text-2xl font-bold">Judging</h2>
      </div>
      <div id="experiences">
        <h2 className="text-2xl font-bold">Experiences</h2>
        <p>
          <span className="italic">ETHBerlin Zwei is an experience.</span>{" "}
          <br />
          <br />
          Nevertheless, here's what else you can explore around Factory Berlin
          in-between crisp bottles of Club Mate:
        </p>
      </div>
      <div id="afterparty" className="mt-16">
        <h2 className="text-2xl font-bold">Afterparty</h2>
      </div>
    </div>
  </Layout>
);

export default About;
