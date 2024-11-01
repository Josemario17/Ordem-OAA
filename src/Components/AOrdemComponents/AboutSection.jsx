import React from "react";
import quemSomosIcone from "../../assets/img/Quem-Somos-icone.png";
import ValoresObjIcone from "../../assets/img/Valores.png";
import MissaoIcone from "../../assets/img/Missao.png";
export default function AboutSection() {
  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Title */}
        <h2 className="mx-auto max-w-xl text-center text-3xl font-bold md:text-5xl mb-8 md:mb-12 lg:mb-16 gideon-roman-regular">
          Conheça mais Sobre a{" "}
          <span className="italic">Ordem dos Advogados de Angola</span>
        </h2>
        {/* Content */}
        <div className="grid grid-cols-1 gap-6 mb-6">
          <div className="bg-white/50 p-6 rounded-lg flex flex-col md:flex-row md:justify-between items-center">
            <div className="flex flex-col gap-6">
              <div className="h-11 w-11">
                <img
                  src={quemSomosIcone}
                  alt="Quem Somos, Ordem dos Advogados de Angola"
                  className="w-auto"
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold raleway-bold mb-4">
                  Quem Somos?
                </h3>
                <p className="text-gray-500 max-w-6xl">
                  A Ordem dos Advogados de Angola (OAA) é uma instituição
                  pública representativa e reguladora da advocacia em todo o
                  território nacional. Proclamada aos 20 de Setembro de 1996, no
                  Palácio dos Congresso em Luanda, a OAA é a primeira
                  organização profissional representativa dos direitos,
                  interesses, anseios e garantias de uma classe profissional
                  desde que a República de Angola existe enquanto Estado
                  soberano no plano internacional, sendo, portanto, pioneira no
                  movimento do associativismo profissional em Angola.
                </p>
              </div>
            </div>

            <div className="mt-5 md:mr-5 md:mt-5 pl-5 flex items-center justify-end">
              <img
                src={quemSomosIcone}
                alt="Quem Somos, Ordem dos Advogados de Angola"
                className="w-2/3"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Item */}
          <div className="bg-white/50 p-6 rounded-lg flex flex-col space-y-4">
            <div className="size-10">
              <img
                src={MissaoIcone}
                alt="Missão, Ordem dos Advogados de Angola"
                className="w-auto"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold raleway-bold mb-4">
                Missão
              </h3>
              <p className="text-gray-500">
                Colaborar na administração da justiça • Defender o Estado
                Democrático e de Direito • Zelar pela dignidade da advocacia
                enquanto profissão • Defender os interesses, direitos,
                prerrogativas, imunidades e garantias da classe
              </p>
            </div>
          </div>
          {/* Item */}
          <div className="bg-white/50 p-6 rounded-lg flex flex-col space-y-4">
            <div className="size-10">
              <img
                src={ValoresObjIcone}
                alt="Valores e Objectivos, Ordem dos Advogados de Angola"
                className="w-auto"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold raleway-bold mb-4">
                Valores e Objectivos
              </h3>
              <p className="text-gray-500">
                Justiça e imparcialidade • Ética e profissionalismo • Defesa dos
                direitos e liberdades • Independência e autonomia • Compromisso
                com a sociedade. • Adesão a organizações internacionais de
                advogados. • Cooperação com organismos nacionais e
                internacionais. • Participação em fóruns nacionais e
                internacionais sobre Direito e justiça.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
