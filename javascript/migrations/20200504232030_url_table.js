
exports.up = function(knex) {
  return (
knex.schema.createTable('url',tbl => {
    tbl.increments();
    tbl.string("keyword",2000).notNullable()
    tbl.jsonb("urls",[])
})
  )
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('url')
};
