import React from "react";
import { Link } from "react-router-dom";

export default function Sign() {
  return (
    <section>
      {/* Container */}
      <div className="grid gap-0 md:h-screen md:grid-cols-2">
        {/* Component */}
        <div className="flex flex-wrap flex-col items-center justify-center bg-white/50 bg-Login">
          <Link to={"/"} className="w-1/2 my-4 flex justify-start items-center gap-10">
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
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
            Voltar a Página Inicial
          </Link>
          <div className="mx-auto max-w-md px-5 py-16 md:px-10 md:py-20">
            <div className="mb-5 flex h-14 w-14 flex-col items-center justify-center md:mb-6 lg:mb-8">
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a949eade6cf7d_Vector-2.svg"
                alt=""
                className="inline-block"
              />
            </div>
            <p className="mb-8 text-sm sm:text-base md:mb-12 lg:mb-16 text-gray-500">
              O advogado deve, no exercício da profissão e fora dela,
              considerar-se um servidor da justiça e do direito e, como tal,
              mostrar-se digno da honra e das responsabilidades que lhe são
              inerentes.
            </p>
            <p className="text-sm font-bold sm:text-base gideon-roman-regular">
              ARTIGO <span className="Quicksand-regular">60</span>º
            </p>
            <p className="text-sm sm:text-sm text-gray-500">
              DEONTOLOGIA PROFISSIONAL artigos{" "}
              <span className="Quicksand-regular">60</span>º a{" "}
              <span className="Quicksand-regular">73</span>º, pág. 34 dos
              Estatutos da Ordem
            </p>
          </div>
        </div>
        {/* Component */}
        <div className="flex items-center justify-center px-5 py-16 md:px-10 md:py-20">
          <div className="max-w-md text-center">
            <h2 className="mb-8 text-3xl font-bold md:mb-12 md:text-5xl lg:mb-16 gideon-roman-regular">
              Acesse o Portal do <span className="italic">Advogado</span>
            </h2>
            {/* Form */}
            <div className="mx-auto mb-4 max-w-sm pb-4">
              <form name="wf-form-password" method="get">
                <div className="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 absolute left-5 top-3 inline-block"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
                    />
                  </svg>

                  <input
                    type="email"
                    className="mb-4 block h-9 w-full rounded-md border border-solid border-primary px-3 py-6 pl-14 text-sm text-black placeholder:text-gray-500"
                    placeholder="Email Address"
                    required=""
                  />
                </div>
                <div className="relative mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 absolute left-5 top-3 inline-block"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                    />
                  </svg>

                  <input
                    type="password"
                    className="mb-4 block h-9 w-full rounded-md border border-solid border-primary px-3 py-6 pl-14 text-sm text-black placeholder:text-gray-500"
                    placeholder="Senha (minino 6 Caracteres)"
                    required=""
                  />
                </div>
                <label className="mb-6 flex items-center justify-start pb-12 pl-5 font-medium md:mb-10 lg:mb-1">
                  <input
                    type="checkbox"
                    name="checkbox"
                    className="float-left mt-1"
                  />
                  <span
                    className="ml-4 inline-block cursor-pointer text-sm"
                    htmlFor="checkbox"
                  >
                    Manter a minha Sessão Activa
                  </span>
                </label>
                <input
                  type="submit"
                  value="Entrar"
                  className="inline-block w-full cursor-pointer items-center bg-primary px-6 py-3 text-center font-semibold rounded-md hover:bg-primary/70 text-white"
                />
              </form>
            </div>
            <p className="text-sm text-gray-500 sm:text-sm">
              Ainda não tenho uma Conta?
              <a href="#" className="font-bold text-black">
                <span> </span> Pedir Crêdencias
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
