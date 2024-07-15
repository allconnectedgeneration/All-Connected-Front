import {GithubLogo, LinktreeLogo } from '@phosphor-icons/react'

function Footer() {
 
  

  return (
    <>
        <div className="flex justify-center bg-all-azul-7  text-white font-brunoace">
          <div className="container flex flex-col items-center py-2">
            <p className='text-xl font-bold text-white'> &copy; {new Date().getFullYear()} All Connected </p>
            <p className='text-lg text-white'>Acesse nossas redes</p>
            <div className='flex gap-2'>
              <a href='https://github.com/orgs/allconnectedgeneration/repositories' target='_blank' rel='noopener noreferrer' className='hover:scale-105'>
              <GithubLogo size={38} weight='bold' />
              </a>
              <a href='https://linktr.ee/allconnectedbrazil' target='_blank' rel='noopener noreferrer' className='hover:scale-105'>
              <LinktreeLogo size={38} weight='bold' />
              </a>
            </div>
          </div>
        </div>
      </>
  )
}

export default Footer