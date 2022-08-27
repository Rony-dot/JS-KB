console.log("using traditional for loops")
let sportsOne : string[] = ["golf", "cricket", "football", "baseball"]
for(let i=0; i<sportsOne.length; i++){
    console.log(sportsOne[i])
}

console.log("using simplified for loops")
for(let sport of sportsOne){
    if(sport == 'cricket'){
        console.log(sport+" << my favourite")
    }else{
        console.log(sport)
    }

}