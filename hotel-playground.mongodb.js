// ==================================================
// TRABALHO MONGODB - CONSULTAS AVANÇADAS
// ==================================================
// TEMA: Hotel
// GRUPO: 
// - Pedro Henrique Coelho Lovatti
// - Gabriel Pereira Goes
// - Eduardo Sammy Rovere  Kunimatsu
// DATA: [data de entrega]
// ==================================================

// --------------------------------------------------
// 1. CRIAÇÃO DO BANCO E COLEÇÕES
// --------------------------------------------------
use('hotel')

// --------------------------------------------------
// 1.1 EXCLUSÃO DE COLEÇÕES - PARA EXECUÇÃO LIMPA
// --------------------------------------------------

// Coleção 1: Hospede
db.hospede.drop()
// Coleção 2: Reserva
db.reserva.drop()

// --------------------------------------------------
// 2. INSERÇÃO DE DADOS
// --------------------------------------------------

// Coleção 1: Hospede
db.hospede.insertMany([
  {
    nome: "Mariana Oliveira",
    idade: 28,
    cpf: "84736291011",
    genero: false,
  },
  {
    nome: "Carlos Eduardo Lima",
    idade: 45,
    cpf: "19384756200",
    genero: true,
  },
  {
    nome: "Fernanda Alves",
    idade: 34,
    cpf: "56473829102",
    genero: false,
  },
  {
    nome: "Ricardo Mendes",
    idade: 51,
    cpf: "91827364509",
    genero: true,
  },
  {
    nome: "Juliana Rocha",
    idade: 23,
    cpf: "10293847566",
    genero: false,
  },
  {
    nome: "Bruno Carvalho",
    idade: 39,
    cpf: "67584930218",
    genero: true,
  },
  {
    nome: "Patricia Gomes",
    idade: 41,
    cpf: "56473820199",
    genero: false,
  },
  {
    nome: "Lucas Fernandes",
    idade: 27,
    cpf: "91827364588",
    genero: true,
  },
  {
    nome: "Aline Ribeiro",
    idade: 30,
    cpf: "37482910567",
    genero: false,
  },
  {
    nome: "Diego Martins",
    idade: 36,
    cpf: "82736491023",
    genero: true,
  },
  {
    nome: "Camila Nunes",
    idade: 29,
    cpf: "56473829911",
    genero: false,
  },
  {
    nome: "Rafael Teixeira",
    idade: 44,
    cpf: "91827360012",
    genero: true,
  },
  {
    nome: "Larissa Pinto",
    idade: 26,
    cpf: "10293840055",
    genero: false,
  },
  {
    nome: "Felipe Batista",
    idade: 38,
    cpf: "67584939987",
    genero: true,
  },
  {
    nome: "Renata Duarte",
    idade: 33,
    cpf: "84736295544",
    genero: false,
  }
])

// Coleção 2: Reserva
db.reserva.insertMany([
  {
    quarto: 101,
    hospede_cpf: "84736291011",
    data_inicio: new Date("2026-07-01"),
    data_fim: new Date("2026-07-05"),
    valor_total: 1500,
    servicos_adicionais: ["café da manhã", "estacionamento"]
  },
  {
    quarto: 102,
    hospede_cpf: "19384756200",
    data_inicio: new Date("2026-07-10"),
    data_fim: new Date("2026-07-15"),
    valor_total: 2000,
    servicos_adicionais: ["wi-fi premium"]
  },
  {
    quarto: 201,
    hospede_cpf: "56473829102",
    data_inicio: new Date("2026-07-12"),
    data_fim: new Date("2026-07-14"),
    valor_total: 800,
    servicos_adicionais: ["café da manhã"]
  },
  {
    quarto: 305,
    hospede_cpf: "91827364509",
    data_inicio: new Date("2026-08-01"),
    data_fim: new Date("2026-08-10"),
    valor_total: 4500,
    servicos_adicionais: ["frigobar", "lavanderia"]
  },
  {
    quarto: 104,
    hospede_cpf: "10293847566",
    data_inicio: new Date("2026-08-05"),
    data_fim: new Date("2026-08-07"),
    valor_total: 950,
    servicos_adicionais: ["estacionamento"]
  },
  {
    quarto: 202,
    hospede_cpf: "67584930218",
    data_inicio: new Date("2026-08-15"),
    data_fim: new Date("2026-08-20"),
    valor_total: 2200,
    servicos_adicionais: ["meia pensão"]
  },
  {
    quarto: 401,
    hospede_cpf: "56473820199",
    data_inicio: new Date("2026-09-01"),
    data_fim: new Date("2026-09-03"),
    valor_total: 1200,
    servicos_adicionais: ["spa", "café da manhã"]
  },
  {
    quarto: 105,
    hospede_cpf: "91827364588",
    data_inicio: new Date("2026-09-10"),
    data_fim: new Date("2026-09-12"),
    valor_total: 700,
    servicos_adicionais: []
  },
  {
    quarto: 205,
    hospede_cpf: "37482910567",
    data_inicio: new Date("2026-10-12"),
    data_fim: new Date("2026-10-15"),
    valor_total: 1800,
    servicos_adicionais: ["estacionamento"]
  },
  {
    quarto: 301,
    hospede_cpf: "82736491023",
    data_inicio: new Date("2026-10-20"),
    data_fim: new Date("2026-10-25"),
    valor_total: 3000,
    servicos_adicionais: ["aluguel de carro"]
  },
  {
    quarto: 108,
    hospede_cpf: "56473829911",
    data_inicio: new Date("2026-11-01"),
    data_fim: new Date("2026-11-05"),
    valor_total: 1600,
    servicos_adicionais: ["café da manhã"]
  },
  {
    quarto: 210,
    hospede_cpf: "91827360012",
    data_inicio: new Date("2026-11-15"),
    data_fim: new Date("2026-11-18"),
    valor_total: 1350,
    servicos_adicionais: ["wi-fi premium", "frigobar"]
  },
  {
    quarto: 303,
    hospede_cpf: "10293840055",
    data_inicio: new Date("2026-12-20"),
    data_fim: new Date("2026-12-27"),
    valor_total: 5000,
    servicos_adicionais: ["ceia de natal", "estacionamento"]
  },
  {
    quarto: 109,
    hospede_cpf: "67584939987",
    data_inicio: new Date("2026-10-14"),
    data_fim: new Date("2026-11-02"),
    valor_total: 6500,
    servicos_adicionais: ["festa de reveillon", "open bar"]
  },
  {
    quarto: 405,
    hospede_cpf: "84736295544",
    data_inicio: new Date("2025-01-10"),
    data_fim: new Date("2025-01-15"),
    valor_total: 2500,
    servicos_adicionais: ["guia turístico"]
  }
])

