export const port = process.env.PORT || 3000;
export const gcp = {
  projectName: process.env.GCP_PROJECT_NAME,
  region: process.env.GCP_PROJECT_REGION,
  queueName: process.env.GCP_QUEUE_NAME,
  taskHttpEndpoint: process.env.TASK_HTTP_ENDPOINT,
};
