import "dotenv/config";
import "express-async-errors";

import cookieParser from "cookie-parser";
import cors from "cors";

import express from "express";

import { catchErrors } from "./middleware/catchError";
import { routes } from "./routes/index";

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use(routes);

app.use(catchErrors);

const PORT = process.env.PORT || process.env.SERVER_PORT;
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
