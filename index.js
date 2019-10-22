const express = require('express')
const app = express()
const db = require('./config/db')
const consign = require('consign')

consign()
    //.include('./config/passport.js')
    //.then('./config/middlewares.js')
    .then('./api')
    //.then('./config/routes.js')
    .into(app)

app.db = db

app.db.select('*').from("tasks")
.then((rows) => console.log(rows))
.catch(err => console.log(err))
.finally(() => console.log('event complete'))

console.log(app.users)

//process.exit()