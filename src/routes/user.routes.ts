import { Router } from "express";

import { UserController } from "@controllers/UserController";

export const userRoutes = Router();

userRoutes.get("/profile/", UserController.index);

userRoutes.post("/register", UserController.create);

userRoutes.delete("/delete/:id", UserController.delete);
