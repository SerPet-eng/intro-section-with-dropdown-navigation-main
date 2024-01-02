import MenuIcon from '../../images/icon-menu.svg';
import CloseIcon from '../../images/icon-close-menu.svg';
import Dropdown from './DropdownMenu/Dropdown';
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
            <Dropdown />
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
