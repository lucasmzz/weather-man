const express = require("express");
const weather = require("weather-js");
const bodyParser = require('body-parser');
const path = require("path");
const app = express();

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname + '/public')));

app.get('/',(req,res) => {
    res.render('pages/home.ejs');
});

app.post('/weather',(req,res) => {
    
    weather.find({search: req.body.city, degreeType: 'F'}, (err, result) => {
        if(err){
            console.log(err);
        }else{
            res.render('pages/weather.ejs',{forecast: result});  
        }
    });
});


app.listen(process.env.PORT, process.env.IP,() => {
    console.log(`Server started on port ${process.env.IP}:${process.env.PORT}`);
});