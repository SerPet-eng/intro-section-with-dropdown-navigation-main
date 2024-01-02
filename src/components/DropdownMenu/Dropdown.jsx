// import ArrowUp from '../../../images/icon-arrow-up.svg';
import ArrowDown from '../../../images/icon-arrow-down.svg';
import Features from './Features';
import Company from './Company';
import { useState } from 'react';

export default function Dropdown() {
  const [isFeatures, setIsFeatures] = useState(false);
  const [isCompany, setIsCompany] = useState(false);

  const toggleFeatures = () => {
    setIsFeatures(!isFeatures);
    console.log('Features is working!');
  };

  const toggleCompany = () => {
    setIsCompany(!isCompany);
    console.log('Company is working!');
  };

  return (
    <>
      <ul>
        <li onClick={toggleFeatures}>
          Features <img src={ArrowDown} alt="Arrow down icon" />
          <Features />
        </li>
        <li onClick={toggleCompany}>
          Company <img src={ArrowDown} alt="Arrow down icon" />
          <Company />
        </li>
        <li>Careers</li>
        <li>About</li>
      </ul>
      <div className="menu__btn">
        <button>Login</button>
        <button>Register</button>
      </div>
    </>
  );
}
