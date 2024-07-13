import homeLogo from '../../assets/logotipo_B_branco.svg'

function Home() {
    return (
        <>
        <div className="bg-all-azul-1 flex justify-center py-3">
          <div className='container grid  text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <img src= {homeLogo} alt="" className= 'w-1/6' />
            </div>
            </div>
        </div>
      </>
    );
}

export default Home;