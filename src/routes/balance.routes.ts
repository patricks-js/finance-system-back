import { Router } from "express";

import { BalanceController } from "@controllers/BalanceController";

export const balanceRoutes = Router();

balanceRoutes.post("/register", BalanceController.register);
