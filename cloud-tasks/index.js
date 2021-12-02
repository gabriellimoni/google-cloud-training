import express from "express";
import { port } from "./env.js";
import { loadTasksController } from "./task-load.js";
import { runTaskController } from "./task-run.js";

const app = express();

app.post("/load-tasks", loadTasksController);
app.post(
  "/run-task",
  express.raw({ type: "application/octet-stream", limit: "1mb" }),
  runTaskController
);

app.listen(port, () => console.log("App runing on port", port));
