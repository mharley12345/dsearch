
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('url').del()
    .then(function () {
      // Inserts seed entries
      return knex('url').insert([
        {urls:JSON.stringify(['QmTYy7VDmxxUFtJ4eWhLNHS3CtHkDJmi1niJf45kyZaCS5','QmQt3LT8pp2H68oH5AtBUPzq9RaRaD4y62iifySB4dbZDb']),keyword:'money'},
    
      ]);
    });
};
