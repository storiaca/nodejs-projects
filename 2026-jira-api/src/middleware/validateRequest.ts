import { Request, Response, NextFunction } from "express";
export const validateRequest = (schema: any) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);
  };
};
