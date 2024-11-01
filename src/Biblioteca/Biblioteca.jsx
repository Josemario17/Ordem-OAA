import React, { useState } from "react";
import TraceBar from "../Components/traceBar";
import NavBar from "../Components/NavBar";
import CostumHeader from "../Components/CostumHeader";
import image from "../assets/img/Biblioteca.webp";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import BibliografiasSection from "../Components/Biblioteca/BibliografiasSection";
import { livros } from "../Components/Biblioteca/BibliografiaObject";
import ROAASection from "../Components/Biblioteca/ROAASection";
import RegimentoBiblioteca from "../Components/Biblioteca/RegulamentosSection";
import SalaDeLeituraSection from "../Components/Biblioteca/SalaDeLeituraSection";
import OutrosDocumentosSection from "../Components/Biblioteca/OutrosDocumentosSection";
import { motion, useAnimation } from "framer-motion";

export default function Biblioteca() {
  const [sectionActive, setSectionActive] = useState(0);
  const [inicio, setInicio] = useState(0);
  const [Pulo, setPulo] = useState(6);

  const CustomHeaderData = {
    title: "Biblioteca e Outros Documentos",
    text: "Uma vasta coleção de obras jurídicas, legislações atualizadas, e outros recursos essenciais para o exercício da advocacia. Nosso acervo é cuidadosamente organizado para facilitar a consulta e promover o desenvolvimento contínuo dos profissionais da área..",
    BannerUrl: image,
  };

  const buttonsSections = [
    {
      text: "Bibliografia Jurídica Nacional",
      alternText: "Referências Jurídicas Nacionais",
    },
    {
      text: "ROAA",
      alternText: "Estatuto Da Revista Da Ordem Dos Advogados De Angola",
    },
    {
      text: "Regulamento",
      alternText: "Regulamento da Biblioteca da Ordem",
    },
    {
      text: "Sala de Leitura",
      alternText: "Regulamento da Sala de Leitura",
    },
    {
      text: "Outros",
      alternText: "Outros Documentos",
    },
  ];

  const AvançarDados = () => {
    if (Pulo <= livros.length) {
      setInicio(inicio + 6);
      setPulo(Pulo + 6);
    }
  };
  const RecuarDados = () => {
    if (inicio - 6 >= 0) {
      setInicio(inicio - 6);
      setPulo(Pulo - 6);
    }
  };

  const handleChangeActive = (ActiveSectionId) => {
    setSectionActive(ActiveSectionId);
  };
  return (
    <>
      <TraceBar />
      <NavBar />
      <div className="mt-20">
        {/* Hero Container */}{" "}
        <ol class="lg:flex pt-20 px-24 items-center w-full space-y-4 lg:space-y-0 lg:space-x-4">
          <li class="relative ">
            <Link to="/" class="flex items-center font-medium w-full  ">
              <div class="block">
                <h4 class="text-base  text-primary">Home</h4>
              </div>
              <svg
                class="w-5 h-5 ml-2 stroke-primary sm:ml-4"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 18L9.67462 13.0607C10.1478 12.5607 10.3844 12.3107 10.3844 12C10.3844 11.6893 10.1478 11.4393 9.67462 10.9393L5 6M12.6608 18L17.3354 13.0607C17.8086 12.5607 18.0452 12.3107 18.0452 12C18.0452 11.6893 17.8086 11.4393 17.3354 10.9393L12.6608 6"
                  stroke="stroke-current"
                  stroke-width="1.6"
                  stroke-linecap="round"
                />
              </svg>
            </Link>
          </li>
          <li class="relative  ">
            <span class="flex items-center font-medium w-full  ">
              <div class="block">
                <h4 class="text-base  text-gray-900">Biblioteca</h4>
              </div>
            </span>
          </li>
        </ol>
        <CostumHeader dados={CustomHeaderData}></CostumHeader>
      </div>

      <main>
        <section class="py-24 relative">
          <div class="w-full max-w-7xl mx-auto px-4 md:px-8">
            <h2 class="font-manrope font-extrabold text-3xl lead-10 text-black gideon-roman-regular mb-9">
              <span className="italic">Encontre na Biblioteca</span>
            </h2>

            <div class="flex sm:flex-col lg:flex-row sm:items-center justify-between">
              <ul class="flex max-sm:flex-col sm:items-center gap-x-14 gap-y-3">
                {buttonsSections.map((item, index) => (
                  <li key={index}>
                    <button
                      className={`rounded-full ${index === sectionActive ? "bg-primary text-white" : "border border-primary text-primary"} px-6 py-2 w-full mx-auto text-center font-semibold`}
                      onClick={(e) => handleChangeActive(index)}
                    >
                      {item.text}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div class="mt-7 border pt-9">
              <form class="flex max-md:flex-col items-center justify-between">
                <p className="text-3xl mb-3">
                  {buttonsSections.map(
                    (item, index) => index == sectionActive && item.alternText
                  )}
                </p>
                <div class="flex items-center justify-end gap-3 w-1/2">
                  {sectionActive == 0 && (
                    <div className="mb-4 w-full max-w-md">
                      <form
                        name="email-form"
                        method="get"
                        className="relative max-w-full"
                      >
                        <input
                          type="search"
                          className="mb-2.5 block h-9 w-full rounded-md border border-solid border-primary bg-white px-3 py-6 align-middle text-sm placeholder:text-gray-400 text-black focus:border-primary/30"
                          maxLength="256"
                          name="email-5"
                          placeholder="pesquisar por Referência"
                          required=""
                        />
                        <input
                          type="submit"
                          value="Pesquisar"
                          className="sm:absolute right-0 top-0 inline-block h-full cursor-pointer bg-primary hover:bg-primary/80 px-6 py-2.5 text-center font-semibold text-white relative w-full sm:w-auto sm:right-0 rounded-tr-md rounded-br-md"
                        />
                      </form>
                    </div>
                  )}
                </div>
              </form>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="border border-gray-300 rounded w-full h-full grid pt-6 mt-9 justify-start items-center">
                  <div class="max-w-full px-12 mx-auto">
                    {sectionActive == 0 && (
                      <BibliografiasSection
                        inicialValue={inicio}
                        NextValue={Pulo}
                      ></BibliografiasSection>
                    )}
                    {sectionActive == 1 && <ROAASection></ROAASection>}

                    {sectionActive == 2 && (
                      <RegimentoBiblioteca></RegimentoBiblioteca>
                    )}

                    {sectionActive == 3 && (
                      <SalaDeLeituraSection></SalaDeLeituraSection>
                    )}

                    {sectionActive == 4 && (
                      <OutrosDocumentosSection></OutrosDocumentosSection>
                    )}
                  </div>
                </div>
              </motion.div>

              {sectionActive == 0 && (
                <div class="flex mt-8 justify-end items-center">
                  <button
                    onClick={RecuarDados}
                    class="flex items-center justify-center px-10 py-2 me-3 text-base font-medium text-white bg-primary border rounded-full hover:bg-primary/80"
                  >
                    <svg
                      class="w-3.5 h-3.5 me-2 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 5H1m0 0 4 4M1 5l4-4"
                      />
                    </svg>
                    Voltar
                  </button>
                  <button
                    onClick={AvançarDados}
                    class="flex items-center justify-center px-10 py-2 text-base font-medium text-white bg-primary border rounded-full hover:bg-primary/80"
                  >
                    Avançar
                    <svg
                      class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </button>
                </div>
              )}

              <svg
                class="mt-9 w-full"
                xmlns="http://www.w3.org/2000/svg"
                width="1216"
                height="2"
                viewBox="0 0 1216 2"
                fill="none"
              >
                <path d="M0 1H1216" stroke="#D1D5DB" />
              </svg>
            </div>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}
