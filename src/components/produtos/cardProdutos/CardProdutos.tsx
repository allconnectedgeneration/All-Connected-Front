import { Link } from "react-router-dom";
import Produto from "../../../models/Produtos";

interface CardProdutosProps {
  post: Produto;
}

function CardProdutos({ post }: CardProdutosProps) {
  return (
    <div className="border-gray-300 border flex flex-col rounded-md overflow-hidden justify-between font-padrão w-[400px] hover:shadow-2xl">
      <div>
        <div className="flex w-full justify-center">
          <img src={post.foto} className="w-full h-[230px]" alt="" />
        </div>
        <div className="p-4 ">
          <div className="justify-center">
            <h3 className="text-lg font-bold text-center uppercase w-96">
              {post.nome}
            </h3>
          </div>

          <div className="flex gap-16 justify-center mt-4">
            <h4 className="text-lg font-bold uppercase text-all-azul-1">
              R$ {post.preco}
            </h4>
            <h4 className="text-lg font-semibold">
              Quantidade: {post.quantidade} und
            </h4>
          </div>
          <div className="mt-4">
            <h4 className="text-lg font-semibold text-gray-400">
              Descrição: {post.descricao}
            </h4>
            <h4 className="text-lg font-semibold  text-gray-400">
              Categoria: {post.categoria?.tipo}
            </h4>
          </div>
        </div>
      </div>
      <div className="flex gap-5 ml-5 mr-5 mb-4 justify-center">
        <Link
          to={`/editarProduto/${post.id}`}
          className="w-32 rounded-md bg-all-azul-7 text-white hover:text-all-azul-7 hover:bg-all-cinza-7 font-brunoace flex items-center justify-center py-2"
        >
          <button>Editar</button>
        </Link>
        <Link
          to={`/deletarProduto/${post.id}`}
          className="w-32 text-white rounded-md bg-red-400 hover:bg-red-700 font-brunoace flex items-center justify-center"
        >
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardProdutos;
