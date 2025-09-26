import { Request, Response } from "express";
import logger from "../utils/logger";

export function createUserHandler(req: Request, res: Response) {
  try {
    // const user = await; // call create user service
  } catch (e: unknown) {
    logger.error(e);
    const errorMessage = e instanceof Error ? e.message : "Unknown error";
    return res.status(409).send(errorMessage);
  }
}
