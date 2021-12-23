console.log("...  WELCOME TO KON BANEGA KARODPATI ...")
console.log()
console.log("to mera pehla sawal hai apake liye")

question_list = [
    "How many continents are there?",              
    "What is the capital of India?",            
    "NG mei kaun se course padhaya jaata hai?"  
]
options_list = [
    ["four", "nine", "seven", "eight"],
    ["chandigarh", "bhopal", "chennai", "delhi"],
    ["software Engineering", "counseling", "tourism", "agriculture"]
]
solution_list=["seven","delhi","software engineering"]
options=[["four","seven"],['delhi','bhopal'],['software engineering','tourism']] 
solution=["seven","delhi","software engineering"]
check=[5000,10000,100000]
choice=require("readline-sync")
i=0
count=0
chance=0
chance1=0
while (i<(question_list).length){
    console.log(i+1,question_list[i]) 
    j=0
    while (j<(options_list[i]).length){
        console.log(" ",j+1,options_list[i][j])
        j=j+1   
    }            
    lifeline=choice.questionInt("Do you want 50-50 lifeline:  1.yes 2.no")
    if (lifeline=="1" || lifeline=="yes"){
        count=count+1
        if (count==1){  
            console.log("you have given two options choose from these one") 
            j=0
            while (j<(options[i]).length){        
                console.log(" ",j+1,options[i][j]) 
                j=j+1 
            }             
            answer=choice.question("enter your answer:")                         
            if (answer==solution[i]){
                console.log("Aapaka jawab sahi hai,aur aap jit chuke hai",check[i], "ka check")
                console.log("To mera aagala sawal hai aapake liye")
                console.log()
            }
            else{
                console.log("sorry ,your answer is wrong")
                chance+=1                
                if (chance==2){
                    break             
                }
                else{
                  console.log("but you will get 1 chance and your next question is")               
                }
            }
        }
        else{
            console.log("you already use lifeline:") 
            j=0
            while (j<(options_list[i]).length){
                console.log(" ",j+1,options_list[i][j]) 
                j=j+1 
            }
            Ans=choice.question("enter your answer:")
            if (Ans==solution_list[i]){
                console.log("your answer is correct,aap jit chuke hai", check[i])  
            }
            
            else if (Ans!=solution[i]){                
                console.log("your answer is wrong you will get one chance")             
                chance1=chance1+1              
                if (chance1==1){             
                    ans=choice.question("enter your answer:")
                    if (ans==solution[i]){
                      console.log("your answer is obsolutely right,you win ",check[i],"check") 
                      console.log("so my next choice.question is:") 
                    }             
                    else{
                      console.log("oppss,you lost the game this time also") 
                      break  
                    }   
                }
            }        
            else{
               console.log("you already use chance") 
            }  
        }
    }    
    else{
        ans=choice.question("enter your answer:") 
        if (ans==solution_list[i]){                                
            console.log("Bilkul sahi javab, Ap jit chuke ",check[i], "ka check, TO mera agala saval hai apake liye:")   
            console.log() 
        }
        else if (ans!=solution[i]){
            console.log("you will get one chance")  
            console.log("and your options are:") 
            j=0
            while (j<(options_list[i]).length){
                console.log(" ",j+1,options_list[i][j]) 
                j=j+1 
            }   
            chance=chance+1              
            if (chance==1){             
                 ans=choice.question("enter your answer:")
                 if (ans==solution[i]){
                    console.log("your answer is obsolutely right,you win ",check[i],"check")               
                 }
                 else{
                    console.log("oppss,you lost the game this time also") 
                    break  
                 } 
            }                  
            else{
               console.log("you already use chance and you are out of this game sorry better luck next time")              
            }
        }
        else{
            console.log("Aapaka javab galat hai, and you lose the game")
            break 
        }
    }
    i=i+1 
}