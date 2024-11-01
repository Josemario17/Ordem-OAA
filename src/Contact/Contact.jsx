import React, { useRef, useState } from "react";
import TraceBar from "../Components/traceBar";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import image from "../assets/img/Advogado-Banner.jpg";
import CostumHeader from "../Components/CostumHeader";
import { Link } from "react-router-dom";
import FormDenuncias from "../Components/ConctactComponents/FormDenuncias";
import { useAnimation, useInView } from "framer-motion";

export default function Contacte() {

  const CustomHeaderData = {
    title: "Entre em Contacto Conosco",
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
                <h4 class="text-base  text-gray-900">Fale Conosco</h4>
              </div>
            </span>
          </li>
        </ol>
        <CostumHeader dados={CustomHeaderData}></CostumHeader>
      </div>
      <main className="my-12">
      <FormDenuncias></FormDenuncias>
      </main>
      <Footer></Footer>
    </>
  );
}