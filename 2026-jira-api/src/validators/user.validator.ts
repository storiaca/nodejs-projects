import * as z from "zod";

const createUserSchema = z.object({
  email: z.email(),
  name: z.string().min(2).max(50).trim(),
});

export { createUserSchema };
