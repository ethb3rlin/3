export default function Impressum({ showImpressum }) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center">
      <div className="mx-80">
        <div className="text-3xl font-bold">Impressum</div>
        <div className="mt-4 text-sm">
          {" "}
          <div className="font-bold">Angaben gemäß § 5 TMG </div>
          <div>
            Betrieb Dezentral GmbH <br />
            Mariannenstraße 9-10 <br />
            10999 Berlin <br />
            Handelsregister: HRB 207663 <br />
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
}
