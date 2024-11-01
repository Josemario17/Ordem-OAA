
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import banner from "../src/assets/img/justice.webp";
import exame from "../src/assets/img/exame-nacional.png";
import Angola from "../src/assets/img/Angola.png";
import SectionMessagePrincipal from "./Components/HomePageComponents/SectionMessagePrincipal";
import NavBar from "./Components/NavBar";
import Section3tips from "./Components/HomePageComponents/Section3tips";
import Section3Steps from "./Components/HomePageComponents/Section3Steps";
import SectionCardXL from "./Components/HomePageComponents/SectionCardXL";
import SectionRigthLeftSides from "./Components/HomePageComponents/SectionRigthLeftSides";
import SectionBlog from "./Components/HomePageComponents/SectionBlog";
import SectionFormContact from "./Components/HomePageComponents/SectionFormContact";
import Footer from "./Components/Footer";
import TraceBar from "./Components/traceBar";
import MainAfterHeader from "./Components/HomePageComponents/MainAfterHeader";
import BannerSection from "./Components/HomePageComponents/BannerSection";
import CtaSection from "./Components/CTADenuncia";

export default function App() {
  // Função para animação de contagem
  const CountUp = ({ end }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const [isInView, inViewRef] = useInView({
      triggerOnce: true,
      threshold: 0.5,
    });

    useEffect(() => {
      if (isInView) {
        let start = 0;
        const endNumber = end;

        const duration = 900; // Duração da animação em milissegundos
        const incrementTime = 10; // Intervalo de incremento

        const increment = () => {
          const step = (endNumber / (duration / incrementTime));
          start = Math.min(start + step, endNumber);
          setCount(Math.floor(start));

          if (start < endNumber) {
            requestAnimationFrame(increment);
          }
        };

        increment();
      }
    }, [isInView, end]);

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-semibold italic gideon-roman-regular tracking-tight text-gray-900 sm:text-5xl"
      >
        {"+ " + count + " mil"}  
      </motion.div>
    );
  };

  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [ref3, inView3] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [ref4, inView4] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [ref5, inView5] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [ref6, inView6] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [ref7, inView7] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [ref8, inView8] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();
  const controls5 = useAnimation();
  const controls6 = useAnimation();
  const controls7 = useAnimation();
  const controls8 = useAnimation();

  useEffect(() => {
    controls1.start({
      opacity: inView1 ? 1 : 0,
      y: inView1 ? 0 : 100,
      transition: { duration: 0.8 },
    });
    controls2.start({
      opacity: inView2 ? 1 : 0,
      y: inView2 ? 0 : 100,
      transition: { duration: 0.8 },
    });
    controls3.start({
      opacity: inView3 ? 1 : 0,
      y: inView3 ? 0 : 100,
      transition: { duration: 0.8 },
    });
    controls4.start({
      opacity: inView4 ? 1 : 0,
      y: inView4 ? 0 : 100,
      transition: { duration: 0.8 },
    });
    controls5.start({
      opacity: inView5 ? 1 : 0,
      y: inView5 ? 0 : 100,
      transition: { duration: 0.8 },
    });
    controls6.start({
      opacity: inView6 ? 1 : 0,
      y: inView6 ? 0 : 100,
      transition: { duration: 0.8 },
    });
    controls7.start({
      opacity: inView7 ? 1 : 0,
      y: inView7 ? 0 : 100,
      transition: { duration: 0.8 },
    });
    controls8.start({
      opacity: inView8 ? 1 : 0,
      y: inView8 ? 0 : 50,
      transition: { duration: 0.5 },
    });
  }, [
    controls1,
    inView1,
    controls2,
    inView2,
    controls3,
    inView3,
    controls4,
    inView4,
    controls5,
    inView5,
    controls6,
    inView6,
    controls7,
    inView7,
    controls8,
    inView8,
  ]);

  return (
    <>
      <TraceBar />
      <NavBar />
      <MainAfterHeader BannerUrl={banner}></MainAfterHeader>

      <main className="mt-20">
        {/*Secção para contagem*/ }
        <motion.section
          ref={ref1}
          animate={controls1}
          initial={{ opacity: 0, y: 200 }}
          className="relative"
        >
          <img
            src={Angola}
            alt="mapa de Angola"
            className="h-[30rem] rotate-6 z-10 opacity-15 absolute -top-52 left-0"
          />
          <div className="mx-auto max-w-7xl px-6 lg:px-8 z-20">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-600">
                  Advogados Inscritos na Ordem
                </dt>
                <dd className="order-first">
                  <CountUp end={14} />
                </dd>
              </div>
              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-600">
                  Honórarios Regulados e Fiscalizados
                </dt>
                <dd className="order-first">
                  <CountUp end={20} />
                </dd>
              </div>
              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-600">
                  Leis Aprovadas a partir de Conselhos...
                </dt>
                <dd className="order-first">
                  <CountUp end={10} />
                </dd>
              </div>
            </dl>
          </div>
        </motion.section>
        <motion.section
          ref={ref2}
          animate={controls2}
          initial={{ opacity: 0, y: 200 }}
        >
          <Section3tips />
        </motion.section>
        <motion.section
          ref={ref3}
          animate={controls3}
          initial={{ opacity: 0, y: 200 }}
        >
          <SectionCardXL />
        </motion.section>
        <motion.section
          ref={ref4}
          animate={controls4}
          initial={{ opacity: 0, y: 200 }}
        >
          <SectionMessagePrincipal />
        </motion.section>
        <motion.section
          ref={ref5}
          animate={controls5}
          initial={{ opacity: 0, y: 200 }}
        >
         <BannerSection url={exame}></BannerSection>
        </motion.section>
        <motion.section
          ref={ref6}
          animate={controls6}
          initial={{ opacity: 0, y: 200 }}
        >
          <Section3Steps />
        </motion.section>
        <motion.section
          ref={ref7}
          animate={controls7}
          initial={{ opacity: 0, y: 100 }}
        >
          <SectionRigthLeftSides />
        </motion.section>
        <SectionBlog />
        <SectionFormContact />
        <CtaSection></CtaSection>
      </main>
      <Footer />
    </>
  );
}
