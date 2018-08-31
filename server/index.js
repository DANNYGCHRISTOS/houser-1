require('dotenv').config()
const express = require('express')
const {json} = require('body-parser')
const app = express()
const massive = require('massive')
const port = 3001;
const {getHouses, deleteHouse, addHouse} = require('./controllers/house_controller')

app.use(json())

massive(process.env.CONNECTION_STRING)
.then(db => {app.set('db', db)})
.catch(err => console.log(err))


app.get('/api/houses', getHouses)
app.delete('/api/houses/:id', deleteHouse)
app.post('/api/houses', addHouse)


app.listen({port}, ()=> console.log(`listening on port ${port}`))
