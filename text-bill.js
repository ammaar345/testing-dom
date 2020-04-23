function textBill(){
    var callPriceVal=2.75;
    var smsPriceVal=0.75;
    var warningVal=30;
    var criticalVal=50;
    callPriceTotal=0;
    smsPriceTotal=0;
function setCallPrice(callPrice){
callPriceVal=callPrice;
}function setSmsPrice(smsPrice){
smsPriceVal=smsPrice;
}
function getSmsPrice(){
return smsPriceVal;
}
function getCallPrice(){
return callPriceVal;

}
function getTotalCallPrice(){
   callPriceTotal
}
function getTotalSmsPrice(){
return smsPriceTotal
}
function getTotalPrice(){
   return (callPriceTotal+smsPriceTotal).toFixed(2)
}
// function setWarnLevel(warnLvl){
// warningVal=warnLvl;
// }
// function setCritLevel(critLvl){
// criticalVal=critLvl}
function getWarnLevel(){
   return warningVal
}
function getCritLevel (){
   return criticalVal
}
function placeCall(){
callPriceTotal+=callPrice;
}
function placeSms(){
smsPriceTotal+=smsPrice;  
}
function lvlName(){
   if (getWarnLevel()<getTotalPrice){
      return "warning"
   }
   else if (getTotalPrice()>getCritLevel())
   {return "critical";

   }
}



   return{setCallPrice,
setSmsPrice,
getCallPrice,
getSmsPrice,
placeCall,
placeSms,
getTotalCallPrice,
getTotalSmsPrice,
getTotalPrice

   } 
}