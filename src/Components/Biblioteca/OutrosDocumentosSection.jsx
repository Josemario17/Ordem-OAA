import React from "react";

export default function OutrosDocumentosSection() {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Documentos Disponíveis</h1>
      <p>
        Nesta página, irá encontrar todo um conjunto de documentos sobre os mais diversos assuntos. Se desejar, pode dar a sua opinião enviando um e-mail para{" "}
        <a
          href="mailto:info@oaang.org"
          className="text-primary hover:underline"
        >
          info@oaang.org
        </a>
        . Obrigado.
      </p>

      <h2 className="text-xl font-semibold">Projectos de Lei</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <a href="#" className="underline">Projecto de Lei dos Actos Próprios de Advogados</a>
        </li>
        <li>
          <a href="#" className="underline">Projecto de Lei das Sociedades de Advogados</a>
        </li>
      </ul>

      <h2 className="text-xl font-semibold">Pareceres</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <a href="#" className="underline">Parecer sobre o Projecto de Lei dos Actos Próprios dos Advogados</a>
        </li>
        <li>
          <a href="#" className="underline">Parecer sobre o Projecto de Lei das Sociedades de Advogados</a>
        </li>
      </ul>
    </div>
  );
}
