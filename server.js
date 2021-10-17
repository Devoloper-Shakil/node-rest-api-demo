const { application } = require('express')
const express = require('express')
const app = express()
const port = process.env.prot || 5000
const countactRoutes= require('./api/routes/countactRoutes')

app.use('/api/contact',countactRoutes)

app.get('/', (req, res) => {
  res.send('Hello World!')
})






app.listen(port, () => {
  console.log(`service is runing on prot:${port}`)
})
