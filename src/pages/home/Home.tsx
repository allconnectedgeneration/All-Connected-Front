import React from 'react';
import homeLogo from '../../assets/logotipo_B_branco.svg';

function Home() {
  return (
    <>
      <div className="bg-all-azul-7 flex justify-center py-1">
        <div className="flex items-center justify-center py-1">
          <img src={homeLogo} alt="" className='w-1/5' />
        </div>
      </div>

      <div className="bg-all-azul-4 flex justify-center min-h-screen pt-6 pb-6">
        <div className="w-full flex justify-center">
          {/* Código de incorporação do slide do Canva */}
          <div style={{ position: 'relative', width: '50%', height: 0, paddingTop: '28.125%', boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)', marginTop: '1.6em', marginBottom: '0.9em', overflow: 'hidden', borderRadius: '8px', willChange: 'transform' }}>
            <iframe 
              loading="lazy" 
              style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, border: 'none', padding: 0, margin: 0 }} 
              src="https://www.canva.com/design/DAGK4AQ9sio/OnR6p8Qdt1XL-XaPqskk7Q/view?embed" 
              allowFullScreen 
              allow="fullscreen">
            </iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;