
console.log("🙏 ❤️..Welcome to ATM...❤️ 🙏")
balance=70000
let card1=require("readline-sync")
card=card1.questionInt("select your card👉1.ATM,2.credit_card:")
if (card=="1"){
    language=card1.question("select your language👉 1.english,2.हिंदी:")
    if (language=="1"){
        transaction=card1.question("select your transaction👉 1.balance equiry,2.cash withdrawal:")
        if (transaction=="1"){
            const pin=card1.questionInt("enter your pin:")
            if (pin==1234){
                console.log("total balance")
                console.log("your balance is",balance)
                const sleep=card1.question("do you want sleep👉1.yes,2.no:")
                if (sleep=="1"){
                    console.log("take your cash")
                    console.log("total balance")
                }
                else{
                    console.log("no")
                }
            }
            else{
                console.log(" you enter wrong pin") 
            }
        }

        
        if (transaction=="2"){
            let account=card1.question("select account👉 1.current account,2.saving")
            if (account=="1"){
                console.log("your total balance is ",balance)
                money=card1.questionInt("money is in 👉100,200,500,2000:")
                if (money>=0 || money<=70000){
                    if (money%100==0){
                        console.log("total amount in your account is",balance-money)
                        sleep=card1.question("do you want sleep 1.yes,2.no")
                        if (sleep=="1"){
                          console.log("take your cash")
                        }
                        else{
                          console.log("no sleep")
                        }
                    }
                    else{
                        console.log("enter valid amount:")
                    }
                }
            }

            else if (account=="2"){
                let money=card1.questionInt("money is in form 👉 100,200,500,2000:")
                if (money>=0 && money<=70000){
                    if (money%100==0){
                        console.log("take your amount")
                        console.log("total amount in your account is",balance-money)
                        sleep=card1.question("do you want sleep 1.yes,2.no")
                        if (sleep=="1"){
                           console.log("take your cash")
                        }
                        else{
                           console.log("no")
                        }
                    }
                    else{
                        console.log("enter valid amount:")
                    }

                }
            }
        }
    }
    if  (language=="2"){
        let card =card1.question("अपना खाता चुना 1.atm, 2.credit:")
        if (card=="1"){
            let transaction=card1.question("अपना खाता चुना 1.बैलेंस पूछताछ,2.नकद निकासी")
            if (transaction=="1"){
                pin=card1.questionInt("अपना पिन दर्ज करो")
                if (pin==1234){
                    console.log("आपका पिन सही है")
                    console.log("अपका लेनदेन बराबर है")}
                else{
                    console.log("सही पिन भरे :")
                }
            }
        
            if (transaction=="2"){
                let account=card1.question("अपना खाता चुना 1.बचत खाता,2.चालू खाता")
                if (account=="1"){
                    let money=catrd1.questionInt("अपना पैसा दर्ज करें 1.100,2.200,3.500,4.2000:")
                    if (money>=0 || money<=70000){
                        if (money%100==0){
                           console.log("अपना कैश ले लो")
                           console.log("कुल राशि",balance-money)
                        }
                        else{
                           console.log("मान्य राशि दर्ज करें")
                        }
                    }
                }
            
                if (account=="2"){
                    money=card1.questionInt("अपना पैसा दर्ज करें 1.100,2.200,3.500,4.2000")
                    if (money>=0 || money<=70000){
                        if (money%100==0){
                           console.log("अपना कैश ले लो")
                           console.log("कुल राशि",balance-money)
                        }
                        else{
                           console.log("मान्य राशि दर्ज करें")
                        }
                    }
                }
            }
        }
    }
else{
    console.log("विवरण फिर से दर्ज करें")
}
}