import jwt from "jsonwebtoken";
import { prisma } from "../config/db.js";

// Read the token from request
// Check if token is valid
export const authMiddleware = async (req, res, next) => {
  console.log("Auth middleware run");
  let token;

  if (req.headers.authorization && req.authorization.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1]; // ["Bearer", "token_string"]
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (!token) {
    return res
      .status(401)
      .json({ error: "Not authorized, no token provided!" });
  }

  try {
    // Verify token and extract the userId
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await prisma.user.findUnique({
      where: { id: decoded.id },
    });

    if(!user) {
      return res
      .status(401)
      .json({ error: "User no longer exists" });
    }
  } catch (error) {}
  next();
};
