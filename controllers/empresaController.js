const Empresa = require('../models/empresaModel');

exports.listarEmpresas = async (req, res) => {
    try {
        const empresas = await Empresa.find();
        res.json(empresas);
    } catch (err) {
        res.status(500).send('Erro ao buscar empresas.');
    }
};

exports.buscarEmpresaPorId = async (req, res) => {
    try {
        const empresa = await Empresa.findById(req.params.id);
        if (!empresa) return res.status(404).send('Empresa não encontrada.');
        res.json(empresa);
    } catch (err) {
        res.status(500).send('Erro ao buscar empresa.');
    }
};

exports.criarEmpresa = async (req, res) => {
    try {
        const novaEmpresa = new Empresa(req.body);
        await novaEmpresa.save();
        res.status(201).json(novaEmpresa);
    } catch (err) {
        res.status(400).send('Erro ao criar empresa.');
    }
};

exports.atualizarEmpresa = async (req, res) => {
    try {
        const empresa = await Empresa.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!empresa) return res.status(404).send('Empresa não encontrada.');
        res.json(empresa);
    } catch (err) {
        res.status(400).send('Erro ao atualizar empresa.');
    }
};

exports.deletarEmpresa = async (req, res) => {
    try {
        const empresa = await Empresa.findByIdAndDelete(req.params.id);
        if (!empresa) return res.status(404).send('Empresa não encontrada.');
        res.status(204).send();
    } catch (err) {
        res.status(500).send('Erro ao deletar empresa.');
    }
};
