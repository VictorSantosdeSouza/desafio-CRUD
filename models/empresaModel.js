const mongoose = require('mongoose');

const empresaSchema = new mongoose.Schema({
    nomeEmpresa: String,
    cnpj: String,
    endereco: String,
    telefone: String
});

const Empresa = mongoose.model('Empresa', empresaSchema);

module.exports = Empresa;