import express from "express"

const app=express()

const port=8000


app.get('/',(req,res)=>{
    res.send('Hi')
})

app.listen(port,()=>{console.log("the server is running on port 8000")})
