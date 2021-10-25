const mongoose = require('mongoose')

//you need to replace the passwork
const connectionString = "mongodb+srv://Kyle:N6KCt4j27xMsf4cS@task-manager-practice.2qxug.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(connectionString)