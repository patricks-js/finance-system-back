import { Router } from "express";

import { balanceCategoryRoutes } from "./balance-category.routes";
import { balanceRoutes } from "./balance.routes";
import { categoryRoutes } from "./category.routes";
import { userRoutes } from "./user.routes";

export const routes = Router();

routes.use("/users", userRoutes);
routes.use("/balance", balanceRoutes);
routes.use("/category", categoryRoutes);
routes.use("/balance-category", balanceCategoryRoutes);
