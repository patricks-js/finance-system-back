import { AppError } from "@utils/AppError";
import { hash } from "bcrypt";
import { User } from "src/@types/User";
import { prismaClient } from "src/database/connection";

import { Request, Response } from "express";

export const UserController = {
  async index(req: Request, res: Response) {
    res.send("Tudo ok!");
  },

  async create(req: Request, res: Response) {
    const { name, email, password }: User = req.body;

    const passwordEncrypted = await hash(password, 8);

    const users = await prismaClient.user.findMany();

    const userEmailExist = users.some(user => user.email === email);

    if (userEmailExist) {
      throw new AppError("Email already exists!");
    }

    const user = await prismaClient.user.create({
      data: {
        name,
        email,
        password: passwordEncrypted
      }
    });

    return res.status(201).json(user);
  }
};
