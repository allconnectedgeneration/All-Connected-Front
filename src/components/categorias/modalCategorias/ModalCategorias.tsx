import FormularioCategoria from '../formularioCategoria/FormularioCategoria';

import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';

import './ModalCategorias.css'

function ModalCategoria() {
  return (
    <>
      <Popup 
      trigger={<button className='border rounded px-4 hover:bg-white hover:text-indigo-800'>Nova Categoria</button>} modal>
        <div>
          <FormularioCategoria />
        </div>
      </Popup>
    </>
  );
}

export default ModalCategoria;