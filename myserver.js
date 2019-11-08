const port = 4205;
const express = require('express');
var request = require('request');
const app = express();


app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/getid', function(req, res, next) {
    console.log("In getid route");

    var legendID = req.query.id;
    console.log(legendID);

    /*
    var politics = "https://zlzlap7j50.execute-api.us-east-1.amazonaws.com/prod";
    router.get('/politics', function(req, res) {
        console.log("In politics");
        request(politics).pipe(res);
    });
    */

    var legendinfo = "https://api.guildwars2.com/v2/items/" + legendID;
    request(legendinfo).pipe(res);

    console.log("Leaving getid route");
});



app.listen(port, () => console.log('Server listening on port ' + port + '!'));