// --------------------------------------------------
// 3. CONSULTAS COM OPERADORES DE COMPARAÇÃO
// --------------------------------------------------

// 3.1 $gt - (Greater Than) Serve para procurar por um valor maior que ao solicitado 
db.hospede.find({ idade: { $gt: 18 } }).pretty()

// 3.2 $lt - (Less Than) Serve para procurar por um valor menor que o valor solicitado
db.hospede.find({ idade: { $lt: 18 } }).pretty()

// 3.3 $gte - (Greater Than or Equal) Serve para procurar por um valor maior ou igual que o valor solicitado
db.reserva.find({ valor_total: { $gte: 3000 } }).pretty()

// 3.4 $lte - (Less Than or Equal) Serve para procurar por um valor menor ou igual ao valor solicitado
db.reserva.find({ valor_total: { $lte: 6000 } }).pretty()

// 3.5 $in - (In array) Serve para procurar por um valor dentro de uma Array
db.reserva.find({ servicos_adicionais: { $in: ["wi-fi premium", "frigobar"] } } ).pretty()

// 3.6 $ne - (Not Equal) Serve para procurar valores diferentes do especificado
db.hospede.find({ genero: { $ne: false } }).pretty()

// 3.7 $eq - (Equal) Serve para procurar valores iguais ao especificado
db.hospede.find({ genero: { $eq: true } }).pretty()

// --------------------------------------------------
// 4. CONSULTAS COM OPERADORES LÓGICOS
// --------------------------------------------------

// 4.1 $and (implícito) - Serve para combinar multiplas condições que devem estar verdadeiras de forma simples
db.hospede.find({ 
    genero: false, 
    idade: { $gte: 18 } 
}).pretty()

// 4.2 $and (explícito) - Serve para combinar multiplas condições que devem estar verdadeiras de forma mais complexa, podendo ser mais exata em sua posição de objeto
db.hospede.find({ 
    $and: [
        { genero: true },
        { idade: { $gte: 40 } }
    ] 
}).pretty()

// 4.3 $or - Serve para combinar multiplas condições onde pelo menos uma delas devem ser verdadeira.
db.reserva.find({ 
    $or: [
        { servicos_adicionais: "estacionamento" },
        { servicos_adicionais: "aluguel de carro" }
    ] 
}).pretty()

// 4.4 $nor - Serve para combinar multiplas condições onde nenhuma delas deve ser verdadeira.
db.reserva.find({ 
    $nor: [
        { servicos_adicionais: "frigobar" },
        { servicos_adicionais: "open bar" }
    ] 
}).pretty()

// 4.5 $not - Serve para negar uma unica condição para que ela não seja verdadeira.
db.reserva.find({ 
    valor_total: { $not: { $lte: 1000 } }
}).pretty()

// 4.6 Combinação ($and + $or) - Combinando o and e o or para criar uma consulta mais complexa, onde verifica uma reserva com algum serviço alimenticio dentro da data de outubro ou novembro.
db.reserva.find({
    $and: [
      { data_inicio: { $gt: new Date("2026-10-01") } },
      { data_fim: { $lt: new Date("2026-11-31") } },
      { $or : [
          { servicos_adicionais: "café da manhã" },
          { servicos_adicionais: "ceia de natal" },
          { servicos_adicionais: "festa de reveillon" },
          { servicos_adicionais: "open bar" },
        ] 
      }
    ]
}).pretty()

// ==================================================
// FIM DO TRABALHO
// ==================================================
