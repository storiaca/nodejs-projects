import {createServer} from "./server.js"
import config from "./config.js";
const server = createServer()

server.listen(config.port, () => {
  console.log(`api runnig on port ${config.port}`);
})
