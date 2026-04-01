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

// Coleção 1: [nome]
db.hospede.drop()
db.reserva.drop()

// --------------------------------------------------
// 2. INSERÇÃO DE DADOS
// --------------------------------------------------

// Coleção 1: [nome]
db.hospede.insertMany([
    // mínimo 15 documentos
])

// Coleção 2: [nome]
db.reserva.insertMany([
    // quantidade adequada
])

// --------------------------------------------------
// 3. CONSULTAS COM OPERADORES DE COMPARAÇÃO
// --------------------------------------------------

// 3.1 $gt - [explicação]
db.hospede.find({ campo: { $gt: valor } }).pretty()

// 3.2 $lt - [explicação]
db.hospede.find({ campo: { $lt: valor } }).pretty()

// 3.3 $gte - [explicação]
db.hospede.find({ campo: { $gte: valor } }).pretty()

// 3.4 $lte - [explicação]
db.hospede.find({ campo: { $lte: valor } }).pretty()

// 3.5 $in - [explicação]
db.hospede.find({ campo: { $in: [valor1, valor2] } }).pretty()

// 3.6 $ne - [explicação]
db.hospede.find({ campo: { $ne: valor } }).pretty()

// --------------------------------------------------
// 4. CONSULTAS COM OPERADORES LÓGICOS
// --------------------------------------------------

// 4.1 $and (implícito) - [explicação]
db.hospede.find({ 
    campo1: valor1, 
    campo2: valor2 
}).pretty()

// 4.2 $and (explícito) - [explicação]
db.hospede.find({ 
    $and: [
        { campo1: valor1 },
        { campo2: valor2 }
    ] 
}).pretty()

// 4.3 $or - [explicação]
db.hospede.find({ 
    $or: [
        { campo1: valor1 },
        { campo2: valor2 }
    ] 
}).pretty()

// 4.4 $nor - [explicação]
db.hospede.find({ 
    $nor: [
        { campo1: valor1 },
        { campo2: valor2 }
    ] 
}).pretty()

// 4.5 $not - [explicação]
db.hospede.find({ 
    campo: { $not: { $gt: valor } }
}).pretty()

// 4.6 Combinação ($and + $or) - [explicação]
db.hospede.find({
    $and: [
        { campo1: valor1 },
        { $or: [
            { campo2: valor2 },
            { campo3: valor3 }
        ]}
    ]
}).pretty()

// ==================================================
// FIM DO TRABALHO
// ==================================================