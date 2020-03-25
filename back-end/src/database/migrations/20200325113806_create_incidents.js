
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table) {
        table.increments();

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        table.string('nog_id').notNullable();

        table.foreign('ng_id').references('id').inTable('nogs');
    });
};

exports.down = function(knex) {
    return knex.schmema.dropTable('incidents');
};
