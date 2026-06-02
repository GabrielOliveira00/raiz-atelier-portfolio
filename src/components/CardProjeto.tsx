import { motion } from "framer-motion";
import { FolhaIcon, SetaIcon } from "./icons";
import type { Projeto } from "../types";

type CardProjetoProps = {
  projeto: Projeto;
  onOpen: (projeto: Projeto) => void;
  onFocus: (projeto: Projeto) => void;
};

export function CardProjeto({ projeto, onOpen, onFocus }: CardProjetoProps) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.24 }}
      transition={{ duration: 0.65 }}
      whileHover={{ y: -6 }}
      className="cartao-suave overflow-hidden p-5 sm:p-6"
    >
      <div className={`rounded-[20px] bg-gradient-to-br ${projeto.paleta} p-5`}>
        <div className="flex items-center justify-between gap-3">
          <span className="rotulo text-barro">{projeto.categoria}</span>
          <span className="rounded-full border border-musgo/[0.16] bg-white/[0.82] px-3 py-1 text-[11px] uppercase tracking-normal text-pinho">
            {projeto.cidade}
          </span>
        </div>
        <h3 className="titulo-display mt-4 text-3xl text-tronco">{projeto.nome}</h3>
        <p className="mt-4 text-sm leading-7 text-tronco/[0.76]">{projeto.resumo}</p>
        <p className="mt-4 text-sm font-medium text-pinho">{projeto.impacto}</p>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {projeto.topicos.map((topico) => (
          <span key={topico} className="rounded-full border border-musgo/[0.16] bg-white/[0.8] px-3 py-2 text-xs uppercase tracking-normal text-tronco/[0.78]">
            {topico}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button type="button" onClick={() => onOpen(projeto)} className="botao-principal">
          Abrir jornada
          <SetaIcon className="h-4 w-4" />
        </button>
        <button type="button" onClick={() => onFocus(projeto)} className="botao-secundario">
          <FolhaIcon className="h-4 w-4" />
          Focar categoria
        </button>
      </div>
    </motion.article>
  );
}
