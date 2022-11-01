import { Router } from "express";

import { BalanceController } from "@controllers/BalanceController";

export const balanceRoutes = Router();

balanceRoutes.get("/", BalanceController.index);
