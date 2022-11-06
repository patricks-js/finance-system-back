import { AppError } from "@utils/AppError";
import { hash } from "bcrypt";
import { prismaClient } from "src/database/connection";

import { Request, Response } from "express";

export const UserController = {
  async findProfile(req: Request, res: Response) {
    const user_id = req.user.id;

    const user = await prismaClient.user.findUnique({
      where: {
        id: user_id
      }
    });

    if (!user) {
      throw new AppError("User not found!");
    }

    return res.json(user);
  },

  async create(req: Request, res: Response) {
    const { name, email, password, confirmPassword } = req.body;

    const userEmailExist = await prismaClient.user.findUnique({
      where: {
        email
      }
    });

    if (userEmailExist) {
      throw new AppError("Email already exists!");
    }

    if (password !== confirmPassword) {
      throw new AppError("Passwords do not match!");
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

    const userExist = await prismaClient.user.findUnique({
      where: {
        id
      }
    });

    if (!userExist) {
      throw new AppError("The user does not exist");
    }

    const userToDelete = await prismaClient.user.delete({
      where: {
        id
      }
    });

    return res.json(userToDelete);
  },

  async update(req: Request, res: Response) {
    const { id } = req.params;
    // const { email, name, password }: User = req.body;
    return res.json({ id });
  }
};
