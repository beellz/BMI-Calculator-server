const express = require('express');
const app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));





app.get ("/", (req, res) => res.sendFile(__dirname + "/index.html"));



app.post ("/", (req, res) => {
    
    let weight = Number(req.body.num1);
    let height = Number(req.body.num2);

    let result = Math.floor((weight / (height * height)));

    console.log(result);
    res.send("Your BMI is" + result);
})



app.listen(3000, () => console.log('running on port 3000'))

