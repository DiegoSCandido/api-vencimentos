import { listarDocumentos } from "./documentos.js";

//criação da função app
export function app(req, res) {
  const { method, url } = req;
  const endereco = new URL(url, `http://${req.headers.host}`);

  res.setHeader("Content-Type", "application/json");

  //Rota healt
  if (method === "GET" && endereco.pathname === "/health") {
    res.writeHead(200);
    return res.end(JSON.stringify({ status: "ok" }));
  }

  //rota GET/documentos
  if (method === "GET" && endereco.pathname === "/documentos") {
    res.writeHead(200);
    return res.end(JSON.stringify(listarDocumentos()));
  }

  // se for outra rota
  res.writeHead(404);
  return res.end(JSON.stringify({ error: "Not Found" }));
}
