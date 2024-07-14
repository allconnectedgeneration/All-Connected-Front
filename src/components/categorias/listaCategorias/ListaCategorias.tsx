import { useContext, useEffect, useState } from 'react';
import { Dna } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Categorias from '../../../models/Categorias';
import { buscar } from '../../../service/Service';
import CardCategorias from '../cardCategorias/CardCategorias';
import ModalCategoria from '../modalCategorias/ModalCategorias'; 

function ListaCategorias() {
  const [categorias, setCategorias] = useState<Categorias[]>([]);
  const navigate = useNavigate();
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarCategorias() {
    try {
      await buscar('/categoria/all', setCategorias, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.toString().includes('403')) {
        handleLogout();
        navigate('/login');
      }
    }
  }

  useEffect(() => {

    buscarCategorias();
  }, [token]); 

  return (
    <>
      <div className="flex justify-around gap-4">
              <ModalCategoria/>
              </div>

      {categorias.length === 0 && (
        <Dna
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}

      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categorias.map((categoria) => (
              <CardCategorias key={categoria.id} categorias={categoria} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaCategorias;
