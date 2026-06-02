import { motion } from "framer-motion";
import { BrisaIcon, FolhaIcon, SementeIcon, SetaIcon } from "./icons";
import { TituloAnimado } from "./TituloAnimado";
import type { Indicador, Projeto } from "../types";

type HeroBotanicoProps = {
  destaque: Projeto;
  indicadores: Indicador[];
  onAbrirProjeto: () => void;
};

export function HeroBotanico({ destaque, indicadores, onAbrirProjeto }: HeroBotanicoProps) {
  return (
    <section className="relative border-b border-musgo/[0.12] pb-14 pt-20 lg:pt-24">
      <div className="hero-livre">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 rounded-full border border-musgo/[0.18] bg-white/[0.84] px-4 py-2 text-folha"
          >
            <FolhaIcon className="h-4 w-4" />
            <span className="rotulo">Raiz Atelier // edição paisagem</span>
          </motion.div>

          <div className="trilha-folha mt-6 h-[1px] w-28 opacity-80" />
          <h1 className="titulo-display mt-6 max-w-5xl text-5xl text-tronco sm:text-6xl lg:text-8xl">
            <TituloAnimado texto="Transformamos  espaços em jornadas naturais,       memoráveis e sensoriais." />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.14 }}
            className="conteudo-translucido mt-6 max-w-2xl rounded-[18px] px-4 py-4 text-base leading-8 text-tronco/[0.78] sm:text-lg"
          >
            Raiz Atelier cria atmosferas onde arquitetura, sombra, textura e vegetação se movem juntas. A proposta agora é deixar o fundo vegetal realmente presente, enquanto o conteúdo principal respira com leve transparência.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.82, delay: 0.22 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <button type="button" onClick={onAbrirProjeto} className="botao-principal">
              <SementeIcon className="h-4 w-4" />
              Ver projeto em destaque
            </button>
            <a href="#manifesto" className="botao-secundario">
              <BrisaIcon className="h-4 w-4" />
              Ler manifesto
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30, y: 18 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.9, delay: 0.16 }}
          className="grid gap-4"
        >
          <div className="cartao-suave overflow-hidden p-6">
            <div className={`rounded-[20px] bg-gradient-to-br ${destaque.paleta} p-6`}>
              <p className="rotulo text-barro">{destaque.categoria}</p>
              <h2 className="titulo-display mt-4 text-3xl text-tronco">{destaque.nome}</h2>
              <p className="mt-4 text-base leading-8 text-tronco/[0.76]">{destaque.resumo}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {destaque.topicos.map((topico) => (
                  <span
                    key={topico}
                    className="rounded-full border border-musgo/[0.16] bg-white/[0.82] px-3 py-2 text-xs uppercase tracking-normal text-pinho"
                  >
                    {topico}
                  </span>
                ))}
              </div>
              <button type="button" onClick={onAbrirProjeto} className="botao-secundario mt-6">
                Explorar percurso
                <SetaIcon className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {indicadores.slice(0, 2).map((indicador, index) => (
              <motion.div
                key={indicador.rotulo}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.26 + index * 0.08 }}
                className="cartao-suave p-5"
              >
                <p className="rotulo">{indicador.rotulo}</p>
                <p className="titulo-display mt-4 text-4xl text-tronco">{indicador.valor}</p>
                <p className="mt-3 text-sm leading-7 text-tronco/[0.72]">{indicador.detalhe}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
