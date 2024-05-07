const express = require('express')
const app = express()

app.get('/', (request, response) => {
  const date = new Date()

  const month = date.getMonth()
  const year = date.getFullYear()
  const day = date.getDate()
})

app.listen(3000)
module.exports = app
