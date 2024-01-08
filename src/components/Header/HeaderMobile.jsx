import Icon from '../../../images/logo.svg';
import MenuIcon from '../../../images/icon-menu.svg';
import CloseIcon from '../../../images/icon-close-menu.svg';
import Features from '../others/Features';
import Company from '../others/Company';
import ArrowUp from '../../../images/icon-arrow-up.svg';
import ArrowDown from '../../../images/icon-arrow-down.svg';
import { useState } from 'react';

export default function HeaderMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFeatures, setIsFeatures] = useState(false);
  const [isCompany, setIsCompany] = useState(false);

  const handleSideMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleFeatures = () => {
    setIsFeatures(!isFeatures);
  };

  const handleCompany = () => {
    setIsCompany(!isCompany);
  };

  return (
    <>
      <header className="header">
        <img src={Icon} alt="Snap Icon" className="header__title" />
        <nav className="nav">
          <div className={`menu ${isOpen ? 'open' : ''}`}>
            <ul className="menu__content">
              <li className="menu__list">
                <button className="menu__btn" onClick={handleFeatures}>
                  Features
                  <img
                    src={isFeatures ? ArrowUp : ArrowDown}
                    alt="Arrow Icon"
                  />
                </button>
              </li>
              {isFeatures && <Features />}
              <li className="menu__list" onClick={handleCompany}>
                <button className="menu__btn">
                  Company{' '}
                  <img src={isCompany ? ArrowUp : ArrowDown} alt="Arrow Icon" />
                </button>
              </li>
              {isCompany && <Company />}
              <li className="menu__list">
                <button className="menu__btn">Careers</button>
              </li>
              <li className="menu__list">
                <button className="menu__btn">About</button>
              </li>
              <div className="menu__form">
                <button className="form__btn">Login</button>
                <button className="form__btn">Register</button>
              </div>
            </ul>
          </div>
          <img
            src={isOpen ? CloseIcon : MenuIcon}
            alt="A menu icon"
            className="mobile__menu-btn"
            onClick={handleSideMenu}
          />
        </nav>
      </header>
    </>
  );
}
