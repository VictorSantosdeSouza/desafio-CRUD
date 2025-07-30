const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Cadastro de Empresas',
      version: '1.0.0',
      description: 'Uma API para realizar operações CRUD em um cadastro de empresas.',
    },
    servers: [{ url: 'http://localhost:3000' }],
    tags: [
      {
        name: 'Empresas',
        description: 'API para gerenciamento de empresas',
      }
    ],
    components: {
        schemas: {
            Empresa: {
                type: 'object',
                properties: {
                    nomeEmpresa: { type: 'string' },
                    cnpj: { type: 'string' },
                    endereco: { type: 'string' },
                    telefone: { type: 'string' },
                    id: { type: 'string' }
                }
            }
        }
    }
  },
  // O caminho para os arquivos com as rotas continua o mesmo
  apis: ['./routes/*.js'],
};

module.exports = swaggerOptions;