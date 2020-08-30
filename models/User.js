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
    name: String,
    email: String,
    passowrd: String,
    role: {
      type: String,
      enum: [...Object.values(USER_TYPES)],
      default: USER_TYPES.GUEST,
    },
  },
  {
    timestamps: true,
    collection: "users",
  }
);

UserSchema.statics.createUser = async function (name, email, password, role) {
  try {
    const user = await this.create({ name, email, password });
    return user;
  } catch (error) {
    throw error;
  }
};

export default mongoose.model("User", UserSchema);
