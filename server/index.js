require('dotenv').config();
const express = require('express'),
cors = require('cors'),
massive = require('massive'),
session = require('express-session'),
chalk = require('chalk')

const CTRL = require('./controller')

const {
CONNECTION_STRING,
SERVER_PORT,
SESSION_SECRET
} = process.env

const app = express()

app.use(express.json())
app.use(cors())
app.use(session({
    resave:false,
    saveUninitialized:true,
    secret: SESSION_SECRET,
    cookie:{
        maxAge:60000
    }
}))

massive(CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance);
    console.log(chalk.cyan('database is dataing'))
}).catch(err => console.log(err))

app.post('/auth/register', CTRL.register)

app.post('/auth/login', CTRL.login)



app.listen(SERVER_PORT,() => {
    console.log(chalk.cyan('Server is serving'))
})