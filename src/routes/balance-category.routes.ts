import { Router } from "express";

import { BalanceCategoryController } from "@controllers/BalanceCategoryController";

export const balanceCategoryRoutes = Router();

balanceCategoryRoutes.post("/create", BalanceCategoryController.create);