import { Router } from "express";

import { CategoryController } from "@controllers/CategoryController";

export const categoryRoutes = Router();

categoryRoutes.post("/create", CategoryController.create);
