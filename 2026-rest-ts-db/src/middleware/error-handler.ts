import { Request, Response, NextFunction } from "express";
import config from "../config.js";
import { getErrorMessage } from "../utils.js";
import CustomError from "../errors/CustomError.js";
import { UnauthorizedError } from "express-oauth2-jwt-bearer";

export default function errorHandler(
  error: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  if (res.headersSent || config.debug) {
    next(error);
    return;
  }

  if (error instanceof CustomError) {
    res.status(error.statusCode).json({
      error: {
        message: error.message,
        code: error.code,
      },
    });
    return;
  }

  if (error instanceof UnauthorizedError) {
    res.status(error.statusCode).json({
      error: {
        message: error.message,
        code: "code" in error ? error.code : "ERR_AUTH",
      },
    });
    return;
  }

  res.status(500).json({
    error: {
      message:
        getErrorMessage(error) ||
        "An error occured. Please view logs fot more details",
    },
  });
}
