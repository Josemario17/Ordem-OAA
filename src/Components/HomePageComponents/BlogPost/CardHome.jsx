import React from "react";

export default function CardHome({CardData}) {
 const {categoria, titulo, imageUrl} = CardData
  return (
    <a href="#" className="flex flex-col gap-4 rounded-md px-4 py-8 md:p-0">
      <img
        src={imageUrl}
        alt={titulo}
        className="h-60 object-cover"
      />
      <div className="flex flex-col items-start py-4">
        <div className="mb-4 rounded-md bg-primary px-2 py-1.5">
          <p className="text-sm uppercase font-semibold text-white">
            {categoria}
          </p>
        </div>
        <p className="mb-4 text-xl font-bold md:text-2xl">{titulo}</p>
        <div className="flex flex-col items-start text-sm text-gray-500 lg:flex-row lg:items-center">
          <p>Luanda</p>
          <p className="mx-2 hidden lg:block">-</p>
          <p>6 dias</p>
        </div>
      </div>
    </a>
  );
}
