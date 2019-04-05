"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const restify = require("restify");
const environment_1 = require("../common/environment");
class Server {
    initRoutes(routers = []) {
        return new Promise((resolve, reject) => {
            try {
                this.application = restify.createServer({
                    name: 'meat-api server',
                    version: '1.0.0'
                });
                //parse de querys https para objetos
                this.application.use(restify.plugins.queryParser());
                //routes: Agora para cada recurso será criada uma classe que irá herdar da 
                //classe Router e irá aplicar as rotas de cada recurso
                routers.forEach((route) => {
                    route.applyRoutes(this.application);
                });
                this.application.listen(environment_1.environment.server.port, () => {
                    resolve(this.application);
                });
                // this.application.get('/info', [
                //   (req, res, next)=>{
                //     let error: any
                //     //filtrando requisição para IE7
                //     if(req.userAgent() && req.userAgent().includes('MSIE 7.0')){
                //       //res.status(400) //bad request
                //       //res.json({ message: 'Please, upgrade your browser!'})
                //       error = new Error()
                //       error.statusCode = 400
                //       error.message = 'Please, upgrade your browser'
                //       return next(error)
                //     }
                //     return next()
                // },(req, res, next)=>{
                //   // res.contentType = 'application/json'
                //   // res.status(400)
                //   // res.send({message: 'hello'})
                //   //setando o header da requisição de uma maneira mais tradicional
                //   // res.setHeader('Content-Type', 'application/json')
                //   /* na prática:
                //     // res.contentType = 'application/json'
                //     // res.send({message: ''}) 
                //   */
                //   res.json({
                //     browser: req.userAgent(), //retornando o browser da requisição
                //     method: req.method, //retornando qual o método http que está sendo utilizado
                //     url: req.href(), //retornando a url da requisição
                //     path: req.path(), //retornando o caminho da rota
                //     query: req.query //retornando os parâmetros da url
                //   })
                //   //na documentação do restify, se recomenda retornar o campo 'next' sempre no final da função para indicar que foi terminada a execução do método
                //   return next()
                // }])
                // this.application.get('/', (req, res, next)=>{
                //   res.send('Access the route /info please')
                //   return next()
                // })
                //* A callback passada para o método listen(port, ()=>{}) não é retornado o erro,
                // é necessário especificar o evento .on('error') para então tratar o erro ocorrido.
                //capturando evento da falha de reserva da porta de conexão
                // this.application.on('error', (err) => {
                //   reject(err)
                // })
            }
            catch (error) {
                console.error("InitRoutes Error: ", error);
                reject(error);
            }
        });
    }
    //configurando no método bootstrap() para receber um array de {Router}, fazendo com que
    //o servidor chame o método Router.applyRoutes() para que cada Router aplique as suas 
    //rotas individualmente
    bootstrap(routers = []) {
        return __awaiter(this, void 0, void 0, function* () {
            //Encapsulando métodos para configurações/inicializações do servidor
            routers.forEach((item) => {
                console.log('Route: ', item);
            });
            return this.initRoutes(routers).then(() => this);
        });
    }
}
exports.Server = Server;
