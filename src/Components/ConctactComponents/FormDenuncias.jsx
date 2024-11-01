import React, { useState } from 'react'

export default function FormDenuncias() {  
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
      setChecked(!checked);
    };
  return (
    <>
         <section>
          {/* Container */}
          <div className="mx-auto max-w-7xl px-5 py-16 text-center md:px-10 md:py-20">
            {/* Component */}
            <h2 className="text-3xl font-bold md:text-5xl">
              Formulário para Denúncias
            </h2>
            <p className="mx-auto mb-8 mt-4 max-w-lg text-gray-500 md:mb-12 lg:mb-16">
              Deseja Fazer uma Denúncia, então preencha os dados a baixos e
              envie.
            </p>
            {/* Form */}
            <form
              name="wf-form-name"
              method="get"
              className="mx-auto mb-4 text-left sm:px-4 md:px-20"
            >
              <div className="mb-4 grid w-full grid-cols-1 lg:grid-cols-2 gap-6 ">
                <div>
                  <label htmlFor="name-2" className="mb-1 font-medium">
                    Nome<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="mb-4 block h-9 w-full rounded-md border border-solid border-primary px-3 py-6 text-sm text-black"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="name-3" className="mb-1 font-medium">
                    BI
                  </label>
                  <input
                    type="text"
                    className="mb-4 block h-9 w-full rounded-md border border-solid border-primary px-3 py-6 text-sm text-black"
                    required=""
                  />
                </div>
              </div>
              <div className="mb-5 grid w-full grid-cols-1 lg:grid-cols-2 gap-6 ">
                <div>
                  <label htmlFor="field" className="mb-1 font-medium">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    className="mb-4 block h-9 w-full rounded-md border border-solid border-primary px-3 py-6 text-sm text-black"
                  />
                </div>
                <div>
                  <label htmlFor="field" className="mb-1 font-medium">
                    Telefone
                  </label>
                  <input
                    type="text"
                    className="mb-4 block h-9 w-full rounded-md border border-solid border-primary px-3 py-6 text-sm text-black"
                  />
                </div>
              </div>
              <div className="mb-4 grid w-full grid-cols-1 lg:grid-cols-2 gap-6 ">
                <div>
                  <label htmlFor="field" className="mb-1 font-medium">
                    Qualidade do Denunciante
                  </label>
                  <select
                    name=""
                    id=""
                    className="mb-4 block w-full rounded-md border border-solid border-primary px-3 py-4 text-sm text-black"
                  >
                    <option value="0">-------------</option>
                    <option value="Advogado">Advogado</option>
                    <option value="Advogado Estagiário">
                      Advogado Estagiário
                    </option>
                    <option value="Magistrado">Magistrado</option>
                    <option value="Utente">Utente</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="field" className="mb-1 font-medium">
                    Tipo de Denúncia
                  </label>
                  <select
                    name=""
                    id=""
                    className="mb-4 block w-full rounded-md border border-solid border-primary px-3 py-4 text-sm text-black"
                  >
                    <option value="0">-------------</option>
                    <option value="Incontitucionalidade">Incontitucionalidade</option>
                    <option value="Violação de Direitos e Prerrogativas dos Advogados">
                      Violação de Direitos e Prerrogativas dos Advogados
                    </option>
                    <option value="Violação de Direitos Humanos">Violação de Direitos Humanos</option>
                    <option value="Denúncia contra Advogado">Denúncia contra Advogado</option>
                    <option value="Denúncia contra Magistrado">Denúncia contra Magistrado</option>
                  </select>
                </div>
              </div>
              <div className="mb-5 md:mb-6 lg:mb-8">
                <label htmlFor="field" className="mb-1 font-medium">
                  Ocorrência <span className="text-red-500">*</span>
                </label>
                <textarea
                  maxLength="5000"
                  name="field"
                  className="mb-2.5 block h-auto min-h-44 w-full rounded-md border border-solid border-primary px-3 py-2 text-sm text-black"
                ></textarea>
              </div>
              <label className="flex items-center cursor-pointer mb-1 justify-center pb-4 md:pl-5">
                {/* Toggle */}
                <div
                  className={`relative w-12 h-7 transition duration-200 ease-linear rounded-full ${
                    checked ? "bg-primary" : "bg-gray-600"
                  }`}
                >
                  {/* Switch */}
                  <span
                    className={`absolute left-1 top-1 transition duration-200 ease-in-out transform bg-white rounded-full w-5 h-5 ${
                      checked ? "translate-x-5" : ""
                    }`}
                  />
                </div>
                <input
                  type="checkbox"
                  className="hidden"
                  checked={checked}
                  onChange={handleChange}
                />
                <span
                  className="ml-4 inline-block cursor-pointer text-sm max-w-48 md:max-w-full"
                  htmlFor="checkbox-2"
                >
                  Selecionando essa opção permite que usemos as informações para
                  trabalhos internos
                </span>
              </label>

              <div className="flex justify-center my-3 items-center">
                <input
                  type="submit"
                  value="Enviar Denúncia"
                  className="inline-block mx-auto w-2/3 rounded-md cursor-pointer bg-primary hover:bg-primary/70 px-6 py-3 text-center font-semibold text-white"
                />
              </div>
            </form>
          </div>
        </section> 
    </>
  ) 
}
