import React from "react";
import { Link } from "react-router-dom";

export default function CostumHeader({ dados }) {
  const { title, text, BannerUrl } = dados;
  return (
    <div className="mx-auto w-full max-w-7xl px-5 py-8 md:px-3 md:py-8">
      {/* Component */}
      <div className="grid items-end justify-items-start gap-8 sm:gap-20 lg:grid-cols-2">
        {/* Hero Content */}
        <div className="flex flex-col">
          {/* Hero Title */}
          <h1 className="mb-4 text-4xl font-bold md:text-6xl gideon-roman-regular">
            <span className="italic">{title}</span>
          </h1>
          <p> {text}</p>
        </div>
        {/* Hero Image */}
        <img
          src={BannerUrl}
          alt=" A Ordem de Advogados de Angola"
          className="inline-block h-full w-full max-w-2xl opacity-80 rounded-xl"
        />
      </div>
    </div>
  );
}
