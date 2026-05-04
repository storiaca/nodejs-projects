import { Request, Response, NextFunction } from "express";
export const validateRequest = (schema) => {
  return (req: Request, res: Response, next: NextFunction) => [];
};
