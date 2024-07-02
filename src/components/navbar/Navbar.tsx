import navLogo from '../../assets/logotipo3.svg'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from '../../contexts/AuthContext'



function Navbar() {

const  navigate = useNavigate()

const { usuario, handleLogout } = useContext(AuthContext)

function logout() {
handleLogout()
alert('Usuário deslogado com sucesso')
navigate('/login')
}

  return (
    <>
     <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
          <div className="container flex justify-between">
           <img src={navLogo} alt="Nav Logo" className='nav-logo' />

            <div className='flex gap-4'>
            <Link to='/home' className='hover:underline'>Home</Link>
            <Link to='/cadastro' className='hover:underline'>Cadastrar</Link>
            <Link to='/login' className='hover:underline'>Login</Link>
            <Link to='/about' className='hover:underline'>Sobre</Link>
            <Link to='/contato' className='hover:underline'>Contato</Link>
              <Link to='/' onClick={logout} className='hover:underline'>Sair</Link>

            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar
