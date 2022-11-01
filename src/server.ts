import "dotenv/config";
import express from "express";

import "express-async-errors";
import { CatchError } from "./middleware/catchError";
import { routes } from "./routes/index";

const app = express();

app.use(express.json());

app.use(routes);

app.use(CatchError);

const PORT = process.env.SERVER_PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
