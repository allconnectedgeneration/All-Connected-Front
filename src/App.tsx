import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/about/About';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Login from './pages/login/Login';
import Contato from './pages/contato/Contato';
import Cadastro from './pages/cadastro/Cadastro';
import { AuthProvider } from './contexts/AuthContext';
import ListaCategorias from './components/categorias/listaCategorias/ListaCategorias';
import FormularioCategoria from './components/categorias/formularioCategoria/FormularioCategoria';
import DeletarCategoria from './components/categorias/deletarCategoria/DeletarCategoria';
import ListaProdutos from './components/produtos/listaProdutos/ListaProdutos';
import FormularioProduto from './components/produtos/formularioProduto/FormularioProduto';
import DeletarProduto from './components/produtos/deletarProduto/DeletarProduto';

import { CarrinhoProvider } from './contexts/CarrinhoContext';

  
function App() {
  return (
    <>
<AuthProvider>
    <CarrinhoProvider>
      <BrowserRouter>
      <Navbar />
      <div className="min-h-[85vh]">
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/categorias" element={<ListaCategorias />} />
          <Route path="/cadastroCategorias" element={<FormularioCategoria />} />
          <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
          <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
          <Route path="/produtos" element={<ListaProdutos />} />
          <Route path="/cadastroProduto" element={<FormularioProduto />} />
          <Route path="/editarProduto/:id" element={<FormularioProduto />} />
          <Route path="/deletarProduto/:id" element={<DeletarProduto />} />
        </Routes>
        </div>
        <Footer />
      </BrowserRouter>
      </CarrinhoProvider>
      </AuthProvider>


    </>
  );


}
export default App;
