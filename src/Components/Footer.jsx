import React from "react";

import image from "../../src/assets/img/logo.png";
import SectionFooter from "./HomePageComponents/FooterComponents/SectionFooter";
export default function Footer() {
  return (
    <footer className="block pt-10 border-t border-solid border-primary/70">
      <SectionFooter imageUrl={image}></SectionFooter>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-8 pb-18">
        {/* Component */}
        {/* Divider */}
        <div className="my-8 w-full border-b border-black"></div>
        <div className="flex justify-between md:flex-row flex-col gap-8 md:gap-0">
          <div className="flex flex-col items-start gap-2">
            <h5 className="text-xl font-bold">Assina a Nossa newsletter</h5>
            <p className="text-sm sm:text-sm">
              Continue Atualizado com tudo que acontece na area do Direito em
              Angola
            </p>
          </div>
          <div className="mb-4 w-full max-w-sm">
            <form
              name="email-form"
              method="get"
              className="relative max-w-full"
            >
              <input
                type="email"
                className="mb-2.5 block h-9 w-full rounded-md border border-solid border-primary bg-white px-3 py-6 align-middle text-sm placeholder:text-gray-400 text-black focus:border-primary/30"
                maxLength="256"
                name="email-5"
                placeholder="exemplo@exemplo.com"
                required=""
              />
              <input
                type="submit"
                value="Assinar"
                className="sm:absolute right-0 top-0 inline-block h-full cursor-pointer bg-primary hover:bg-primary/80 px-6 py-2.5 text-center font-semibold text-white relative w-full sm:w-auto sm:right-0 rounded-tr-md rounded-br-md"
              />
            </form>
          </div>
        </div>
        {/* Divider */}
        <div className="my-8 w-full border-b border-black"></div>
        <div className="flex md:flex-row items-start justify-between sm:flex-col flex-col-reverse md:items-center">
          <p className="text-sm sm:text-base">
            © Copyright 2021. Todos Direitos Reservados a OAA.
          </p>
          <div className="text-center font-semibold">
            <span> Produced by:</span>{" "}
            <a
              href="#"
              className="inline-block mx-1 underline font-normal text-black transition hover:text-primary"
            >
              José Dos Santos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
