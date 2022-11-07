import { Balance, Category } from "@prisma/client";
import { AppError } from "@utils/AppError";
import { prismaClient } from "src/database/connection";

import { Request, Response } from "express";

type BalanceData = {
  category: Category;
} & Balance;

export const BalanceCategoryController = {
  async register(req: Request, res: Response) {
    const user_id = req.user.id;

    const { date, title, value, category }: BalanceData = req.body;

    try {
      const newBalance = await prismaClient.balance.create({
        data: {
          user: {
            connect: {
              id: user_id
            }
          },
          date,
          title,
          value,
          category: {
            create: {
              expense: category.expense,
              title: category.title,
              type: category.type
            }
          }
        },
        include: {
          category: true
        }
      });
      return res.status(201).json(newBalance);
    } catch (err) {
      throw new AppError("Error: " + err);
    }
  },

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    const balanceToDelete = await prismaClient.balance.delete({
      where: {
        id
      }
    });

    return res.json({
      message: "Delete balance successfully",
      item: balanceToDelete
    });
  },

  async showAll(req: Request, res: Response) {
    const user_id = req.user.id;

    const allBalances = await prismaClient.balance.findMany({
      where: {
        user_id: user_id
      },
      include: {
        category: true
      }
    });

    return res.json(allBalances);
  }
};
