import { prismaClient } from "src/database/connection";

import { Request, Response } from "express";

export const CategoryController = {
  async create(req: Request, res: Response) {
    const { type, title, expense } = req.body;

    const category = await prismaClient.category.create({
      data: { type, title, expense }
    });

    res.status(201).json(category);
  }
};
