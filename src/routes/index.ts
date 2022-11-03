import { Router } from "express";

import { balanceCategoryRoutes } from "./balance-category.routes";
import { sessionRoutes } from "./sessions.routes";
import { userRoutes } from "./user.routes";

export const routes = Router();

routes.use("/users", userRoutes);
routes.use("/sessions", sessionRoutes);
routes.use("/balance", balanceCategoryRoutes);
