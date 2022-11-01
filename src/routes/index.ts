import { Router } from "express";

import { balanceRoutes } from "./balance.routes";
import { userRoutes } from "./user.routes";

export const routes = Router();

routes.use("/users", userRoutes);
routes.use("/balance", balanceRoutes);
