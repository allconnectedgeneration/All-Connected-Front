import homeLogo from '../../assets/logotipo1.svg'
import ListaCategorias from '../../components/listaCategorias/ListaCategorias';
import './Home.css';


function Home() {
    return (
        <>
        <div className="bg-indigo-900 flex justify-center py-6">
          <div className='container grid  text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <img src= {homeLogo} alt="" className= 'w-1/5' />
            </div>
            </div>
        </div>
      <ListaCategorias/>
      </>
    );
}

export default Home;