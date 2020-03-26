
exports.seed = function(knex) {
  return knex('projects').insert([
    {name: 'create database', description: 'create a sqlite db'},
    {name: 'walk the dog', description: 'take the dog for a walk'},
    {name: 'learn a song', description: 'learn a new song on guitar'}
  ]);
};
