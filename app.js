const express=require('express')
const app=express()

const mongoose=require('mongoose')
const route=require('./router/router')
const bodyParser=require('body-parser')
const PORT=Number(process.env.PORT || 4900)
const config=require('./config/db')

mongoose.Promise=global.Promise
mongoose.connect(config.DB,{useNewUrlParser:true}).then(myRes=>{
    console.log("Mongoose connection success")
},
err=>{
    console.log("Mongoose connection Failed")
})


app.set('views','./views')
app.set('view engine','pug')

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use('/',route)


app.listen(PORT,()=>{
    console.log(`The server is up and running at PORT ${PORT}`)
})