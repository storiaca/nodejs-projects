import { Request, Response, NextFunction } from "express";
import { z } from "zod";

export const validateRequest = (schema: any) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      const formatted = result.error.format();

      const flatErrors = Object.values(formatted)
        .flat()
        .filter(
          (item): item is z.ZodFormattedError<any> =>
            typeof item === "object" && item !== null && "_errors" in item,
        )
        .map((err) => err._errors)
        .flat();
      return res.status(400).json({ message: flatErrors.join(", ") });
    }

    next();
  };
};
