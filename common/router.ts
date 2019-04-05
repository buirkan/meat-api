import * as restify from 'restify'

//Criando classe abstrata para que a cada recurso que tivermos, herdar 
//dessa classe configurando as rotas necessárias, criando uma abstração em cima das rotas
export abstract class Router {
  //parameter: recebe a instância do servidor restify
  abstract applyRoutes(application: restify.Server):any
}