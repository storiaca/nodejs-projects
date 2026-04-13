import { Request, Response, NextFunction } from "express";
import EntityNotFoundError from "../errors/EntityNotFoundError.js";
import prisma from "../prisma-client.js";

export const listTasks = async (req: Request, res: Response) => {
  const tasks = await prisma.task.findMany();
  res.status(200).json({ tasks });
};

export const getTask = async (req: Request, res: Response) => {
  
  const task = await prisma.task.findUnique({
    where: {
      id: req.params.id as string
    }
  })

  if(!task) {
    throw new EntityNotFoundError({
    message: "Task not found",
    statusCode: 404,
    code: "ERR_NF"
  });
  }
  res.status(200).json({ task });
};
