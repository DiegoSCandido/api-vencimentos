const documentos = [
  {
    id: "1",
    tipo: "certificado",
    empresa: "abc ltda",
    descricao: "certificado da empresa",
    vencimento: "2026-12-31",
  },
  {
    id: "2",
    tipo: "certificado",
    empresa: "xyc ltda",
    descricao: "certificado da empresa",
    vencimento: "2026-12-31",
  },
];

export function listarDocumentos() {
  return documentos;
}
