const express = require('express')
const app = express()
const port = process.env.PORT || 8000
const queries = require('./queries')
const cors = require('cors')

app.use(cors)

app.get('/', (Request, Response) => {
    queries.listAll().then(students => Response.send(students))
})

app.get('/:firstName', (Request, Response) => {
    queries.read(Request.params.firstName).then(student => Response.json({student}))
})

app.post('/', (Request, Response) => {
    queries.create(Request.body).then(status => Response.json({status})
)})

app.delete('/:id', (Request, Response) => {
    queries.delete(Request.params.id).then(status => Response.status({status}))
})

app.listen(port, (Request, Response) => {
    console.log(`listening on ${port}`)
})
