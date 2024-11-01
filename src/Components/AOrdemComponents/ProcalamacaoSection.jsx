import React, { useState } from "react";

export default function ProcalamacaoSection({ imageUrl }) {
  const [AllArea, setAllArea] = useState(false);
  return (
    <>
      <section>
        {/* Section Container */}
        <div className="flex flex-col items-center justify-center">
          {/* Title Container */}
          <div className="flex min-w-[100%] flex-col items-start bgFundo py-12 sm:py-20 lg:items-center">
            {/* Component */}
            <div className="grid max-w-5xl px-10 lg:grid-cols-2">
              <div className="flex flex-col items-start self-center py-5">
                <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                  Proclamação da OAA
                </h2>
                <p className="mb-8 max-w-md flex-col text-sm text-[#808080] sm:text-base">
                  Os advogados angolanos, irmanados num profundo declaravam em
                  20 de Setembro de 1996 a organização representativa que é a
                  Ordem de Advogados de Angola.
                </p>
              </div>
              <div>
                <img src={imageUrl} alt="Ordem de Advogados de Angola" />
              </div>
            </div>
          </div>
          {/* Terms Container */}
          <div className="mx-auto w-full max-w-5xl py-12 md:py-16 lg:py-10">
            <div className="mb-6 min-h-[1px] min-w-full bg-[#e2e2e2]"></div>
            {/* Term */}
            <div className="mb-6 flex flex-col items-start gap-y-3">
              <p className="text-sm font-bold sm:text-base">
                Os advogados angolanos, irmanados num profundo sentimento de
                responsabilidade e de orgulho patriótico, proclamam hoje
                solenemente a sua organização representativa, a Ordem dos
                Advogados de Angola. <br />
                Ao dotar-se deste modo de uma sólida forma organizativa autónoma
                e independente, é toda a classe dos advogados que atinge a idade
                adulta, afirmando-se e assumindo-se capaz de se auto-regular e
                se auto-disciplinar, de se governar a si própria. Este, o
                primeiro e maior direito-dever em que nos comprometemos. Se hoje
                somos já relativamente muitos, foi preciso percorrer um longo e
                espinhoso caminho para chegarmos aqui. <br /> Duas décadas
                passadas, é necessário recordar os momentos difíceis que a
                profissão atravessou nos alvares da Independência, quando, a par
                com o que sucedeu nas outras esferas da Justiça e do Direito, a
                classe ficou praticamente esvaziada, quase sobejando os dedos da
                mão para contar os advogados que restaram no País.
              </p>
              <p className="text-sm sm:text-base">
                Mas, olhando para esses tempos difíceis, já aí encontramos a
                presença emblemática de alguns profissionais que quiseram e
                souberam honrar a toga, defendendo com dignidade e coragem os
                nacionalistas angolanos nos tribunais coloniais-fascistas. A
                história da advocacia angolana há-de registar os seus nomes
                insignes. <br />
                De igual modo, impõe-se assinalar o mérito da nossa Faculdade de
                Direito, a Faculdade de Direito da Universidade Agostinho Neto,
                na nascença e crescimento da advocacia angolana. Criada em 1979,
                a primeira escola de Direito existente em angola tem sido, na
                verdade, o alfobre empenhado e dedicado na formação da
                esmagadora maioria dos advogados actualmente existentes no País.
                Por isso, à nossa "alma mater", é justíssimo que deixemos aqui
                uma palavra de reconhecimento e um voto de encorajamento.
              </p>
            </div>
            {AllArea ? (
              <>
                {/* Term */}
                <div className="mb-6 flex flex-col items-start gap-y-3">
                  <p className="font-bold sm:text-base">
                    A organização a que hoje damos vida vai reger-se por um
                    Estatuto, a sua lei primeira e fundamental. Querido e
                    elaborado por nós, advogados, recebido pelo estado, que lhe
                    deu a consagração legal, o Estatuto configura a Ordem como
                    uma instituição de direito público, reflectindo assim a
                    eminente valia social da profissão e da sua manifestação
                    associativa.
                    <br />
                    A advocacia é agora encarada, sem peias, como uma profissão
                    liberal e com isto, no recorte clássico, se quer dizer
                    livre, autónoma, independente. Livre, de coacções e
                    subordinações, que não sejam as que resultem da legalidade;
                    independente, de poderes políticos públicos, económicos e
                    sociais, que não tenham por si a legitimidade da existência
                    ou da manifestação.
                    <br />
                    Defender o Estado democrático de direito e os direitos,
                    liberdades e garantias individuais e colaborar na
                    administração da Justiça é, a justo título, a primeira das
                    atribuições que o Estatuto confere à Ordem e,
                    simultaneamente, o primeiro grande objectivo e dever que lhe
                    aponta.
                  </p>
                  <p className="text-sm sm:text-base">
                    Essas devem também constituir metas norteadoras e
                    incontornáveis do modo de ser e de actuar de cada um de nós,
                    advogados angolanos, no exercício quotidiano da nossa
                    profissão.
                    <br />
                    Convocando-nos a sociedade para mediar a convivência social
                    e ajudar a dirimir as conflitualidades várias, haveremos de
                    cumprir a nossa missão, com zêlo e empenhamento, mas sempre
                    à luz dos rectos princípios e valores éticos e eivados de um
                    alto sentido humanista.
                    <br />
                    Remontando á noite dos tempos, alguém disse que "o primeiro
                    homem que defendeu o seu semelhante contra a injustiça, a
                    violência e a fraude com as armas da razão e da palavra,
                    esse foi o primeiro advogado".
                    <br />É dessa nobre aura e tradição que nos queremos
                    inspirar e de que nos queremos alimentar, ao proclamarmos a
                    Ordem dos Advogados de Angola.
                  </p>
                </div>
                {/* Term */}
                <div className="mb-6 flex flex-col items-start gap-y-3">
                  <p className="font-bold sm:text-base">
                    Da salvaguarda e promoção do Estado democrático de direito,
                    da defesa competente e intransigente da vida, liberdade,
                    honra e fazenda dos cidadãos que a nós recorrem e que em nós
                    confiam, faremos a nossa constante bandeira.
                    <br />
                    Nisto, e por isto, nos empenhamos e nos comprometemos. ​
                  </p>
                  <br />
                  <br />
                  <br />
                  <p className="text-sm sm:text-base">
                    Luanda, aos 20 de Setembro de 1996. <br /> Os Advogados
                    Angolanos
                  </p>
                </div>
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
        </div>
      </section>
    </>
  );
}
