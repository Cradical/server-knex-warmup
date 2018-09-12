const express = require('express')
const app = express()
const port = process.env.PORT || 8000
const queries = require('./queries')

app.get('/', (Request, Response) => {
    queries.listAll().then(students => res.send(students))
})


app.listen(port, (Request, Response) => {
    console.log(`listening on ${port}`)
})
