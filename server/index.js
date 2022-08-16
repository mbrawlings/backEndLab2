const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())
let port = 4004

/////

const {getHouses, deleteHouse, createHouse, updateHouse} = require('./controller.js')

app.get('/api/houses', getHouses)
app.delete('/api/houses/:id', deleteHouse)
app.post('/api/houses', createHouse)
app.put('/api/houses/:id', updateHouse)

/////

app.listen(port, () => console.log(`Server listening on port ${port}`))