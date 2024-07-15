import FormularioCategoria from '../formularioCategoria/FormularioCategoria';

import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';

import './ModalCategorias.css'

function ModalCategoria() {
  return (
    <>
      <Popup 
      trigger={<button className='border rounded px-4 bg-all-azul-7 text-white hover:text-all-azul-7 hover:bg-all-cinza-7 font-brunoace mt-3'>Nova Categoria</button>} modal>
        <div>
          <FormularioCategoria />
        </div>
      </Popup>
    </>
  );
}

export default ModalCategoria;