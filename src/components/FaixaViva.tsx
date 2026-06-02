import { motion } from "framer-motion";

export function FaixaViva({ itens }: { itens: string[] }) {
  const lista = [...itens, ...itens];

  return (
    <div className="conteudo-translucido overflow-hidden rounded-[16px] border border-musgo/[0.14] bg-areia/[0.86]">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-6 px-4 py-3 sm:px-6"
      >
        <span className="rotulo shrink-0 text-barro">Fluxo vivo</span>
        <div className="overflow-hidden">
          <div className="flex w-max gap-8 animate-ticker">
            {lista.map((item, index) => (
              <div key={`${item}-${index}`} className="flex items-center gap-8 text-sm text-tronco/[0.74]">
                <span className="h-1.5 w-1.5 rounded-full bg-folha" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
