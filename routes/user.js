import express from "express";
import user from "../controllers/user.js";

const router = express.Router();

router
  .get("/test", user.onTestRoute)
  .post("/login", user.onGetUserByEmail)
  .post("/register", user.onCreateUser);

export default router;
