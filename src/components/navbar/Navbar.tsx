import navLogo from '../../assets/logotipo3.svg'
import './Navbar.css'


function Navbar() {
 
  

  return (
    <>
     <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
          <div className="container flex justify-between">
           <img src={navLogo} alt="Nav Logo" className='nav-logo' />

            <div className='flex gap-4'>
              <div className='hover:underline'>Home</div>
              <div className='hover:underline'>Sobre</div>
              <div className='hover:underline'>Cadastrar</div>
              <div className='hover:underline'>Login</div>
              <div className='hover:underline'>Sair</div>
              
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar