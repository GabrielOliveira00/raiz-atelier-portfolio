import { motion } from "framer-motion";
import type { Indicador } from "../types";

export function FaixaIndicadores({ itens }: { itens: Indicador[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {itens.map((item, index) => (
        <motion.article
          key={item.rotulo}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, delay: index * 0.08 }}
          whileHover={{ y: -4 }}
          className="cartao-suave p-5"
        >
          <p className="rotulo">{item.rotulo}</p>
          <div className="trilha-folha mt-4 h-[1px] w-full opacity-70" />
          <p className="titulo-display mt-5 text-4xl text-tronco">{item.valor}</p>
          <p className="mt-3 text-sm leading-7 text-tronco/[0.72]">{item.detalhe}</p>
        </motion.article>
      ))}
    </div>
  );
}
