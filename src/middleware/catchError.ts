import { NextFunction, Request, Response } from "express";

import { AppError } from "../utils/AppError";

export function catchErrors(
  error: Error,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
) {
  if (error instanceof AppError) {
    return res.status(error.status).json({
      status: "Error",
      message: error.message
    });
  }
  return res.status(500).json({
    status: "Error",
    message: "Internal Server Error"
  });
}
