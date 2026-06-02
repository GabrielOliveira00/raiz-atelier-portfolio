import { motion } from "framer-motion";

type TituloAnimadoProps = {
  texto: string;
  className?: string;
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.02,
      delayChildren: 0.08,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.68,
      ease: [0.19, 1, 0.22, 1],
    },
  },
};

export function TituloAnimado({ texto, className }: TituloAnimadoProps) {
  return (
    <motion.span variants={container} initial="hidden" animate="visible" aria-label={texto} className={className}>
      {texto.split("").map((char, index) => (
        <motion.span key={`${char}-${index}`} variants={item} className="inline-block">
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
}
