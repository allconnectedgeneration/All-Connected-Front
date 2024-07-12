import "./About.css";

function About() {
  return (
    <>
      <div className="flex gap-20 w-full text-black">
        {/* <div className="fundoAbout hidden lg:block"></div> */}

        {/* <p> Bem-vindo à All Connected! Nossa empresa é dedicada a oferecer soluções inovadoras que levam a conectividade digital a lugares remotos e comunidades com vulnerabilidade social. Estamos comprometidos em fornecer sinal de celular e internet gratuitamente, tornando o acesso à tecnologia uma realidade para todos.
                </p> */}

        <div className=" ml-10 flex w-[50vw] items-center">
          <div className="text-center">
            <h2 className="text-slate-900 text-5xl mb-12 font-bold">
              Conheça nossas soluções
            </h2>

            <div className="bg-gray-200 w-[880px] p-4 rounded-xl mt-8 hover:bg-slate-400">
              <p className="font-bold text-2xl">Internet em Áreas Remotas</p>
              <p className="flex mt-4 text-xl">
                Nós levamos internet a regiões que antes eram inacessíveis,
                conectando pessoas e comunidades que precisam de acesso à
                informação e comunicação.
              </p>
            </div>

            <div className="bg-gray-200 w-[880px] p-4 rounded-xl mt-8 hover:bg-slate-400">
              <p className="font-bold text-2xl"> Sinal de Celular Gratuito</p>
              <p className="flex mt-4 text-xl">
                Fornecemos sinal de celular gratuito, permitindo que mais
                pessoas se mantenham conectadas com suas famílias, amigos e
                oportunidades de trabalho.
              </p>
            </div>

            <div className="bg-gray-200 w-[880px] p-4 rounded-xl mt-8 hover:bg-slate-400">
              <p className="font-bold text-2xl">Mobilização de Parceiros</p>
              <p className="flex mt-4 text-xl">
                Trabalhamos em parceria com diversas organizações para mobilizar
                doações que apoiam nossas iniciativas, garantindo que mais
                comunidades possam se beneficiar de nossos serviços.
              </p>
            </div>

            <div className="bg-gray-200 w-[880px] p-4 rounded-xl mt-8 hover:bg-slate-400">
              <p className="font-bold text-2xl">
                Industrialização Inclusiva e Sustentável
              </p>
              <p className="flex mt-4 text-xl">
                Promovemos a industrialização que é inclusiva e sustentável,
                contribuindo para um futuro onde todos tenham acesso a
                oportunidades econômicas e sociais.
              </p>
            </div>
          </div>
        </div>

        <div className="items-center p-14 flex w-[50vw]">
          <img
            className="h-[800px] w-[800px]"
            src="https://images.unsplash.com/photo-1632277232577-09bcf876d6fb?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>

      <div className="flex gap-20 w-full">
        <div className="items-center p-14 flex w-[50vw]">
          <img
            className="h-[1000px] w-[800px]"
            src="https://images.unsplash.com/photo-1596754777925-043dc3084b35?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="mt-20 items-center flex flex-col w-[50vw] text-center mr-8">
          <h2 className="text-slate-900 text-5xl mb-8 font-bold text-center">
            Missão
          </h2>
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 w-[880px] p-4 rounded-xl mt-6 hover:bg-slate-400">
              <p className="font-bold text-2xl">Democratizar o acesso a internet</p>
              <p className="mt-4 text-xl">
                Acreditamos que a internet deve ser acessível a todos,
                independentemente de onde vivem. Nossa missão é democratizar o
                acesso à internet, quebrando barreiras geográficas e
                socioeconômicas.
              </p>
            </div>

            <div className="bg-gray-200 w-[880px] p-4 rounded-xl mt-6 hover:bg-slate-400">
              <p className="font-bold text-2xl">Fomentar a Inovação</p>
              <p className="mt-4 text-xl">
                Estamos comprometidos em fomentar a inovação, apoiando o
                desenvolvimento tecnológico e incentivando a pesquisa e novas
                ideias que possam transformar vidas.
              </p>
            </div>
            <div className="bg-gray-200 w-[880px] p-4 rounded-xl mt-6 hover:bg-slate-400">
              <p className="font-bold text-2xl">
                Apoiar o desenvolvimento tecnológico, a pesquisa e a inovação
              </p>
              <p className="mt-4 text-xl">
                Investimos no desenvolvimento tecnológico, acreditando que a
                tecnologia é um motor essencial para o progresso e a inclusão
                social.
              </p>
            </div>
            <div className="bg-gray-200 w-[880px] p-4 rounded-xl mt-6 hover:bg-slate-400">
              <p className="font-bold text-2xl">
                Promover a industrialização inclusiva e sustentável
              </p>
              <p className="mt-4 text-xl">
                Promovemos uma industrialização que não deixa ninguém para trás,
                garantindo que o desenvolvimento econômico seja sustentável e
                beneficie todas as camadas da sociedade.
              </p>
            </div>
            <div className="bg-gray-200 w-[880px] p-4 rounded-xl mt-6 hover:bg-slate-400">
              <p className="font-bold text-2xl">Democratizar o acesso a internet</p>
              <p className="mt-4 text-xl">
                Acreditamos que a internet deve ser acessível a todos,
                independentemente de onde vivem. Nossa missão é democratizar o
                acesso à internet, quebrando barreiras geográficas e
                socioeconômicas.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p className="text-2xl p-9 mt-10 text-center font-semibold">
          Na All Connected, estamos empenhados em construir um mundo mais
          conectado, inclusivo e sustentável. Junte-se a nós nessa jornada para
          fazer a diferença!
        </p>
      </div>
    </>
  );
}

export default About;
