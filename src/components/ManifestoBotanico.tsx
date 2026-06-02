import { motion } from "framer-motion";
import { BrisaIcon, FolhaIcon, SementeIcon } from "./icons";

export function ManifestoBotanico() {
  const itens = [
    {
      icon: FolhaIcon,
      titulo: "Paisagem como narrativa",
      descricao: "Não desenhamos apenas um ambiente bonito. Criamos uma sequência de percepções: chegada, pausa, respiro, sombra e permanência.",
    },
    {
      icon: BrisaIcon,
      titulo: "Movimento como matéria",
      descricao: "Brisa, folhagem, reflexo e penumbra participam do projeto como camadas ativas, não como fundo decorativo.",
    },
    {
      icon: SementeIcon,
      titulo: "Tempo como aliado",
      descricao: "Materiais e vegetação são escolhidos para envelhecer bem, ganhar textura e aprofundar a relação entre espaço e rotina.",
    },
  ];

  return (
    <section className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
      <motion.div
        initial={{ opacity: 0, x: -26 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.32 }}
        transition={{ duration: 0.75 }}
        className="conteudo-translucido rounded-[22px] px-5 py-6"
      >
        <p className="rotulo">Manifesto</p>
        <h3 className="titulo-display mt-4 text-4xl text-tronco">
          Criamos espaços que conduzem o olhar com a mesma delicadeza com que acolhem o corpo.
        </h3>
        <p className="mt-5 text-base leading-8 text-tronco/[0.76]">
          A referência que inspira este projeto fala de jornadas memoráveis. Aqui, traduzimos essa ideia para um universo mais orgânico, brasileiro e sensorial, onde o verde não enfeita: ele orienta, protege e emociona.
        </p>
      </motion.div>

      <div className="grid gap-4">
        {itens.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.titulo}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.32 }}
              transition={{ duration: 0.68, delay: index * 0.08 }}
              className="cartao-suave p-5"
            >
              <div className="flex items-center gap-3 text-folha">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-musgo/[0.16] bg-white/[0.86]">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="rotulo">{item.titulo}</span>
              </div>
              <p className="mt-4 text-sm leading-7 text-tronco/[0.76]">{item.descricao}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
