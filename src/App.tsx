import { useMemo, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { AbasCategoria } from "./components/AbasCategoria";
import { CabecalhoSecao } from "./components/CabecalhoSecao";
import { CenaFolhagem } from "./components/CenaFolhagem";
import { FaixaIndicadores } from "./components/FaixaIndicadores";
import { FaixaViva } from "./components/FaixaViva";
import { GradeProjetos } from "./components/GradeProjetos";
import { HeroBotanico } from "./components/HeroBotanico";
import { ManifestoBotanico } from "./components/ManifestoBotanico";
import { ModalProjeto } from "./components/ModalProjeto";
import { PainelContato } from "./components/PainelContato";
import { FolhaIcon, SetaIcon } from "./components/icons";
import { categorias, faixas, indicadores, menu, projetos } from "./data/conteudo";
import type { CategoriaProjeto, Projeto } from "./types";

export default function App() {
  const { scrollYProgress } = useScroll();
  const fundoY = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const tramaY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const jardimY = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const folhasY = useTransform(scrollYProgress, [0, 1], [0, -120]);

  const [categoriaAtiva, setCategoriaAtiva] = useState<CategoriaProjeto>("Todos");
  const [projetoAberto, setProjetoAberto] = useState<Projeto | null>(null);
  const [brisaToken, setBrisaToken] = useState(0);

  const projetosFiltrados = useMemo(() => {
    if (categoriaAtiva === "Todos") {
      return projetos;
    }

    return projetos.filter((projeto) => projeto.categoria === categoriaAtiva);
  }, [categoriaAtiva]);

  const projetoDestaque = projetosFiltrados[0] ?? projetos[0];

  function focarCategoria(projeto: Projeto) {
    setCategoriaAtiva(projeto.categoria);
    document.querySelector("#colecao")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function ativarBrisa() {
    setBrisaToken((valor) => valor + 1);
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-creme text-tronco">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <motion.div style={{ y: jardimY }} className="jardim-textura" />

        <motion.div style={{ y: folhasY }} className="absolute inset-0">
          <div className="ramo-botanico ramo-esquerdo animate-sway">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="ramo-botanico ramo-direito animate-sway">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="ramo-botanico ramo-centro">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="canteiro-base" />
        </motion.div>

        <motion.div style={{ y: folhasY }} className="fundo-folhagem opacity-45">
          <div className="folha-silhueta left-[-4%] top-[2%] h-[420px] w-[220px] rotate-[-12deg]" />
          <div className="folha-silhueta left-[4%] top-[20%] h-[520px] w-[240px] rotate-[8deg] animate-sway" />
          <div className="folha-silhueta left-[12%] bottom-[-8%] h-[360px] w-[180px] rotate-[16deg]" />
          <div className="folha-silhueta right-[-2%] top-[0%] h-[460px] w-[230px] rotate-[18deg]" />
          <div className="folha-silhueta right-[8%] top-[26%] h-[520px] w-[240px] rotate-[-10deg] animate-sway" />
          <div className="folha-silhueta right-[18%] bottom-[-10%] h-[340px] w-[170px] rotate-[-16deg]" />
        </motion.div>

        <motion.div
          style={{ y: tramaY }}
          className="absolute inset-0 bg-trama bg-[size:88px_88px] opacity-[0.05] [mask-image:linear-gradient(180deg,rgba(0,0,0,0.34),transparent_92%)]"
        />

        <motion.div style={{ y: fundoY }} className="absolute inset-0">
          <CenaFolhagem scrollProgress={scrollYProgress} brisaToken={brisaToken} />
        </motion.div>
      </div>

      <div className="relative z-20">
        <header className="sticky top-0 z-40 border-b border-musgo/[0.14] bg-creme/[0.86] backdrop-blur-md">
          <div className="site-shell">
            <motion.div
              initial={{ opacity: 0, y: -18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="grid gap-4 py-4 lg:grid-cols-[auto_1fr_auto] lg:items-center"
            >
              <a href="#inicio" className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-musgo/[0.16] bg-white/[0.88] text-folha">
                  <FolhaIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="rotulo">Raiz Atelier</p>
                  <p className="titulo-display mt-1 text-lg text-tronco">Jornadas botânicas para espaços memoráveis</p>
                </div>
              </a>

              <nav className="flex flex-wrap items-center gap-2 lg:justify-center">
                {menu.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-full border border-musgo/[0.16] bg-white/[0.76] px-4 py-2 text-sm font-semibold text-tronco/[0.82] transition hover:border-folha/[0.28] hover:bg-white/[0.95]"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="flex flex-wrap items-center gap-3 lg:justify-end">
                <button
                  type="button"
                  onClick={ativarBrisa}
                  className="rounded-full border border-folha/[0.32] bg-folha/[0.22] px-4 py-2 text-sm font-semibold text-pinho transition hover:border-folha/[0.44] hover:bg-folha/[0.3]"
                >
                  Ativar brisa
                </button>
                <a href="#contato" className="botao-secundario">
                  Falar com o atelier
                  <SetaIcon className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </header>

        <main id="inicio" className="site-shell pb-16 pt-6">
          <HeroBotanico
            destaque={projetoDestaque}
            indicadores={indicadores}
            onAbrirProjeto={() => setProjetoAberto(projetoDestaque)}
          />

          <section className="site-section">
            <FaixaViva itens={faixas} />
          </section>

          <section className="site-section space-y-6">
            <CabecalhoSecao
              rotulo="Presença natural"
              titulo="A paisagem entra em cena como matéria viva, não como pano de fundo."
              descricao="Este projeto traduz a atmosfera da referência para uma linguagem mais orgânica: menos espetáculo frio, mais percurso, silêncio, folhagem e textura."
            />
            <FaixaIndicadores itens={indicadores} />
          </section>

          <section id="colecao" className="site-section space-y-6">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <CabecalhoSecao
                rotulo="Coleção"
                titulo="Projetos pensados como jornadas entre abrigo, matéria e vegetação."
                descricao="As categorias reorganizam a coleção e ajudam a ler o trabalho como família de experiências, não como galeria solta."
              />

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6 }}
                className="conteudo-translucido rounded-[16px] px-4 py-4"
              >
                <p className="text-sm leading-7 text-tronco/[0.76]">
                  Coleção ativa: <span className="font-semibold text-pinho">{categoriaAtiva}</span>
                </p>
              </motion.div>
            </div>

            <AbasCategoria categorias={categorias} ativa={categoriaAtiva} onChange={setCategoriaAtiva} />
            <GradeProjetos projetos={projetosFiltrados} onOpen={setProjetoAberto} onFocus={focarCategoria} />
          </section>

          <section id="manifesto" className="site-section space-y-6">
            <CabecalhoSecao
              rotulo="Manifesto"
              titulo="Espaços memoráveis nascem quando o percurso é tão importante quanto a forma."
              descricao="Aqui a tecnologia não aparece como protagonista visual. Ela atua para dar vida ao fundo, mover a folhagem e sustentar uma sensação mais tátil e serena."
            />
            <ManifestoBotanico />
          </section>

          <section id="jornadas" className="site-section grid gap-8 xl:grid-cols-[0.78fr_1.22fr]">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.68 }}
              className="conteudo-translucido rounded-[22px] px-5 py-6"
            >
              <p className="rotulo">Jornadas</p>
              <h3 className="titulo-display mt-4 text-4xl text-tronco">O que torna esta página especial.</h3>
              <div className="mt-6 grid gap-4">
                {[
                  "Folhagens e sementes se movem ao fundo com Babylon.js.",
                  "Camadas de parallax fazem o conteúdo flutuar pela frente.",
                  "Botões, filtros e modais funcionam como experiência real.",
                  "A linguagem visual fica mais próxima de um estúdio sensorial do que de uma landing comum.",
                ].map((item) => (
                  <div key={item} className="rounded-[14px] border border-musgo/[0.14] bg-white/[0.8] px-4 py-4 text-sm leading-7 text-tronco/[0.78]">
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.68, delay: 0.08 }}
              className="conteudo-translucido rounded-[22px] px-5 py-6"
            >
              <div className="grid gap-4 md:grid-cols-2">
                {projetos.slice(0, 4).map((projeto) => (
                  <motion.button
                    key={projeto.id}
                    type="button"
                    onClick={() => setProjetoAberto(projeto)}
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.98 }}
                    className={`rounded-[20px] bg-gradient-to-br ${projeto.paleta} p-5 text-left`}
                  >
                    <p className="rotulo text-barro">{projeto.categoria}</p>
                    <h3 className="titulo-display mt-4 text-3xl text-tronco">{projeto.nome}</h3>
                    <p className="mt-4 text-sm leading-7 text-tronco/[0.76]">{projeto.destaque}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-pinho">
                      Abrir projeto
                      <SetaIcon className="h-4 w-4" />
                    </span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </section>

          <section id="contato" className="site-section">
            <PainelContato />
          </section>
        </main>

        <footer className="border-t border-musgo/[0.14] bg-creme/[0.9] backdrop-blur-md">
          <div className="site-shell grid gap-8 py-8 md:grid-cols-[1.2fr_0.8fr_0.8fr] md:items-start">
            <div className="max-w-xl">
              <p className="rotulo">Raiz Atelier</p>
              <p className="mt-2 text-sm leading-7 text-tronco/[0.72]">
                Uma experiência visual pensada para criar uma atmosfera natural, com camadas em movimento, profundidade suave e folhagens que acompanham a navegação de forma orgânica.              </p>
            </div>

            <nav aria-label="Rodapé" className="grid gap-2">
              <p className="rotulo text-tronco/[0.56]">Navegação</p>
              {menu.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="w-fit text-sm font-medium text-tronco/[0.72] transition hover:text-pinho"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="grid gap-2 text-sm text-tronco/[0.72]">
              <p className="rotulo text-tronco/[0.56]">Atelier</p>
              <a className="w-fit transition hover:text-pinho" href="mailto:contato@raizatelier.com">
                contato@raizatelier.com
              </a>
              <a className="w-fit transition hover:text-pinho" href="#contato">
                Solicitar proposta
              </a>
              <p className="pt-2 text-xs text-tronco/[0.5]">Raiz Atelier © 2026</p>
            </div>
          </div>
        </footer>
      </div>

      <ModalProjeto projeto={projetoAberto} onClose={() => setProjetoAberto(null)} />
    </div>
  );
}
