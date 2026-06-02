import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { SetaIcon } from "./icons";

export function PainelContato() {
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("Conte um pouco sobre o espaço que você deseja transformar.");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (nome.trim().length < 3) {
      setMensagem("Escreva seu nome para abrir essa conversa com mais carinho.");
      return;
    }

    setMensagem(`Obrigada, ${nome.trim()}. Seu interesse foi recebido como a primeira semente dessa jornada.`);
    setNome("");
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.38 }}
      transition={{ duration: 0.7 }}
      className="conteudo-translucido rounded-[24px] border border-musgo/[0.12] px-6 py-7 sm:px-8"
    >
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        
        <div>
          <p className="rotulo">Contato</p>
          <h3 className="titulo-display mt-4 text-4xl text-tronco sm:text-5xl">
            Vamos imaginar um espaço que respire com mais calma, sombra e presença.
          </h3>
          <p className="mt-4 max-w-xl text-base leading-8 text-tronco/[0.74]">{mensagem}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-[1fr_auto]">
          <input
            value={nome}
            onChange={(event) => setNome(event.target.value)}
            type="text"
            placeholder="Seu nome"
            className="rounded-full border border-musgo/[0.18] bg-white/[0.86] px-5 py-4 text-tronco outline-none transition placeholder:text-tronco/[0.42] focus:border-folha/[0.32] focus:bg-white/[0.98]"
          />
          <button type="submit" className="botao-principal justify-center">
            Iniciar conversa
            <SetaIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.form>
  );
}
