const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const PORT = process.env.PORT || 4000

app.get('/', async (req, res) => res.send('Hello Kuba'))

app.listen(PORT, () => console.log('Server is listening on port ' + PORT))