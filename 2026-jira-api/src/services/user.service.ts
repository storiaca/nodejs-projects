import { prisma } from "../lib/prisma.js";

export const createUser = async (data: { email: string; name: string }) => {
  return prisma.user.create({
    data,
  });
};
