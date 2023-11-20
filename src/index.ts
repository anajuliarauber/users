import express from "express";
import swaggerUi from "swagger-ui-express";

import { usersRoutes } from "./routes/users.routes";
import swaggerFile from "./swagger.json";

const app = express();

app.use(express.json());

app.use("/users", usersRoutes);

app.use((error, req, res, next) => {
  return res
    .status(error.code ?? 500)
    .json({ error: error.message ?? "Something went wrong" });
});

app.use("/api-docs", swaggerUi.serve);
app.use("/api-docs", swaggerUi.setup(swaggerFile));

export { app };
