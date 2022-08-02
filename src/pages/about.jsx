import Layout from "../components/Layout";
import React from "react";

const About = () => (
  <Layout>
    <h1 className="my-4 underline text-secondary">(a)bout</h1>
    <div className="text-justify decorate-links">
      <p>
        ETHBerlin is known as the hackathon extravaganza, a cultural festival,
        an educational event, a platform for hacktivism, and a community
        initiative to push the decentralized ecosystem forward. ETHBerlin³ is
        the third edition, and we've come a long way since we hosted our first
        hackathon in 2018.
      </p>
      <p>
        After successful events in 2018 and 2019, ETHBerlin decided to reaffirm
        its commitment with the ecosystem and founded the{" "}
        <a href="/DoD">Department of Decentralization</a>. The DoD is
        responsible for initiatives that go beyond organizing hackathons and
        seek to also support the projects coming from our events and community.
        ETHBerlin 2018 and ETHBerlinZwei 2019 sought to marry the culture and
        values of Berlin with those of the builder community and arguably
        succeeded at it.
      </p>
      <p>
        Now, in 2022 we are back with ETHBerlin³ - to the power of 3. This time,
        we are pushing even further into becoming a festival for people from all
        backgrounds, and most importantly, a hub where builders will be able to
        get their creative juices flowing by discovering various cultural and
        educational experiences spread across the weekend.
      </p>{" "}
      <p>
        We are (in random order): Ksenya, Jacob, Franzi, Eylon, Anna, Kirill,
        Hany, Wesley, Afri, Helena, Stina, Rose, Alex, Ligi, Nich, Carl, MP,
        Tim, Caspar, Kaan, Raul. Supported by countless volunteers and creative
        contributors.
      </p>
    </div>
  </Layout>
);

export default About;
