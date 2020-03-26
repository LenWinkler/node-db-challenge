
exports.seed = function(knex) {
  return knex('resources').insert([
    {name: 'computer', description: 'a computer to write code on', project_id: 1 },
    {name: 'knex docs', description: 'documentation for knex', project_id: 1 },
    {name: 'leash', description: 'a leash for the dog', project_id: 2 },
    {name: 'poop bags', description: 'uhh...bags for poop', project_id: 2 },
    {name: 'sheet music or tabs', description: 'a means to learn the song if it can\'t be learned by ear', project_id: 3 },
    {name: 'time', description: 'the time to sit down and learn it', project_id: 3 }
  ]);
};
