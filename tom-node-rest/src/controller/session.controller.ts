import { Request, Response } from "express";
import { validatePassword } from "../service/user.service";
import { createSession } from "../service/session.service";
import { signJwt } from "../utils/jwt.utils";
import config from "config";

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
  const accessToken = signJwt(
    { ...user, session: session._id },
    { expiresIn: config.get<string>("accessTokenTtl") } // 15 minutes
  );
  // Create a refresh token
  const refreshToken = signJwt(
    { ...user, session: session._id },
    { expiresIn: config.get<string>("refreshTokenTtl") } // 1 day
  );
  // return access & refresh tokens
  res.send({ accessToken, refreshToken });
}
