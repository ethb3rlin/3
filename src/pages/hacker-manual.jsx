import Layout from "../components/Layout";
import React from "react";
import VenueMapModal from "../components/VenueMapModal";
import groundFloor from "../images/groundFloor.png";
import thirdFloor from "../images/thirdFloor.png";
import firstFloor from "../images/firstFloor.png";
import secondFloor from "../images/secondFloor.png";
import fifthFloor from "../images/fifthFloor.png";
import "../styles/rooms/fifthFloor.css";

const LocationButton = ({ loc }) => {
  return (
    <button
      className={`text-sm text-berlin-yellow`}
      onClick={() => {
        loc.handler();
      }}
    >
      <span className="align-middle">
        <span class="material-symbols-outlined text-sm mr-0.5 ml-1">
          my_location
        </span>
      </span>
      <span className="underline">{loc.name}</span>
    </button>
  );
};

const HackerManual = () => {
  const [activeMapName, setActiveMapName] = React.useState("");
  const [activeMap, setActiveMap] = React.useState("");
  const [activeRoomClass, setActiveRoomClass] = React.useState("");
  const [isMapModalOpen, setIsMapModalOpen] = React.useState(false);

  const handleCloseModal = (e) => {
    e.stopPropagation();
    setIsMapModalOpen(false);
  };
  const handleGroundFloor = () => {
    setActiveMap(groundFloor);
    setActiveMapName("Ground Floor / Floor 0");
  };

  const handleFirstFloor = () => {
    setActiveMap(firstFloor);
    setActiveMapName("First Floor / Floor 1");
  };

  const handleSecondFloor = () => {
    setActiveMap(secondFloor);
    setActiveMapName("Second Floor / Floor 2");
  };

  const handleFifthFloor = () => {
    setActiveMap(fifthFloor);
    setActiveMapName("Fifth Floor / Floor 5");
  };

  const locations = {
    wildenbruch: {
      name: "Wildenbruch",
      handler: () => {
        handleFifthFloor();
        setActiveRoomClass("wildenbruch");
        setIsMapModalOpen(true);
      },
    },
    xrRoom: {
      name: "XR Room",
      handler: () => {
        handleGroundFloor();
        setActiveRoomClass("xrRoom");
        setIsMapModalOpen(true);
      },
    },
    alice: {
      name: "Alice",
      handler: () => {
        handleSecondFloor();
        setActiveRoomClass("alice");
        setIsMapModalOpen(true);
      },
    },
    persius: {
      name: "Persius",
      handler: () => {
        handleFifthFloor();
        setActiveRoomClass("persius");
        setIsMapModalOpen(true);
      },
    },
    cinema: {
      name: "Cinema",
      handler: () => {
        handleFifthFloor();
        setActiveRoomClass("cinema");
        setIsMapModalOpen(true);
      },
    },
    watergate: {
      name: "Watergate",
      handler: () => {
        window
          .open("http://water-gate.de/de/contact/contact.html", "_blank")
          .focus();
      },
    },
    yard1: {
      name: "Yard 1",
      handler: () => {
        handleGroundFloor();
        setActiveRoomClass("yard1");
        setIsMapModalOpen(true);
      },
    },
  };

  return (
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
              <a
                href="https://github.com/ethb3rlin/find-a-team"
                target="_blank"
              >
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
            Brandt" (BER) and is well connected with railway. You can take a
            train from European cities such as Amsterdam and Paris to travel
            with the convenience of comfortable high-speed trains with internet
            access, avoid the long security lines, missing luggages, and
            decrease your CO2 footprint. Check the{" "}
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
            longer than just a few days, you might want to consider renting a
            bike from <a href="https://swapfiets.de/en-DE/berlin">Swapfiets</a>.
            You will also find many scooters and bikes that you can grab around
            the city.
          </p>
          <p>
            On the <a href="https://www.jelbi.de/en/home/">Jelbi App</a> you can
            conveniently find the public transportation tickets and info as well
            as carsharing, scooters, bikes etc.
          </p>
          <h3 className="text-xl">Accomodation</h3>
          <p>
            The hackathon has a nap room where you can rest, but not make it
            your home. Beanbags are provided, but sleeping bags are not allowed.
            If you want a good sleep, then you need to find somewhere else.
          </p>
          <p>
            Join the couchsurfing chat if you are offering or looking for a
            couch:{" "}
            <a href="https://matrix.to/#/#couchsurfing:tchncs.de">
              #couchsurfing
            </a>{" "}
            (Matrix)
          </p>
          <p>
            Aside from hotels and AirBnbs, you can try to find someone in Berlin
            renting out temporarily for cheaper options. You can check{" "}
            <a href="https://www.wg-gesucht.de/en/">WG-Gesucht</a> and Facebook
            groups for offers and can place your own request post there.
            However, please be wary of the risks and potential scams.
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
            The only official communication channel is the ETHBerlin Matrix
            space. Use it to connect with hackers and mentors, and to get
            updates from the organizers throughout the hackathon:{" "}
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
            <li>
              You must be at ETHBerlin to work on a project for submission
            </li>
            <li>
              Your hack must be related to decentralization, cryptography, or
              privacy
            </li>
            <li>
              You can plan ahead of time, but all code for your project has to
              be written during the event
            </li>
            <li>You cannot use another team's source code</li>
            <li>
              The decision of judges is final for determining prizes and awards
            </li>
            <li>
              Please comply with all instructions from ETHBerlin organizers
            </li>
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
            encourage the usage of the cards and to simplify logistics, all
            cards come pre-charged with Goerli and Sepolia Testnet Ether!
          </p>
          <p>
            The public addresses for the handed out EtherCards are available on
            Github:{" "}
            <a href="https://github.com/ethb3rlin/attendees" target="_blank">
              github.com/ethb3rlin/attendees
            </a>
          </p>
          <p>
            You can use it for your hacks, drop funny tokens to these accounts
            or use it for voting systems where only participants can vote. Be
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
            track will be judged by everyone attending the event. There will be
            no pitches and no judges. All the attendees can vote using their
            EtherCards.
          </p>
          <p>
            The winning project will be presenting at the closing ceremony and
            the prize is 10000 DAI. There is only one.
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
              Topics: Protocols, Networks, Infrastructure, Developer Tools,
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
              <span className="fake-bold">Best Smart Contracts</span>:
              outstanding smart contract code quality and documentation.
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
            Ooops! You had an amazing idea, but now you are stuck? No worries,
            our experienced mentors will help you as best as they can. And
            here's how to get in touch:
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
              <a href="https://matrix.to/#/#mentors:tchncs.de">
                Ask-our-mentors
              </a>{" "}
              channel.
            </li>
            <li>
              Spot our mentors at the venue! They are wearing yellow t-shirts
              and mentor buttons!
            </li>
          </ul>
        </div>
        <div className="flex justify-center">
          <div className="border-b-[1px] mb-8 mt-4 border-berlin-yellow opacity-40 w-full"></div>
        </div>

        <div id="submissions">
          <h2 className="text-2xl font-bold">Submissions</h2>
          <p>
            You have to register and create your project at{" "}
            <a href="https://ethberlin.devfolio.co/" target="_blank">
              ethberlin.devfolio.co
            </a>{" "}
            for submission before Sunday, 11am.
          </p>
          <p>
            Make sure to provide a link to your open-source repository, a video
            or a demo, and if applicable, the contract address(es) of your
            deployed application, either on a testnet of your choice or mainnet
            of a platform of choice.
          </p>
          <p>
            All submitted projects will be eligible for the main hackathon
            prize. In addition, you have to select a category (track), which you
            would like to pitch for, and up to two meta awards.
          </p>
          <p>Don't miss the deadline! Sunday 11am!</p>
        </div>
        <div className="flex justify-center">
          <div className="border-b-[1px] mb-8 mt-4 border-berlin-yellow opacity-40 w-full"></div>
        </div>
        <div id="judging">
          <h2 className="text-2xl font-bold">Judging</h2>
          <p>
            You can find the prizes and bounties in the{" "}
            <a href="#prizes-bounties">above section</a>.
          </p>
          <p>
            This year, we will use a different platform for your submissions. We
            decided not to use devpost for this edition, since they are sadly
            excluding participation from some regions by default. This
            discriminatory and overly compliant behavior is kind of a "no" for
            us, so instead we shall be collaborating with the much more
            decentralised crew at{" "}
            <a href="https://devfolio.co/home/" target="_blank" rel="noopener">
              Devfolio
            </a>
            .
          </p>

          <p>
            We aim to continuously improve the process. This is why this year we
            will have three different approaches to judging:
          </p>

          <ul>
            <li>
              "Traditional judging": Judges watch live pitches & Judges check
              submissions async digitally
            </li>
            <li>Community judging powered by quadratic voting</li>
          </ul>
          <p>
            Overall, we also want to increase the transparency of the judging.
            This is why all judge voting sheets will be made publicly available
            after the winning ceremony.
          </p>
          <p>
            Judging will take place on Sunday 18th September and the judges will
            be reviewing project submissions, and watching pitches, from the
            11am deadline until just before the closing ceremony. Note: we will
            also be shuffling the judging teams halfway through just to make
            sure there is no relative bias.
          </p>

          <p>
            The track specific judges will watch live pitches, while the judges
            allocated to the meta awards will review the submissions digitally.
            There will be 24 track judges (8 groups of three), and each group
            will include one technical person, one product/wildcard and one
            business/VC judge.
          </p>

          <p>
            As mentioned above, the meta specific judges will review submissions
            digitally and there will be two pairs of judges per meta award.
          </p>

          <p>
            The judges will be reviewing each submission with the following
            criteria in mind.
          </p>

          <ul>
            <li>
              Technicality: How hard was it to build this and how does the
              quality of the codebase compare? Originality: Is this something
              completely new or are there already projects with grant funding
              working on a similar scope?
            </li>
            <li>
              Practicality: How would this submission survive in the real world,
              outside of the crypto community? Or, if the project were to be
              specifically targeted to the crypto community, how correctly
              targeted is it? WOW Factor: What else is there about the
              submission? Has this project and/or team defied expectations,
              based on timing, efforts, etc.?
            </li>
          </ul>
        </div>
        <div className="flex justify-center">
          <div className="border-b-[1px] mb-8 mt-4 border-berlin-yellow opacity-40 w-full"></div>
        </div>
        <div id="experiences">
          <h2 className="text-2xl font-bold">Experiences</h2>
          <p>
            ETHBerlin is a hackathon first but not a hackathon only. We have
            different experiences for our hackers to enjoy during the weeekend:
          </p>
          <ul>
            <li>
              <b>Merkle Root: Berlin</b>{" "}
              <LocationButton loc={locations.wildenbruch} />
              <div>
                Art exhibition curated by Stina Gustafsson and María Paula
                Fernández.
              </div>
              <ul className="mt-2">
                <li className="mb-1">Friday: 19:00-23:59</li>
                <li className="mb-1">
                  Saturday: 11:00-23:59 for hackers, 13:00-17:00 for public.
                  Public tickets available{" "}
                  <a
                    href="https://www.eventbrite.com/e/merkle-root-berlin-tickets-415231547737"
                    target="_blank"
                    rel="noopener"
                  >
                    here
                  </a>
                  .
                </li>
                <li className="mb-1">Sunday 11:00-15:00</li>
              </ul>
            </li>
            <li>
              <b>Crypto Winter</b>
              <LocationButton loc={locations.xrRoom} />
              <div>
                Audio Visual Installation by Zan Lyons and Alec Empire (Atari
                Teenage Riot)
              </div>
              <ul>
                <li>All Weekend</li>
              </ul>
            </li>
            <li>
              <b>No time to DAI</b>
              <LocationButton loc={locations.alice} />
              <div>
                Escape Room and <a href="https://ethberlin3.dist0rtion.com" target="_blank> Treasure Hunt </a>
                by the Social Dist0rtion Protocol                
              </div>
              <ul>
                <li>Starting from Saturday</li>
              </ul>
            </li>
            <li>
              <b>ETHBerlin³ Mind Spa by Rawciousness</b>
              <LocationButton loc={locations.persius} />
              <div>
                A futuristic "mind" spa workshop guided by Grigoris Grigoriou
                for deep relaxation and journey to your inner dimensions.
              </div>
              <ul>
                <li>Saturday 18:00 until late</li>
              </ul>
            </li>
            <li>
              <b>Joy Space Zen Den</b>
              <div>
                A space to rest and regenerate with holistic wellness &
                mindfulness experiences.
              </div>
              <LocationButton loc={locations.persius} />
              <ul className="ml-2">
                <div className="mt-1">Saturday</div>
                <li className="mb-1">11:00 - Yoga with Luisa</li>
                <li className="mb-1">
                  13:00 - Meditation + Breathwork with Nadeya
                </li>
                <li className="mb-1">
                  15:00 - 8OS Movement Practice with Dmitry (2HR)
                </li>
                <li className="mb-1">17:00 - Yin Yoga with Luisa</li>
                <li className="mb-1">
                  18:00 - Meditation + Breathwork with Nadeya
                </li>
                <li>
                  Individual Sessions:
                  <li className="mb-1">
                    10:00-14:00 - Seated Massage with Genevieve
                  </li>
                  <li className="mb-1">
                    14:00-18:00 - Individual Reiki with Elia
                  </li>
                </li>
                <div>Sunday</div>
                <li className="mb-1">
                  11:00 - Functional Vinyasa with Genevieve
                </li>
                <li className="mb-1">
                  12:00 - Meditation & Breathwork or Strecthing with Nadeya
                </li>
              </ul>
            </li>
            <li className="mt-6">
              <b>Relax-Sleep-Code in the Cinema</b>
              <LocationButton loc={locations.cinema} />
            </li>
            <li>
              <b>Chess Club</b>
              <LocationButton loc={locations.yard1} />
              <div>Show off your chess skills in our dedicated area</div>
              <ul>
                <li>Saturday from 15:00</li>
              </ul>
            </li>
            <li>
              <b>Graffiti Art Collab</b>
              <div>a collaborative art space</div>
            </li>
          </ul>
        </div>
        <div className="flex justify-center">
          <div className="border-b-[1px] mb-8 mt-4 border-berlin-yellow opacity-40 w-full"></div>
        </div>
        <div id="afterparty" className="">
          <h2 className="text-2xl font-bold">Afterparty</h2>
          <LocationButton loc={locations.watergate} />
          <p>
            What else is there to be done after 50 hours of hacking? Right, the
            afterparty! This year we are celebrating our achievements at the
            Watergate; doors: 21:00.
          </p>
          <p>
            You will receive an afterparty wristband during the hackathon
            registration. If you don't want to or cannot attend on Sunday
            evening, you can share it with your friends. There will be no
            additional tickets or guest lists!
          </p>
        </div>
      </div>
      <VenueMapModal
        isOpen={isMapModalOpen}
        handleCloseModal={handleCloseModal}
        activeMapName={activeMapName}
        activeMap={activeMap}
        activeRoomClass={activeRoomClass}
      />
    </Layout>
  );
};

export default HackerManual;
