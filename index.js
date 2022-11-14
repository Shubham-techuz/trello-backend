const express = require('express');
const cors = require("cors");
require('./db/config');
const CardDetail = require('./schemas/cardDetail');
require('dotenv').config()

const app = express();

app.use(express.json());
app.use(cors());

app.post("/", async (req,res) => {
    try {
        let card = new CardDetail(req.body);
        let result = await card.save();
        res.send(result);

    } catch(err) {
        console.log("Error-----> ",err)
    }
    // res.send("app is working....");

});


app.listen(5000);


// To resolve the issue of CORS
// install (npm i cors) 