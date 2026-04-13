import { PrismaClient } from "./generated/prisma/client"

// 1. Declare a global variable to store the Prisma instance
declare global {
  let prisma: PrismaClient | undefined
}

// 2. Initialize the client, reusing the global instance if it exists
// const prisma = global.prisma || new PrismaClient({
//   log: ['query', 'info', 'warn', 'error'], // Optional: helpful for debugging MySQL queries
// })

// 3. In development mode, save the client instance to the global variable
// This prevents creating a new instance every time you save a file and trigger a hot reload
if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma
}

export default prisma