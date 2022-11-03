import { env } from "process";

export const authConfig = {
  jwt: {
    secret: env.JWT_SECRET_DEV!,
    expiresIn: "2d"
  }
};
