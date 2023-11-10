import express from "express";

import { usersRoutes } from "./routes/users.routes";

const app = express();

app.use(express.json());

app.use("/users", usersRoutes);

app.use((error, req, res, next) => {
  return res
    .status(error.code ?? 500)
    .json({ error: error.message ?? "Something went wrong" });
});

export { app };
