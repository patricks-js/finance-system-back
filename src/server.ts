import "dotenv/config";
import "express-async-errors";

import express from "express";

import { catchErrors } from "./middleware/catchError";
import { routes } from "./routes/index";

const app = express();

app.use(express.json());

app.use(routes);

app.use(catchErrors);

const PORT = process.env.SERVER_PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
