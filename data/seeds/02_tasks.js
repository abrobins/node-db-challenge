exports.seed = async function(knex) {
  await knex("tasks").insert([
    {
      description: "Outline your book",
      notes: "Focus on the plot",
      completed: true,
      projects_id: 1
    },
    {
      description: "Write your book",
      completed: true,
      projects_id: 1
    },
    {
      description: "Edit your book",
      notes: "Don't miss any typos",
      completed: false,
      projects_id: 1
    },
    {
      description: "Outline your app",
      notes: "Focus on the user experience",
      completed: true,
      projects_id: 2
    },
    {
      description: "Build your app",
      completed: true,
      projects_id: 2
    },
    {
      description: "QA your app",
      notes: "Squash those bugs!",
      completed: false,
      projects_id: 2
    }
  ]);
};
