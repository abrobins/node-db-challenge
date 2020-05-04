exports.seed = async function(knex) {
  await knex("resources").insert([
    {
      name: "Pen",
      description: "Mont Blanc"
    },
    {
      name: "Pad",
      description: "Rocketbook"
    },
    {
      name: "Computer",
      description: "MacBook Pro"
    },
    {
      name: "VSCode",
      description: "Make sure you install Prettier!"
    }
  ]);
};
