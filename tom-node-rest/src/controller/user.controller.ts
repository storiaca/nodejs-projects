import { Request, Response } from "express";
import { omit } from "loadsh";
import logger from "../utils/logger";
import { createUser } from "../service/user.service";
import { CreateUserInput } from "../schema/user.schema";

export async function createUserHandler(
  req: Request<{}, {}, CreateUserInput["body"]>,
  res: Response
) {
  try {
    const user = await createUser(req.body);
    return res.send(omit(user.toJSON(), "password"));
  } catch (e: unknown) {
    logger.error(e);
    const errorMessage = e instanceof Error ? e.message : "Unknown error";
    return res.status(409).send(errorMessage);
  }
}
