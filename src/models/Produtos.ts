import Categorias from './Categorias';
import Usuario from './Usuario';

export default interface Produto {
  id: number;
  nome: string;
  quantidade: number;
  preco: number;
  descricao: string;
  foto: string;
  categoria: Categorias | null;
  usuario: Usuario | null;
  qtd?: number
}