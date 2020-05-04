const express = require("express");

const ProjectRouter = require("./data/projectRouter");
const TaskRouter = require("./data/taskRouter");
const ResourceRouter = require("./data/resourceRouter");

const server = express();

server.use(express.json());
server.use("/api/projects", ProjectRouter);
server.use("/api/tasks", TaskRouter);
server.use("/api/resources", ResourceRouter);

server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    message: "Something went wrong"
  });
});

module.exports = server;
