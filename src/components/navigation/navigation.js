import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-md bg-body-tertiary">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand" href="#">
          SpaceX
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/entreprise" className="nav-link" aria-current="page" href="#">
                Entreprise
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/histoire" className="nav-link" aria-current="page" href="#">
                Histoire
              </NavLink>
            </li>
            <li>
              <NavLink to="/equipage" className="nav-link" aria-current="page" href="#">
                Équipage
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
