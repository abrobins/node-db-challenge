exports.seed = async function(knex) {
  await knex("projects").insert([
    {
      name: "Write a Book",
      description: "Write a killer book",
      completed: false
    },
    { name: "Build an App", description: "Build a killer app", completed: true }
  ]);
};
