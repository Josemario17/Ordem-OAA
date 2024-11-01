import React from "react";
import { Link } from "react-router-dom";

export default function MainAfterHeader({ BannerUrl }) {
  return (
    <div className="relative isolate px-2 pt-14 lg:px-8">
      {/* Seu código existente para o banner e outras seções */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#fff9d9] to-[#e7dbc2] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>

        <div className="flex flex-row items-center justify-between">
          <div className="w-auto md:w-[58%] xl:w-[58%] lg:w-[58%] mx-auto max-w-2xl py-32 sm:py-48 lg:py-48 z-20">
            <div className="hidden sm:mb-8 sm:flex lg:justify-start sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-primary hover:ring-gray-900/20">
                Novo Portal do advogado já disponível.{" "}
                <a href="#" className="font-semibold text-primary raleway-bold">
                  <span aria-hidden="true" className="absolute inset-0" />
                  Ver mais <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="text-justify">
              <h1 className="text-4xl text-start gideon-roman-regular tracking-tight font-bold text-gray-900 sm:text-6xl">
                Ordem dos Advogados de br Angola: a {" "}
                <span className="italic">Justiça</span>, Ética e Transparência .
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Nosso compromisso com a justiça vai além da representação legal.
                Trabalhamos continuamente para aprimorar o sistema judiciário,
                promover reformas legais e garantir que as práticas jurídicas em
                Angola sejam conduzidas com integridade e profissionalismo.
              </p>
              <div className="mt-10 flex flex-wrap gap-y-4 items-center justify-start gap-x-6">
                <Link
                  to="/AOrdem"
                  className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary/50"
                >
                  Conheço melhor a Ordem
                </Link>
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-gray-900 pl-3 hover:text-gray-600"
                >
                  O Advogado{" "}
                  <span aria-hidden="true" className="mx-2">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="md:w-[35%] lg:w-[35%] xl:w-[35%] pt-6 justify-start absolute z-0 opacity-10 lg:opacity-100 w-auto h-auto md:relative lg:relative xl:relative flex">
            <img
              src={BannerUrl}
              alt="Ordem dos Advogados de Angola"
              className="h-[52rem] -skew-x-2 w-auto"
            />
          </div>
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#feee8f] to-[#b2a489] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  );
}
