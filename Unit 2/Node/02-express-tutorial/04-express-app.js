const express = require('express')
const path = require('path')

const app = express()

// setup static and middleware

//this will return the html to the page but it will still
//have the errors from the node way. 
//this is fixed using .use in the next file
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
})

app.all('*', (req, res) => {
  res.status(404).send('resource not found')
})

app.listen(5000, () => {
  console.log('server is listening on port 5000....')
})
