"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    //dando a possibilidade de configuração da porta de conexão através da variável de ambiente,
    //ou por default, a porta 3000
    server: {
        port: process.env.SERVER_PORT || 3000
    }
};
