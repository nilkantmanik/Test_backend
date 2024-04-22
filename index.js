

const express = require('express')
const app = express();

app.use(express.json())

const port = 4000

app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.get('/about',(req,res)=>{
    res.send('About Us')
})

app.post('/postabout',(req,res)=>{
    const data  = req.body.data;

    res.send(`posted data is ${data}`)
})

app.listen(port,()=>{
    console.log('listening on port',port)
});