//criação da função app
export function app(req, res) {
  const { method, url } = req;

  res.setHeader("Content-Type", "application/json");

  //Rota healt
  if (method === "GET" && url === "/health") {
    res.writeHead(200);
    return res.end(JSON.stringify({ status: "ok" }));
  }

  // se for outra rota
  res.writeHead(404);
  return res.end(JSON.stringify({ error: "Not Found" }));
}
