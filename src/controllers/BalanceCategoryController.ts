import { Balance, Category } from "@prisma/client";
import { prismaClient } from "src/database/connection";

import { Request, Response } from "express";

type BalanceData = {
  category: Category;
} & Balance;

export const BalanceCategoryController = {
  async register(req: Request, res: Response) {
    const { date, title, value, user_id, category }: BalanceData = req.body;

    const newBalance = await prismaClient.balance.create({
      data: {
        date,
        title,
        value,
        user: {
          connect: {
            id: user_id
          }
        },
        category: {
          create: {
            type: category.type,
            title: category.title,
            expense: category.expense
          }
        }
      }
    });

    return res.status(201).json(newBalance);
  }
};
