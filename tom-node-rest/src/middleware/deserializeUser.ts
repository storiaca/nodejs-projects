import { get } from "lodash";
import { Request, Response, NextFunction } from "express";

const deserializeUser = (req: Request, res: Response, next: NextFunction) => {
  const accessToken = get(req, "headers.authorization", "").replace(
    /^Bearer\s/,
    ""
  );

  if (!accessToken) {
    return next();
  }
};
