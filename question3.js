var cupSize = 18
var coffeeHot = true

if (cupSize <= 12 && coffeeHot == true){
    console.log("The coffee cup is not larger than 12 fl. oz and is currently hot")
}
else{
    if (cupSize <= 12 && coffeeHot == false){
    console.log("The coffee cup is not larger than 12 fl. oz and is piping hot")
    }
    else{
        if (cupSize > 12 && coffeeHot == true){
        console.log("The coffee cup is larger than 12 fl. oz and is currently hot")
        }
        else{
            if (cupSize > 12 && coffeeHot == false){
            console.log("The coffee cup is larger than 12 fl. oz and is piping hot")
            }
            else{
                console.log("I don't have an idea")
            }
        }
    }
}