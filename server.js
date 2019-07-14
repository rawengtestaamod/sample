const express = require('express')
const app = express()
const port = 3000
console.log("server has stated with sample port 3000")
app.get('/', (req, res) => res.send('Hello World!'))
console.log("this is sample test example");
app.listen(port, () => console.log(`Example app listening on port ${port}!`))