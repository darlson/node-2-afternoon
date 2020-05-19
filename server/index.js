const express = require('express')
const app = express()
const SERVER_PORT = 3001
const ctrl = require('./controllers/message_controller')

app.use(express.json())
app.use(express.static(__dirname + '/../public/build'))

app.post('/api/messages', ctrl.create)
app.get('/api/messages', ctrl.read)
app.put('/api/messages/:msg_id', ctrl.update)
app.delete('/api/messages/:msg_id', ctrl.delete)


app.listen(SERVER_PORT, ()=> console.log(`Listening on port ${SERVER_PORT}`))