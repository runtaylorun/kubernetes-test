const express = require('express')

const app = express()


require('./routes/basic')(app)
require('./routes/games')(app)


const PORT = 8080
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})