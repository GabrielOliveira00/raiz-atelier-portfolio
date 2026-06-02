export type CategoriaProjeto = "Todos" | "Residencial" | "Hospitalidade" | "Bem-estar" | "Refúgios";

export type Projeto = {
  id: string;
  nome: string;
  categoria: Exclude<CategoriaProjeto, "Todos">;
  cidade: string;
  resumo: string;
  impacto: string;
  destaque: string;
  paleta: string;
  topicos: string[];
  texto: string[];
};

export type Indicador = {
  rotulo: string;
  valor: string;
  detalhe: string;
};
