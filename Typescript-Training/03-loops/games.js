console.log("using traditional for loops");
var sportsOne = ["golf", "cricket", "football", "baseball"];
for (var i = 0; i < sportsOne.length; i++) {
    console.log(sportsOne[i]);
}
console.log("using simplified for loops");
for (var _i = 0, sportsOne_1 = sportsOne; _i < sportsOne_1.length; _i++) {
    var sport = sportsOne_1[_i];
    if (sport == 'cricket') {
        console.log(sport + " << my favourite");
    }
    else {
        console.log(sport);
    }
}
