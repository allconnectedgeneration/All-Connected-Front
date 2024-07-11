import homeLogo from '../../assets/logotipo1.svg'
import ListaProdutos from '../../components/produtos/listaProdutos/ListaProdutos';
import './Home.css';
import ModalProduto from '../../components/produtos/modalProdutos/ModalProdutos';


function Home() {
    return (
        <>
        <div className="bg-indigo-900 flex justify-center py-6">
          <div className='container grid  text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <img src= {homeLogo} alt="" className= 'w-1/5' />
              
              <div className="flex justify-around gap-4">
              <ModalProduto/>
              </div>
            </div>
            </div>
        </div>
     <ListaProdutos/>
      </>
    );
}

export default Home;