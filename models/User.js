import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const Schema = mongoose.Schema;

export const USER_TYPES = {
  GUEST: "guest",
  ADMIN: "admin",
};

// User Schema
const UserSchema = new Schema(
  {
    _id: {
      type: String,
      default: () => uuidv4().replace(/\-/g, ""),
    },
    firstName: String,
    lastName: String,
    role: String,
  },
  {
    timestamps: true,
    collection: "users",
  }
);

export default mongoose.model("User", UserSchema);
