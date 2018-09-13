const express = require('express')
const app = express()
const port = process.env.PORT || 8000
const queries = require('./queries')

app.get('/', (Request, Response) => {
    queries.listAll().then(students => res.send(students))
})

app.get('/:firstName', (Request, Response) => {
    read(Request.params.firstName)
})

app.post('/', (Request, Response) => {
    queries.create(Request.body).then(Response.status(201))
})


app.listen(port, (Request, Response) => {
    console.log(`listening on ${port}`)
})
