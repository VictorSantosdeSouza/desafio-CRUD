const express = require('express');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerOptions = require('./config/swagger');
const empresaRoutes = require('./routes/empresaRoutes');
require('dotenv').config(); // ← Carrega variáveis do .env

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());

// Conexão com MongoDB usando variável de ambiente
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
    .then(() => console.log('Conectado ao MongoDB!'))
    .catch(err => console.error('Erro ao conectar:', err));

// Configuração do Swagger
const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Rotas
app.use('/empresas', empresaRoutes);

// Iniciar o Servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    console.log(`Documentação da API: http://localhost:${PORT}/api-docs`);
});
