import MenuIcon from '../../images/icon-menu.svg';
import CloseIcon from '../../images/icon-close-menu.svg';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSideMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="header">
        <h1 className="header__title">snap</h1>
        <nav className="nav">
          <div className={`menu ${isOpen ? 'open' : ''}`}>
            <ul>
              <li>Features</li>
              <li>Company</li>
              <li>Careers</li>
              <li>About</li>
            </ul>
            <div className="menu__btn">
              <button>Login</button>
              <button>Register</button>
            </div>
          </div>
          <img
            src={isOpen ? CloseIcon : MenuIcon}
            alt="A menu icon"
            className="menu__btn"
            onClick={handleSideMenu}
          />
        </nav>
      </header>
    </>
  );
}
