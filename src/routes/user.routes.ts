import { Router } from "express";

import { UserController } from "@controllers/UserController";

export const userRoutes = Router();

userRoutes.get("/", UserController.index);
