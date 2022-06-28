const express = require('express')
require('dotenv').config() 
const authrouter = require('./routes/authrouter')
const mongoConfig = require('./config/mongoConfig')
const todosRouter = require('./routes/hotfoodRouter')
const usersRouter = require('./routes/usersRouter')
const app = express()



app.use(express.json())
const PORT = 5000



//* Routers
app.use('/hotfood', hotfoodRouter)


//* Root route for the APP
app.get('/', (req, res) => {
    //res.status(200).json
    res.send('<h1>Welcome to my Hot Food API!<h1>')
})

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
    mongoConfig()
});