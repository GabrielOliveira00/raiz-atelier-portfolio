import { AnimatePresence, motion } from "framer-motion";
import { SetaIcon } from "./icons";
import type { Projeto } from "../types";

type ModalProjetoProps = {
  projeto: Projeto | null;
  onClose: () => void;
};

export function ModalProjeto({ projeto, onClose }: ModalProjetoProps) {
  return (
    <AnimatePresence>
      {projeto ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[80] flex items-end justify-center bg-tronco/[0.34] px-4 py-6 backdrop-blur-md sm:items-center"
        >
          <motion.article
            initial={{ opacity: 0, y: 42, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 28, scale: 0.98 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            onClick={(event) => event.stopPropagation()}
            className="conteudo-translucido w-full max-w-4xl rounded-[28px] border border-musgo/[0.12] p-6 sm:p-8"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="rotulo text-barro">{projeto.categoria}</p>
                <h3 className="titulo-display mt-4 text-4xl text-tronco">{projeto.nome}</h3>
                <p className="mt-3 text-sm text-pinho">{projeto.cidade}</p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-musgo/[0.16] bg-white/[0.84] px-4 py-2 text-sm font-semibold text-tronco transition hover:border-musgo/[0.3] hover:bg-white/[0.96]"
              >
                Fechar
              </button>
            </div>

            <div className={`mt-6 rounded-[28px] bg-gradient-to-br ${projeto.paleta} p-6`}>
              <p className="text-lg leading-8 text-tronco/[0.82]">{projeto.destaque}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {projeto.topicos.map((topico) => (
                  <span key={topico} className="rounded-full border border-musgo/[0.16] bg-white/[0.82] px-3 py-2 text-xs uppercase tracking-normal text-pinho">
                    {topico}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 grid gap-4">
              {projeto.texto.map((paragrafo) => (
                <p key={paragrafo} className="text-base leading-8 text-tronco/[0.76]">
                  {paragrafo}
                </p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#jornadas" onClick={onClose} className="botao-principal">
                Continuar explorando
                <SetaIcon className="h-4 w-4" />
              </a>
              <a href="#contato" onClick={onClose} className="botao-secundario">
                Conversar sobre um espaço
              </a>
            </div>
          </motion.article>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
