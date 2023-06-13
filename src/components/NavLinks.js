import { Link } from 'react-router-dom';

function NavLinks() {
  return (
    <nav>
      <h1 className="page-title">Math Magicians</h1>
      <ul className="nav-list">
        <li>
          <Link className="link" to="/">Home</Link>
        </li>
        <li>
          <Link className="link" to="/Calculator">Calculator</Link>
        </li>
        <li>
          <Link className="link q-link" to="/Quotes">Quotes</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavLinks;
