const connection = require('./knexfile')[process.env.NODE_ENV || 'development']
const database = require('knex')(connection)

module.exports = {
    listAll(){
        return database('students')       
    },
    read(firstName){
        return firstName
    },
    create(newEntry){
        return database('students').insert(newEntry).returning('*');
    }
}