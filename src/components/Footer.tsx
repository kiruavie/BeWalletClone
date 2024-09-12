export const Footer = () => {
  const logo = "img/logo.svg";
  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <h3 className="mb-2">
              <img
                alt="logo-img"
                src={logo}
                width="180"
                height="40"
                className="d-inline-block align-top mb-1"
              />{" "}
            </h3>
            <p>
              Société à responsabilité limitée au Capital de 1.000.000 CFA.
              Conditions générales d’utilisation
            </p>
          </div>
          <div className="col">
            <h3>ADRESSE</h3>
            <p>Abidjan, Angré 8ème tranche</p>
            <p>infos@be-wallet.net</p>
          </div>
          <div className="col">
            <h3>SITEMAP</h3>
            <ul>
              <li>
                <a href="#" className="d-block p-2 ms-0 text-secondary">
                  Accueil
                </a>
                <a href="#" className="d-block p-2 ms-0 text-secondary">
                  Services
                </a>
                <a href="#" className="d-block p-2 ms-0 text-secondary">
                  Offres d'entrerpises
                </a>
                <a href="#" className="d-block p-2 ms-0 text-secondary">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <h6 className="text-center p-3 m-auto">
          Be Wallet Clone by Mr{" "}
          <span style={{ color: "green" }}>Harlem Dev.</span>{" "}
          <span style={{ color: "skyblue" }}>(@Kiruavie)</span>
        </h6>
      </div>
    </>
  );
};
