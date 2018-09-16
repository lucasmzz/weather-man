const express = require("express");
const weather = require("weather-js");

const app = express();

app.get('/',(req,res) => {
    res.render('pages/home.ejs');
});

app.get('/:city',(req,res) => {
    
    const city = req.params.city;
    
    weather.find({search: city, degreeType: 'F'}, function(err, result) {
      if(err) console.log(err);
        console.log(result);
        res.render('pages/weather.ejs',{forecast: result});
    });
});

app.listen(process.env.PORT, process.env.IP,() => {
    console.log(`Server started on port ${process.env.IP}:${process.env.PORT}`);
});