import { Request, Response } from "express";
import logger from "../utils/logger";
import { createUser } from "../service/user.service";

export async function createUserHandler(req: Request, res: Response) {
  try {
    const user = await createUser(req.body);
  } catch (e: unknown) {
    logger.error(e);
    const errorMessage = e instanceof Error ? e.message : "Unknown error";
    return res.status(409).send(errorMessage);
  }
}
