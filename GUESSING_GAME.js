
var guess1=require("readline-sync")
var runtime=guess1.questionInt("enter how many times you want to guess")
chance=0
number=(Math.floor(Math.random()*runtime)+1);
while (true){
var guess=guess1.questionInt("guess a number")
if (guess==number){
console.log("CONGRATES YOU  WON! THE GAME")
break
}else{
console.log("SORRY! you guess a wrong guess")
chance+=1
if (chance==runtime){
console.log("you lost the game")
break
}
}
}

