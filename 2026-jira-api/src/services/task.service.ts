import { prisma } from "../lib/prisma.js";

// export const createTask = async (data: {
//   title: string;
//   description?: string;
//   projectId: string;
//   assigneeId?: string;
// }) => {
//   return prisma.task.create({
//     data,
//   });
// };

// export const getTasks = async (filters: {
//   status?: string;
//   projectId?: string;
//   assigneeId?: string;
// }) => {
//   return prisma.task.findMany({
//     where: {
//       status: filters.status as any,
//       projectId: filters.projectId,
//       assigneeId: filters.assigneeId,
//       deletedAt: null,
//     },
//     include: {
//       assignee: true,
//       project: true,
//     },
//   });
// };
