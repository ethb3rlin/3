import React from "react";
import Layout from "../components/Layout";
import VenueMapModal from "../components/VenueMapModal";
import groundFloor from "../images/groundFloor.png";
import firstFloor from "../images/firstFloor.png";
import secondFloor from "../images/secondFloor.png";
import thirdFloor from "../images/thirdFloor.png";
import fourthFloor from "../images/fourthFloor.png";
import fifthFloor from "../images/fifthFloor.png";

const Experiences = () => {
  const [isMapModalOpen, setIsMapModalOpen] = React.useState(false);
  const [activeMap, setActiveMap] = React.useState(groundFloor);
  const [activeMapName, setActiveMapName] = React.useState("Ground Floor (#0)");
  const [activeRoomClass, setActiveRoomClass] = React.useState("lexis");

  const handleCloseModal = (e) => {
    e.stopPropagation();
    setIsMapModalOpen(false);
  };

  const handleGroundFloor = () => {
    setActiveMap(groundFloor);
    setActiveMapName("Ground Floor (#0)");
  };

  const handleFirstFloor = () => {
    setActiveMap(firstFloor);
    setActiveMapName("First Floor (#1)");
  };

  const handleSecondFloor = () => {
    setActiveMap(secondFloor);
    setActiveMapName("Second Floor (#2)");
  };

  const handleThirdFloor = () => {
    setActiveMap(thirdFloor);
    setActiveMapName("Third Floor (#3)");
  };

  const handleFourthFloor = () => {
    setActiveMap(fourthFloor);
    setActiveMapName("Fourth Floor (#4)");
  };

  const handleFifthFloor = () => {
    setActiveMap(fifthFloor);
    setActiveMapName("Fifth Floor (#5)");
  };

  const locations = {
    lexis: {
      name: "Lexis",
      handler: () => {
        handleGroundFloor();
        setActiveRoomClass("lexis");
        setIsMapModalOpen(true);
      },
    },
    giftShop: {
      name: "Gift Shop",
      handler: () => {
        handleGroundFloor();
        setActiveRoomClass("giftShop");
        setIsMapModalOpen(true);
      },
    },
    nodeCafe: {
      name: "Node Cafe",
      handler: () => {
        handleGroundFloor();
        setActiveRoomClass("nodeCafe");
        setIsMapModalOpen(true);
      },
    },
    yard0: {
      name: "Yard 0",
      handler: () => {
        handleGroundFloor();
        setActiveRoomClass("yard0");
        setIsMapModalOpen(true);
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
    yard2: {
      name: "Yard 2",
      handler: () => {
        handleGroundFloor();
        setActiveRoomClass("yard2");
        setIsMapModalOpen(true);
      },
    },
    mainEnterence: {
      name: "Main Enterance",
      handler: () => {
        handleGroundFloor();
        setActiveRoomClass("main-enterence");
        setIsMapModalOpen(true);
      },
    },
    registration: {
      name: "Registration",
      handler: () => {
        handleGroundFloor();
        setActiveRoomClass("registration");
        setIsMapModalOpen(true);
      },
    },
    restaurant: {
      name: "Restaurant",
      handler: () => {
        handleGroundFloor();
        setActiveRoomClass("restaurant");
        setIsMapModalOpen(true);
      },
    },
    mckinsey: {
      name: "McKinsey",
      handler: () => {
        handleFirstFloor();
        setActiveRoomClass("mckinsey");
        setIsMapModalOpen(true);
      },
    },
    communitySpace1: {
      name: "First Floor Community Space",
      handler: () => {
        handleFirstFloor();
        setActiveRoomClass("community-space-first-floor");
        setIsMapModalOpen(true);
      },
    },
    communitySpace2: {
      name: "Second Floor Community Space",
      handler: () => {
        handleSecondFloor();
        setActiveRoomClass("community-space-second-floor");
        setIsMapModalOpen(true);
      },
    },
    artExhibition: {
      name: "Art Exhibition",
      handler: () => {
        handleFifthFloor();
        setActiveRoomClass("artExhibition");
        setIsMapModalOpen(true);
      },
    },
    library: {
      name: "Library",
      handler: () => {
        handleFirstFloor();
        setActiveRoomClass("library");
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
    wellnessRoom: {
      name: "Wellness & Planeterium",
      handler: () => {
        handleFifthFloor();
        setActiveRoomClass("wellnessRoom");
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
    cinebar: {
      name: "Cinebar",
      handler: () => {
        handleFifthFloor();
        setActiveRoomClass("cinebar");
        setIsMapModalOpen(true);
      },
    },
    aeden: {
      name: "Aeden",
      handler: () => {
        window.open("https://aedenberlin.com/", "_blank");
      },
    },
  };

  const LocationButton = ({ loc, className }) => (
    <button
      className={`text-berlin-red inline-flex flex-wrap items-center font-bold`}
      onClick={() => {
        loc.handler();
      }}
    >
      <span class="material-symbols-outlined mr-0.5 ml-1 text-[1.2rem]">
        my_location
      </span>
      <span className="hover:underline text-[1rem]">{loc.name}</span>
    </button>
  );

  return (
    <Layout>
      <div className="textbox">
        <h1 className="text-secondary underline font-ocra">
          &lt;&lt;E&lt;XPERIENCES
        </h1>
        <h2 className="text-2xl mt-8 font-bold">ETHBerlin04 Experiences</h2>
        <p>
          ETHBerlin is a hackathon first but not a hackathon only. Like the last
          years we’re also hosting different experiences for our hackers to
          enjoy during the weekend. These experiences are not only hosted and
          organized by us, the Department of Decentralization, but also by our
          friends and conspirators.
        </p>

        <div>
          <div>
            <div className="inline-flex flex-wrap items-center">
              <h3 className="font-bold text-lg mr-1">Gift Shop</h3>
              <span>hosted by</span>
              <a
                href="/decentralization"
                target="blank"
                rel="noreferrer noopener"
                className="underline ml-1"
              >
                DoD
              </a>
              <LocationButton loc={locations.giftShop} />
            </div>
            <div className="ml-4">
              Grab our iconic ETHBerlin04 swag and goodies from some of our
              experience hosts at the gift shop!
            </div>
          </div>

          <div className="mt-8">
            <div className="inline-flex flex-wrap items-center">
              <h3 className="font-bold text-lg mr-1">Cafe & Books</h3>
              <span>hosted by</span>
              <a
                href="https://www.eigenlayer.xyz/"
                target="blank"
                rel="noreferrer noopener"
                className="underline ml-1"
              >
                Eigenlayer
              </a>
              <LocationButton loc={locations.nodeCafe} />
            </div>
            <div className="ml-4">
              <div>
                Get your day started with coffee and a good read on blockchain
                essentials.
              </div>
              <ul className="list-disc list-inside ml-4 mt-2 ">
                <li>Saturday: 09:00 - 16:00</li>
                <li>Sunday: 09:00 - 12:00</li>
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <div className="inline-flex flex-wrap items-center">
              <h3 className="font-bold text-lg mr-1">
                Wellness Room by Day, Planetarium by Night
              </h3>
              <span>hosted by</span>
              <a
                href="https://scroll.io/"
                target="blank"
                rel="noreferrer noopener"
                className="underline ml-1"
              >
                Scroll
              </a>
              <LocationButton loc={locations.wellnessRoom} />
            </div>
            <div className="ml-4">
              <div>
                On the fifth floor we’ll host yoga, reiki, meditation and
                breathwork sessions throughout the weekend so hackers can rewind
                and recenter. At night the space will transform into a starry
                night, with areas for hackers to sleep or unwind.
              </div>
              <div className="mt-4 mb-1">Saturday 24th:</div>
              <ul className="list-disc list-inside ml-4 ">
                <li>10:00 - 11:30 - Kundalini yoga</li>
                <li>13:00 - 15:00 - Reiki practitioner available</li>
                <li>15:00 - 16:30 - Sound healing practice</li>
                <li>17:00 - 19:00 - Yoga flow + Sound Bath</li>
              </ul>
              <div className="mt-4 mb-1">Sunday 25th:</div>
              <ul className="list-disc list-inside ml-4 ">
                <li>10:00 - 10:45 Active/dance meditation</li>
                <li>10:45 - 11:30 Vibro Acoustic massage 1:1 first slot</li>
                <li>11:45 - 12:30 Vibro acoustic massage 1:1 2nd slot</li>
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <div className="inline-flex flex-wrap items-center">
              <h3 className="font-bold text-lg mr-1">Screen Printing</h3>
              <span>hosted by</span>
              <a
                href="https://www.lens.xyz/"
                target="blank"
                rel="noreferrer noopener"
                className="underline ml-1"
              >
                Lens
              </a>
              <LocationButton loc={locations.library} />
            </div>
            <div className="ml-4">
              Family Style, located in the Library, invites hackers to relax,
              have some matcha, get some Lens swag live-screen printed by a
              local Berliner screen printer.
            </div>
          </div>

          <div className="mt-8">
            <div className="inline-flex flex-wrap items-center">
              <h3 className="font-bold text-lg mr-1">Pizza Delivery</h3>
              <span>by</span>
              <a
                href="https://www.base.org/"
                target="blank"
                rel="noreferrer noopener"
                className="underline ml-1"
              >
                Base
              </a>
              <LocationButton loc={locations.yard1} />
            </div>
            <div className="ml-4">
              Pizza will be served on Saturday, after 22 hs. Stay tuned for the
              mic call, and make sure to get some napkins, greasy fingers
              guaranteed. :)
            </div>
          </div>

          <div className="mt-8">
            <div className="inline-flex flex-wrap items-center">
              <h3 className="font-bold text-lg mr-1">Co-Create</h3>
              <span>hosted by</span>
              <a
                href="https://www.refractionfestival.com/"
                target="blank"
                rel="noreferrer noopener"
                className="underline ml-1"
              >
                RefractionDAO
              </a>
              <LocationButton loc={locations.artExhibition} />
            </div>
            <div className="ml-4 decorate-links">
              <div>
                Art exhibition curated by Stina Gustafsson and María Paula
                Fernández.
              </div>
              <ul className=" mt-2">
                <li>Friday: 19:00 - 23:59 for hackers</li>
                <li>
                  Saturday: 11:00 - 23:59 for hackers, 11:00 - 17:00 for public.
                  Public tickets available{" "}
                  <a
                    href="https://visas.ethberlin.org/ethberlin/art/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    here
                  </a>{" "}
                  <div className="mt-2">
                    With panels and content from 12:00 - 14:00
                  </div>
                </li>
                <li>Sunday 11:00-15:00</li>
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <div className="inline-flex flex-wrap items-center">
              <h3 className="font-bold text-lg mr-1">THC @ETHBerlin04</h3>
              <span>hosted by</span>
              <a
                href="https://www.dist0rtion.com/"
                target="blank"
                rel="noreferrer noopener"
                className="underline ml-1"
              >
                Social Dist0rtion Protocol
              </a>
            </div>
            <div className="ml-4">
              Social Dist0rtion Protocol (SDP) where the first "o" in
              "distortion" is a zero, have an important message for you. Their
              upcoming special operation will unfold at ETHBerlin04, where they
              urgently require your collaboration to avert a dire human destiny.
            </div>
          </div>

          <div className="mt-8">
            <div className="inline-flex flex-wrap items-center">
              <h3 className="font-bold text-lg mr-1">
                Cocktails at the Cinebar
              </h3>
              <span>hosted by</span>
              <a
                href="https://celestia.org/"
                target="blank"
                rel="noreferrer noopener"
                className="underline ml-1"
              >
                Celestia
              </a>
              <LocationButton loc={locations.cinebar} />
            </div>
            <div className="ml-4">
              Celestia will be serving what they do best: vibes, games and some
              fine cocktails. Starting from 6pm on Saturday you’ll be able to
              take a break from your computer and mingle with other teams,
              mentors, and hackers over a cocktail or two.
            </div>
          </div>

          <div className="mt-8">
            <div className="inline-flex flex-wrap items-center">
              <h3 className="font-bold text-lg mr-1">Cypherpunk Cinema</h3>
              <span>by</span>
              <a
                href="/decentralization"
                target="blank"
                rel="noreferrer noopener"
                className="underline ml-1"
              >
                DoD
              </a>
              <LocationButton loc={locations.cinema} />
            </div>
            <div className="ml-4">
              For newbies to our hackathon series, our amazing venue is blessed
              with a cinema and very comfy couches for the ultimate viewing
              experience. As per ETHBerlin³, we will be curating the cinema on
              Saturday with movies to inspire you.
            </div>
          </div>

          <div className="mt-8">
            <div className="inline-flex flex-wrap items-center">
              <h3 className="font-bold text-lg mr-1">Görli On-Chain</h3>
              <span>hosted by</span>
              <a
                href="https://infura.io/"
                target="blank"
                rel="noreferrer noopener"
                className="underline ml-1"
              >
                Infura
              </a>
            </div>
            <div className="ml-4">
              Join the Decentralized Infrastructure Network (DIN) and Consensys
              Diligence team for a Smart Contract Capture the Flag (CTF)
              Farcaster Frames challenge to solve riddles and mint a limited
              edition Goerli Commemorative NFT. Celebrating Goerli's launch at
              Göorlicon in Feb 2019, this puzzle will be deployed at ETHBerlin
              and available to the broader audience.
            </div>
          </div>

          <div className="mt-8">
            <div className="inline-flex flex-wrap items-center">
              <h3 className="font-bold text-lg mr-1">Teledisko</h3>
              <span>by</span>
              <a
                href="https://www.teledisko.com/"
                target="blank"
                rel="noreferrer noopener"
                className="underline ml-1"
              >
                TelediskoDAO
              </a>
              <LocationButton loc={locations.yard1} />
            </div>
            <div className="ml-4">
              The teledisko needs no further explanation. Brought to you by
              telediskoDAO, it’s the smallest disco on earth - literally an
              upcycled telephone booth with a disco in it.
            </div>
          </div>

          <div className="mt-8">
            <div className="inline-flex flex-wrap items-center">
              <h3 className="font-bold text-lg mr-1">Donut Wall</h3>
              <span>by</span>
              <a
                href="https://missing-link.io/"
                target="blank"
                rel="noreferrer noopener"
                className="underline ml-1"
              >
                Missing Link
              </a>
              <LocationButton loc={locations.yard0} />
            </div>
            <div className="ml-4">
              Back by popular demand is the donut wall! It’s exactly what it
              says on the tin - A wall of donuts for you to get your sugar hit
              during the weekend.
            </div>
          </div>

          <div className="mt-8">
            <div className="inline-flex flex-wrap items-center">
              <h3 className="font-bold text-lg mr-1">After party</h3>
              <span>by</span>
              <a
                href="https://entropy.xyz/"
                target="blank"
                rel="noreferrer noopener"
                className="underline ml-1"
              >
                Entropy
              </a>{" "}
              &{" "}
              <a
                href="https://fuel.network/"
                target="blank"
                rel="noreferrer noopener"
                className="underline ml-1"
              >
                Fuel
              </a>
              <LocationButton loc={locations.aeden} />
            </div>
            <div className="ml-4">From 8PM onwards on Sunday night.</div>
            <div className="ml-4">
              It would not be a hackathon without an after party. It would also
              not be Berlin without a dose of techno.
            </div>
            <div className="ml-4">
              You will receive an afterparty wristband during the hackathon
              registration. If you don't want to or cannot attend on Sunday
              evening, you can share it with your friends.
            </div>
          </div>
        </div>

        <VenueMapModal
          isOpen={isMapModalOpen}
          handleCloseModal={handleCloseModal}
          activeMapName={activeMapName}
          activeMap={activeMap} // only ground floor
          activeRoomClass={activeRoomClass}
        />
      </div>
    </Layout>
  );
};

export default Experiences;
