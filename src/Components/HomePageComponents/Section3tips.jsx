import React from "react";

export default function Section3tips() {
  return (
    <section class="mb-24">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <article class="flex max-w-xl flex-col items-start justify-between">
            <div class="flex items-center gap-x-4 text-xs h-2 bg-primary w-full"></div>
            <div class="group relative">
              <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <a href="#" className="gideon-roman-regular text-2xl">
                  <span className="italic">Legislação da Advocacia</span>
                </a>
              </h3>
              <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                Ser um Bom Advogado inclui conhecer questões Legislativas como
                Estatutos da OAA, Lei da Advocacia, Lei das Sociedades de
                Advogados, Regulamento de acesso à OAA, Demais regulamentos.
              </p>
            </div>
            <div class="relative mt-8 flex items-center gap-x-4">
              <a
                href="#"
                className="rounded-full bg-primary px-6 py-2 w-full mx-auto text-center font-semibold text-white"
              >
                Saiba mais sobres à Legislação ...
              </a>
            </div>
          </article>

          <article class="flex max-w-xl flex-col items-start justify-between">
            <div class="flex items-center gap-x-4 text-xs h-2 bg-primary w-full"></div>
            <div class="group relative">
              <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <a href="#" className="gideon-roman-regular text-2xl">
                  <span className="italic">
                    Base de Dados da Legislação Angolana
                  </span>
                </a>
              </h3>
              <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                Diário da República, I e III Séries SR. ADVOGADO Está
                informatizada a Legislação do Diário da República, I Série,
                desde 1975 até 2013, em actualização semanal. Os serviços estão
                a informatizar retrospectivamente e a consolidar os diplomas com
                ligações jurídicas de revogação, derrogação ou mera remissão.
              </p>
            </div>
            <div class="relative mt-8 flex items-center gap-x-4">
              <a
                href="#"
                className="rounded-full bg-primary px-6 py-2 w-full mx-auto text-center font-semibold text-white"
              >
                Saiba mais sobres à Base de Dados da ...
              </a>
            </div>
          </article>

          <article class="flex max-w-xl flex-col items-start justify-between">
            <div class="flex items-center gap-x-4 text-xs h-2 bg-primary w-full"></div>
            <div class="group relative">
              <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <a href="#" className="gideon-roman-regular text-2xl">
                  <span className="italic">Centro de Estudos e Formação</span>
                </a>
              </h3>
              <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                Com o Objectivo de estabelecer a nova organização e
                funcionamento do centro de Estudos e Formação da Ordem dos
                Advogados de Angola, no uso...
              </p>
            </div>
            <div class="relative mt-8 flex items-center gap-x-4">
              <a
                href="#"
                className="rounded-full bg-primary px-6 py-2 w-full mx-auto text-center font-semibold text-white"
              >
                Saiba mais sobres o Centro de Estudos ...
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
