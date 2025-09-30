import { Request, Response } from "express";
import { validatePassword } from "../service/user.service";
import { createSession } from "../service/session.service";

export async function createUserSessionhanlder(req: Request, res: Response) {
  // Validate the user's password
  const user = await validatePassword(req.body);

  if (!user) {
    return res.status(401).send("Invalid email or password");
  }
  // Create a session
  const session = await createSession(
    String(user._id),
    req.get("user-agent") || ""
  );
  // Create an access token
  // Create a refresh token
  // return access & refresh tokens
}
