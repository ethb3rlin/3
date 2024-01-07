import Layout from "../components/Layout";
import React, { useState, useEffect } from "react";

const About = () => {
  const [randomizedNames, setRandomizedNames] = useState([]);

  useEffect(() => {
    const names = [
      "Jacob",
      "Franzi",
      "Afri",
      "Helena",
      "Rose",
      "Martin",
      "Stina",
      "Alex",
      "Ligi",
      "MP",
      "Kaan",
      "Lea",
      "Raul",
      "Konrad",
      "Hany",
      "Peter",
    ];

    // names here
    const shuffledNames = names.sort(() => 0.5 - Math.random());
    setRandomizedNames(shuffledNames);
  }, []);

  return (
    <Layout>
      <div className="text-justify decorate-links textbox">
        <h1 className="my-4 underline font-ocra text-berlin-yellow">
          &lt;a&gt;bout
        </h1>
        <p>
          ETHBerlin is known as the hackathon extravaganza, a cultural festival,
          an educational event, a platform for hacktivism, and a community
          initiative to push the decentralized ecosystem forward.{" "}
          <span className="font-ocra text-sm">
            ETHBerlin4 &lt;&lt;&lt;Identity Crisis&lt;&lt;&gt;&gt;&gt;
          </span>{" "}
          is the fourth edition, and we've come a long way since we hosted our
          first hackathon in 2018.{" "}
        </p>
        <p>
          After successful events in 2018 and 2019, ETHBerlin decided to
          reaffirm its commitment with the ecosystem and founded the{" "}
          <a href="https://dod.ngo" target="_blank" rel="noreferrer">
            Department of Decentralization
          </a>
          . The DoD is responsible for initiatives that go beyond organizing
          hackathons and seek to also support the projects coming from our
          events and community. ETHBerlin 2018 and ETHBerlinZwei 2019 sought to
          marry the culture and values of Berlin with those of the builder
          community and arguably succeeded at it. In 2022, we were finally back
          with ETHBerlin³ - to the power of 3, pushing even further into
          becoming a festival for people from all backgrounds, and most
          importantly, a hub where builders will be able to get their creative
          juices flowing by discovering various cultural and educational
          experiences spread across the weekend.
        </p>
        <p>
          2024 will be the year of bringing all what we've learned and
          experienced over the years together: We find ourselves at the
          intersection of decentralization, privacy and security - let's put it
          to use.
        </p>
        <p>
          We are (in random order): &nbsp;
          {randomizedNames.join(", ")}. Supported by countless volunteers and
          creative contributors.
        </p>
      </div>
    </Layout>
  );
};

export default About;
