import { prismaClient } from "src/database/connection";

import { Request, Response } from "express";

export const BalanceCategoryController = {
  async create(req: Request, res: Response) {
    const { id_balance, id_category } = req.body;

    const balanceCategory = await prismaClient.balanceCategory.create({
      data: {
        id_balance,
        id_category
      }
    });

    return res.status(201).json(balanceCategory);
  }
};
