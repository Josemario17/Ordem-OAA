// AnimatedSection.js
import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const AnimatedSection = ({ children, className, ...props }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // animação ocorre apenas uma vez
    threshold: 0.2,   // ajusta a visibilidade necessária para ativar a animação
  });
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: inView ? 1 : 0,
      y: inView ? 0 : 50,
      transition: { duration: 0.6 }
    });
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      animate={controls}
      initial={{ opacity: 0, y: 50 }}
      className={className}
      {...props}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
