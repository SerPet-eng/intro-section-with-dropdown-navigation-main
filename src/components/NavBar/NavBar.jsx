export default function NavBar() {
  return (
    <>
      <nav className="nav">
        <h1 className="nav__title">snap</h1>
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
      </nav>
    </>
  );
}
