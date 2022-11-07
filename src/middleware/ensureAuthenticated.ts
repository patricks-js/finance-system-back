import { AppError } from "@utils/AppError";
import jwt from "jsonwebtoken";

import { NextFunction, Request, Response } from "express";

import { authConfig } from "../config/auth";

type UserId = {
  id: string;
};

export function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new AppError("BLOCKED! Unauthorized token!", 401);
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    throw new AppError("BLOCKED! Unauthorized!", 401);
  }

  try {
    const { id: user_id } = jwt.verify(token, authConfig.jwt.secret) as UserId;

    req.user = {
      id: user_id
    };

    next();
  } catch (err) {
    throw new AppError("Invalid JWT Token!", 401);
  }
}
