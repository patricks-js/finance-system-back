import { prismaClient } from "src/database/connection";

import { Request, Response } from "express";

export const BalanceController = {
  async register(req: Request, res: Response) {
    const { value, date, title } = req.body;

    // Fazer validações dos meus valores

    const balance = await prismaClient.balance.create({
      data: {
        date,
        title,
        value
      }
    });

    return res.json(balance);
  }
};
