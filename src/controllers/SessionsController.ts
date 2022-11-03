import { User } from "@prisma/client";
import { AppError } from "@utils/AppError";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { authConfig } from "src/config/auth";
import { prismaClient } from "src/database/connection";

import { Request, Response } from "express";

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

    return res.json({ user, token });
  }
};
