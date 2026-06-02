import { motion } from "framer-motion";
import { FolhaIcon } from "./icons";
import { TituloAnimado } from "./TituloAnimado";

type CabecalhoSecaoProps = {
  rotulo: string;
  titulo: string;
  descricao: string;
};

export function CabecalhoSecao({ rotulo, titulo, descricao }: CabecalhoSecaoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.7 }}
      className="max-w-3xl"
    >
      <div className="inline-flex items-center gap-2 rounded-full border border-musgo/[0.16] bg-white/[0.84] px-4 py-2 text-folha">
        <FolhaIcon className="h-4 w-4" />
        <span className="rotulo">{rotulo}</span>
      </div>
      <h2 className="titulo-display mt-5 text-4xl leading-tight text-tronco sm:text-5xl">
        <TituloAnimado texto={titulo} />
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-8 text-tronco/[0.72] sm:text-lg">
        {descricao}
      </p>
    </motion.div>
  );
}
