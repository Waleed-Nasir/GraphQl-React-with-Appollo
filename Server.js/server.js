const express = require('express')
const grapHttp = require('express-graphql')
const mongoose = require('mongoose')
const schema = require('./Schema')
var cors = require('cors')

mongoose.connect('Your-DataBase-Addresss')
mongoose.connection.once('open',()=>{
    console.log('Connected')
})
const app = express();
app.use(cors())
app.use('/graphql',grapHttp({
    schema,
    graphiql:true
}))
const port = process.env.port || 4000 
app.listen(port,()=>(console.log('haha',port)))
