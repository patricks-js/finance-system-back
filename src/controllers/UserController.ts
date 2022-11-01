import { AppError } from "@utils/AppError";
import { hash } from "bcrypt";
import { User } from "src/@types/User";
import { prismaClient } from "src/database/connection";

import { Request, Response } from "express";

export const UserController = {
  async index(req: Request, res: Response) {
    const user = await prismaClient.user.findMany();

    return res.json(user);
  },

  async create(req: Request, res: Response) {
    const { name, email, password }: User = req.body;

    const users = await prismaClient.user.findMany();

    const userEmailExist = users.some(user => user.email === email);

    if (userEmailExist) {
      throw new AppError("Email already exists!");
    }

    const passwordEncrypted = await hash(password, 8);

    const user = await prismaClient.user.create({
      data: {
        name,
        email,
        password: passwordEncrypted
      }
    });

    return res.status(201).json(user);
  },

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    const users = await prismaClient.user.findMany();

    const userExist = users.some(user => user.id === id);

    if (!userExist) {
      throw new AppError("The user does not exist");
    }

    const userToDelete = await prismaClient.user.delete({
      where: {
        id
      }
    });

    return res.json(userToDelete);
  }
};
