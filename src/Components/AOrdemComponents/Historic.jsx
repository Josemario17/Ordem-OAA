import React from "react";

export default function Historic() {
  const items = [
    {
      title: "PROCESSO CONSTITUTIVO",
      description:
        "A Ordem dos Advogados de Angola foi proclamada aos 20 de Setembro de 1996, no Palácio dos Congresso em Luanda.",
    },
    {
      title: "CARACTERIZAÇÃO DO SISTEMA DE ADVOCACIA",
      description:
        'A Advocacia, em Angola, é uma "profissão liberal" ou "livre" inserida num sistema de organização do tipo "europeu continental" em que as funções regulatórias e de disciplina competem à Ordem dos Advogados de Angola, enquanto corporação profissional pública.',
    },
    {
      title: "NATUREZA E CARACTERÍSTICAS DA ORDEM",
      description: "Dentro da categoria das corporações profissionais, a OAA é uma Associação de Direito Público (pessoa colectiva pública de base associativa) dotada de personalidade jurídica e autonomia",
    },
    {
      title: "FUNÇÕES DA ORDEM DOS ADVOGADOS",
      description: " Defesa do Direito e da Justiça; Defender os valores do Estado Democrático de Direito, os direitos, liberdades e garantias individuais dos cidadãos",
    },
  ];

  return (
    <section>
      <div className="mx-auto w-full max-w-[1300px] px-5 py-8 md:px-10 md:py-12">
        <div className="flex flex-col gap-14">
          <div className="flex max-w-7xl flex-col items-start gap-8 lg:flex-row lg:items-center justify-between">
            <h2 className="text-3xl font-bold md:text-4xl gideon-roman-regular">
              O Historial da{" "}
              <span className="italic">Ordem dos Advogados de Angola</span>
            </h2>
            <p className="w-3/4 text-sm sm:text-base">
              A Ordem dos Advogados de Angola tem um vasto histórico de defesa
              dos direitos dos cidadãos, promovendo a justiça e a ética
              profissional. Nesta seção, você pode explorar as principais
              realizações e marcos da instituição ao longo dos anos.
            </p>
          </div>

          {items.map((item, index) => (
            <div
              key={index}
              className="relative flex cursor-pointer flex-col gap-4 p-5 [border-top:1px_solid_rgb(0,_0,_0)] sm:px-6 md:py-10 lg:flex-row lg:gap-28"
            >
              <div className="flex items-center gap-4 pr-8 lg:w-1/2 lg:gap-20">
                <p className=" text-sm sm:text-sm Quicksand-regular">
                  0{index + 1}
                </p>
                <h3 className="text-2xl font-bold md:text-2xl capitalize">
                  {item.title.toLowerCase()}
                </h3>
              </div>
              <p className="max-w-lg text-sm sm:text-base">
                {item.description}
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
