import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import "dotenv/config";
const adapter = new PrismaMariaDb({
  host: "localhost",
  port: 3306,
  user: process.env["MYSQL_USER"],
  password: process.env["MYSQL_PASSWORD"],
  database: process.env["DATABASE_NAME"],
  connectionLimit: 10,
});

const globalForPrisma = globalThis as unknown as {
  prisma?: PrismaClient;
};

console.log({
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  db: process.env.DATABASE_NAME,
});

export const prisma = globalForPrisma.prisma ?? new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
