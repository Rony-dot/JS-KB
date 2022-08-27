names = [100, "hii", "hell", "100"]
console.log(oddFriend(names))
console.log(Math.floor(2.9))

function oddFriend(names){
    for(let name of names){
        if (Number.isInteger(name)){
            return "cannot send a number";
        }
        if(name.length %2 !== 0){
            return name;
        }
    }
    return "not found";
}