
exports.up = function(knex) {
  return knex.schema
  .createTable('projects', tbl => {
      tbl.increments();

      tbl.string('name', 255).notNullable();
      tbl.string('description', 255);
      tbl.integer('completed').defaultTo(0);
  })

  .createTable('resources', tbl => {
      tbl.increments();

      tbl
      .string('name', 255)
      .unique()
      .notNullable();

      tbl.string('description', 255);

      tbl
      .integer('project_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('projects')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE')
  })

  .createTable('tasks', tbl => {
      tbl.increments();

      tbl.string('description', 255).notNullable();
      tbl.string('notes', 255);
      tbl.integer('completed').defaultTo(0);
      
      tbl
      .integer('project_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('projects')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE')
  })
};

exports.down = function(knex) {
  return knex.schema
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects')
};
