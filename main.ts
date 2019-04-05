import { Server } from "./server/server"
import { RouterUsers } from "./users/users.router"

const server = new Server()

server.bootstrap([RouterUsers]).then((server)=> {
  console.log('Server is listening on', server.application.address())
}).catch((error)=>{
  console.error('Server failed on start.', error)
  process.exit(1) //1 - Saída anormal
})