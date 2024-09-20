import React from "react";
import "./App.css";
import NavBar from "./NavBar";
import PrivacyPolicy from "./Privacy";
import TermsOfUse from "./TermsOfUse";

const TermsAndPrivacy: React.FC = () => {
  return (
    <div style={{width: '100vw', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
      <header className="header">
        <div className="container">
          <h1>Pro-Bidder</h1>
          <p>Simplificando orçamentos, conquistando mais clientes</p>
        </div>
      </header>

      <NavBar />

      <main className="container">
        <section id="terms">
        <TermsOfUse />
        </section>

        <section id="privacy">
         <PrivacyPolicy />
        </section>
      </main>

      <footer className="container footer">
        <p>
          &copy; 2024 Fantasy Forge Tecnologias. Todos os direitos reservados.
        </p>
        <p>
          Entre em contato:{" "}
          <a href="mailto:dev.ceagah@gmail.com">dev.ceagah@gmail.com</a>
        </p>
      </footer>
    </div>
  );
};

export default TermsAndPrivacy;
