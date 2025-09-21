import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  // create token for user
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("jwt", token);
};
