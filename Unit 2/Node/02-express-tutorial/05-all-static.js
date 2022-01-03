const express = require('express')
const app = express()

const path = require('path')

// setup static and middleware
//I changed the name of the folders /methods... and /navbar... to /public individually
//this allows the students to see that they are both working

//express.static is for any site that does not have updating information
//this does not mean the js changing the site.

//THIS WILL NOT WORK ON JAVASCRIPT YET BUT YOU CAN CLICK IT TO 
//TO SEE WHAT HAPPENS WHEN THE DATA FAILS TO LOAD
app.use(express.static('./public'))

// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
//   adding to static assets
//   SSR
// })

app.all('*', (req, res) => {
  res.status(404).send('resource not found')
})

app.listen(5000, () => {
  console.log('server is listening on port 5000....')
})
