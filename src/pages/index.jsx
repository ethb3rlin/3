import React, { useEffect, useRef, useState } from "react";
import passface from "../assets/passface/passface.gif";
import dod from "../assets/passface/dod.png";
import Layout from "../components/Layout";
import ETHBerlin from "../components/ETHBerlin";

const Home = () => {
  // mouseover image passport
  const [imageSrcPass, setImageSrcPass] = useState(dod);

  useEffect(() => {
    const MAX_TIME = 2000; // Maximum interval between image changes
    const changeImage = () => {
      setImageSrcPass((current) => (current === dod ? passface : dod));
      setTimeout(changeImage, Math.random() * MAX_TIME); // Reschedule with a new random interval
    };

    const timeoutId = setTimeout(changeImage, Math.random() * MAX_TIME); // Initial scheduling

    return () => clearTimeout(timeoutId); // Clear timeout on component unmount
  }, []);

  return (
    <Layout>
      <div className="flex flex-col xl:flex-row-reverse">
        {/* Right side Wolpy and faces */}
        <div className="textbox my-8 xl:w-1/4 xl:ml-8 text-black decorate-links flex justify-center items-center">
          <p className="mt-4 text-center">
            <div className="flex flex-col items-center justify-center mb-4">
              <img
                src={imageSrcPass}
                className=" w-48 h-48 object-cover"
                alt="Fake passport image"
              />
            </div>
            <p className="font-ocra my-0"> Event: ETHBerlin4</p>
            <p className="font-ocra my-0"> Theme: Identity Crisis</p>
            <p className="font-ocra my-0"> Dates: May 24-26, 2024</p>
          </p>
        </div>
        {/* Left side text box */}
        <div className="textbox xl:w-2/3">
          <p>
            ETHBerlin is a hackathon, a cultural festival, an educational event,
            a platform for hacktivism, and a community initiative to push the
            decentralized ecosystem forward.
          </p>

          <p>
            Loading <ETHBerlin />: May 24-26, 2024, Berlin, Germany.
          </p>

          <p>
            The situation is dire. We have been operating in crisis mode for
            years now. Established systems are failing, new and old imperialist
            powers are throwing continents into wars of attrition, global supply
            chains are collapsing, financial markets are tumbling, healthcare
            systems are falling apart, education is on a consistent downward
            spiral — the list goes on.
          </p>

          <p>
            But there is hope: The soils to grow new ideas have never been more
            nutritious. It has never been more urgent to double down on new
            revolutionary concepts and ideas. It is high time to change the
            world.
          </p>

          <p>
            For this year's ETHBerlin hackathon, we invite you to join the
            discourse and hack on anti-identity features instead of identity
            anti-features that boost the individual's privacy.
          </p>

          <p>
            To learn more about our vision & mission, press{" "}
            <span className="font-ocra text-sm">&lt;&lt;M&lt;</span>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
