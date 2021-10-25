require('./db/connect')


const express = require('express')
const app = express()

app.use(express.urlencoded({extended: false}), express.json())
.use(express.static('./public'))
.listen(3000, () => {'listening @ 3000'})