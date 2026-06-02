import { AnimatePresence, motion } from "framer-motion";
import { CardProjeto } from "./CardProjeto";
import type { Projeto } from "../types";

type GradeProjetosProps = {
  projetos: Projeto[];
  onOpen: (projeto: Projeto) => void;
  onFocus: (projeto: Projeto) => void;
};

export function GradeProjetos({ projetos, onOpen, onFocus }: GradeProjetosProps) {
  return (
    <motion.div layout className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
      <AnimatePresence mode="popLayout">
        {projetos.map((projeto) => (
          <CardProjeto key={projeto.id} projeto={projeto} onOpen={onOpen} onFocus={onFocus} />
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
