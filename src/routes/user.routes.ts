import { Router } from "express";

import { UserController } from "@controllers/UserController";

import { ensureAuthenticated } from "../middleware/ensureAuthenticated";

export const userRoutes = Router();

userRoutes.post("/register", UserController.create);

userRoutes.get("/profile", ensureAuthenticated, UserController.findProfile);

userRoutes.delete("/delete", ensureAuthenticated, UserController.delete);

userRoutes.put("/update", ensureAuthenticated, UserController.update);
