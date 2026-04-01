import {createServer} from "./server"

const server = createServer()

server.listen(3200, () => {
  console.log(`api runnig on port 3200`);
})