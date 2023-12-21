import React from "react";
import Layout from "../components/Layout";

const Impressum = () => {
  return (
    <Layout>
      <div className="decorate-links">
        <div>
          <h1 className="text-3xl text-secondary underline font-ocra">
            contact &amp; (i)mpressum
          </h1>
          <div className="mt-4">
            <p>
              If you want to reach out:
              <ul>
                <li>
                  send us an email:{" "}
                  <a href="mailto:goerli@ethberlin.org">goerli@ethberlin.org</a>{" "}
                </li>
                <li>
                  sponsors contact:{" "}
                  <a href="mailto:sponsors@ethberlin.org">sponsors@ethberlin.org</a>{" "}
                </li>
                <li>
                  press enquiries:{" "}
                  <a href="mailto:press@ethberlin.org">press@ethberlin.org</a>{" "}
                </li>
                <li>
                  join our{" "}
                  <a href="https://matrix.to/#/%23ethberlin:matrix.org">
                    matrix space
                  </a>
                </li>
              </ul>
            </p>
          </div>
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
            Vertreten durch A. Schoedon, Telefon: +49 (0) 30 20613410, E-Mail:{" "}
            <a href="mailto:schoedon@ethberlin.org">schoedon@ethberlin.org</a>
          </div>
          <div className="mt-4">
            Goerli Dezentral gGmbH is a non-profit organization serving
            tax-privileged purposes, according to the articles of association.
            The organization meets the statutory requirements under
            &sect;&sect; 51, 59, 60, and 61 AO.
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Impressum;
