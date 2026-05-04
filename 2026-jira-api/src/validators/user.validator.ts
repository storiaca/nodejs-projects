import * as z from "zod";

const createUserSchema = z.object({
  email: z.email(),
  name: z.string().min(2).trim(),
});

export { createUserSchema };
