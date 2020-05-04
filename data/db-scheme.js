const db = require("../data/config");

module.exports = {
  findProjects,
  findResources,
  findTasks,
  addProject,
  addResource,
  addTask
};

function findTasks() {
  return db("tasks as t")
    .join("projects as p", "p.id", "t.projects_id")
    .select(
      "t.description as task_desc",
      "t.notes as task_notes",
      "t.completed",
      "p.name as project_name",
      "p.description as project_description"
    );
}

function findProjects() {
  return db("projects");
}

function findResources() {
  return db("resources");
}

function addProject(project) {
  return db("projects").insert(project);
}

function addResource(resource) {
  return db("resources").insert(resource);
}

function addTask(task) {
  return db("tasks").insert(task);
}
