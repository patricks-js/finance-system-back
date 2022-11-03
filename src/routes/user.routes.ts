import { ensureAuthenticated } from "src/middleware/ensureAuthenticated";

import { Router } from "express";

import { UserController } from "@controllers/UserController";

export const userRoutes = Router();

userRoutes.post("/register", UserController.create);

userRoutes.get("/profile", ensureAuthenticated, UserController.findProfile);

userRoutes.delete("/delete", ensureAuthenticated, UserController.delete);

userRoutes.put("/update", ensureAuthenticated, UserController.update);
