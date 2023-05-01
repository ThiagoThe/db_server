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
  {
    razao_social: "Farmácia Irmãos",
    cnpj: "31.009.006/0001-87",
    nome_fantasia: "Farmácia Remédio Barato",
    email: "farm4@farm.com",
    telefone: "(47)33225899",
    celular: "(47)999786532",
    endereco: {
      cidade: "Itajaí",
      estado: "SC",
      logradouro: "Avenida Coronel Marcos Konder",
      bairro: "Centro",
      numero: "900",
      complemento: "av. principal",
      cep: "88301-300",
      latitude: "-26.9065189",
      longitude: "-48.6621897",
    },
    id: 7,
  },
  {
    razao_social: "Farmácia Imperial",
    cnpj: "12009512000159",
    nome_fantasia: "Farmácia Imperial",
    email: "farm@gmail.com",
    telefone: "(48)9999-9999",
    celular: "(48)9999-99999",
    endereco: {
      cidade: "Joinville",
      estado: "SC",
      logradouro: "Rua Doutor João Colin",
      bairro: "América",
      numero: "980",
      complemento: "de 692 a 1438 - lado par",
      cep: "89204-000",
      latitude: "-26.2907594",
      longitude: "-48.8484029",
    },
    id: 8,
  },
  {
    razao_social: "Farmácia Jo",
    cnpj: "12006897000187",
    nome_fantasia: "Farmácia Pague Mais",
    email: "farm@gmail.com",
    telefone: "(48)9999-9999",
    celular: "(48)9999-99999",
    endereco: {
      cidade: "Joinville",
      estado: "SC",
      logradouro: "Avenida Getúlio Vargas",
      bairro: "Bucarein",
      numero: "87",
      complemento: "até 743 - lado ímpar",
      cep: "89202-205",
      latitude: "-26.3094405",
      longitude: "-48.8457139",
    },
    id: 9,
  },
  {
    razao_social: "Farmácia João Martins",
    cnpj: "12.009.698/0001-00",
    nome_fantasia: "Farmácia Preço Alto",
    email: "farm@gmail.com",
    telefone: "(48)9999-9999",
    celular: "(48)9999-99999",
    endereco: {
      cidade: "São José",
      estado: "SC",
      logradouro: "Avenida Lédio João Martins",
      bairro: "Kobrasol",
      numero: "45",
      complemento: "até 720 - lado par",
      cep: "88101-100",
      latitude: "-27.5985594",
      longitude: "-48.6146161",
    },
    id: 10,
  },
  {
    razao_social: "Farmácia João Martins",
    cnpj: "12.009.698/0001-00",
    nome_fantasia: "Farmácia Preço Alto",
    email: "farm@gmail.com",
    telefone: "(48)9999-9999",
    celular: "(48)9999-99999",
    endereco: {
      cidade: "São José",
      estado: "SC",
      logradouro: "Avenida Lédio João Martins",
      bairro: "Kobrasol",
      numero: "89",
      complemento: "até 720 - lado par",
      cep: "88101-100",
      latitude: "-27.5985594",
      longitude: "-48.6146161",
    },
    id: 11,
  },
  {
    razao_social: "Farmácia Nova Saúde",
    cnpj: "14.789.986/001-78",
    nome_fantasia: "Farmácia do Trabalhador",
    email: "farm@gmail.com",
    telefone: "(48)9999-9999",
    celular: "(48)9999-99999",
    endereco: {
      cidade: "Florianópolis",
      estado: "SC",
      logradouro: "Rua Blides Neves Segui",
      bairro: "Coloninha",
      numero: "48",
      complemento: "de 170/171 ao fim",
      cep: "88090-470",
      latitude: "-27.5898435",
      longitude: "-48.5965629",
    },
    id: 12,
  },
  {
    razao_social: "Farmácia Droga da Raia",
    cnpj: "20.009.659/0001-60",
    nome_fantasia: "Farmácia Só Raia",
    email: "drf@farm.com",
    telefone: "(49)3225-8963",
    celular: "(49)99999-9669",
    endereco: {
      cidade: "Chapecó",
      estado: "SC",
      logradouro: "Avenida Getúlio Dorneles Vargas - S",
      bairro: "Centro",
      numero: "490",
      complemento: "até 490 - lado par",
      cep: "89802-001",
      latitude: "-27.1077684",
      longitude: "-52.6138785",
    },
    id: 13,
  },
  {
    razao_social: "Farmácia Povo Saudável",
    cnpj: "60.123.589/0001-47",
    nome_fantasia: "Farmácia do Povo Saudável e Feliz",
    email: "farm@gmail.com",
    telefone: "(59) 3223-5896",
    celular: "(59) 99999-9999",
    endereco: {
      cidade: "Iguatu",
      estado: "CE",
      logradouro: "Rua Agner Gomes de Araújo",
      bairro: "Esplanada II",
      numero: "598",
      complemento: "sala 50",
      cep: "63505-020",
      latitude: "-6.3701649",
      longitude: "-39.3177023",
    },
    id: 14,
  },
  {
    razao_social: "Farmácia do SBT",
    cnpj: "89.658.999/0001-47",
    nome_fantasia: "Farmácia São Paulo",
    email: "farm@gmail.com",
    telefone: "(21) 4899-9897",
    celular: "(21) 99876-5646",
    endereco: {
      cidade: "São Paulo",
      estado: "SP",
      logradouro: "Rua Capitão Salomão",
      bairro: "Centro",
      numero: "89",
      complemento: "Na esquina",
      cep: "01034-020",
      latitude: "-23.5429175",
      longitude: "-46.6376981",
    },
    id: 15,
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
  {
    id: 6,
    nome: "Allegra",
    laboratorio: "Sanofi",
    dosagem: "180mg",
    descricao: "Antialérgico",
    tipo: "Medicamento comum",
    preco_unitario: 25.9,
  },
  {
    id: 7,
    nome: "Rivotril",
    laboratorio: "Roche",
    dosagem: "2mg",
    descricao: "Ansiolítico e anticonvulsivante",
    tipo: "Medicamento controlado",
    preco_unitario: 32.5,
  },
  {
    id: 8,
    nome: "AAS",
    laboratorio: "Bayer",
    dosagem: "500mg",
    descricao: "Analgésico, antitérmico e anti-inflamatório",
    tipo: "Medicamento comum",
    preco_unitario: 5.8,
  },
  {
    id: 9,
    nome: "Fluoxetina",
    laboratorio: "EMS",
    dosagem: "20mg",
    descricao: "Antidepressivo",
    tipo: "Medicamento controlado",
    preco_unitario: 10.7,
  },
  {
    nome: "Penicilina ",
    laboratorio: "EuroFarm",
    dosagem: "1 ao dia",
    descricao:
      "Antibiótico do grupo dos betalactâmicos  utilizados no tratamento de infecções causadas por bactérias sensíveis.",
    preco_unitario: "45.60",
    tipo: "Medicamento controlado",
    id: 10,
  },
  {
    nome: "Loratadina",
    laboratorio: "EMS",
    dosagem: "1 ao dia",
    descricao: "Antialérgico",
    preco_unitario: "10.00",
    tipo: "Medicamento comum",
    id: 11,
  },
  {
    nome: "Aspirina 500mg",
    laboratorio: "Bayer",
    dosagem: "3 vezes ao dia",
    descricao:
      "O comprimido de Aspirina® (ácido acetilsalicílico) é um medicamento para dores de cabeça de intensidade leve a moderada.",
    preco_unitario: "15.90",
    tipo: "Medicamento comum",
    id: 12,
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
