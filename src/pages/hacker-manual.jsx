import Layout from "../components/Layout";
import React from "react";

const About = () => (
  <Layout>
    <h1 className="my-4 underline text-secondary">(h)acker manual</h1>
    <div className="text-justify decorate-links">
      <p>This section aims to help you better prepare for the hackathon.</p>
      <div className="mb-16">
        <h3 className="text-xl">TL;DR</h3>
        <ul>
          <li>
            Join the conversation on Matrix:{" "}
            <a
              href="https://matrix.to/#/%23ethberlin:matrix.org"
              target="_blank"
            >
              #ethberlin:matrix.org
            </a>
          </li>
          <li>
            Find a team on Github:{" "}
            <a href="https://github.com/ethb3rlin/find-a-team" target="_blank">
              github.com/ethb3rlin/find-a-team
            </a>
          </li>
          <li>
            Bookmark the Mentor Helpdesk:{" "}
            <a href="https://ask.ethberlin.ooo" target="_blank">
              ask.ethberlin.ooo
            </a>
          </li>
        </ul>
      </div>
      <h2 className="text-2xl font-bold">Overview</h2>
      <div className="mb-8">
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
            <a href="#ethercards"> EtherCards with Goerli ETH </a>
          </li>
          <li>
            <a href="#prizes-bounties"> Prizes and Bounties </a>
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
      <div className="flex justify-center">
        <div className="border-b-[1px] mb-8 mt-8 border-berlin-yellow opacity-40 w-full"></div>
      </div>
      <div id="travel" className="mt-8">
        <h2 className="text-2xl font-bold font-bold">
          Travel and Accommodation
        </h2>
        <h3 className="text-xl">Travel to Berlin</h3>
        <p>
          Berlin has one airport called Berlin Brandenburg Airport "Willy
          Brandt" (BER) and is well connected with railway. You can take a train
          from European cities such as Amsterdam and Paris to travel with the
          convenience of comfortable high-speed trains with internet access,
          avoid the long security lines, missing luggages, and decrease your CO2
          footprint. Check the{" "}
          <a
            href="https://www.bahn.com/en"
            rel="noreferrer noopener"
            target="_blank"
          >
            Deutsche Bahn
          </a>{" "}
          website for routes.
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
          </a>{" "}
          (Matrix)
        </p>
        <p>
          Aside from hotels and AirBnbs, you can try to find someone in Berlin
          renting out temporarily for cheaper options. You can check{" "}
          <a href="https://www.wg-gesucht.de/en/">WG-Gesucht</a> and Facebook
          groups for offers and can place your own request post there. However,
          please be wary of the risks and potential scams.
        </p>
        <p>
          We recommend the districts Treptow, Kreuzberg, Neuk&ouml;lln, or
          Friedrichshain due to their proximity to the venue.
        </p>
      </div>
      <div className="flex justify-center">
        <div className="border-b-[1px] mb-8 mt-4 border-berlin-yellow opacity-40 w-full"></div>
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
          </a>{" "}
          or join the Hacker Matchmaking session on Friday after the opening
          ceremony.
        </p>
      </div>
      <div className="flex justify-center">
        <div className="border-b-[1px] mb-8 mt-4 border-berlin-yellow opacity-40 w-full"></div>
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
      </div>
      <div className="flex justify-center">
        <div className="border-b-[1px] mb-8 mt-4 border-berlin-yellow opacity-40 w-full"></div>
      </div>
      <div id="food">
        <h2 className="text-2xl font-bold">Food and Drinks</h2>
        <p>
          ETHBerlin will cover all meals and drinks for the entire Hackathon,
          and conference coffee breaks. There will be vegan and vegetarian
          options provided. Just come with an open mind, a knowledge-thirsty
          brain and enthusiasm. Meal and snack times will be on the{" "}
          <a href="/program">program</a>.
        </p>
      </div>
      <div className="flex justify-center">
        <div className="border-b-[1px] mb-8 mt-4 border-berlin-yellow opacity-40 w-full"></div>
      </div>
      <div id="hack">
        <h2 className="text-2xl font-bold">Hacking and Rules</h2>
        <p>
          Hacker teams are made up of maximum of 5 people. You can find some
          rules and resources useful while you are hacking here.
        </p>
        <h3 className="text-xl">Hacking Rules</h3>
        <ul>
          <li>You must be at ETHBerlin to work on a project for submission</li>
          <li>
            Your hack must be related to decentralization, cryptography, or
            privacy
          </li>
          <li>
            You can plan ahead of time, but all code for your project has to be
            written during the event
          </li>
          <li>You cannot use another team's source code</li>
          <li>
            The decision of judges is final for determining prizes and awards
          </li>
          <li>Please comply with all instructions from ETHBerlin organizers</li>
          <li>
            Please respect our <a href="/code-of-conduct">Code of Conduct</a>!
          </li>
        </ul>
        <h3 className="text-xl">Minimum requirements to be judged</h3>
        <ul>
          <li>A link to the open-source code must be provided</li>
          <li>A short presentation file must describe your project</li>
          <li>
            If applicable, the contract address(es) of your deployed demo must
            be provided, either on a testnet of your choice or mainnet of a
            platform of choice.
          </li>
        </ul>
      </div>
      <div className="flex justify-center">
        <div className="border-b-[1px] mb-8 mt-4 border-berlin-yellow opacity-40 w-full"></div>
      </div>
      <div id="ethercards">
        <h2 className="text-2xl font-bold">EtherCards with Goerli ETH</h2>
        <p>
          All participants will receive ETHBerlin EtherCards for hacking. To
          encourage the usage of the cards and to simplify logistics, all cards
          come pre-charged with Goerli and Sepolia Testnet Ether!
        </p>
        <p>
          The public addresses for the handed out EtherCards are available on
          Github:{" "}
          <a href="https://github.com/ethb3rlin/attendees" target="_blank">
            github.com/ethb3rlin/attendees
          </a>
        </p>
        <p>
          You can use it for your hacks, drop funny tokens to these accounts or
          use it for voting systems where only participants can vote. Be
          creative and let us know how you used this list!
        </p>
      </div>
      <div className="flex justify-center">
        <div className="border-b-[1px] mb-8 mt-4 border-berlin-yellow opacity-40 w-full"></div>
      </div>
      <div id="prizes-bounties">
        <h2 className="text-2xl font-bold">Prizes and Bounties</h2>
        <p>
          This year we are going to try something different. Please study the
          following section carefully.
        </p>
        <h3 className="text-xl">Open Track</h3>
        <p>
          The open-track prize is the main hackathon award. Every project is
          eligible, given they are respecting the hackathon rules. The open
          track will be judged by everyone attending the event. There will be no
          pitches and no judges. All the attendees can vote using their
          EtherCards.
        </p>
        <p>
          The winning project will be presenting at the closing ceremony and the
          prize is 10000 DAI. There is only one.
        </p>
        <h3 className="text-xl">Track Awards</h3>
        <p>
          Track awards are based on covering specific topics. Each project can
          only submit to one track maximum. It is not possible to apply for
          multiple tracks!
        </p>
        <p>
          One team member pitches in front of the judges. The domain experts
          will evaluate the projects according to defined parameters. Judges
          will also review code and ensure hackathon rules are respected.
        </p>
        <p>These are the four tracks:</p>
        <ul>
          <li>
            <span className="fake-bold">
              Counter-Surveillance: Security- and privacy-enhancing projects.
            </span>{" "}
            Topics: Privacy, Anonymity, Anti-identity, Security, Encryption.
          </li>
          <li>
            <span className="fake-bold">
              Freedom to Transact: Financial independence from institutions.
            </span>{" "}
            Topics: Dentralized Finance, Unstoppable Applications,
            Crypto-Economics.
          </li>
          <li>
            <span className="fake-bold">
              Even the Odds: Empowering the underprivileged.
            </span>{" "}
            Topcis: Social Justice, Inclusion, Sustainability, Public Goods.
          </li>
          <li>
            <span className="fake-bold">
              Infrastructure: Providing distributed public goods.
            </span>{" "}
            Topcis: Protocols, Networks, Infrastructure, Developer Tools,
            Hardware.
          </li>
        </ul>
        <p>
          The winning projects will be presenting at the closing ceremony and
          the prize is 7000 DAI for each track. There is only one per track,
          four in total.
        </p>
        <h3 className="text-xl">Meta Awards</h3>
        <p>
          Meta awards reward certain aspects of your project. Every project is
          eligible, given you are respecting the hackathon rules. Projects
          should indicate which meta-award they think they qualify for in the
          submission form.
        </p>
        <p>
          There will be no pitches and our judges will review submissions
          asynchronously during the track award pitching.
        </p>
        <p>These are the three meta awards:</p>
        <ul>
          <li>
            <span className="fake-bold">Best Smart Contracts</span>: outstanding
            smart contract code quality and documentation.
          </li>
          <li>
            <span className="fake-bold">Best Design</span>: outstanding user
            interfaces, graphics and experience.
          </li>
          <li>
            <span className="fake-bold">Best Cryptography</span>: outstanding
            encryption security.
          </li>
        </ul>
        <p>
          The winning projects will be presenting at the closing ceremony and
          the prize is 6000 DAI for each award. There is only one per award,
          three in total.
        </p>
        <h3 className="text-xl">Sponsor Bounties</h3>
        <p>
          You can find sponsor bounties{" "}
          <a href="https://github.com/ethb3rlin/sponsor-bounties">
            in this repository
          </a>
          .
        </p>
      </div>
      <div className="flex justify-center">
        <div className="border-b-[1px] mb-8 mt-4 border-berlin-yellow opacity-40 w-full"></div>
      </div>
      <div id="mentors">
        <h2 className="text-2xl font-bold">Getting Help from Mentors</h2>
        <p>
          Ooops! You had an amazing idea, but now you are stuck? No worries, our
          experienced mentors will help you as best as they can. And here's how
          to get in touch:
        </p>
        <ul>
          <li>
            Reach all of our mentors via the simple ticket system, HELPq:{" "}
            <a href="https://ask.ethberlin.ooo" target="_blank">
              ask.ethberlin.ooo
            </a>
          </li>
          <li>
            Discuss your issues in the{" "}
            <a href="https://matrix.to/#/#mentors:tchncs.de">Ask-our-mentors</a>{" "}
            channel.
          </li>
          <li>
            Spot our mentors at the venue! They are wearing yellow t-shirts and
            mentor buttons!
          </li>
        </ul>
      </div>
      <div className="flex justify-center">
        <div className="border-b-[1px] mb-8 mt-4 border-berlin-yellow opacity-40 w-full"></div>
      </div>

      <div id="submissions">
        <h2 className="text-2xl font-bold">Submissions</h2>
        <p>To be announced...</p>
      </div>
      <div className="flex justify-center">
        <div className="border-b-[1px] mb-8 mt-4 border-berlin-yellow opacity-40 w-full"></div>
      </div>
      <div id="judging">
        <h2 className="text-2xl font-bold">Judging</h2>
        <p>To be announced...</p>
      </div>
      <div className="flex justify-center">
        <div className="border-b-[1px] mb-8 mt-4 border-berlin-yellow opacity-40 w-full"></div>
      </div>
      <div id="experiences">
        <h2 className="text-2xl font-bold">Experiences</h2>
        <p>To be announced...</p>
      </div>
      <div className="flex justify-center">
        <div className="border-b-[1px] mb-8 mt-4 border-berlin-yellow opacity-40 w-full"></div>
      </div>
      <div id="afterparty" className="">
        <h2 className="text-2xl font-bold">Afterparty</h2>
        <p>To be announced...</p>
      </div>
    </div>
  </Layout>
);

export default About;
