import { useContext, useEffect, useState } from 'react';
import { Dna } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Produtos from '../../../models/Produtos';
import { buscar } from '../../../service/Service';
import CardProdutos from '../cardProdutos/CardProdutos';
import ModalProduto from '../modalProdutos/ModalProdutos'; 

function ListaProdutos() {
  const [produtos, setProdutos] = useState<Produtos[]>([]);
  const navigate = useNavigate();
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  useEffect(() => {
    
    async function buscarProdutos() {
      try {
        await buscar('/produto/all', setProdutos, {
          headers: {
            Authorization: token,
          },
        });
      } catch (error: any) {
        if (error.toString().includes('403')) {
          handleLogout();
          navigate('/');
        }
      }
    }

    buscarProdutos();
  }, [token]); 

  return (
    <>
      <div className="flex justify-around gap-4">
              <ModalProduto/>
              </div>
      
      {produtos.length === 0 && (
        <Dna
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
      
      <div className="container mx-auto my-4 flex justify-center">
  <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
    {produtos.map((produto) => (
      <CardProdutos key={produto.id} post={produto} />
    ))}
  </div>
</div>
    </>
  );
}

export default ListaProdutos;
