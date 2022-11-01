import { Router } from "express";

import { CategoryController } from "@controllers/CategoryController";

export const categoryRoutes = Router();

categoryRoutes.post("/register", CategoryController.create);
