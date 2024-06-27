import './About.css';

function About() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center font-bold"> 
        <div className="fundoAbout hidden lg:block"></div>
        <div className='flex justify-center items-center flex-col w-2/3 gap-3'>
          <p className='text-center'>
              <p> Bem-vindo à All Connected! Nossa empresa é dedicada a oferecer soluções inovadoras que levam a conectividade digital a lugares remotos e comunidades com vulnerabilidade social. Estamos comprometidos em fornecer sinal de celular e internet gratuitamente, tornando o acesso à tecnologia uma realidade para todos.
                </p>

              <h2 className='text-slate-900 text-5xl'>Conheça nossas Soluções</h2>
              <p>Internet em Áreas Remotas: Nós levamos internet a regiões que antes eram inacessíveis, conectando pessoas e comunidades que precisam de acesso à informação e comunicação.</p>
              <p>Sinal de Celular Gratuito: Fornecemos sinal de celular gratuito, permitindo que mais pessoas se mantenham conectadas com suas famílias, amigos e oportunidades de trabalho.</p>
              <p>Mobilização de Parceiros: Trabalhamos em parceria com diversas organizações para mobilizar doações que apoiam nossas iniciativas, garantindo que mais comunidades possam se beneficiar de nossos serviços. </p>
              <p>Industrialização Inclusiva e Sustentável: Promovemos a industrialização que é inclusiva e sustentável, contribuindo para um futuro onde todos tenham acesso a oportunidades econômicas e sociais.</p>                      
            </p>

          <h2 className='text-slate-900 text-5xl'>Missão</h2>
          <div className="flex flex-col w-full">
            <p className='text-center'>
              <p>Democratizar o acesso a internet: Acreditamos que a internet deve ser acessível a todos, independentemente de onde vivem. Nossa missão é democratizar o acesso à internet, quebrando barreiras geográficas e socioeconômicas.</p>
              <p>Fomentar a Inovação: Estamos comprometidos em fomentar a inovação, apoiando o desenvolvimento tecnológico e incentivando a pesquisa e novas ideias que possam transformar vidas.</p>
              <p>Apoiar o desenvolvimento tecnológico, a pesquisa e a inovação: Investimos no desenvolvimento tecnológico, acreditando que a tecnologia é um motor essencial para o progresso e a inclusão social.</p>
              <p>Promover a industrialização inclusiva e sustentável: Promovemos uma industrialização que não deixa ninguém para trás, garantindo que o desenvolvimento econômico seja sustentável e beneficie todas as camadas da sociedade. </p>
              <p> Na All Connected, estamos empenhados em construir um mundo mais conectado, inclusivo e sustentável. Junte-se a nós nessa jornada para fazer a diferença!</p>         
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
