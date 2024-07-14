import navLogo from '../../assets/logotipo_A_branco.svg'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';
import loginIcon from '../../assets/login_branco_porta.svg'
import logoutIcon from '../../assets/deslogar_branco_porta.svg'

function Navbar() {
  const navigate = useNavigate();
  const { usuario, handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    alert('Usuário deslogado com sucesso');
    navigate('/');
  }

  return (
    <div className='w-full bg-all-azul-1 text-white flex justify-center py-5 relative px-4'>
      <div className="container flex justify-center items-center relative">
        <Link to='/home' className='absolute left-0 pl-4 hover:scale-105 transition duration-100 ease-in-out'>
          <img src={navLogo} alt="Nav Logo" className='h-10 w-10' />
        </Link>

        <div className='flex gap-4 items-center font-bold'>
          <Link to='/produtos' className='hover:scale-105'>PRODUTOS</Link>
          <Link to='/categorias' className='hover:scale-105'>CATEGORIAS</Link>
          <Link to='/contato' className='hover:scale-105 '>CONTATO</Link>
          <Link to='/about' className='hover:scale-105'>SOBRE</Link>
          <Link to='/perfil' className='hover:scale-105'>PERFIL</Link>
        </div>

        {usuario.token !== "" ? (
          <button onClick={logout} className='absolute right-0 flex items-center pr-4 hover:scale-110 transition duration-100'>
            <img src={logoutIcon} alt="Logout" className='h-8 w-8' />
          </button>
        ) : (
          <Link to='/login' className='absolute right-0 flex items-center pr-4 hover:scale-110 transition duration-100'>
            <img src={loginIcon} alt="Login" className='h-8 w-8' />
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
