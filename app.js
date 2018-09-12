const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.get('/', (Request, Response) => {
    Response.send('the route is working!')
})


app.listen(port, (Request, Response) => {
    console.log(`listening on ${port}`)
})
