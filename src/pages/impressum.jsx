import React from "react";

const Manifesto = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center">
      <div className="mx-80">
        <div className="text-3xl font-bold">Impressum</div>
        <div className="mt-4 text-sm">
          {" "}
          <div className="font-bold">
            Angaben gem&auml;&szlig; &sect; 5 TMG{" "}
          </div>
          <div>
            Betrieb Dezentral gGmbH <br />
            Mariannenstra&szlig;e 9-10 <br />
            10999 Berlin <br />
            Handelsregister: HRB 207663 B<br />
            Registergericht: Amtsgericht <br />
            Charlottenburg zu Berlin <br />
            Vertreten durch: A. Schoedon
          </div>
          <div className="mt-4">
            <div className="font-bold">Kontakt</div>
            Telefon: +49 (0) 30 20613410 <br />
            E-Mail: schoedon@ethberlin.ooo
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manifesto;
