let choose=require("readline-sync")
player_name=choose.question("enter your name")
console.log("hii",player_name," welcome to game ")
choose1=choose.question("choose rock paper sccissors")
list1=["rock","paper","sccissor"]
move=list1[Math.floor(Math.random()*list1.length)]
if (choose1=="rock" && move=="paper"){
console.log(move,"computer choice, computer win")
}
else if(choose1=="scissors" && move=="rock"){
console.log(move,"computer choice , computer win")
}
else if(choose1=="paper" && move=="sccissors"){
console.log(move,"computer choice , computer win")
}
else if(choose1=="rock" && move=="sccissors"){
console.log(move,"computer choice , you won")
}
else if(choose1=="paper" && move=="rock"){
console.log(move,"computer choice , you won")
}
else if(choose1=="sccissors" && move=="paper"){
console.log(move,"computer choice , you won")
}
else{
console.log("draw")
}