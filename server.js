
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
var cors = require('cors')

const app = express()
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())


const port = process.env.prot || 5000

const countactRoutes = require('./api/routes/countactRoutes')


app.use('/api/contact', countactRoutes)

app.get('/', (req, res) => {
  res.send('Hello World!')
})






app.listen(port, () => {
  console.log(`service is runing on prot:${port}`)
})
