import { createSessionSchema } from "../schema/session.schema";
import { Express, Response, Request } from "express";
import { createUserHandler } from "../controller/user.controller";
import validateResource from "../middleware/validateResource";
import { createUserSchema } from "../schema/user.schema";
import { createUserSessionHanlder } from "../controller/session.controller";
import { getUserSessionsHandler } from "../../finished/src/controller/session.controller";

function routes(app: Express) {
  app.get("/healthcheck", (req: Request, res: Response) => {
    res.sendStatus(200);
  });

  app.post("/api/users", validateResource(createUserSchema), createUserHandler);
  app.post(
    "/api/sessions",
    validateResource(createSessionSchema),
    createUserSessionHanlder
  );

  app.get("/api/sessions", getUserSessionsHandler);
}

export default routes;
