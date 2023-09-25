const app=require('./app')

const dotenv=require('dotenv')
const connectDatabase=require("./config/database")

// config
dotenv.config({path:"backend/config/config.env"})

// we can connect db here but we creat e another file in config not mandatory

// connecting database
connectDatabase()







app.listen(process.env.PORT,()=>{
    console.log(`server is working on http://localhost:${process.env.PORT}`)
})