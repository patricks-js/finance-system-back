import { User } from "@prisma/client";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

import { Request, Response } from "express";

import { authConfig } from "../config/auth";
import { prismaClient } from "../database/connection";
import { AppError } from "../utils/AppError";

export const SessionsController = {
  async create(req: Request, res: Response) {
    const { email, password }: User = req.body;

    const user = await prismaClient.user.findFirst({
      where: {
        email
      }
    });

    if (!user) {
      throw new AppError("Email and/or password is incorrect!", 401);
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new AppError("Email and/or password is incorrect!", 401);
    }

    const { expiresIn, secret } = authConfig.jwt;

    const token = sign({ id: user.id }, secret, { expiresIn });

    return res.json({ token, user });
  }
};
