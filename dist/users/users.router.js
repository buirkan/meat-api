"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("../common/router");
const users_model_1 = require("../users/users.model");
class UsersRouter extends router_1.Router {
    applyRoutes(application) {
        application.get('/users', (require, response, next) => {
            users_model_1.User.findAll().then((user) => {
                response.json({
                    method: require.method,
                    users: user
                });
            });
            return next();
        });
        application.get('/users/:id', (request, response, next) => {
            users_model_1.User.findById(request.params.id).then(userWithId => {
                if (userWithId) {
                    response.json(userWithId);
                    return next();
                }
                else {
                    response.send(404);
                    return next();
                }
            });
        });
    }
}
//Exportando objeto de user router para o uso do router na instância
//do servidor ao chamar o método bootstrap, configurando as rotas para
//cada módulo de uma maneira abstrata
exports.RouterUsers = new UsersRouter();
