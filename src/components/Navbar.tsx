export const Navbar = () => {
  const logo = "img/logo.svg";

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src={logo}
              alt="Logo"
              width={200}
              height={80}
              className="d-inline-block align-text-top ms-4"
            />
          </a>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Accueil
                </a>
              </li>
              <li className="nav-item ms-5">
                <a className="nav-link" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item ms-5">
                <a className="nav-link" href="#">
                  Offres d'entreprises
                </a>
              </li>
              <li className="nav-item ms-5">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
              <li className="nav-item ms-5">
                <a
                  className="nav-link border border-primary border-2 rounded-pill px-3"
                  href="#"
                >
                  Commencer
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
