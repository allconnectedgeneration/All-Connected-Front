import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/about/About';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Login from './pages/login/Login';
import Contato from './pages/contato/Contato';
import Cadastro from './pages/cadastro/Cadastro';
import { AuthProvider } from './contexts/AuthContext';

  
function App() {
  return (
    <>
<AuthProvider>
      <BrowserRouter>
      <Navbar />
      <div className="min-h-[80vh]">
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
           <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
        </div>
        <Footer />
      </BrowserRouter>
      </AuthProvider>


    </>
  );


}
export default App;
