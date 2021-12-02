import { CloudTasksClient } from "@google-cloud/tasks";
import { gcp } from "./env.js";
import { makeTaskData } from "./task-data.js";

export const loadTasksController = async (req, res) => {
  const allTaskData = makeTaskData();
  for (const data of allTaskData) {
    // await createTask(data);
    console.log(data);
  }
  res.status(200).send();
};

const createTask = async (payload) => {
  const client = new CloudTasksClient({
    keyFilename: "./google-service-account.json",
  });
  const parent = client.queuePath(gcp.projectName, gcp.region, gcp.queueName);
  await client.createTask({
    parent,
    task: {
      httpRequest: {
        httpMethod: "POST",
        url: gcp.taskHttpEndpoint,
        body: Buffer.from(JSON.stringify(payload)).toString("base64"),
        headers: {
          "Content-Type": "application/octet-stream",
        },
      },
    },
  });
};
