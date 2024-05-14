import React from "react";
import Layout from "../components/Layout";
import ETHBerlin from "../components/ETHBerlin";
import VenueMapModal from "../components/VenueMapModal";
import groundFloor from "../images/groundFloor.png";

const Hack = () => {
  const [isMapModalOpen, setIsMapModalOpen] = React.useState(false);

  const handleCloseModal = (e) => {
    e.stopPropagation();
    setIsMapModalOpen(false);
  };

  return (
    <Layout>
      <div className="textbox text-base decorate-links">
        <h1 className="mb-4 font-ocra underline text-berlin-red">
          &lt;&lt;H&lt;ACKER MANUAL
        </h1>
        <p>This section aims to help you to prepare for the hackathon.</p>
        <div className="mb-8">
          <h3 className="text-xl mt-6 font-bold">TL;DR</h3>
          <ul>
            <li>
              Join the conversation on Matrix:{" "}
              <a
                href="https://matrix.to/#/%23ethberlin:dod.ngo"
                target="_blank"
                rel="noreferrer noopener"
              >
                #ethberlin:dod.ngo
              </a>
            </li>
            <li>
              Find a team on GitHub:{" "}
              <a
                href="https://github.com/ethb3rlin/find-a-team"
                target="_blank"
                rel="noreferrer noopener"
              >
                github.com/ethb3rlin/find-a-team
              </a>
            </li>
            <li>
              Register your attendance on Zupass with your ETHBerlin04 email
              address:{" "}
              <a
                href="https://zupass.org"
                target="_blank"
                rel="noreferrer noopener"
              >
                zupass.org
              </a>
            </li>
            {/* @TO DO Link Faucets */}
            {/* @TO DO Link Submissions */}
            <li>
              Visit this page frequently as we update the manual regularly.
            </li>
          </ul>
        </div>
        <h2 className="text-2xl mt-8 font-bold">Overview</h2>
        <div className="mb-8">
          <h3 className="text-xl mt-6">Before the Hackathon</h3>
          <ul>
            <li>
              <a href="#travel">Travel and Accomodation</a>
            </li>
            <li>
              <a href="#find-a-team">Find a Team/Hacker/Idea </a>
            </li>
            <li>
              <a href="#zupass">Generate your Zupass PCD </a>
            </li>
            <li>
              <a href="#connect">Connect and Chat</a>
            </li>
            <li>
              <a href="#food">Food and Drinks</a>
            </li>
          </ul>
          <h3 className="text-xl mt-6">During the Hackathon</h3>
          <ul>
            <li>
              <a href="#hack">Hacking and Rules</a>
            </li>
            <li>
              <a href="#faucets">Faucets for Sepolia and Holesky</a>
            </li>
            <li>
              <a href="#prizes-bounties">Prizes and Bounties </a>
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
          </ul>
          <h3 className="text-xl mt-6">After the Hackathon</h3>
          <ul>
            <li>
              <a href="#voting">Voting</a>
            </li>
          </ul>
        </div>
        <div className="flex justify-center"></div>
        <div id="travel">
          <h2 className="text-2xl mt-8 font-bold">Before the Hackathon</h2>
          <h3 className="text-xl mt-6 mt-4">Travel and Accommodation</h3>
          <h4 className="text-l mt-4 font-bold">Travel to Berlin</h4>
          <p>
            Berlin has one airport called Berlin Brandenburg Airport "Willy
            Brandt" (BER) and is well connected with railway. You can take a
            train from European cities such as Stockholm or Paris to travel with
            the convenience of comfortable high-speed trains with internet
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
          <h4 className="text-l mt-4 font-bold">Urban Transport</h4>
          <p>
            Berlin is a bike friendly city. Most of the times the quickest and
            easiest way to getting from A to B is by bike. If you are staying
            longer than just a few days, you might want to consider renting a
            bike from{" "}
            <a
              href="https://swapfiets.de/en-DE/berlin"
              target="_blank"
              rel="noreferrer noopener"
            >
              Swapfiets
            </a>{" "}
            or buying daily/monthly subscription from{" "}
            <a
              href="https://www.nextbike.de/en/#tariffs"
              target="_blank"
              rel="noreferrer noopener"
            >
              nextbike
            </a>{" "}
            (bike sharing). You will also find many scooters and bikes that you
            can grab around the city. On the{" "}
            <a
              href="https://www.jelbi.de/en/home/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Jelbi App
            </a>{" "}
            you can conveniently find the public transportation tickets and info
            as well as carsharing, scooters, bikes etc.
          </p>
          <h4 className="text-l mt-4 font-bold">Accomodation</h4>

          <p>
            Finding a hotel or other affordable accommodation in Berlin can be
            quite a challenge in itself. Since this year's ETHBerlin is
            coinciding with the{" "}
            <a
              href="https://olympiastadion.berlin/en/term/dfb-pokal-final-2024/"
              target="_blank"
              rel="noreferrer noopener"
            >
              German Cup Final
            </a>{" "}
            and the{" "}
            <a
              href="https://www.euroleaguebasketball.net/euroleague/final-four/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Euroleague Final Four
            </a>
            , it can be particularly difficult to find a place. We recommend you
            to look for a suitable shelter as soon as you receive your hacker
            confirmation! If you haven't booked anything yet, best do so asap.
          </p>

          <p>
            Aside from hotels and Airbnbs, you can check offers on local options
            like{" "}
            <a
              href="https://www.wg-gesucht.de/en/"
              target="_blank"
              rel="noreferrer noopener"
            >
              WG-Gesucht
            </a>{" "}
            and Facebook groups or post your own requests post there. However,
            please be wary of the risks and potential scams. Join our{" "}
            <a
              href="https://matrix.to/#/%23eb4-couches:dod.ngo"
              target="_blank"
              rel="noreferrer noopener"
            >
              #couchsurfing
            </a>{" "}
            chat and fill in the{" "}
            <a
              href="https://office.ethberlin.org/sheet/#/2/sheet/edit/NYEjPNvPzIxa0k5mcXTCZUrH/"
              target="_blank"
              rel="noreferrer noopener"
            >
              coordination sheet
            </a>{" "}
            if you are offering or looking for a place to sleep.
          </p>

          <p>
            Our venue is open 24/2 and welcomes hacking through the night. There
            are many cozy corners with sofas, beanbags etc. However, we still
            would recommend to look for a place to leave your stuff, sleep, and
            take a shower.
          </p>
        </div>
        <div className="flex justify-center"></div>
        <div id="find-a-team">
          <h3 className="text-xl mt-6 font-bold">Find a Team/Hacker/Idea</h3>
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
        <div className="flex justify-center"></div>
        <div id="zupass">
          <h3 className="text-xl mt-6 font-bold">Generate your Zupass PCD</h3>
          <p>
            This year, we have a PCD (proof-carrying data) integration with
            Zupass for ETHBerlin04. You can prove your attendance to the
            hackathon by generating a zero-knowledge proof through the Zupass
            web application.
          </p>
          <p>
            Visit{" "}
            <a
              href="https://zupass.org"
              target="_blank"
              rel="noreferrer noopener"
            >
              zupass.org
            </a>{" "}
            and sing up (or log in) with the same email address you used to
            register for the hackathon. You will find an active ETHBerlin04
            subscription in your account.
          </p>
          <p>
            You will require this PCD for the faucets (if needed) and the final
            submission of your hackathon project as well as voting on other
            people's projects after the hackathon concluded.
          </p>
        </div>
        <div id="connect">
          <h3 className="text-xl mt-6 font-bold">Connect and Chat</h3>
          <p>
            The only official communication channel is the ETHBerlin Matrix
            space. Use it to connect with hackers and mentors, and to get
            updates from the organizers throughout the hackathon:{" "}
            <a
              href="https://matrix.to/#/%23ethberlin:dod.ngo"
              target="_blank"
              rel="noreferrer noopener"
            >
              #ethberlin:dod.ngo
            </a>
          </p>
          <p>There is no Discord or Telegram.</p>
        </div>
        <div className="flex justify-center"></div>
        <div id="food">
          <h3 className="text-xl mt-6 font-bold">Food and Drinks</h3>
          <p>
            As per usual, this one is on us! ETHBerlin will cover all meals and
            drinks for the entire hackathon! This includes breakfasts, lunches,
            dinners, and midnight snacks as well as various soft drinks, mate
            (of course!), water, coffee and beer. In addition to{" "}
            <em>regular</em> food, there will be vegan and vegetarian options
            provided. Just come with an open mind, a knowledge-thirsty brain and
            enthusiasm. Meal and snack times will be on the program.
          </p>
        </div>
        <div id="hack">
          <h2 className="text-2xl mt-8 font-bold">During the Hackathon</h2>
          <h3 className="text-xl mt-6 font-bold">Hacking and Rules</h3>
          <p>Read the fine manual or regret it later.</p>
          <h4 className="text-l mt-4 font-bold">Hacking Rules</h4>
          <ul>
            <li>A team can not be more than five people.</li>
            <li>
              You must be present at the ETHBerlin venue for your project to be
              eligible for submission.
            </li>
            <li>
              You can plan ahead of time, but all code for your project has to
              be written during the event. Code can only be committed after
              hacking officially starts and only until the submission deadline.
            </li>
            <li>You cannot use another team's source code.</li>
            <li>
              The decision of judges is final for determining prizes and awards.
            </li>
            <li>
              Breaking our <a href="/code-of-conduct">Code of Conduct</a> leads
              to the exclusion from the event.
            </li>
          </ul>
          <h4 className="text-l mt-4 font-bold">
            Minimum Submission Requirements
          </h4>
          <ul>
            <li>A link to the open-source code must be provided.</li>
            <li>A short presentation file must describe your project.</li>
            <li>
              If applicable, the contract address(es) of your deployed demo must
              be provided, either on a testnet of your choice or mainnet of a
              platform of choice.
            </li>
          </ul>
        </div>
        <div id="faucets">
          <h3 className="text-xl mt-6 font-bold">
            Faucets for Sepolia and Holesky
          </h3>
          <p>
            Dedicated testnet-token faucets are available for ETHBerlin04
            hackers.
          </p>
          <p>You can receive 500 testnet Ether on Sepolia and Holesky:</p>
          <ul>
            <li>
              Sepolia:{" "}
              <a
                href="https://sepolia.ethberlin.org"
                target="_blank"
                rel="noreferrer noopener"
              >
                sepolia.ethberlin.org
              </a>
            </li>
            <li>
              Holesky:{" "}
              <a
                href="https://holesky.ethberlin.org"
                target="_blank"
                rel="noreferrer noopener"
              >
                holesky.ethberlin.org
              </a>
            </li>
          </ul>
          <p>
            You will have to sign in with Zupass to authorize a faucet drop to
            any of your addresses. Thank you, pk910 &lt;3
          </p>
        </div>
        <div id="prizes-bounties">
          <h3 className="text-xl mt-6 font-bold">Prizes and Bounties</h3>
          <h4 className="text-l mt-4 font-bold">Track Awards</h4>
          <div>
            The track awards are centered around themes that align with our{" "}
            <a href="/manifesto">manifesto</a>, and what we believe the industry
            needs to re-focus on. The winning teams of the track awards receive{" "}
            <strong>7,000 DAI</strong>.
          </div>
          <ul className="mt-2">
            <li>
              <b>Defensive Tooling:</b> This track is the right choice for you
              if you want to hack on tools that enhance security and privacy.
              It's about building projects that prioritize defense,
              decentralization, and resilience to create a more secure and freer
              world.
              <br />
              Think topics like encryption, counter-surveillance, identity
              protection, anonymity, anti-identity, security, local data
              handling, and anything that armors the individual against
              intrusive data collection practices.
            </li>
            <li>
              <b>Freedom to Transact:</b> This track is for you if you want to
              ensure that anyone, anywhere, anytime can facilitate unrestricted
              transactions.
              <br />
              We're looking for projects that enable people to access and send
              money, or value, across borders without restrictions, promoting
              financial inclusion. This track is for those who want to hack on
              peer-to-peer solutions, build censorship-resistant applications,
              and ensure that transactions can be private and secure.
            </li>
            <li>
              <b>Social Technologies:</b> This track is all about platforms and
              tools that enable informed and collective decision-making,
              transparent governance, and collaboration and coordination among
              decentralized communities.
              <br />
              If you want to build credibly neutral systems for voting,
              governance, and social interaction, and systems that counter
              disproportionate influence of centralized powers then this track
              is for you and your team. Other ideas you could hack on are
              consensus-finding algorithms, sybil resistance, and decentralized
              social reputation.
            </li>
            <li>
              <b>Infrastructure:</b> The backbone of the revolution. This track
              is dedicated to the architects and builders laying down the
              underlying infrastructures that robust distributed public goods
              need to run efficiently and reliably.
              <br />
              Projects could include protocol specification and implementations,
              networking, developer tools, and hardware.
            </li>
          </ul>
          <h4 className="text-l mt-4 font-bold">Excellence Awards</h4>
          <div>
            Back by popular demand, please welcome the Excellence Awards. The
            winners of each of these get <strong>5,000 DAI</strong> and these
            are to recognise the following:
          </div>
          <ul className="mt-2">
            <li>
              <b>Best Smart Contracts:</b> Outstanding smart contract code
              quality and documentation, security and gas-optimization.
            </li>
            <li>
              <b>Best Social Impact:</b> Outstanding positive impact on
              underserved communities and society as a whole.
            </li>
            <li>
              <b>Best User Experience:</b> Outstanding user experience that does
              not sacrifice on security, privacy or self-custody.
            </li>
          </ul>
          <h4 className="text-l mt-4 font-bold">
            The <i>Meta</i> Award
          </h4>
          <div className="mt-2">
            We'd like to introduce a new category this year, the Meta Award, as
            an ode to ETHBerlin being powered by many awesome open-source
            projects. So for this one we invite you to go meta by building
            contributions that improve the ETHBerlin experience itself! Projects
            eligible for this award can either pick from our wishlist{" "}
            <i>(coming soon™)</i> of contributions, or can build an entirely new
            thing that they consider to be a positive impact for future versions
            of ETHBerlin. The winner of this track will receive{" "}
            <strong>4,000 DAI</strong>.
          </div>
          <h4 className="text-l mt-4 font-bold">The Hacker's Choice Award</h4>
          <div className="mt-2">
            A prize to be picked by the ETHBerlin hackers. After the hackathon
            weekend, hackers will review all the projects and cast their votes
            for their favorite project. Redistribution of the prize money cannot
            be the essence of the project. The winner of this award will receive{" "}
            <strong>7,000 DAI</strong>.
          </div>
        </div>
        <div className="flex justify-center"></div>
        <div id="mentors">
          <h3 className="text-xl mt-6 font-bold">Help from Mentors</h3>
          <b>TL;DR</b>
          <ul>
            <li>
              To get help ask questions in the Mentor Matrix room:{" "}
              <a
                href="https://matrix.to/#/#eb4-mentors:dod.ngo"
                target="_blank"
                rel="noreferrer noopener"
              >
                #eb4-mentors:dod.ngo
              </a>
            </li>
            <li>
              Or go to the Mentor Helpdesk located in the Node Café on the
              ground floor.
              <button
                className={"font-bold  text-berlin-red text-sm"}
                onClick={() => setIsMapModalOpen(true)}
              >
                <span className="align-middle">
                  <span class="material-symbols-outlined text-sm mr-0.5 ml-1">
                    my_location
                  </span>
                </span>
                <span className="underline">Helpdesk Location</span>
              </button>
            </li>
            <li>
              Helpdesk opening hours:
              <ul className="leading-none">
                <li className="mt-2">
                  Friday from hacking start (19:00) until midnight
                </li>
                <li>Saturday from 08:00 to midnight </li>
                <li> Sunday from 08:00 to submission deadline (12:00)</li>
              </ul>
            </li>
          </ul>
          <h4 className="text-l mt-4 font-bold">Details </h4>
          <p>
            As with all previous ETHBerlins we've made sure to have a team of
            amazing mentors ready to help you build the best possible projects
            throughout the weekend. No questions are too small or too big to
            ask. As a hacker you can find the mentors in person as per the TL;DR
            above. You can also contact them with any questions you might have
            in the Matrix room that's also listed in the TL;DR. If you ask the
            question in the middle of the night you might not get a reply right
            away, but we will make sure to address it first thing in the
            morning.
          </p>
          <p>
            We encourage hackers to help each other out and keep an eye on the
            mentoring matrix channel. There might be some hackers with very
            specific expert knowledge and it would be great if this could be
            shared.
          </p>
          <p>
            You might also see the mentors througout the venue. They'll be
            wearing a button/badge on their shirt saying "Mentor". They're all
            very friendly so don't hesitate to ask them a question or get their
            feedback on something.
          </p>
          <div id="submissions">
            <h3 className="text-xl mt-6 font-bold">Submissions</h3>
            <p>The submissions tool will be published soon.</p>
          </div>
          <div id="judging">
            <h3 className="text-xl mt-6 font-bold">Judging</h3>
            <p>The judging process will be documented soon.</p>
          </div>
          <div id="voting">
            <h2 className="text-2xl mt-8 font-bold">After the Hackathon</h2>
            <h3 className="text-xl mt-6 font-bold">Voting</h3>
            <p>The voting process will be explained soon.</p>
          </div>
          <div id="party"></div>
        </div>

        <VenueMapModal
          isOpen={isMapModalOpen}
          handleCloseModal={handleCloseModal}
          activeMapName={"Ground Floor (#0)"}
          activeMap={groundFloor} // only ground floor
          activeRoomClass={"nodeCafe"}
        />

        <div className="flex justify-center"></div>
      </div>
    </Layout>
  );
};

export default Hack;
