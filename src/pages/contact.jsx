import React from "react";
import Layout from "../components/Layout";

const Impressum = () => {
  return (
    <Layout>
      <div className="textbox decorate-links">
        <h1 className="text-secondary underline font-ocra">
          CONTACT &amp; &lt;&lt;I&lt;MPRESSUM
        </h1>
        <div className="mt-4">
          <p>
            Thoughts, questions, input or inquieries? We look forward to hearing
            from you!
            <ul className="mt-4 leading-4">
              <li>
                send us an email:{" "}
                <a href="mailto:contact@ethberlin.org">contact@ethberlin.org</a>{" "}
              </li>
              <li>
                join our{" "}
                <a href="https://matrix.to/#/%23ethberlin:dod.ngo">
                  matrix space
                </a>
              </li>
            </ul>
          </p>
        </div>
        <div className="text-sm">
          <h1 className="text-xl font-bold ">Impressum</h1>
          <div className="">Angaben gem&auml;&szlig; &sect; 5 TMG</div>
          <div className="mt-4">
            Goerli Dezentral gGmbH, Mariannenstra&szlig;e 9-10, 10999 Berlin
          </div>
          <div className="mt-4">
            Handelsregister: HRB 207663 B, Registergericht: Amtsgericht
            Charlottenburg, Berlin, Umstatzsteuer-ID: DE325917754
          </div>
          <div className="mt-4">
            Vertreten durch A. Schoedon, E-Mail:{" "}
            <a href="mailto:schoedon@ethberlin.org">schoedon@ethberlin.org</a>
          </div>
          <div className="mt-4">
            Goerli Dezentral gGmbH is a non-profit organization serving
            tax-privileged purposes, according to the articles of association.
            The organization meets the statutory requirements under &sect;&sect;
            51, 59, 60, and 61 AO.
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Impressum;
