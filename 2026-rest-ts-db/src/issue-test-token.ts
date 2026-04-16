import jwt from "jsonwebtoken";
import config from "./config.js";

const payload = {
  sub: "9faf87ac-38a5-41e6-be4c-43b58f8d46ce"
}

const token = jwt.sign(payload, config.appSecret, {
  expiresIn: "7d",
  issuer: "task-manager-app"
})

console.log(token);
