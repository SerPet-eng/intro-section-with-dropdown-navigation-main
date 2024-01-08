import Icon from '../../../images/logo.svg';
import Features from '../others/Features';
import Company from '../others/Company';
import ArrowUp from '../../../images/icon-arrow-up.svg';
import ArrowDown from '../../../images/icon-arrow-down.svg';
import { useState } from 'react';

export default function HeaderDesktop() {
  const [isFeatures, setIsFeatures] = useState(false);
  const [isCompany, setIsCompany] = useState(false);

  const handleFeatures = () => {
    setIsFeatures(!isFeatures);
  };

  const handleCompany = () => {
    setIsCompany(!isCompany);
  };

  return (
    <>
      <header className="header-desktop">
        <img src={Icon} alt="Snap Icon" className="header__title-desktop" />
        <nav className="nav-desktop">
          <div className="menu-desktop">
            <ul className="menu__content-desktop">
              <li className="menu__list-desktop">
                <button className="menu__btn-desktop" onClick={handleFeatures}>
                  Features
                  <img
                    src={isFeatures ? ArrowUp : ArrowDown}
                    alt="Arrow Icon"
                  />
                </button>
              </li>
              {isFeatures && <Features />}
              <li className="menu__list-desktop" onClick={handleCompany}>
                <button className="menu__btn-desktop">
                  Company{' '}
                  <img src={isCompany ? ArrowUp : ArrowDown} alt="Arrow Icon" />
                </button>
              </li>
              {isCompany && <Company />}
              <li className="menu__list-desktop">
                <button className="menu__btn-desktop">Careers</button>
              </li>
              <li className="menu__list-desktop">
                <button className="menu__btn-desktop">About</button>
              </li>
            </ul>
          </div>
        </nav>
        <div className="menu__form-desktop">
          <button className="form__btn-desktop">Login</button>
          <button className="form__btn-desktop">Register</button>
        </div>
      </header>
    </>
  );
}
