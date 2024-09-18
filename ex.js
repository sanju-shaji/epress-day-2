const routes=require('./routes/basicroutes')


const express=require('express')
const morgan=require('morgan')
const { dirname } = require('path')


const app= new express()
app.use(morgan('dev'))
app.set('view engine','ejs')
app.set('views',__dirname+"/views")
// console.log(__dirname)

app.use('/basic',routes)





app.listen(3000,()=>{
    console.log('listening port 3000.....')
})