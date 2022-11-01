import { Request, Response } from "express";

export const UserController = {
  async index(req: Request, res: Response) {
    return res.json({ message: "Send" });
  }
};
