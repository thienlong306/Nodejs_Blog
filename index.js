const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
    var a=2;
    var b=3;
    var c=a+b;
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})          