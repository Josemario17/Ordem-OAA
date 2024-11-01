import React from "react";
import constitucional from "../../../src/assets/img/const.png";

export default function SectionCardXL() {
  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Title */}
        <div className="mb-12 flex flex-col md:flex-col">
          <h2 className="mb-8 gideon-roman-regular text-4xl max-w-lg font-bold my-4">
            <span className="italic">Na Ordem</span>
          </h2>
          <p className="text-md text-gray-500 max-w-lg">
            A Ordem dos Advogados é a instituição representativa dos licenciados
            em Direito que, em conformidade com os preceitos do presente
            Estatuto e demais disposições legais aplicáveis, exercem a
            advocacia.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {/* FactsCard */}
          <a
            href=""
            className="bg-white/50 relative constitucionalCard rounded-lg py-10 px-5 flex flex-col justify-between h-80 overflow-hidden"
          >
            <img
            src={constitucional}
            alt="mapa de Angola"
            className="h-[16rem] rotate-2 z-10 opacity-15 absolute top-2 right-0"
          />
            <div className="text-xl font-semibold">
              <h3 className="p-3">Observatório Constitucional</h3>
            </div>

            <p className="mt-4 text-sm z-20 bg-white/50 p-3">
              Dedicado ao monitoramento e análise das questões constitucionais
              em nosso país. Este observatório será composto por especialistas
              em direito constitucional, juristas e advogados que acturão na
              vigilância constante das leis e práticas governamentais,
              assegurando que estejam em conformidade com a Constituição...
            </p>
          </a>
          {/* FactsCard */}
          <a
            href=""
            className="rounded-md duration-300 card-tip-active bg-primary/30 group rounded-tr-[10rem] py-10 px-5 flex flex-col justify-between h-80"
          >
            <div className="text-xl font-semibold">
              <h3 className="text-white">Ética e Disciplina</h3>
            </div>

            <p className="mt-4 text-sm text-white bg-yellow-800/50 group-hover:bg-yellow-950/80 p-2">
              A Ordem dos Advogados de Angola (OAA) estabelece um rigoroso
              código de ética e disciplina que todos os seus membros devem
              seguir, garantindo a integridade e a qualidade dos serviços
              prestados à sociedade.
            </p>
          </a>
          {/* FactsCard */}
          <a href="" 
            className="bg-white/50 relative direitosHCard rounded-md duration-300 py-10 px-5 flex flex-col justify-between h-80 overflow-hidden"
          >
            <img
            src={constitucional}
            alt="mapa de Angola"
            className="h-[16rem] rotate-2 z-10 opacity-15 absolute top-2 right-0"
          />
            <div className="text-xl font-semibold">
              <h3 className="p-3">Direitos Humanos</h3>
            </div>

            <p className="mt-4 text-sm z-20 bg-white/50 p-3">
              Os Direitos Humanos são um conjunto de garantias fundamentais que
              visam assegurar a dignidade, a liberdade, a igualdade e a justiça
              para todas as pessoas, independentemente de sua raça, gênero,
              religião, nacionalidade ou qualquer outra condição.
            </p>
          </a>
          {/* FactsCard */}
          <a href=""
            className="bg-white/50 relative DireitoPCard rounded-md duration-300 py-10 px-5 flex flex-col justify-between h-80 overflow-hidden"
          >
            <img
            src={constitucional}
            alt="mapa de Angola"
            className="h-[16rem] rotate-2 z-10 opacity-15 absolute top-2 right-0"
          />
            <div className="text-xl font-semibold">
              <h3 className="p-3">Direitos e Prerrogativas dos Advogados </h3>
            </div>

            <p className="mt-4 text-sm z-20 bg-white/50 p-3">
              Os advogados desempenham um papel crucial na promoção da justiça e
              na defesa dos direitos dos cidadãos. Para assegurar a autonomia e
              a independência no exercício da profissão, a Ordem dos Advogados
              de Angola (OAA) estabelece um conjunto de direitos e prerrogativas
              que garantem o exercício pleno e efetivo da advocacia.
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
