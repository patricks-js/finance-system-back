import { Router } from "express";

import { BalanceCategoryController } from "@controllers/BalanceCategoryController";

import { ensureAuthenticated } from "../middleware/ensureAuthenticated";

export const balanceCategoryRoutes = Router();

balanceCategoryRoutes.use(ensureAuthenticated);

balanceCategoryRoutes.post("/register", BalanceCategoryController.register);

balanceCategoryRoutes.delete("/delete/:id", BalanceCategoryController.delete);

balanceCategoryRoutes.get("/", BalanceCategoryController.showAll);
