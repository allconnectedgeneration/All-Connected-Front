import homeLogo from '../../assets/logotipo_B_branco.svg'

function Home() {
    return (
        <>
        <div className="bg-all-azul-1 flex justify-center py-1">
            <div className="flex items-center justify-center py-1">
              <img src= {homeLogo} alt="" className= 'w-1/5' />
            </div>
            
        </div>
      </>
    );
}

export default Home;