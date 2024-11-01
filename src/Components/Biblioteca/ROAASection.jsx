import React, { useState } from "react";

export default function ROAASection() {
  const [AllArea, setAllArea] = useState(false);
  return (
    <div className="grid gap-y-7">
      <p>
        A Ordem dos Advogados de Angola necessita de ter um instrumento que
        constitua o repositório da troca de opiniões entre os membros da classe,
        com um teor científico e onde também se considerem os inúmeros problemas
        e questões com que se deparam na sua actividade prática, quer forense,
        quer de consultadoria.
      </p>
      <p>
        A necessidade de existir um foro próprio onde de forma académica e
        crítica os advogados se possam exprimir, enquanto classe, não dispensa a
        criação de uma Revista que os leve a trazer, à luz do dia, através da
        escrita, matérias de relevância para o exercício do Direito. Mas
        necessário se torna que estes se sintam incentivados a depositar neste
        instrumento de comunicação o seu saber e experiência, que a todos possa
        beneficiar.
      </p>
      <p>
        Impõe-se deste modo dotar a Ordem dos Advogados de Angola de uma Revista
        de carácter periódico, semestral ou quadrimestral, que materialize
        aqueles objectivos.
      </p>
      <p>
        O presente Estatuto visa regular as linhas mestras a partir das quais a
        Revista da Ordem dos Advogados de Angola (ROAA) passará a reger-se, como
        forma de tornar mais firme a sua periodicidade e qualidade, esta última
        voltada para os desafios a que, hodiernamente e em particular na
        sociedade angolana, está submetida a advocacia.
      </p>
      <p>Assim, o presente Estatuto rege-se pelas cláusulas seguinte:</p>
      {AllArea ? (
        <>
          <ul className="w-full space-y-4 list-decimal list-inside">
            <li>
              º
              <ol className="list-decimal list-inside pl-1">
                <li>
                  A Revista da Ordem dos Advogados de Angola (ROAA), adiante
                  designada como Revista ou ROAA, é um órgão especial da Ordem
                  dos Advogados de Angola (OAA) com independência editorial e
                  científica, sem prejuízo da sua dependência jurídica,
                  administrativa e financeira da OAA.
                </li>
                <li>
                  A Revista é uma publicação periódica de carácter científico,
                  propriedade da OAA e tem como endereço físico a sede desta
                  Ordem profissional.
                </li>
                <li>
                  A Revista depende administrativa e financeiramente do Centro
                  de Documentação e Informação da OAA.
                </li>
              </ol>
            </li>

            <li>
              º
              <ol className="list-decimal list-inside">
                <li>
                  A ROAA tem por fim o desenvolvimento, ensino e divulgação da
                  ciência do Direito, bem como da sua praxis, na vertente
                  forense e de consultadoria.
                </li>
                <li>
                  Constituem ainda fins a observar pela ROAA, a promoção da
                  advocacia e das suas virtudes e virtualidades, por via da
                  elaboração e divulgação de estudos, pareceres, jurisprudência
                  crítica, crónicas de legislação e da actividade dos advogados
                  e da OAA em geral.
                </li>
              </ol>
            </li>

            <li>
              º
              <ol className="list- list-inside">
                <li>a) Director</li>
                <li>b) Conselho Editorial</li>
                <li>c) Secretariado.</li>
              </ol>
            </li>

            <li>
              º
              <ol className="list-inside list-decimal">
                <li>
                  1. Compete ao Director dirigir toda a actividade executiva,
                  com vista à edição e distribuição da Revista, nomeadamente:
                </li>
                <span>
                  a) Angariar ou recolher textos de natureza jurídica, a título
                  gratuito, com suficiente qualidade para serem publicados;{" "}
                  <br /> b) Seleccionar de acordo com critérios justos e
                  objectivos os textos para cada edição da Revista; <br /> c)
                  Propor ao Conselho Editorial as secções estruturantes da
                  Revista; <br /> d) Definir o layout e design da Revista;{" "}
                  <br /> e) Definir os padrões de acabamento e impressão da
                  ROAA;
                  <br /> f) Estabelecer a tiragem da ROAA, bem como a política
                  de preços;
                  <br /> g) Projectar e executar a distribuição, a promoção, o
                  marketing e a publicidade da ROAA.
                </span>

                <li>
                  O Director da ROAA é nomeado pelo Bastonário da OAA para um
                  mandato de três anos editoriais, renováveis por iguais
                  períodos.
                </li>
              </ol>
            </li>

            <li>
              º
              <ol className="list-decimal list-inside">
                <li>O Conselho Editorial tem como atribuições:</li>
              </ol>
            </li>

            <li>
              1. A ROAA é por excelência um veículo de divulgação do pensamento
              jurídico dos advogados, em igualdade de circunstâncias, e
              privilegiará os trabalhos escritos dos advogados em face dos
              trabalhos escritos dos juristas não inscritos na OAA.
            </li>

            <li>
              2. Os artigos, comentários e opiniões inseridos nas edições da
              ROAA não reflectem a opinião da Revista, sendo da exclusiva
              responsabilidade dos seus autores.
            </li>

            <li>
              8.º
              <ol className="list-decimal list-inside">
                <li>A Revista terá as seguintes secções de base:</li>
                <ul className="list-disc pl-5">
                  <li>Editorial;</li>
                  <li>Doutrina;</li>
                  <li>Jurisprudência crítica;</li>
                  <li>Crónica de legislação;</li>
                  <li>Recensões.</li>
                </ul>
              </ol>
            </li>

            <li>
              9.º
              <ol className="list-decimal list-inside">
                <li>Os dados electrónicos da ROAA são:</li>
                <ul className="list-disc pl-5">
                  <li>Sítio na Internet;</li>
                  <li>E-mail.</li>
                </ul>
              </ol>
            </li>

            <li>
              10.º
              <ol className="list-decimal list-inside">
                <li>
                  Os membros do Secretariado da ROAA constituirão para cada
                  edição uma Comissão de revisão de provas.
                </li>
                <li>
                  A Comissão referida no número anterior apreciará as provas
                  relativas aos artigos seleccionados pelo Conselho Editorial
                  para serem publicados na correspondente edição e poderá,
                  excepcionalmente, reencaminhá-las para os autores para
                  apreciação.
                </li>
                <li>
                  O Director da ROAA poderá confiar a revisão ortográfica dos
                  textos a especialista em português jurídico.
                </li>
              </ol>
            </li>

            <li>
              11.º
              <ol className="list-decimal list-inside">
                <li>
                  Cabe ao Secretariado da ROAA comunicar aos autores a selecção
                  dos seus textos para publicação, devendo indicar os dados da
                  edição.
                </li>
              </ol>
            </li>

            <li>
              12.º
              <ol className="list-decimal list-inside">
                <li>
                  A contribuição dos autores com trabalhos para a publicação na
                  Revista é absolutamente gratuita.
                </li>
                <li>
                  Os autores que apresentem mais trabalhos para publicação
                  poderão gozar do estatuto permanente de colaboradores da ROAA,
                  atribuído pelo Conselho Editorial, sob proposta do Director da
                  Revista.
                </li>
                <li>
                  A aquisição do estatuto de colaborador permanente confere a
                  este o direito a uma assinatura gratuita de três exemplares
                  por cada edição da ROAA.
                </li>
                <li>
                  O Director da ROAA oferecerá exemplares aos autores que tenham
                  contribuído com trabalhos, segundo critérios por ele
                  definidos.
                </li>
              </ol>
            </li>

            <li>
              13.º
              <ol className="list-decimal list-inside">
                <li>
                  Fazem ainda parte do presente estatuto da ROAA as regras
                  redactoriais do seu anexo que dele faz parte integrante.
                </li>
              </ol>
            </li>
          </ul>

          <p>ANEXO</p>

          <ol className="list-decimal list-inside">
            <li>
              <strong>Apresentação de Originais:</strong>
              <p>
                Em suporte informático ou via e-mail. Programa elegível:
                winword. A redacção aceita propostas de textos enviadas pelos
                autores. A aceitação relativa a esses textos é endereçada aos
                seus autores no prazo de 60 (sessenta) dias, a contar da entrega
                e a devolução dos originais é feita mediante solicitação dos
                autores e é da sua inteira responsabilidade.
              </p>
              <p>
                A elaboração dos textos deve corresponder aos seguintes limites:
              </p>
              <ul className="list-disc pl-5">
                <li>
                  Ensaios: 100.000 caracteres (= 55 p. p. de 30 lin. de 60
                  caracteres);
                </li>
                <li>
                  Recensões: 7.500 caracteres (= 4 p.p. de 30 lin. de 60
                  caracteres);
                </li>
                <li>
                  Comentários: 15.000 caracteres (= 8 p.p. de 30 lin. de 60
                  caracteres).
                </li>
              </ul>
            </li>

            <li>
              <strong>Conselhos para Edição:</strong>
              <p>Devem ser observadas as seguintes regras editoriais:</p>
              <ul className="list-disc pl-5">
                <li>Não fazer parágrafos nas notas.</li>
                <li>Usar apenas o negrito nos títulos.</li>
                <li>
                  O destaque é feito pelo itálico e não pelo negrito ou
                  sublinhado.
                </li>
                <li>
                  Toda a frase deve terminar com pontuação (ponto, reticências,
                  exclamação, interrogação).
                </li>
              </ul>
              <p>
                <strong>Grafias adequadas e não adequadas:</strong>
              </p>
              <ul className="list-disc pl-5">
                <li>Adequadas:</li>
                <ul className="list-disc pl-5">
                  <li>“ …”</li>
                  <li>…”.</li>
                  <li>Não?</li>
                  <li>Diz1.</li>
                  <li>...”3</li>
                  <li>Diz5</li>
                  <li>“Esta decisão”, diz Aline</li>
                  <li>“Poder”</li>
                </ul>
                <li>Não adequadas:</li>
                <ul className="list-disc pl-5">
                  <li>«…»</li>
                  <li>.”</li>
                  <li>Não ?</li>
                  <li>Diz2.</li>
                  <li>4”</li>
                  <li>Diz.6</li>
                  <li>“Esta decisão”, diz Aline</li>
                  <li>“ Poder ”</li>
                </ul>
              </ul>
            </li>

            <li>
              <strong>Regras de Referências Bibliográficas:</strong>
              <p>
                <strong>Primeiras ocorrências. Exemplos:</strong>
              </p>
              <ul className="list-disc pl-5">
                <li>
                  Santos, Aires de Almeida (ou Aires de Almeida Santos) Meu Amor
                  da Rua Onze, 2.ª ed., Luanda, União dos Escritores Angolanos,
                  1989, p.p.73 ss.
                </li>
                <li>
                  Primo Vivere (org.), Capital, Roteiro Turístico de Luanda,
                  Luanda Casa das Ideias – Divisão Editorial, 2008.
                </li>
                <li>
                  ABREU, Jorge Manuel Coutinho de, Da Empresarialidade (As
                  Empresas no Direito), reimpressão, Colecção Teses, Almedina,
                  Coimbra, 1999.
                </li>
                <li>
                  Idem, Curso de Direito Comercial – Das Sociedades, Vol.II,
                  Reimpressão, Almedina, Coimbra, 2003.
                </li>
              </ul>
              <p>
                <strong>Ocorrências seguintes. Exemplo:</strong>
              </p>
              <ul className="list-disc pl-5">
                <li>
                  H. Cachimbombo, O regime das alegações…, cit., p.p.69 ss.
                </li>
              </ul>
            </li>

            <li>
              <strong>Revisão de Provas:</strong>
              <p>
                A revisão de provas será feita pela comissão de redacção. Só
                excepcionalmente será pedida a colaboração dos autores, os quais
                também, só excepcionalmente, poderão alterar os originais
                entregues.
              </p>
            </li>

            <li>
              <strong>Tabela de preços de publicidade:</strong>
              <p>
                A revista aceita publicidade de conteúdo adequado ao tipo de
                publicação.
              </p>
              <ul className="list-disc pl-5">
                <li>Página inteira – Usd3.000,00;</li>
                <li>½ página – Usd2.000,00.</li>
              </ul>
            </li>

            <li>
              <strong>
                Redacção da ROAA – Revista da Ordem dos Advogados:
              </strong>
              <p>Luanda, Angola. Rua Ho Chi Min (Edifício da Estatística)</p>
              <p className="mb-12">
                E-mail:{" "}
                <a
                  href="mailto:ordemadvogadosangola@netangola.com"
                  className="text-primary hover:underline"
                >
                  ordemadvogadosangola@netangola.com
                </a>
              </p>
            </li>
          </ol>
        <button onClick={e=> setAllArea(false)} class="w-1/4 mx-auto mb-12 flex items-center justify-center px-10 py-2 text-base font-medium text-white bg-primary border rounded-full hover:bg-primary/80">
          {" "}
          Ver Menos{" "}
        </button>
        </>
      ) : (
        <button onClick={e=> setAllArea(true)} class="w-1/4 mx-auto mb-12 flex items-center justify-center px-10 py-2 text-base font-medium text-white bg-primary border rounded-full hover:bg-primary/80">
          {" "}
          Ver mais{" "}
        </button>
      )}
    </div>
  );
}
