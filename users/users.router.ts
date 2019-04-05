import { Router } from "../common/router"
import * as restify from 'restify'
import { User } from "../users/users.model"

class UsersRouter extends Router{
  applyRoutes(application: restify.Server){
    application.get('/users', (require, response, next) => {
      User.findAll().then((user) => {
        response.json({
          method: require.method,
          users: user
        })
      })
      return next()
    })

    application.get('/users/:id', (request, response, next) => {
      User.findById(request.params.id).then(userWithId => {
        if(userWithId){
          response.json(userWithId)
          return next()
        } else {
          response.send(404)
          return next()
        }
      })
    })

  }
}
//Exportando objeto de user router para o uso do router na instância
//do servidor ao chamar o método bootstrap, configurando as rotas para
//cada módulo de uma maneira abstrata
export const RouterUsers = new UsersRouter()