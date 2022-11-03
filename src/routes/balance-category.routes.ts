import { ensureAuthenticated } from "src/middleware/ensureAuthenticated";

import { Router } from "express";

import { BalanceCategoryController } from "@controllers/BalanceCategoryController";

export const balanceCategoryRoutes = Router();

balanceCategoryRoutes.use(ensureAuthenticated);

balanceCategoryRoutes.post("/register", BalanceCategoryController.register);

balanceCategoryRoutes.delete("/delete/:id", BalanceCategoryController.delete);

balanceCategoryRoutes.get("/show", BalanceCategoryController.show);
