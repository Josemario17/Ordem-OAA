import React, { useState } from "react";

export default function RegimentoBiblioteca() {
  const [AllArea, setAllArea] = useState(false);
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Artigo I. Da DEFINIÇÃO</h1>
      <p>
        A Biblioteca/Centro de Documentação e Informação da OAA é uma unidade de
        apoio documental, em primeira mão, à Ordem e aos seus membros. Tem por
        missão facultar à instituição e aos advogados os recursos bibliográficos
        necessários ao desempenho das suas funções enquanto especialistas do
        Direito e à sua permanente formação e superação.
      </p>

      <h1 className="text-2xl font-bold">Artigo II. Das ATRIBUIÇÕES</h1>
      <p>
        Compete à Biblioteca estabelecer e executar todas as operações do
        chamado circuito documental que são, nomeadamente:
      </p>

      <ol className="list-decimal pl-5 space-y-4">
        <li>
          <strong>Recolha de Informação Jurídica</strong>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              a) através, fundamentalmente, da compra de publicações. Só a
              compra permite a actualização dos fundos documentais tendo em
              atenção as necessidades concretas do seu público utilizador. A
              biblioteca deverá poder dispôr duma verba anual para efeitos
              exclusivos de actualização do seu acervo bibliográfico;
            </li>
            <li>
              b) pelo desenvolvimento permanente de laços de cooperação e
              intercâmbio activos com instituições, suas congéneres, nacionais e
              estrangeiras, no sentido de realizar o processo da aquisição de
              publicações por oferta e troca;
            </li>
            <li>
              c) pela promoção de campanhas pró biblioteca junto da comunidade
              jurídica nacional no sentido de fazer convergir para a biblioteca
              acervos jurídicos, porventura desactivados ou com diminuta
              utilização e pela incentivação à oferta de publicações;
            </li>
            <li>
              d) Adquirir, sempre em dois exemplares, no mínimo, os Diários da
              República, de modo a manter as colecções sempre actualizadas,
              organizadas e proceder à sua adequada encadernação;
            </li>
            <li>e) Compilar jurisprudência nacional;</li>
            <li>
              f) Recolher toda a informação, incluindo a literatura cinzenta,
              produzida em Seminários, conferências, etc., realizados a nível
              nacional e internacional, na área do direito e áreas afins;
            </li>
            <li>
              g) Recolher da Comunicação Social, nacional, prioritariamente e
              internacional, toda a informação pertinente que diga respeito à
              problemática da Justiça no país, nomeadamente a intervenção
              pública do Bastonário e demais representação da Ordem,
              independentemente do suporte da informação;
            </li>
            <li>
              h) Proceder ao acondicionamento e tratamento dos trabalhos de fim
              de estágio.
            </li>
          </ul>
        </li>

        <li>
          <strong>Tratamento documental</strong>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              a) Proceder ao registo, catalogação, análise e indexação de todo o
              acervo da biblioteca, sejam a monografia, a publicação periódica,
              o material não livro, sejam a legislação, a jurisprudência ou os
              recortes de imprensa;
            </li>
            <li>
              b) Proceder à informatização da bibliografia em base de dados
              adequada;
            </li>
            <li>
              c) Proceder à informatização dos Diários da República, em base de
              dados adequada;
            </li>
            <li>
              d) Proceder à informatização da Jurisprudência nacional, em base
              de dados adequada;
            </li>
            <li>
              e) Proceder à informatização dos recortes de imprensa, em base de
              dados adequada.
            </li>
          </ul>
        </li>

        <li>
          <strong>Difusão</strong>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              a) Proceder à divulgação de todo o acervo jurídico por diversas
              vias, desde os boletins bibliográficos impressos, à
              disponibilização do acervo informatizado, em terminais, em linha,
              do catálogo, na sala de leitura;
            </li>
            <li>
              b) Acompanhar os utentes na aprendizagem das linguagens de
              pesquisa em todas as bases de dados instaladas;
            </li>
            <li>
              c) Desenvolver, estimular e acompanhar, junto dos utilizadores, a
              pesquisa bibliográfica através das novas fontes de informação,
              nomeadamente Internet, CdRom etc.;
            </li>
            <li>
              d) Difundir informação bibliográfica e informação relativa às
              actividades da Ordem, no site da Internet{" "}
              <a
                href="#"
                className="text-primary hover:underline"
              >
                #
              </a>
              .
            </li>
          </ul>
        </li>
      </ol>
      {AllArea ? (
        <>
        

      <h1 className="text-2xl font-bold">Artigo III. Da LOCALIZAÇÃO</h1>
      <p>
        A Biblioteca encontra-se localizada nas instalações centrais da Ordem,
        na Avenida Ho Chi Minh, no Edifício do Instituto Nacional de
        Estatística, Luanda. Telef. 327247, fax. 322777, Email:{" "}
        <a
          href="mailto:ordemadvogadosangola@netangola.com"
          className="text-primary hover:underline"
        >
          ordemadvogadosangola@netangola.com
        </a>
        . Página Web:{" "}
        <a
          href="#"
          className="text-primary hover:underline"
        >
          #
        </a>
        .
      </p>

      <h1 className="text-2xl font-bold">
        Artigo IV. Do HORÁRIO DE FUNCIONAMENTO
      </h1>
      <ol className="list-decimal pl-5 space-y-2">
        <li>
          A Biblioteca funciona de segunda a sexta-feira, das 8,30 às 18 horas.
        </li>
        <li>
          O serviços de sala de leitura e demais atendimento público funcionam
          das 9 às 17,30, de segunda a sexta-feira.
        </li>
        <li>
          As alterações ao horário serão afixadas na Sala de Leitura com, pelo
          menos, 48 horas de antecedência, por Aviso.
        </li>
      </ol>

          <h1 className="text-2xl font-bold">
            Artigo V. Do FUNDO DOCUMENTAL e do seu ACESSO
          </h1>
          <p>
            Como é do conhecimento geral, a biblioteca da OAA, nasceu como
            projecto, aquando da instituição da Ordem, em 1996. Sem um livro,
            sem um documento. O acervo proveio, fundamentalmente, de doações
            feitas à Ordem pelas Fundação Calouste Gulbenkian, Embaixada da
            Suécia (doações em dinheiro o que possibilitou a escolha em
            catálogos do material a adquirir), Ordem dos Advogados de Portugal,
            Colégio de Madrid, Embaixada de Espanha (empenhamento pessoal do
            senhor Embaixador) e dos espólios bibliográficos do Dr. Ruy de
            Mello, através do Dr. Orozco Paneiro, advogado em Lisboa, e do Dr.
            Eugénio Ferreira, gentilmente cedido pelos filhos. Também foi
            entregue à guarda da nossa biblioteca o espólio documental do Dr.
            Amílcar Barca, natural de Benguela, nascido em 1880, de profissão
            Advogado. Este espólio foi-nos entregue pelo Snr. Brás da Silva que,
            por sua vez, o tinha à sua guarda com a indicação de o ofertar a uma
            instituição, que no país, representasse os advogados. Este espólio
            vai merecer um tratamento adequado e poderá iniciar o Museu do
            Advogado que deverá ser organizado, logo que possível. Fazem também
            parte do nosso acervo documental os ficheiros de legislação da Prof.
            Medina, que ela gentilmente nos cedeu e que reúnem toda a legislação
            que ela foi compilando ao longo da sua vida profissional. O fundo
            contém ainda ofertas da Faculdade de Direito da Universidade
            Agostinho Neto e de pessoas singulares. O fundo está localizado na
            sala de leitura onde se encontra, maioritariamente, em livre acesso,
            e no depósito, de acesso reservado. Há ainda algum fundo reservado
            em gabinetes, sempre devidamente localizado. O acesso ao fundo é
            reservado sempre que haja razões que levem a classificar um
            documento como reservado tais como, entre as mais comuns:
            preservação de obra rara, documentos de difícil aquisição, mau
            estado de conservação, exemplares oferecidos e autografados, acervos
            particulares, caso Fundo Eugénio Ferreira e Ruy de Mello, Ficheiros
            de legislação da Prof. Maria do Carmo Medina, publicações com data
            inferior a 1900, chamado Fundo Antiquária e outros que venham a ser
            considerados como tal. As colecções dos Diários da República também
            são de utilização reservada. Os dossiers de Recortes de Imprensa
            também são de acesso reservado. A utilização dos fundos
            classificados como reservados obedece a normas estabelecidas, tais
            como o uso de requisição, a utilização de folhas de desanexação e
            outros que venham a ser implementados e nunca são passíveis de
            empréstimo domiciliário.
          </p>

          <h1 className="text-2xl font-bold">Artigo VI. Dos UTILIZADORES</h1>
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              A Biblioteca considera 4 perfis de utilizadores sujeitos a registo
              prévios:
            </li>
            <ul className="list-disc pl-5 space-y-2">
              <li>a) Advogados Inscritos na Ordem;</li>
              <li>b) Estagiários;</li>
              <li>c) Interesses de investigação ou de estudo;</li>
              <li>d) Utilizadores externos.</li>
            </ul>

            <li>
              O registo dos utilizadores externos e internos é obrigatório e
              deve ser feito através do preenchimento de ficha de utilizador;
            </li>
            <li>
              Os utilizadores externos e internos podem requisitar publicações
              para leitura na sala;
            </li>
            <li>
              Os utilizadores podem requisitar material bibliográfico, desde que
              a obra esteja disponível para empréstimo domiciliário e obedeça ao
              regulamento em vigor;
            </li>
            <li>As requisições deverão ser feitas na Sala de Leitura.</li>
          </ol>

          <h1 className="text-2xl font-bold">
            Artigo VII. Do EMPRÉSTIMO DOMICILIÁRIO
          </h1>
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              O empréstimo domiciliário é facultado a advogados e estagiários
              que se encontrem em situação regular perante a Ordem.
            </li>
            <li>
              O empréstimo domiciliário obedece a um prazo fixado, podendo ser
              renovado, desde que a obra não esteja requisitada por outro
              utilizador.
            </li>
            <li>
              O utilizador deve devolver a obra no prazo estabelecido, sob pena
              de incorrer em multa, conforme tabela de multas em vigor.
            </li>
            <li>
              Em caso de extravio ou danos na obra, o utilizador é responsável
              pela substituição ou reparação da mesma.
            </li>
          </ol>

          <h1 className="text-2xl font-bold">Artigo VIII. Da REPOSIÇÃO</h1>
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              Após a leitura ou o fim do empréstimo domiciliário, a obra deve
              ser devolvida ao local de origem.
            </li>
            <li>
              As obras devem ser devolvidas em bom estado e devidamente
              colocadas na prateleira correspondente.
            </li>
            <li>
              Qualquer anomalia na devolução deve ser comunicada à Biblioteca.
            </li>
          </ol>

          <h1 className="text-2xl font-bold">Artigo IX. Da SANÇÃO</h1>
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              Os utilizadores que não devolverem as obras no prazo estabelecido
              ou que as devolvam danificadas estão sujeitos a sanções conforme
              tabela de sanções em vigor.
            </li>
            <li>
              A biblioteca pode suspender o direito de empréstimo domiciliário
              ao utilizador até que a situação seja regularizada.
            </li>
          </ol>

          <h1 className="text-2xl font-bold">
            Artigo X. Da ALTERAÇÃO DO REGIMENTO
          </h1>
          <p>
            O presente Regimento pode ser alterado por deliberação da Direcção
            da Ordem, sempre que necessário. As alterações serão publicadas e
            divulgadas conforme o regulamento interno.
          </p>

          <h1 className="text-2xl font-bold">Artigo XI. Disposições finais</h1>
          <p>O presente regimento entra em vigor na data da sua aprovação.</p>

          <button
            onClick={(e) => setAllArea(false)}
            class="w-1/4 mx-auto mb-12 flex items-center justify-center px-10 py-2 text-base font-medium text-white bg-primary border rounded-full hover:bg-primary/80"
          >
            {" "}
            Ver Menos{" "}
          </button>
        </>
      ) : (
        <button
          onClick={(e) => setAllArea(true)}
          class="w-1/4 mx-auto mb-12 flex items-center justify-center px-10 py-2 text-base font-medium text-white bg-primary border rounded-full hover:bg-primary/80"
        >
          {" "}
          Ver mais{" "}
        </button>
      )}
    </div>
  );
}
