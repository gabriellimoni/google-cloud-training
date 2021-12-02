const { makeTaskData, createTask } = require("./utils");

exports.runTask = (req, res) => {
  const jsonData = JSON.parse(req.body.toString());
  console.log("This is the JSON data received:", JSON.stringify(jsonData));
  // TODO: handle task processing
  res.send("ok");
};
exports.loadTasks = async (_, res) => {
  const allTaskData = makeTaskData();
  for (const data of allTaskData) {
    console.log("Creating task...");
    await createTask(data);
  }
  res.send("ok");
};
