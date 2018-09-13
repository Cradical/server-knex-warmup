const connection = require('./knexfile')[process.env.NODE_ENV || 'development']
const database = require('knex')(connection)

module.exports = {
    listAll() {
        return database('students')
    },
    read(firstName) {
        return database('students').where('firstName', firstName)
    },
    create(newEntry) {
        return database('students').insert(newEntry).returning('*')
    },
    delete(id) {
        return database('students').where('id', id).delete()
    }
}