import React, { useState } from "react";

export default function SalaDeLeituraSection() {
  const [AllArea, setAllArea] = useState(false);
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">I. UTENTES</h1>
      <ol className="list-decimal pl-5 space-y-2">
        <li>
          A Sala de Leitura está aberta a todos os advogados, advogados
          estagiários e advogados populares, a todos os estudantes do ensino
          superior da área do Direito e áreas conexas, professores e assistentes
          universitários, magistrados, conservadores e notários.
        </li>
        <li>É obrigatório o registo informático dos leitores.</li>
        <li>
          A Sala de Leitura destina-se exclusivamente a consulta e leitura das
          obras existentes na Biblioteca. Não é uma "sala de estudo", com
          utilização de livros ou materiais próprios dos utentes.
        </li>
      </ol>

      <h1 className="text-2xl font-bold">II. HORÁRIO E LOTAÇÃO</h1>
      <ol className="list-decimal pl-5 space-y-2">
        <li>
          A Sala de Leitura está aberta de segunda a sexta-feira, das 9h às 18h.
        </li>
        <li>
          Em dias em que houver atividades próprias da Ordem, nomeadamente
          reuniões dos Conselhos Nacional e Provincial, a Sala de Leitura
          poderá não abrir ao seu público, o qual será previamente e devidamente
          avisado.
        </li>
        <li>
          Só é permitido o acesso à sala até ao preenchimento da sua lotação em
          lugares sentados.
        </li>
      </ol>

      <h1 className="text-2xl font-bold">III. FORMAS DE PESQUISA DE INFORMAÇÃO</h1>
      <ol className="list-decimal pl-5 space-y-2">
        <li>
          Na Sala de Leitura estão disponíveis informações bibliográficas em
          suporte papel. O leitor poderá também, sempre que quiser, fazer as
          suas buscas em computador. Poderá, para o efeito, e em qualquer dos
          casos, pedir a ajuda dos funcionários.
        </li>
        <li>
          O utilizador poderá fazer as suas pesquisas em bases de dados
          disponíveis via INTERNET, para o que poderá solicitar a ajuda dos
          funcionários. A pesquisa em Internet é paga e limitada em tempo.
        </li>
      </ol>

      {AllArea ? (
        <>
        

      <h1 className="text-2xl font-bold">IV. SILÊNCIO E DISCIPLINA</h1>
      <p>
        Na Sala de Leitura, bem como nos locais de acesso à mesma, deverá ser
        observado rigoroso silêncio e toda a movimentação de pessoas terá de ser
        feita de modo disciplinado. É interdito fumar ou comer na Sala de
        Leitura.
      </p>

      <h1 className="text-2xl font-bold">V. UTILIZAÇÃO DAS OBRAS</h1>
      <ol className="list-decimal pl-5 space-y-2">
        <li>
          <strong>Regime geral de utilização - LIVRE ACESSO</strong>
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              O leitor acede livremente às estantes e retira as publicações que
              pretender, no limite de três em simultâneo.
            </li>
            <li>
              Finda a utilização, o leitor deverá entregar as obras ao funcionário
              (para que seja ele a arrumá-las de novo) ou colocá-las em local para
              o efeito.
            </li>
          </ol>
        </li>

        <li>
          <strong>Regime especial para OBRAS DE ACESSO CONTROLADO</strong>
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              Há algumas publicações que, por razões diversas (antiguidade,
              raridade, mau estado de conservação etc), são de acesso controlado.
            </li>
            <li>
              O leitor deve dirigir-se ao funcionário da sala de leitura, ou
              fazer a sua pesquisa em computador, indicar destas obras as que
              pretende consultar e aguardar que as mesmas lhe sejam entregues.
            </li>
            <li>
              Findo o uso, o leitor deverá entregar as obras aos funcionários
              (para que sejam eles a arrumá-las de novo) ou colocá-las em local
              para o efeito.
            </li>
            <li>
              Não é permitida a saída da Sala de Leitura de qualquer obra nela
              existente, seja a que título for.
            </li>
          </ol>
        </li>
      </ol>

      <h1 className="text-2xl font-bold">VI. INFRACÇÕES E SANÇÕES</h1>
      <p>
        A não observância das regras constantes deste Regulamento, a
        inutilização ou deterioração das obras ou equipamentos existentes na
        Sala de Leitura e acessos, o seu furto ou tentativa de furto deverão ser
        devidamente detectados e autuados pelos funcionários e prontamente
        participados à Direção da Biblioteca para o adequado sancionamento
        disciplinar e responsabilização pecuniária.
      </p>
          <button
            onClick={() => setAllArea(false)}
            className="w-1/4 mx-auto mb-12 flex items-center justify-center px-10 py-2 text-base font-medium text-white bg-primary border rounded-full hover:bg-primary/80"
          >
            Ver Menos
          </button>
        </>
      ) : (
        <button
          onClick={() => setAllArea(true)}
          className="w-1/4 mx-auto mb-12 flex items-center justify-center px-10 py-2 text-base font-medium text-white bg-primary border rounded-full hover:bg-primary/80"
        >
          Ver Mais
        </button>
      )}
    </div>
  );
}
