var express = require('express');
var path = require('path');
var app = express();
var fs = require('fs');
app.use(express.static('public'))

app.get('/', function(req, res) {//when user goes to domain.com/ this function is fired
    res.sendFile(__dirname+'/public/index.html');
});
app.get('/home', function(req, res) {//when user goes to domain.com/home this function is fired
    //res.send('Home page via /home');
    //res.sendFile("../../index.html");
    res.sendFile(__dirname+'/public/index.html');
    
    /*******This is how to write to a text file.
    fs.writeFile(__dirname+'/public/system/test.txt', 'Hey there!', function(err) {
        if(err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    });*/
    
    /*******This is how to read a text file. Whatever was in the text file comes back as the data argument. err is the error, if there ws no error, err is null.
    fs.readFile(__dirname+'/public/system/test.txt', 'utf8', function (err,data) {
        if (err) {
            return console.log(err);
        }
        console.log(data);
    });*/
});

app.get('/store/:name', function(req, res) {
    res.send('You requested to see store with the id ' + req.params.id);
});

app.listen(8080);