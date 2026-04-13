import { Request, Response } from "express";
import prisma from "../prisma-client.js";
import EntityNotFoundError from "../errors/EntityNotFoundError.js";

export const listProjects = async (req: Request, res: Response) => {
  const projects = await prisma.project.findMany();
  res.status(200).json({ projects });
};

export const getProject = async (req: Request, res: Response) => {
  const project = await prisma.project.findUnique({
    where: {
      id: req.params.id as string
    }
  })

  if(!project) {
    throw new EntityNotFoundError({
      message: "Project not found",
      statusCode: 404,
      code: "ERR_NF"
    })
  }
  res.status(200).json({ project });
};

export const listProjectTasks = async(req: Request, res: Response) => {
  const tasks = await prisma.task.findMany({
    where: {
      project_id: req.params.id as string
    }
  })
  res.status(200).json({tasks});
};
