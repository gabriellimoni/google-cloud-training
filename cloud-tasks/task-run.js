export const runTaskController = (req, res) => {
  const data = JSON.parse(req.body.toString());
  console.log("This is the JSON data received:", JSON.stringify(data));
  // TODO: handle task processing
  res.status(200).send();
};
