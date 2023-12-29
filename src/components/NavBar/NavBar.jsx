import MenuIcon from '../../../images/icon-menu.svg';

export default function NavBar() {
  return (
    <>
      <nav className="nav">
        <h1 className="nav__title">snap</h1>
        <div className="menu">
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
        <img src={MenuIcon} alt="A menu icon" className="nav__menu" />
      </nav>
    </>
  );
}
