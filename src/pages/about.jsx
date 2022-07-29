import Layout from "../components/Layout";
import React from "react";

const About = () => (
  <Layout>
    <h1 className="my-4 underline text-secondary">(a)bout</h1>
    <div className="text-justify decorate-links">
      <p>
        ETHBerlin³ is a hackathon, a culture festival, an educational event, a
        platform for hacktivism, and a community initiative to push the
        peer-to-peer and privacy ecosystems forward. After successful events in
        2018 and 2019, ETHBerlin decided to reaffirm its commitment with the
        ecosystem and founded the{" "}
        <a href="https://decentralala.com/about">
          Department of Decentralization
        </a>
        , responsible for initiatives that go beyond organizing a hackathon and
        seek to also support the projects coming from our events and community.
        ETHBerlin 2018 and ETHBerlinZwei 2019 sought to marry the culture and
        values of Berlin with those of the builder community and arguably
        succeeded at it.
      </p>
      <p>
        Now, in 2022 we are back with ETHBerlin³, to the power of 3. This time,
        we are pushing even further into becoming a festival for people from all
        backgrounds, and most importantly, a hub where builders will be able to
        get their creative juices flowing by discovering various cultural and
        educational experiences spread across almost a week.
      </p>{" "}
      <p>
        Who we are (in random order): Ksenya, Jacob, Franzi, Eylon, Anna,
        Kirill, Hany, Wesley, Afri, Helena, Rose, Alex, Ligi, Nich, Carl, MP,
        Tim, Caspar, Kaan, Raul, and all the countless volunteers and creative
        contributors.
      </p>
    </div>
  </Layout>
);

export default About;
