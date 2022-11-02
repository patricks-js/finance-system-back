import { Router } from "express";

import { UserController } from "@controllers/UserController";

export const userRoutes = Router();

userRoutes.get("/profile/:id", UserController.findProfile);

userRoutes.post("/register", UserController.create);

userRoutes.delete("/delete/:id", UserController.delete);

userRoutes.put("/update/:id", UserController.update);
