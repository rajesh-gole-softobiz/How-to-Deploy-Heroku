const express = require('express');
const app = express();
const PORT = process.env.PORT;

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
})
app.get('/about',(req,res)=>{
    res.sendFile(__dirname+'/about.html');
})
app.get('/contact',(req,res)=>{
    res.sendFile(__dirname+'/contact.html');
})
app.use((req,res)=>{
    res.sendFile(__dirname+'/404.html')
})

app.listen(PORT,()=>{
    console.log(`Server running at ${PORT}`);
})