import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/about/About';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

import Contato from './page/contato/Contato';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>

    </>
  );

}
export default App;