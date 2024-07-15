import { BsFillTelephoneFill } from "react-icons/bs";
import { IoChatbubblesOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { MdOutlineEmail } from "react-icons/md";

export default function Contato() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-50">
      <div className="flex flex-col items-center max-w-[800px] w-full">
        <h1 className="text-black text-4xl font-bold mb-4">Contato</h1>
        <p className="text-xl mb-8">
          Precisa falar conosco? Entre em contato pelos canais abaixo:
        </p>

        <div className="bg-gray-200 w-full p-4 rounded-xl mb-6">
          <div className="flex gap-2 items-center">
            <IoChatbubblesOutline className="w-6 h-6" />
            <h1 className="font-bold text-2xl">Chat</h1>
          </div>
          <p className="flex mt-4 text-lg">
            Segunda à sexta das 9:00 às 17:00. Horário de Brasília (UTC-3).
            Exceto finais de semana e feriados.
          </p>
          <div className="flex mt-4 gap-16 items-center">
            <button className="bg-all-azul-7 text-white font-bold p-3 rounded-lg">
              INICIAR ATENDIMENTO
            </button>
            <div className="flex gap-2 items-center font-bold text-green-500">
              <GoDotFill />
              <p>ONLINE</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-200 w-full p-4 rounded-xl mb-6">
          <div className="flex gap-2 items-center">
            <BsFillTelephoneFill className="w-5 h-5" />
            <h1 className="font-bold text-2xl">SAC</h1>
          </div>
          <p className="flex mt-4 text-lg">
            Segunda à sexta das 9:00 às 17:00. Horário de Brasília (UTC-3).
            Exceto finais de semana e feriados.
          </p>
          <div className="flex mt-4 gap-16 items-center">
            <p className="flex text-lg text-blue-950 font-bold">
              (11) 4002.8922
            </p>
            <div className="flex gap-2 items-center font-bold text-green-500">
              <GoDotFill />
              <p>ONLINE</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-200 w-full p-4 rounded-xl mb-6">
          <div className="flex gap-1 items-center">
            <MdOutlineEmail className="w-8 h-6"/>
            <h1 className="font-bold text-2xl">Fale conosco</h1>
          </div>
          <p className="mt-4 text-lg">
            Envie um e-mail para a nossa equipe no endereço
            <span className="font-bold text-blue-950"> allconnectedbrazil@gmail.com</span>, responderemos o seu
            contato em até 7 dias úteis.
          </p>
        </div>
      </div>
    </div>
  );
}
