import type { ErrorRequestHandler, RequestHandler, Response } from "express";
import { ZodError } from "zod";
import { Prisma } from "../generated/prisma/client.js";
import { AppError } from "../lib/errors.js";

const sendError = (
  res: Response,
  status: number,
  message: string,
  details?: unknown,
) => {
  res.status(status).json({ error: { message, details } });
};

export const notFoundHandler: RequestHandler = (req, res) => {
  sendError(res, 404, `Route ${req.method} ${req.originalUrl} not found`);
};

export const errorHandler: ErrorRequestHandler = (err, req, res, _next) => {
  // 1. Zod validation errors -> 400
  if (err instanceof ZodError) {
    const details = err.issues.map((issue) => ({
      field: issue.path.join("."),
      message: issue.message,
    }));
    return sendError(res, 400, "Validation failed", details);
  }

  // 2. Our own errors (notFound, forbidden...)
  if (err instanceof AppError) {
    return sendError(res, err.statusCode, err.message, err.details);
  }

  // 3. Known Prisma errors -> meaningful HTTP status
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    const model = (err.meta?.modelName as string | undefined) ?? "Resource";

    switch (err.code) {
      case "P2002": // unique constraint (e.g. duplicate email)
        return sendError(res, 409, `${model} already exists`);
      case "P2003": // foreign key (e.g. ownerId that doesn't exist)
        return sendError(res, 400, "Related resource does not exist");
      case "P2025": // record not found (update/delete)
        return sendError(res, 404, `${model} not found`);
    }
  }

  // 4. Invalid JSON in request body (thrown by express.json())
  if (err?.type === "entity.parse.failed") {
    return sendError(res, 400, "Invalid JSON body");
  }

  // 5. Everything else -> 500, log the details on the server only
  console.error(err);
  sendError(res, 500, "Internal server error");
};