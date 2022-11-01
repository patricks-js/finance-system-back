import { AppError } from "@utils/AppError";

import { Request, Response } from "express";

export async function CatchError(error: Error, req: Request, res: Response) {
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
