const connection = require('./knexfile')[process.env.NODE_ENV || 'development']
const database = require('knex')(connection)

module.exports = {
    listAll(){
        return g95db('students')       
    },
    read(firstName){
        return firstName
    }
}