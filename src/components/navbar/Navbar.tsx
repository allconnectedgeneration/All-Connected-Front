import navLogo from '../../assets/logotipo3.svg'
import './Navbar.css'
import { Link } from 'react-router-dom'



function Navbar() {
 


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
              <div className='hover:underline'>Sair</div>

            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar
