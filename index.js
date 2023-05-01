import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 8080;

const farmacias = [];

const medicamentos = [];

app.get("/", (req, res) => {
  return res.json("funcionando");
});

app.get("/farmacias", (req, res) => {
  return res.json(farmacias);
});

app.get("/medicamentos", (req, res) => {
  return res.json(medicamentos);
});

app.post("/farmacias", (req, res) => {
  const {
    razao_social,
    cnpj,
    nome_fantasia,
    email,
    telefone,
    celular,
    endereco,
  } = req.body;
  const id = farmacias.length + 1;
  const novaFarmacia = {
    id,
    razao_social,
    cnpj,
    nome_fantasia,
    email,
    telefone,
    celular,
    endereco,
  };
  farmacias.push(novaFarmacia);
  return res.json(novaFarmacia);
});

app.post("/medicamentos", (req, res) => {
  const { nome, laboratorio, dosagem, descricao, preco_unitario, tipo } =
    req.body;
  const id = medicamentos.length + 1;
  const novoMedicamento = {
    id,
    nome,
    laboratorio,
    dosagem,
    descricao,
    preco_unitario,
    tipo,
  };
  medicamentos.push(novoMedicamento);
  return res.json(novoMedicamento);
});

app.delete("/farmacias/:id", (req, res) => {
  const { id } = req.params;
  const farmaciaIndex = farmacias.findIndex((farmacia) => farmacia.id == id);
  if (farmaciaIndex < 0) {
    return res.status(400).json({ error: "Farmácia não encontrada" });
  }
  farmacias.splice(farmaciaIndex, 1);
  return res.status(204).send();
});

app.delete("/medicamentos/:id", (req, res) => {
  const { id } = req.params;
  const medicamentoIndex = medicamentos.findIndex(
    (medicamento) => medicamento.id == id
  );
  if (medicamentoIndex < 0) {
    return res.status(400).json({ error: "Medicamento não encontrado" });
  }
  medicamentos.splice(medicamentoIndex, 1);
  return res.status(204).send();
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
