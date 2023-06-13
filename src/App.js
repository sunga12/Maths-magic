import { Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import Quotes from './components/Quotes';
import './index.css';
import Home from './components/Home';
import NavLinks from './components/NavLinks';

function App() {
  return (
    <>
      <NavLinks />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="/Quotes" element={<Quotes />} />
      </Routes>
    </>
  );
}

export default App;
