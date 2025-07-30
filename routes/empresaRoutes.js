const express = require('express');
const router = express.Router();
const empresaController = require('../controllers/empresaController');

/**
 * @swagger
 * tags:
 *   - name: Empresas
 *     description: API para gerenciamento de empresas
 */

/**
 * @swagger
 * /empresas:
 *   get:
 *     summary: Retorna a lista de todas as empresas
 *     tags: [Empresas]
 *     responses:
 *       200:
 *         description: A lista de empresas.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Empresa'
 */
router.get('/', empresaController.listarEmpresas);

/**
 * @swagger
 * /empresas/{id}:
 *   get:
 *     summary: Retorna uma única empresa pelo ID
 *     tags: [Empresas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: O ID da empresa.
 *     responses:
 *       200:
 *         description: Os dados da empresa.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Empresa'
 *       404:
 *         description: Empresa não encontrada.
 */
router.get('/:id', empresaController.buscarEmpresaPorId);

/**
 * @swagger
 * /empresas:
 *   post:
 *     summary: Cria uma nova empresa
 *     tags: [Empresas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Empresa'
 *     responses:
 *       201:
 *         description: Empresa criada com sucesso.
 *       400:
 *         description: Erro ao criar empresa.
 */
router.post('/', empresaController.criarEmpresa);

/**
 * @swagger
 * /empresas/{id}:
 *   put:
 *     summary: Atualiza uma empresa existente
 *     tags: [Empresas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: O ID da empresa a ser atualizada.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Empresa'
 *     responses:
 *       200:
 *         description: Empresa atualizada com sucesso.
 *       404:
 *         description: Empresa não encontrada.
 */
router.put('/:id', empresaController.atualizarEmpresa);

/**
 * @swagger
 * /empresas/{id}:
 *   delete:
 *     summary: Deleta uma empresa
 *     tags: [Empresas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: O ID da empresa a ser deletada.
 *     responses:
 *       204:
 *         description: Empresa deletada com sucesso.
 *       404:
 *         description: Empresa não encontrada.
 */
router.delete('/:id', empresaController.deletarEmpresa);

module.exports = router;
