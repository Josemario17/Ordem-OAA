import React from "react";
import TraceBar from "../Components/traceBar";
import NavBar from "../Components/NavBar";
import { Link } from "react-router-dom";
import image from "../assets/img/AOrdem-image.webp";
import Footer from "../Components/Footer";
import Historic from "../Components/AOrdemComponents/Historic";
import AboutSection from "../Components/AOrdemComponents/AboutSection";
import Simbols from "../Components/AOrdemComponents/Simbols";
import CostumHeader from "../Components/CostumHeader";
import { motion, useAnimation } from "framer-motion";
import ProcalamacaoSection from "../Components/AOrdemComponents/ProcalamacaoSection";
import imageLogo from "../../public/logo.ico";
import TextLongSection from "../Components/AOrdemComponents/TextLongSection";

export default function AOrdem() {
  const CustomHeaderData = {
    title: "A Ordem Dos Advogados de Angola",
    text: "A Ordem dos Advogados é a instituição representativa dos licenciados em Direito que, em conformidade com os preceitos do presente Estatuto e demais disposições legais aplicáveis, exercem a advocacia.",
    BannerUrl: image,
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
                  d="M5 18L9.87462 13.0607C10.1478 12.5607 10.3844 12.3107 10.3844 12C10.3844 11.8893 10.1478 11.4393 9.87462 10.9393L5 6M12.8608 18L17.3354 13.0607C17.8086 12.5607 18.0452 12.3107 18.0452 12C18.0452 11.8893 17.8086 11.4393 17.3354 10.9393L12.8608 6"
                  stroke="stroke-current"
                  stroke-width="1.8"
                  stroke-linecap="round"
                />
              </svg>
            </Link>
          </li>
          <li class="relative  ">
            <span class="flex items-center font-medium w-full  ">
              <div class="block">
                <h4 class="text-base  text-gray-900">A Ordem</h4>
              </div>
            </span>
          </li>
        </ol>
        <CostumHeader dados={CustomHeaderData}></CostumHeader>
      </div>

      <main className="mt-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <AboutSection></AboutSection>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <ProcalamacaoSection imageUrl={imageLogo}></ProcalamacaoSection>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Historic></Historic>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Simbols></Simbols>
        </motion.div>
      </main>
      <Footer></Footer>
    </>
  );
}
