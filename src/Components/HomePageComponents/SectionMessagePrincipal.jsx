import React from 'react'
import bastonario from "../../../src/assets/img/bastonario.webp";
import aspas from "../../../src/assets/img/bg-aspas.png";

export default function SectionMessagePrincipal() {
  return (
    <section className="flex flex-row flex-wrap-reverse items-center justify-between px-12">
          <div className="relative w-auto xl:w-[58%] lg:w-[58%] md:w-[68%] mx-auto max-w-2xl pt-32 sm:pt-48 sm:pb-14 lg:py-48">
            <div className="absolute top-0 -left-20">
              <img src={aspas} className="w-80 opacity-60" />
            </div>
            <p className="text-2xl text-start gideon-roman-regular leading-snug font-bold text-gray-900 sm:text-5xl">
              Mensagem do <span className="italic">Bastonário </span> da Ordem
              dos Advogados de Angola.
            </p>
            <p className="mt-6 text-lg raleway-italic leading-8 text-gray-600">
              "Nosso compromisso com a justiça vai além da representação legal.
              Trabalhamos continuamente para aprimorar o sistema judiciário,
              promover reformas legais e garantir que as práticas jurídicas em
              Angola sejam conduzidas com integridade e profissionalismo".
            </p>
            <div className="mt-10 flex flex-wrap gap-y-4 items-center justify-start gap-x-6">
              <a
                href="#"
                className="rounded-full border border-solid border-primary text-yellow-600 hover:text-white px-6 py-3 text-sm font-semibold shadow-sm hover:bg-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary/50"
              >
                Conhecer o Bastonário da Ordem
              </a>
              <a
                href="#"
                className="text-sm font-semibold pl-3 leading-6 text-gray-900 hover:text-gray-600"
              >
                Ver mensagem Completa{" "}
                <span aria-hidden="true" className="mx-2">
                  →
                </span>
              </a>
            </div>
          </div>

          <div className="w-auto lg:w-[38%] pt-6 flex justify-center lg:justify-start mr-12">
            <img
              src={bastonario}
              alt="Ordem dos Advogados de Angola"
              className=" h-auto w-auto opacity-90 mx-auto"
            />
          </div>
        </section>
  )
}
