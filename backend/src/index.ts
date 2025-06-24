import express from "express";

const app = express();
const port = 3000;

app.get("/", (_, res) => {
  res.send("Backend funcionando 🔥");
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
