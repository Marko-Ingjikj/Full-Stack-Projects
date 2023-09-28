import { Router } from "express";
import { AuthController } from "../controllers/auth.controller.js";
import {
  entityValidator,
  userSchema,
} from "../middlewares/entity-validator.middleware.js";

export const authRouter = Router();

authRouter.post("/login", AuthController.login);

authRouter.post(
  "/register",
  entityValidator(userSchema),
  AuthController.registerUser
);
