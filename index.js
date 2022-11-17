const express = require('express');
const cors = require("cors");
require('./db/config');
const CardDetail = require('./schemas/cardDetail');
const CompleteTime = require('./schemas/completeTime');
require('dotenv').config()

const app = express();
const port = process.env.PORT || 5000

app.use(express.json());
app.use(cors());

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

// Getting the complete Timestamp 
app.get("/timestamp/:id", async (req,res) => {
    try {
        let result = await CompleteTime.findOne({_id: req.params.id});
        if(result){
            res.send(result);
        }else{
            res.send({result: "No Timestamp found"});
        }
    } catch(err) {
        console.log("Get Timestamp Error-----> ",err);
    }
});

// Made changes to TimeStamp
app.put("/timestamp/:id", async (req,res) => {
    try {
        let result = await CompleteTime.updateOne(
            {_id: req.params.id},
            {
                 $set: req.body
            }
        )
        res.send(result);
    } catch(err) {
        console.log("Put Timestamp Error-----> ",err);
    }
});

// Storing the Timestamp
app.post("/timestamp", async (req,res) => {
    try {
        let completeTime = new CompleteTime(req.body);
        let result = await completeTime.save();
        res.send(result);
    } catch(err) {
        console.log("Post Timestamp Error-----> ",err);
    }
});

// Storing Card Detail
app.post("/", async (req,res) => {
    try {
        let card = new CardDetail(req.body);
        let result = await card.save();
        res.send(result);

    } catch(err) {
        console.log("Error-----> ",err);
    }
    // res.send("app is working....");
});



app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
});


// To resolve the issue of CORS
// install (npm i cors) 


// const a = matchMedia.query().getByid(id)
        // const ttl = a.totaltime + req.body.totaltime
        // matchMedia.query().updagtebyid()