import homeLogo from '../../assets/logotipo_B_branco.svg'

function Home() {
    return (
        <>
        <div className="bg-all-azul-1 flex justify-center py-1">
            <div className="flex items-center justify-center py-1">
              <img src= {homeLogo} alt="" className= 'w-1/5' />
            </div>
            
            </div>

            <div className="bg-all-azul-4 flex justify-center h-screen">
            <div className="flex-col items-center justify-center bg-all-azul-4 w-[1000px]">            
              <p className="flex justify-center mt-4 text-5xl text-center leading-relaxed">
              A All Connected é uma plataforma de comércio eletrônico alinhada com 
              os princípios do Objetivo de Desenvolvimento Sustentável (ODS) 9 da ONU, 
              que promove a construção de infraestruturas resilientes, a promoção da industrialização 
              inclusiva e sustentável e o fomento à inovação. 
              </p>
              </div>
            </div>
        
      </>
    );
}

export default Home;