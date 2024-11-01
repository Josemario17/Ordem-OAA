import React from "react";
import juris from "../../../src/assets/img/juris.webp";

export default function SectionRigthLeftSides() {
  return (
    <section className="mt-14 px-3 lg:px-0">
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Component*/}
        <div className="grid items-center gap-8 sm:gap-20 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 max-w-2xl gideon-roman-regular text-3xl font-bold md:text-5xl">
              Jurisprudência no <span className="italic">Sistema Judicial</span>{" "}
              Angolano
            </h2>
            <p className="mb-6 max-w-lg text-sm text-gray-500 sm:text-base lg:mb-12">
              Jurisprudência é o conjunto de decisões, interpretações e
              entendimentos uniformes de tribunais sobre determinada matéria
              jurídica. Essas decisões são importantes porque orientam a
              aplicação da lei e servem como referência para juízes e advogados
              em casos futuros. Acesse aqui à Jurisprudência do Tribunal Supremo
              (experimental - acesso)
            </p>
            <a
              href="#"
              className="inline-block items-center bg-primary hover:bg-primary/70 rounded-full px-6 py-3 text-center font-semibold text-white"
            >
              Acessar Plataforma
            </a>
          </div>
          <div>
            <img
              src={juris}
              alt="Jurisprudência em Angola"
              className="mx-auto inline-block h-full w-full max-w-2xl rounded-lg border border-solid border-gray-700/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
