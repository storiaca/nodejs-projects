import { DocumentDefinition } from "mongoose";
import UserModel, { UserDocument } from "../models/user.model";

export async function createUser(input: DocumentDefinition<UserDocument>) {
  try {
    return await UserModel.create(input);
  } catch (e: unknown) {
    const errorMessage = e instanceof Error ? e.message : "Unknown error";
    throw new Error(errorMessage);
  }
}
