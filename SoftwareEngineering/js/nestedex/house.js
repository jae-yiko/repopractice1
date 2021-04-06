/* first time home buyer:
depending on how much the buyer is willing/have for downpaymen the realestate will make a comment
first time house buyer downpayment bare mininum= 5%
anything above 25% can purchase house
const prompt=require('prompt-sync')();<< for prompt practice
const name = prompt ("enter your name please");<< for prompt practice
*/

dp= .68;

if (dp >= .05){
    if (dp <= .1 && dp >= .05){
        console.log(dp + " not bad but are you sure you dont want to save up a little bit more?")
    
    } else if (dp <= .25 && dp >=.1){
        console.log(dp + " average amount of loans! you can purchase the house!")
    }
    else {
            console.log(dp + " minimal loan! SIGN HERE!")
        }
    }

else if (dp < .05) {
      console.log(dp + " sorry but you need to save up..")
}
