import { ReactComponent as GithubIcon } from "assets/img/github.svg";
import './styles.css';

function Navbar() {
    return (
        <header>
          <nav className="container">
              <div className="dsmovie-nav-content">
                  <h1>Cognac Project</h1>
                  <a href="https://github.com/alvaropotel" target="_blank" rel="noreferrer">
                      <div className="dsmovie-contact-container">
                          <GithubIcon />
                          <p className="dsmovie-contact-link">/alvaroPotel</p>
                      </div>
                </a>
             </div>
          </nav>
      </header>
      );
}
export default Navbar;