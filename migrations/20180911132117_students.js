
exports.up = function(knex, Promise) {
  //knex migrate:latest cmd for creating new table w/ columns
    return knex.schema.createTable('students', (student) => {
        student.increments('id');
        student.string('firstName');
        student.string('lastName');
        student.string('homeTown');
        student.string('preOccupation');
        student.integer('favNumber');
        student.string('pastime');

    })
};

exports.down = function(knex, Promise) {
  //knex migrate:rollback cmd for dropping the table 
    return knex.schema.dropTableIfExists('students')
};
