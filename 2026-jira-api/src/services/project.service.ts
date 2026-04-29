import { prisma } from "../lib/prisma.js";

export const createProject = async (data: {
  name: string;
  ownerId: string;
}) => {
  // check if user exists
  const user = await prisma.user.findUnique({
    where: { id: data.ownerId },
  });

  if (!user) {
    throw new Error("User not found");
  }

  return prisma.project.create({
    data,
  });
};
