const { CloudTasksClient } = require("@google-cloud/tasks");

/**
 * Make random array with 100 itens
 */
exports.makeTaskData = () =>
  Array.from({ length: 100 }).map((_, idx) => ({
    id: idx,
    name: `My name is "${idx}"`,
  }));

exports.createTask = async (payload) => {
  const projectName = "limoni-url-shrinker";
  const region = "southamerica-east1";
  const queueName = "my-queue";
  const targetHttp =
    "https://southamerica-east1-limoni-url-shrinker.cloudfunctions.net/run-task-function";
  const client = new CloudTasksClient();
  const parent = client.queuePath(projectName, region, queueName);
  await client.createTask({
    parent,
    task: {
      httpRequest: {
        httpMethod: "POST",
        url: targetHttp,
        body: Buffer.from(JSON.stringify(payload)).toString("base64"),
        headers: {
          "Content-Type": "application/octet-stream",
        },
      },
    },
  });
};
