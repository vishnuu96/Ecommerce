const express= require('express')

const app= express()
const errorMiddleware =require("./middleware/error")

app.use(express.json())

// Route imports 
// here we can create api directly like
// app.post("route address",contoller=()=>{
//  but to make it easier we used seperate files for contoller functions and route addresses and imported contoller to route addres and imported route here
// })
const product= require("./routes/productRoute")
app.use("/api/v1",product)

// middleware for error
app.use(errorMiddleware)

module.exports= app
