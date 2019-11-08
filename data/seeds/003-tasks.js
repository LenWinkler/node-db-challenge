
exports.seed = function(knex) {
  return knex('tasks').insert([
    {description: 'download deps', notes: 'install knex, sqlite3, knex-cleaner', project_id: 1 },
    {description: 'write all the code', notes: 'code, code, code', project_id: 1 },
    {description: 'attach leash', notes: 'attach the leash to the dog\'s collar', project_id: 2 },
    {description: 'walk', notes: 'walk the dog', project_id: 2 },
    {description: 'tune guitar', notes: 'make sure the guitar is in the correct tuning and in tune', project_id: 3 },
    {description: 'practice', notes: 'practice, practice, practice', project_id: 3 }
  ]);
};
