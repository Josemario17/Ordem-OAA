import React from "react";
import CardHome from "./BlogPost/CardHome";

export default function SectionBlog() {
  const news = [
    {
      id: 0,
      categoria: "Na Ordem",
      titulo: "Ordem dos Advogados de Angola mantém encontro com o Governo Provincial de Luanda para desenvolvimento de parceria institucional",
      imageUrl: "https://media.licdn.com/dms/image/v2/D4D22AQGw4kRcFudLmA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1719250086298?e=1727913600&v=beta&t=1NG5jER_vqP75K7rTALCrmH2jDvL9WjltvxkK8X6M80",
    },{
      id: 1,
      categoria: "Na Ordem",
      titulo: "PARTICIPE DA ASSEMBLEIA GERAL ORDINÁRIA DA O.A.A DE 2024",
      imageUrl: "https://media.licdn.com/dms/image/v2/D4D22AQHKvxgKS84oFg/feedshare-shrink_800/feedshare-shrink_800/0/1722862683445?e=1727913600&v=beta&t=2XWfen05cCd7KOc0IPy191gtgsbA01P6OWJNw-SHuiU"  
    },{
      id: 2,
      categoria: "Na Ordem",
      titulo: "A união é fundamental para o progresso!",
      imageUrl: "https://media.licdn.com/dms/image/v2/D4D22AQHCaa4XgriYMA/feedshare-shrink_800/feedshare-shrink_800/0/1724158284636?e=1727913600&v=beta&t=sZS8lh3xVYGaOJ2wx8wAECuh03l_pAeRG_emRUvR1d0"  
    },
  ]
  return (
    <section className=" bg-white/50">
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Component */}
        <div className="flex flex-col">
          <h2 className="text-start gideon-roman-regular text-3xl font-bold md:text-5xl">
            Ultimas <span className="italic">Noticias</span>, Postagens e <span className="italic">Eventos</span>
          </h2>
          <p className="mb-8 mt-4 text-start text-sm text-gray-500 sm:text-base md:mb-12 lg:mb-16">
            Acompanhe todas as informações e Noticias da Ordem
          </p>
          {/* Content */}
          <div className="mb-8 grid gap-5 sm:grid-cols-2 sm:justify-items-stretch md:mb-12 md:grid-cols-3 lg:mb-16 lg:gap-6">
            {/* Item */}
          { news.map((items)=><CardHome key={items.id} CardData={items}/> ) }
          </div>
          {/* Button */}
          <a
            href="#"
            className="rounded-full bg-primary hover:bg-primary/80 px-6 py-3 w-1/3 mx-auto text-center font-semibold text-white"
          >
            Ver mais
          </a>
        </div>
      </div>
    </section>
  );
}
