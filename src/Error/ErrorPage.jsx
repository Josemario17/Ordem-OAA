import React from "react";
import { Link } from "react-router-dom";
import erro from '../../src/assets/img/Erro.webp'

export default function ErrorPage() {
  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Component */}
        <div className="grid items-center gap-8 sm:gap-20 lg:grid-cols-2">
          <div>
            <h1 className="mb-4 text-4xl font-bold md:text-6xl">Ups Link não encontrado</h1>
            <p className="mb-6 max-w-lg text-sm text-gray-500 sm:text-xl md:mb-10 lg:mb-12">
              "Infelizmente, a página que você está procurando não foi
              encontrada. Pode ter sido removida, renomeada ou está
              temporariamente indisponível. Por favor, verifique o endereço
              digitado ou retorne à página inicial para continuar navegando. Se
              precisar de assistência, não hesite em entrar em contato conosco."
            </p>
            <Link
              to={"/"}
              className="inline-block items-center rounded-full bg-primary hover:bg-primary/70  px-6 py-3 text-center font-semibold text-white"
            >
              Voltar a Página inicial
            </Link>
          </div>
          <div className="bg-transparent">
            <img
              src={erro}
              alt="Erro na página da Ordem dos Advogados de Angola"
              className="mx-auto inline-block h-full w-full max-w-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
