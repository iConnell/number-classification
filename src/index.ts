import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

import appRoutes from "./route";
app.use("/api", appRoutes);

const port: number = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
