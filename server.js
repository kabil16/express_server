const express = require('express');
const app = express();
const bodyParser =require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://kabil:1996@cluster0.rmk6c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
const User = mongoose.model("users",{
    name :String,
    age:Number,
    phone:Number,
    nic:String
})

app.use(bodyParser.urlencoded({ extended: true }));
app.get("/",(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})
app.post("/add",(req,res)=>{
    const user = new User({
        name : req.body.name,
        age : req.body.age,
        phone : req.body.phone,
        nic : req.body.nic
    })
    user.save().then(()=>{
        console.log("data added success fully");
        res.send("data added")
    }).catch((err)=>{
        res.send("data not added")
        console.log(err);

    })
    console.log(req.body);
});

app.listen("3020",()=>{
    console.log("server working on 3020");
})