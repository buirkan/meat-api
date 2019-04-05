"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server/server");
const users_router_1 = require("./users/users.router");
const server = new server_1.Server();
server.bootstrap([users_router_1.RouterUsers]).then((server) => {
    console.log('Server is listening on', server.application.address());
}).catch((error) => {
    console.error('Server failed on start.', error);
    process.exit(1); //1 - Saída anormal
});
