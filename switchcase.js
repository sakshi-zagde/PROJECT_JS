

var day1=require("readline-sync")
day=day1.question("enter the day")
switch (day){
   case ("monday"):
      console.log("today is monday");
      meal=day1.question("enter the meal")
      switch (meal){
         case ("breakfast"):
            console.log("today breakfast is poha");
            break
         case ("lunch"):
            console.log("todays lunch is dal chaval")
            break
         case ("dinner"):
            console.log("todays dinner is pulav")
            break
      }
   break;
   case ("tuesday"):
      console.log("today is tuesday");
      meal=day1.question("enter the meal")
      switch (meal){
         case ("breakfast"):
            console.log("today breakfast is bread");
            break
         case ("lunch"):
            console.log("todays lunch is matar panir")
            break
         case ("dinner"):
            console.log("todays dinner is soup")
            break
      }
   break;
   case ("wednesday"):
      console.log("today is wednesday");
      meal=day1.question("enter the meal")
      switch (meal){
         case ("breakfast"):
            console.log("today breakfast is mataki chivada");
            break
         case ("lunch"):
            console.log("todays lunch is roti soyaben")
            break
         case ("dinner"):
            console.log("todays dinner is khichadi")
            break
      }
   break;
   case ("thursday"):
      console.log("today is thursday");
      meal=day1.question("enter the meal")
      switch (meal){
         case ("breakfast"):
            console.log("today breakfast is edali");
            break
         case ("lunch"):
            console.log("todays lunch is rajama")
            break
         case ("dinner"):
            console.log("todays dinner is mungkhichdi")
            break
      }
   break;
   case ("friday"):
      console.log("today is friday");
      meal=day1.question("enter the meal")
      switch (meal){
         case ("breakfast"):
            console.log("today breakfast is paratha");
            break
         case ("lunch"):
            console.log("todays lunch is palak panir")
            break
         case ("dinner"):
            console.log("todays dinner is alu roti")
            break
      }
   break;
   case ("saturday"):
      console.log("today is saturday");
      meal=day1.question("enter the meal")
      switch (meal){
         case ("breakfast"):
            console.log("today breakfast is pani puri");
            break
         case ("lunch"):
            console.log("todays lunch is bhuraji")
            break
         case ("dinner"):
            console.log("todays dinner is khichadi")
            break
      }
   break;
}

