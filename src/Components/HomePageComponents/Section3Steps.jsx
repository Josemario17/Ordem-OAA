import React from "react";
import image from "../../assets/img/nova-plataforma.webp";

export default function Section3Steps() {
  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-20">
        {/* Title */}
        <h2 className="mx-auto gideon-roman-regular mb-8 text-center text-3xl max-w-sm md:max-w-xl font-bold md:text-5xl">
          Nova forma de <span className="italic">Cobrança</span> e{" "}
          <span className="italic">Pagamento de quotas</span>
        </h2>
        {/* Content */}
        <div className="flex flex-col items-center justify-center bg-contain bg-center pt-10 bg-[url('https://assets.website-files.com/6458c625291a94a195e6cf3a/648825fca218588cb636c341_Group%2048114.png')]">
          <div className="flex flex-col justify-around gap-4 sm:flex-row">
            <a
              className="rounded-md border border-solid border-gray-300 bg-gray-100 p-6 text-black"
              href="#w-tabs-2-data-w-pane-0"
            >
              <h5 className="mb-2 text-xl font-bold">Saiba que</h5>
              <p className="text-sm">
                A Ordem dos Advogados de Angola está modernizando o processo de
                pagamento das quotas com a introdução de pagamentos por
                referência e integração de novos meios de pagamento
              </p>
            </a>
            <a
              className="rounded-md border border-solid border-gray-300 bg-white p-6 text-black"
              tabIndex="-1"
              href="#w-tabs-2-data-w-pane-1"
            >
              <h5 className="mb-2 text-xl font-bold">A partir</h5>
              <p className="text-sm">
                Dos próximos ciclos, os advogados poderão efetuar pagamentos de
                forma mais rápida e conveniente, utilizando plataformas digitais
                que garantem maior segurança e eficiência.
              </p>
            </a>
            <a className="rounded-md border border-solid border-gray-300 bg-white p-6 text-black">
              <h5 className="mb-2 text-xl font-bold">Mudança</h5>
              <p className="text-sm">
                Essa mudança visa simplificar o processo, permitindo que os
                profissionais se concentrem em suas atividades, enquanto a Ordem
                continua a assegurar a transparência e a integridade na gestão
                das contribuições.
              </p>
            </a>
          </div>

          <figure class="mt-16 mx-auto relative z-[1] max-w-full w-auto lg:w-[69rem] h-auto rounded-b-lg shadow-[0_2.75rem_3.5rem_-2rem_rgb(45_55_75_/_20%),_0_0_5rem_-2rem_rgb(45_55_75_/_15%)]">
            <div class="relative flex items-center w-min-[12rem] lg:w-[69rem] bg-primary rounded-t-lg py-6 px-24">
              <div class="flex gap-x-1 absolute top-2/4 start-4 -translate-y-1 ">
                <span class="size-2 bg-yellow-800 rounded-full"></span>
                <span class="size-2 bg-yellow-800 rounded-full"></span>
                <span class="size-2 bg-yellow-800 rounded-full"></span>
              </div>
              <div class="flex justify-center items-center size-full py-1 -mb-6 bg-yellow-800 text-md text-gray-100 rounded-sm">
                www.portaldoadvogado.com
              </div>
            </div>

            <div class="bg-gray-300/12 rounded-b-lg mx-auto">
              <img
                class="max-w-full object-cover mx-auto w-full h-auto rounded-b-lg"
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6488257b75d6a7b950248536_Group%2048113.svg"
                alt="Browser Placeholder"
              />
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
