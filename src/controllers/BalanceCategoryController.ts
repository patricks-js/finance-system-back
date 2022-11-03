import { Balance, Category } from "@prisma/client";
import { prismaClient } from "src/database/connection";

import { Request, Response } from "express";

type BalanceData = {
  category: Category;
} & Balance;

export const BalanceCategoryController = {
  async register(req: Request, res: Response) {
    const user_id = req.user.id;

    const { date, title, value, category }: BalanceData = req.body;

    const newBalance = await prismaClient.balance.create({
      data: {
        date,
        title,
        value,
        category: {
          connectOrCreate: {
            where: {
              id: user_id
            },
            create: {
              expense: category.expense,
              title: category.title,
              type: category.type
            }
          }
        },
        user: {
          connect: {
            id: user_id
          }
        }
      }
    });

    console.log(newBalance);

    return res.status(201).json({ date, title, value, category });
  }
};
