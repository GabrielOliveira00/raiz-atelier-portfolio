import { motion } from "framer-motion";
import type { CategoriaProjeto } from "../types";

type AbasCategoriaProps = {
  categorias: CategoriaProjeto[];
  ativa: CategoriaProjeto;
  onChange: (categoria: CategoriaProjeto) => void;
};

export function AbasCategoria({ categorias, ativa, onChange }: AbasCategoriaProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
      className="flex flex-wrap gap-3"
    >
      {categorias.map((categoria) => {
        const selecionada = categoria === ativa;

        return (
          <motion.button
            key={categoria}
            type="button"
            onClick={() => onChange(categoria)}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className={`rounded-full border px-4 py-3 text-sm font-semibold transition ${
              selecionada
                ? "border-folha/[0.42] bg-folha/[0.26] text-pinho shadow-folha"
                : "border-musgo/[0.16] bg-white/[0.82] text-tronco/[0.82] hover:border-folha/[0.26] hover:bg-white/[0.96]"
            }`}
          >
            {categoria}
          </motion.button>
        );
      })}
    </motion.div>
  );
}
