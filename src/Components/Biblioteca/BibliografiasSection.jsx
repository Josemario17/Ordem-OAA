import React from 'react'
import { livros } from './BibliografiaObject'

export default function BibliografiasSection({inicialValue, NextValue}) {
const LivrosArray = livros;
  return (
   <>
    {LivrosArray.slice(inicialValue,NextValue).map((item, index) => (
        <div class="flex space-x-4 items-center mb-6">
          <div class="bg-primary text-white text-center max-w-md min-w-[100px] p-4 w-auto rounded">
            <p class="text-lg font-bold">{item.local}</p>
            <p class="text-2xl font-bold">{item.ano}</p>
          </div>
          <div class="flex flex-col bg-gray-300/5">
            <a
              href="#"
              class="text-xl font-bold text-primary gideon-roman-regular hover:underline max-w-2xl truncate"
            >
              <span className="italic">{item.titulo}</span>
            </a>
            {
              item.autor && <span class="text-gray-500 text-sm"><span className="text-gray-800 raleway-bold">Autor</span>: {item.autor}</span>
            }
            {
              item.editora && <span class="text-gray-500 text-sm"><span className="text-gray-800 raleway-bold">Editora</span>: {item.editora}</span>
            }
            {
              item.organizadores && <p class="text-gray-500 text-sm"><span className="text-gray-800 raleway-bold">Organizadores</span>: {item.organizadores}</p>
            }
            
          </div>
        </div>
      ))}
   </>
  )
}
