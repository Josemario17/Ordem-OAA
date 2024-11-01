import React from "react";
import Cedula from "../../assets/img/../../assets/img/Cedula.png";
import cartao from "../../assets/img/../../assets/img/cartao.png";
import estagiario from "../../assets/img/../../assets/img/estagiario.png";

export default function Simbols() {
  const simbolsData = [
    {
      id: "01",
      imgSrc:
        "https://static.wixstatic.com/media/251848_4cd9ebc59fb1404ea3457a94ecb40f65~mv2.png/v1/fill/w_206,h_206,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Logo_da_Ordem_dos_Advogados_de_Angola.png",
      altText: "Insígnia da Ordem Dos Advogados de Angola",
      description: "Insígnia da Ordem Dos Advogados de Angola",
    },
    {
      id: "02",
      imgSrc: Cedula,
      altText: "Nova Cédula Profissional dos Advogado da Ordem",
      description: "Nova Cédula Profissional dos Advogado da Ordem",
    },
    {
      id: "03",
      imgSrc: estagiario,
      altText: "Cédula Profissional do Advogado Estágiario da Ordem",
      description: "Cédula Profissional do Advogado Estágiario da Ordem",
    },
    {
      id: "04",
      imgSrc: cartao,
      altText: "Cartão de Identidade do Advogado da Ordem",
      description: "Cartão de Identidade do Advogado da Ordem",
    },
  ];

  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl overflow-hidden px-5 md:px-10 lg:px-20 py-10">
        {/* Component */}
        <div className="flex flex-col items-center gap-y-16 py-6">
          {/* Hero Title */}
          <div className="max-w-3xl">
            <h3 className="m-5 text-center text-3xl font-bold sm:text-4xl md:text-5xl lg:text-4xl gideon-roman-regular">
              <span className="italic">OS Simbolos da Ordem </span>
            </h3>
          </div>
        </div>
      </div>
      {/* Slider */}
      <div className="flex min-w-[100vw] overflow-hidden">
        {simbolsData.map((item) => (
          <div
            key={item.id}
            class="relative aspect-[5/3.8] h-[30rem] overflow-hidden"
          >
            <img
              src={item.imgSrc}
              alt={item.altText}
              width="1300"
              className="h-[30rem] w-36 border border-solid border-gray-400/30 sm:w-72 lg:w-[400px] object-cover"
            />
            <div class="absolute w-[400px] inset-0 bg-gradient-to-t from-gray-800 dark:from-gray-900 flex flex-col justify-end p-5 space-y-5 text-gray-300">
              <div class="relative bg-cover bg-center w-64 h-32 flex items-center justify-start">
                <h1 class="text-7xl font-bold text-transparent text-stroke-white Quicksand-regular">
                  {item.id}
                </h1>
              </div>
              <p class="text-gray-300 line-clamp-2">{item.description}</p>
              <div class="w-max"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
