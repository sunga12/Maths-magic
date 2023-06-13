import { Link, Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import Quotes from './components/Quotes';
import './index.css';
import Home from './components/Home';

function App() {
  return (
    <>
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="/Quotes" element={<Quotes />} />
      </Routes>
    </>
  );
}

export default App;
