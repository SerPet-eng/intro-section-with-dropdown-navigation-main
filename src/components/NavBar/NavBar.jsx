import { useState } from 'react';
import MenuIcon from '../../../images/icon-menu.svg';
import CloseIcon from '../../../images/icon-close-menu.svg';

export default function NavBar() {
  const [active, setActive] = useState(false);
  const showDisplay = {
    display: active ? 'block' : 'none',
  };

  const toggleButton = () => {
    setActive(!active);
  };

  console.log(active);

  return (
    <>
      <nav className="nav">
        <h1 className="nav__title">snap</h1>
        <div className="menu" style={showDisplay}>
          <img src={CloseIcon} alt="A close icon" onClick={toggleButton} />
          <ul>
            <li>Features</li>
            <li>Company</li>
            <li>Careers</li>
            <li>About</li>
          </ul>
          <div className="nav__btn-section">
            <button className="button">Login</button>
            <button className="button">Register</button>
          </div>
        </div>
        <img
          src={MenuIcon}
          alt="A menu icon"
          className="nav__menu"
          onClick={toggleButton}
        />
      </nav>
    </>
  );
}
