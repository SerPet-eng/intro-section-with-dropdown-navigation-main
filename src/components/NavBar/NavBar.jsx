export default function NavBar() {
  return (
    <>
      <nav className="navbar">
        <h1 className="navbar__title">snap</h1>
        <ul>
          <li>Features</li>
          <li>Company</li>
          <li>Careers</li>
          <li>About</li>
        </ul>
        <div className="button__section">
          <button className="button">Login</button>
          <button className="button">Register</button>
        </div>
      </nav>
    </>
  );
}
