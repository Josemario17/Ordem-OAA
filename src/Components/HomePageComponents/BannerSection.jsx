import React from 'react'

export default function BannerSection({url}) {
  return (
    <div className="mx-auto w-full max-w-7xl px-3 py-5 md:px-10 md:py-20">
            <div className="grid justify-items-center gap-4 mx-auto bg-white/50 rounded-md p-8 sm:p-10 md:grid-cols-[1.5fr_1fr] md:justify-items-start md:p-16">
              <div className="w-full max-w-md sm:max-w-full flex justify-start">
                <div className="relative mx-auto mb-4 flex w-full flex-col items-center justify-start sm:flex-row">
                  <img
                    src={url}
                    alt="exame nacional de advocacia"
                    className="absolute -top-2 opacity-5 md:opacity-50 "
                  />
                </div>
              </div>
              <div className="text-start md:text-end">
                <h2 className="mb-2 text-2xl font-bold md:text-3xl gideon-roman-regular">
                  Conheça o Exame Nacional de <br /> Acesso à{" "}
                  <span className="italic">Advocacia</span>
                </h2>
                <p className="max-w-md text-sm sm:test-base text-gray-500">
                  Acesse a Plataforma, inscreva-se e obtenha um lugar no exame
                  Nacional Advocacia, esteja preparado e prossiga.
                </p>
                <div className="w-auto flex justify-end">
                  <a
                    href="#"
                    className="rounded-full flex justify-between w-1/2 mt-4 border border-solid border-primary text-yellow-600 hover:bg-primary hover:text-white px-6 py-3"
                  >
                    Ver Mais
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
  )
}
