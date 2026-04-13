import { PrismaClient } from "./generated/prisma/client.js";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

const adapter = new PrismaMariaDb({
  host: "localhost",
  port: 3306,
  user: process.env["MYSQL_USER"],
  password: process.env["MYSQL_PASSWORD"],
  database: process.env["DATABASE_NAME"],
  connectionLimit: 5,
});
const prisma = new PrismaClient({adapter});


export default prisma