import UserModel, { USER_TYPES } from "../models/User.js";
import { validateCreateUser } from "../validation/createUser.js";
import status from "../utils/status.js";

export default {
  onTestRoute: async (req, res) => {
    res.end("Route Work!");
  },
  onGetUserByEmail: async (req, res) => {
    res.end("Route Work!");
  },
  onCreateUser: async (req, res) => {
    const { isValid, errors } = validateCreateUser(req.body);
    if (!isValid) {
      return res.status(status.BAD_REQUEST).json(errors);
    }
  },
};
