import { Link } from "react-router-dom";

export default function CtaSection() {
  return (
    <section className="py-24 bg-white/50">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
        <div className="bg-gradient-to-br from-primary/10 rounded-lg p-8 md:p-10 py-14 lg:p-14 flex flex-col md:flex-row items-center justify-center text-center md:text-left md:justify-start md:items-start gap-8">
          <div className="md:w-2/5">
            <h3 className="text-3xl sm:text-4xl md:text-5xl xl:text-4xl text-blue-950 font-display font-bold leading-tight">
              Entre em Conctato Para Denuncias
            </h3>
          </div>
          <div className="flex flex-col md:flex-1 space-y-8">
            <p className="text-gray-700">
             Acesse o Formulário para Denúncias se Deseja Fazer uma Denúncia,
              preencha os dados a baixos e envie.{" "}.
            </p>
            <div className="flex justify-center md:justify-start">
              <Link
                to="/Contacto/Denuncia"
                className="h-12 px-5 rounded-full flex items-center bg-primary hover:bg-primary/70 text-white"
              >
                Fazer Denuncias
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
