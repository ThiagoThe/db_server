import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 8080;

const farmacias = [
  {
    id: 1,
    razao_social: "Farmácia Central LTDA",
    cnpj: "12.345.678/0001-90",
    nome_fantasia: "Farmácia Central",
    email: "farmaciacentral@exemplo.com",
    telefone: "(00) 0000-0000",
    celular: "(00) 00000-0000",
    endereco: {
      cep: "00000-000",
      logradouro: "Rua dos Remédios",
      numero: "123",
      bairro: "Centro",
      cidade: "Florianópolis",
      estado: "SC",
      complemento: "Sala 1",
      latitude: -27.598,
      longitude: -48.558,
    },
  },
  {
    id: 2,
    razao_social: "Farmácia Popular ME",
    cnpj: "98.765.432/0001-21",
    nome_fantasia: "Farmácia Popular",
    email: "farmaciapopular@exemplo.com",
    telefone: "(00) 0000-0000",
    celular: "(00) 00000-0000",
    endereco: {
      cep: "11111-111",
      logradouro: "Avenida dos Medicamentos",
      numero: "456",
      bairro: "Jardim das Flores",
      cidade: "Florianópolis",
      estado: "SC",
      complemento: "",
      latitude: -27.59,
      longitude: -48.55,
    },
  },
  {
    id: 3,
    razao_social: "Drogaria da Gente S.A.",
    cnpj: "23.456.789/0001-54",
    nome_fantasia: "Drogaria da Gente",
    email: "drogariadagente@exemplo.com",
    telefone: "(00) 0000-0000",
    celular: "(00) 00000-0000",
    endereco: {
      cep: "22222-222",
      logradouro: "Praça dos Remédios",
      numero: "789",
      bairro: "Vila Industrial",
      cidade: "Florianópolis",
      estado: "SC",
      complemento: "Loja 2",
      latitude: -27.59,
      longitude: -48.558,
    },
  },
  {
    razao_social: "Farmacia do Povo",
    cnpj: "12.006.456/0001-69",
    nome_fantasia: "A farmácia",
    email: "farm@gmail.com",
    telefone: "(48)9999-9999",
    celular: "(48)9999-99999",
    endereco: {
      cidade: "Itajai",
      estado: "SC",
      logradouro: "Rua João Magalhães",
      bairro: "Cordeiros",
      numero: "220",
      complemento: "até 499/500",
      cep: "88310-080",
      latitude: -26.8906231,
      longitude: -48.6920156,
    },
    id: 4,
  },
  {
    razao_social: "Farmácia Registrada Canon",
    cnpj: "12.006.459/0001-99",
    nome_fantasia: "Farmácia Saúde Perfeita",
    email: "farm2@farm.com",
    telefone: "(49)33225698",
    celular: "(49)988635989",
    endereco: {
      cidade: "Lages",
      estado: "SC",
      logradouro: "Rua Jorge Neves Vieira",
      bairro: "São Luiz",
      numero: "100",
      complemento: "na esquina",
      cep: "88512-310",
      latitude: "-27.8307644",
      longitude: "-50.3411329",
    },
    id: 5,
  },
  {
    razao_social: "Farmácia Remédio Certo",
    cnpj: "12.120.365/0001-00",
    nome_fantasia: "Farmácia Remédio Certo",
    email: "farm3@farm.com",
    telefone: "(49)33456596",
    celular: "(49)988659630",
    endereco: {
      cidade: "Lages",
      estado: "SC",
      logradouro: "Avenida Marechal Floriano",
      bairro: "Centro",
      numero: "15",
      complemento: "frente havan",
      cep: "88501-103",
      latitude: "-27.8171307",
      longitude: "-50.3319869",
    },
    id: 6,
  },
];

const medicamentos = [
  {
    id: 1,
    nome: "Paracetamol",
    laboratorio: "EMS",
    dosagem: "500mg",
    descricao: "Analgésico e antitérmico",
    preco_unitario: 2.5,
    tipo: "Medicamento comum",
  },
  {
    id: 2,
    nome: "Amoxicilina",
    laboratorio: "Eurofarma",
    dosagem: "500mg",
    descricao: "Antibiótico",
    preco_unitario: 5.8,
    tipo: "Medicamento controlado",
  },
  {
    id: 3,
    nome: "Dipirona",
    laboratorio: "Biolab",
    dosagem: "1g",
    descricao: "Analgésico e antitérmico",
    preco_unitario: 3.2,
    tipo: "Medicamento comum",
  },
  {
    id: 4,
    nome: "Omeprazol",
    laboratorio: "Aché",
    dosagem: "20mg",
    descricao:
      "Inibidor da bomba de prótons para tratamento de úlceras e refluxo",
    tipo: "Medicamento comum",
    preco_unitario: 15.2,
  },
  {
    id: 5,
    nome: "Dorflex",
    laboratorio: "Sanofi",
    dosagem: "50mg + 35mg",
    descricao: "Analgésico e relaxante muscular",
    tipo: "Medicamento comum",
    preco_unitario: 8.9,
  },
];

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
