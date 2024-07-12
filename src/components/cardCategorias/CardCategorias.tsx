import React from 'react'
import { Link } from 'react-router-dom'
import Categorias from '../../models/Categorias'

interface CardCategoriasProps {
    categorias: Categorias
  }


function CardCategorias({categorias}: CardCategoriasProps) {
    return (
      <div className="border-gray-300 border flex flex-col rounded-md overflow-hidden justify-between font-padrão w-[400px] hover:shadow-2xl">
        <header className='py-2 px-6 bg-all-azul-1 text-white font-bold text-2xl'>{categorias.tipo}</header>
        <p className='p-8 text-3xl bg-slat h-full'>{categorias.especificacao}</p>
        <div className="flex gap-5 ml-5 mr-5 mb-4 justify-center">
        <Link to={`/editarCategoria/${categorias.id}`} className='w-32 rounded-md text-white bg-all-azul-1 hover:bg-all-azul-6 flex items-center justify-center py-2'>
            <button>Editar</button>
          </Link>
          <Link to={`/deletarCategoria/${categorias.id}`} className='w-32 text-white rounded-md bg-red-400 hover:bg-red-700 flex items-center justify-center'>
            <button>Deletar</button>
          </Link>
        </div>
      </div>
    )
  }
  
  export default CardCategorias