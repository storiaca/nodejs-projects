import { Request, Response, NextFunction } from "express";
import { getErrorMessage } from "../util";

export default function errorHanlder(
  error: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  if (res.headersSent) {
    next(error);
    return;
  }

  res.status(500).json({
    error: {
      message: getErrorMessage(error) || "Internla Server Error",
    },
  });

  next(error);
}
