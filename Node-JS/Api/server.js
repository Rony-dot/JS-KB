console.log("server is working");
const { response } = require('express');
var express = require('express');
var app = express();

var server = app.listen(3000, listening);
function listening(){
    console.log('listening . . ');
}
app.use(express.static('public'));

app.get('/flower',sendFlower);
function sendFlower(request, response){
    response.send("I love flower");
}

app.get('/search/:flower/:num',searchFlower);
function searchFlower(request, response){
    var data = request.params;
    var num = data.num;
    var reply = '';
    for (var i=0; i<num; i++){
        reply += "I love "+data.flower+" very much";
    }
    response.send(reply);
}